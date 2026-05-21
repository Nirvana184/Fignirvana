// app/gundam/[grade]/page.js
// Trang này tự động chạy cho: /gundam/hg  /gundam/mg  /gundam/rg  /gundam/pg

import Image from "next/image";
import Link from "next/link";
import { Header } from "../../component/header/header.js";
import { Footer } from "../../component/footer/footer.js";
import styles from "./page.module.css";
import { products } from "@/data/products"

// ════════════════════════════════════════════════
// CẤU HÌNH TỪNG DÒNG GUNDAM
// ════════════════════════════════════════════════
const gradeConfig = {
  hg: {
    title: "HG – High Grade",
    desc: "Dòng entry-level hoàn hảo để bắt đầu hành trình Gunpla. Chi tiết sắc nét, dễ ráp, giá hợp lý.",
    banner: "/HG.jpg",
  },
  mg: {
    title: "MG – Master Grade",
    desc: "Nâng tầm trải nghiệm với khung nội thất bên trong, khớp nối linh hoạt và độ chi tiết vượt trội.",
    banner: "/MGHome.webp",
  },
  rg: {
    title: "RG – Real Grade",
    desc: "Nhỏ gọn nhưng cực kỳ chi tiết. Mỗi bộ RG là một tuyệt tác kỹ thuật thu nhỏ ở tỉ lệ 1/144.",
    banner: "/RGdep.webp",
  },
  pg: {
    title: "PG – Perfect Grade",
    desc: "Đỉnh cao của Gunpla. Kích thước lớn, cơ cấu bên trong cực kỳ phức tạp — chỉ dành cho người đam mê thực sự.",
    banner: "/PGmaybe32.webp",
  },
};

// ════════════════════════════════════════════════
// SẢN PHẨM — thêm sản phẩm vào từng dòng
// ════════════════════════════════════════════════
// ════════════════════════════════════════════════
// generateStaticParams — Next.js cần biết các route tồn tại
// ════════════════════════════════════════════════
export function generateStaticParams() {
  return [{ grade: "hg" }, { grade: "mg" }, { grade: "rg" }, { grade: "pg" }];
}

// ════════════════════════════════════════════════
// generateMetadata — SEO tự động theo từng dòng
// ════════════════════════════════════════════════
// ✅ Sửa generateMetadata
export async function generateMetadata({ params }) {
  const { grade } = await params;
  const cfg = gradeConfig[grade] ?? { title: "Gundam" };
  return { title: `${cfg.title} | FigNirvana` };
}

// ════════════════════════════════════════════════
// COMPONENT: Card sản phẩm
// ════════════════════════════════════════════════
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

// ════════════════════════════════════════════════
// TRANG CHÍNH
// ════════════════════════════════════════════════
export default async function GundamGradePage({ params }) {
  const { grade: gradeRaw } = await params;
  const grade = gradeRaw.toLowerCase();
  const cfg = gradeConfig[grade] ?? { title: "Gundam", desc: "", banner: null };
  const displayProducts = products.filter((p) => p.category === grade);
  return (
    <div className={styles.page}>
      <Header />

      <main>
        {/* Banner */}
        <div className={styles.banner}>
          {cfg.banner && (
            <Image src={cfg.banner} alt={cfg.title} fill style={{ objectFit: "cover" }} className={styles.bannerImg} />
          )}
          <div className={styles.bannerOverlay}>
            {/* Breadcrumb */}
            <nav className={styles.breadcrumb}>
              <Link href="/">Trang chủ</Link>
              <span>/</span>
              <Link href="/shop">Gundam</Link>
              <span>/</span>
              <span>{cfg.title}</span>
            </nav>
            <h1 className={styles.bannerTitle}>{cfg.title}</h1>
            <p className={styles.bannerDesc}>{cfg.desc}</p>
          </div>
        </div>

        {/* Nội dung */}
        <section className={styles.section}>
          <div className={styles.inner}>

            {/* Filter bar */}
            <div className={styles.filterBar}>
              <span className={styles.count}>
                {displayProducts.length} sản phẩm
              </span>
              <select className={styles.sort}>
                <option>Mặc định</option>
                <option>Giá tăng dần</option>
                <option>Giá giảm dần</option>
                <option>Mới nhất</option>
              </select>
            </div>

            {/* Grid sản phẩm */}
            {displayProducts.length > 0 ? (
  <div className={styles.grid}>
    {displayProducts.map((p) => <ProductCard key={p.slug} product={p} />)}
  </div>
) : (
              <div className={styles.empty}>
                <span>🤖</span>
                <p>Chưa có sản phẩm trong dòng này.</p>
                <small>Thêm sản phẩm có <code>type: &quot;{type}&quot;</code> vào file <code>data/products.js</code>.</small>
              </div>
            )}

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}