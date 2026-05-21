// app/figure/[type]/page.js
// Trang này tự động chạy cho: /figure/articulated  /figure/scales

import Image from "next/image";
import Link from "next/link";
import { Header } from "../../component/header/header.js";
import { Footer } from "../../component/footer/footer.js";
import styles from "./page.module.css";
import { products } from "@/data/products"

// ════════════════════════════════════════════════
// CẤU HÌNH TỪNG LOẠI FIGURE
// ════════════════════════════════════════════════
const typeConfig = {
  articulated: {
    title: "Articulated Figures",
    desc: "Figure có khớp linh hoạt, thay đổi tư thế tự do. Phù hợp cho cả trưng bày lẫn chụp ảnh sáng tạo.",
    banner: "/InartAlbum1.jpeg",
  },
  scales: {
    title: "Scales & Statues",
    desc: "Tượng figure tỉ lệ cao cấp với độ chi tiết tuyệt hảo. Đỉnh cao của nghệ thuật sưu tầm.",
    banner: "/RenektonAlbum2.webp",
  },
};

// ════════════════════════════════════════════════
// SẢN PHẨM — thêm sản phẩm vào từng loại
// ════════════════════════════════════════════════
export function generateStaticParams() {
  return [{ type: "articulated" }, { type: "scales" }];
}

// ✅ Sửa generateMetadata
// ✅ Đúng — dùng typeConfig và type
export async function generateMetadata({ params }) {
  const { type } = await params;
  const cfg = typeConfig[type] ?? { title: "Figure" };
  return { title: `${cfg.title} | FigNirvana` };
}

function ProductCard({ product }) {
  return (
    <Link href={`/sanpham/${product.slug}`} className={styles.card}>
      {product.badge && <span className={styles.badge}>{product.badge}</span>}
      <div className={styles.cardImg}>
        <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} className={styles.imgMain} />
        {product.imageHover && (
          <Image src={product.imageHover} alt={product.name} fill style={{ objectFit: "cover" }} className={styles.imgHover} />
        )}
        <div className={styles.quickView}>Xem Nhanh</div>
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardName}>{product.name}</h3>
        <div className={styles.cardPrice}>
          {product.oldPrice && <s className={styles.oldPrice}>{product.oldPrice}</s>}
          <strong className={styles.price}>{product.price}</strong>
        </div>
      </div>
    </Link>
  );
}

export default async function FigureTypePage({ params }) {
  const { type: typeRaw } = await params;
  const type = typeRaw.toLowerCase();
  const cfg = typeConfig[type] ?? { title: "Figure", desc: "", banner: null };
  const displayProducts = products.filter((p) => p.category === type);

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <div className={styles.banner}>
          {cfg.banner && (
            <Image src={cfg.banner} alt={cfg.title} fill style={{ objectFit: "cover" }} className={styles.bannerImg} />
          )}
          <div className={styles.bannerOverlay}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Trang chủ</Link>
              <span>/</span>
              <span>Figure</span>
              <span>/</span>
              <span>{cfg.title}</span>
            </nav>
            <h1 className={styles.bannerTitle}>{cfg.title}</h1>
            <p className={styles.bannerDesc}>{cfg.desc}</p>
          </div>
        </div>

        <section className={styles.section}>
          <div className={styles.inner}>
            <div className={styles.filterBar}>
              <span className={styles.count}>{displayProducts.length} sản phẩm</span>
              <select className={styles.sort}>
                <option>Mặc định</option>
                <option>Giá tăng dần</option>
                <option>Giá giảm dần</option>
                <option>Mới nhất</option>
              </select>
            </div>
            {displayProducts.length > 0 ? (
  <div className={styles.grid}>
    {displayProducts.map((p) => <ProductCard key={p.slug} product={p} />)}
  </div>
) : (
              <div className={styles.empty}>
                <span>🗿</span>
                <p>Chưa có sản phẩm trong danh mục này.</p>
                <small>Thêm sản phẩm có <code>type:&quot;{type}&quot;</code> vào file <code>data/products.js</code>.</small>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}