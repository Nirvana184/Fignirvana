// src/app/mohinh-khac/page.js
import Image from "next/image";
import Link from "next/link";
import { Header } from "../component/header/header.js";
import { Footer } from "../component/footer/footer.js";
import styles from "./page.module.css";
import { products, formatPrice } from "@/data/products";

// ════════════════════════════════════════════════
// SEO
// ════════════════════════════════════════════════
export const metadata = {
  title: "Mô Hình Hãng Khác | FigNirvana",
  description:
    "Khám phá các model kit độc đáo ngoài vũ trụ Gundam — Motor Nuclear, In Era+, và nhiều thương hiệu độc lập khác.",
};

// ════════════════════════════════════════════════
// COMPONENT: Card sản phẩm
// ════════════════════════════════════════════════
function ProductCard({ product }) {
  return (
    <Link href={`/sanpham/${product.slug}`} className={styles.card}>
      {product.badge && <span className={styles.badge}>{product.badge}</span>}
      <div className={styles.cardImg}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
          className={styles.imgMain}
        />
        {product.imageHover && (
          <Image
            src={product.imageHover}
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
            className={styles.imgHover}
          />
        )}
        <div className={styles.quickView}>Xem Nhanh</div>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.cardBrand}>{product.specs?.["Thương hiệu"] ?? ""}</p>
        <h3 className={styles.cardName}>{product.name}</h3>
        <div className={styles.cardPrice}>
          {product.oldPrice && (
            <s className={styles.oldPrice}>{formatPrice(product.oldPrice)}</s>
          )}
          <strong className={styles.price}>{formatPrice(product.price)}</strong>
        </div>
      </div>
    </Link>
  );
}

// ════════════════════════════════════════════════
// TRANG CHÍNH
// ════════════════════════════════════════════════
export default function MohinhKhacPage() {
  const displayProducts = products.filter((p) => p.category === "mohinh-khac");

  // Gom danh sách thương hiệu duy nhất để hiển thị ở intro
  const brands = [...new Set(displayProducts.map((p) => p.specs?.["Thương hiệu"]).filter(Boolean))];

  return (
    <div className={styles.page}>
      <Header />

      <main>
        {/* ── Banner ── */}
        <div className={styles.banner}>
          <Image
            src="/WukongLogo.webp"
            alt="Mô hình hãng khác"
            fill
            style={{ objectFit: "cover" }}
            className={styles.bannerImg}
          />
          <div className={styles.bannerOverlay}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Trang chủ</Link>
              <span>/</span>
              <Link href="/shop">Sản phẩm</Link>
              <span>/</span>
              <span>Mô hình hãng khác</span>
            </nav>
            <h1 className={styles.bannerTitle}>Mô Hình Hãng Khác</h1>
            <p className={styles.bannerDesc}>
              Vượt ra ngoài vũ trụ Gundam — khám phá các model kit độc lập từ{" "}
              {brands.join(", ")} và nhiều thương hiệu sáng tạo khác.
            </p>
          </div>
        </div>

        {/* ── Sản phẩm ── */}
        <section className={styles.section}>
          <div className={styles.inner}>
            {/* Filter bar */}
            <div className={styles.filterBar}>
              <span className={styles.count}>{displayProducts.length} sản phẩm</span>
              <select className={styles.sort}>
                <option>Mặc định</option>
                <option>Giá tăng dần</option>
                <option>Giá giảm dần</option>
                <option>Mới nhất</option>
              </select>
            </div>

            {/* Grid */}
            {displayProducts.length > 0 ? (
              <div className={styles.grid}>
                {displayProducts.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            ) : (
              <div className={styles.empty}>
                <span>🤖</span>
                <p>Chưa có sản phẩm trong danh mục này.</p>
                <small>
                  Thêm sản phẩm có <code>category: &quot;mohinh-khac&quot;</code> vào{" "}
                  <code>data/products.js</code>.
                </small>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
