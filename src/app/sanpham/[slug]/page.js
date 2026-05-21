// src/app/san-pham/[slug]/page.js
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Header } from "../../component/header/header.js";
import { Footer } from "../../component/footer/footer.js";
import {
  getProductBySlug,
  getProductsByCategory,
  getCategoryLabel,
  formatPrice,
  products, // Thêm products vào đây luôn
} from "@/data/products.js";
import styles from "./page.module.css";
// ── Card nhỏ cho "Sản phẩm liên quan" ────────
function MiniCard({ product }) {
  return (
    <Link href={`/san-pham/${product.slug}`} className={styles.miniCard}>
      <div className={styles.miniImg}>
        <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} />
      </div>
      <div className={styles.miniBody}>
        <p className={styles.miniName}>{product.name}</p>
        <strong className={styles.miniPrice}>{formatPrice(product.price)}</strong>
      </div>
    </Link>
  );
}

// ── Trang chi tiết ────────────────────────────
export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);

  // Không tìm thấy sản phẩm
  if (!product) {
    return (
      <div className={styles.page}>
        <Header />
        <div className={styles.notFound}>
          <span>😶</span>
          <h2>Không tìm thấy sản phẩm</h2>
          <Link href="/shop" className={styles.backBtn}>← Quay lại cửa hàng</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  const images = product.images?.length ? product.images : [product.image];
  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null;

  return (
    <div className={styles.page}>
      <Header />

      <main>
        {/* Breadcrumb */}
        <div className={styles.breadcrumbBar}>
          <div className={styles.inner}>
            <Link href="/">Trang chủ</Link>
            <span>/</span>
            <Link href="/shop">Sản phẩm</Link>
            <span>/</span>
            <Link href={`/gundam/${product.category}`}>{getCategoryLabel(product.category)}</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>
        </div>

        {/* ── Khu vực chính ── */}
        <section className={styles.section}>
          <div className={styles.inner}>
            <div className={styles.productLayout}>

              {/* Gallery */}
              <div className={styles.gallery}>
                <div className={styles.mainImg}>
                  <Image
                    src={images[activeImg]}
                    alt={product.name}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                  {discount && (
                    <span className={styles.discountBadge}>-{discount}%</span>
                  )}
                </div>
                {images.length > 1 && (
                  <div className={styles.thumbs}>
                    {images.map((img, i) => (
                      <button
                        key={i}
                        className={`${styles.thumb} ${activeImg === i ? styles.thumbActive : ""}`}
                        onClick={() => setActiveImg(i)}
                      >
                        <Image src={img} alt="" fill style={{ objectFit: "cover" }} />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className={styles.info}>
                <span className={styles.infoCat}>{getCategoryLabel(product.category)}</span>
                <h1 className={styles.infoName}>{product.name}</h1>

                {/* Giá */}
                <div className={styles.priceBlock}>
                  <strong className={styles.infoPrice}>{formatPrice(product.price)}</strong>
                  {product.oldPrice && (
                    <s className={styles.infoOldPrice}>{formatPrice(product.oldPrice)}</s>
                  )}
                </div>

                {/* Tình trạng */}
                <div className={styles.stockRow}>
                  <span className={product.stock > 0 ? styles.inStock : styles.outStock}>
                    {product.stock > 0 ? `✓ Còn hàng (${product.stock} sản phẩm)` : "✗ Hết hàng"}
                  </span>
                </div>

                {/* Mô tả ngắn */}
                <p className={styles.infoDesc}>{product.description}</p>

                {/* Số lượng + mua */}
                {product.stock > 0 && (
                  <div className={styles.actions}>
                    <div className={styles.qtyWrap}>
                      <button className={styles.qtyBtn} onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                      <span className={styles.qtyVal}>{qty}</span>
                      <button className={styles.qtyBtn} onClick={() => setQty(q => Math.min(product.stock, q + 1))}>+</button>
                    </div>
                    <button className={styles.buyBtn}>Thêm vào giỏ hàng</button>
                  </div>
                )}

                {/* Thông số kỹ thuật */}
                {product.specs && (
                  <div className={styles.specs}>
                    <h3 className={styles.specsTitle}>Thông số</h3>
                    <table className={styles.specsTable}>
                      <tbody>
                        {Object.entries(product.specs).map(([key, val]) => (
                          <tr key={key}>
                            <td className={styles.specKey}>{key}</td>
                            <td className={styles.specVal}>{val}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Cam kết */}
                <div className={styles.pledges}>
                  <span>✅ 100% chính hãng</span>
                  <span>📦 Đóng gói kỹ</span>
                  <span>🚚 Freeship từ 500K</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Sản phẩm liên quan ── */}
        {related.length > 0 && (
          <section className={styles.related}>
            <div className={styles.inner}>
              <h2 className={styles.relatedTitle}>Sản phẩm liên quan</h2>
              <div className={styles.relatedGrid}>
                {related.map((p) => <MiniCard key={p.slug} product={p} />)}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}