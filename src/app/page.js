import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./component/header/header.js";
import { Footer } from "./component/footer/footer";
import Link from "next/link";
import { products, categories, formatPrice } from "@/data/products.js";
import { HeroCarousel } from "./component/hero-carousel/HeroCarousel.js";
// ════════════════════════════════════════════════
// DANH MỤC NỔI BẬT (hero grid)
// ════════════════════════════════════════════════
const heroBanners = [
  { label: "Khởi Đầu Đam Mê", sub: "HG Gundam", image: "/HG.jpg", href: "/gundam/hg" },
  { label: "Chuẩn Mực Chi Tiết", sub: "MG Gundam", image: "/MGHome.webp", href: "/gundam/mg" },
  { label: "Kiệt Tác Tối Thượng", sub: "PG Gundam", image: "/PGmaybe32.webp", href: "/gundam/pg" },
  { label: "Chân Thực Đến Ngỡ Ngàng", sub: "RG Gundam", image: "/RGdep.webp", href: "/gundam/rg" },
];

// ════════════════════════════════════════════════
// COMPONENT: Card sản phẩm
// ════════════════════════════════════════════════
function ProductCard({ product }) {
  return (
    <Link href={`/sanpham/${product.slug}`} className={styles.card}>
      {product.badge && <span className={styles.badge}>{product.badge}</span>}

      <div className={styles.cardImgWrap}>
        <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} className={styles.imgMain} />
        {product.imageHover && (
          <Image src={product.imageHover} alt={product.name} fill style={{ objectFit: "cover" }} className={styles.imgHover} />
        )}
        <div className={styles.quickView}>Xem Nhanh</div>
      </div>

      <div className={styles.cardBody}>
        <span className={styles.cardCategory}>{product.category}</span>
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
// TRANG CHỦ
// ════════════════════════════════════════════════
export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <main>
        {/* ── Hero category grid ── */}
        <HeroCarousel banners={heroBanners} />

        {/* ── Sản phẩm nổi bật ── */}
<section className={styles.section}>
  <div className={styles.sectionInner}>
    <h2 className={styles.sectionTitle}>Sản phẩm nổi bật</h2>

    <div className={styles.productGrid}>
      {/* Chỉ lấy 12 sản phẩm đầu tiên */}
      {products.slice(0, 12).map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>

    {/* Thêm nút "Xem tất cả" để sang trang Shop */}
    {products.length > 12 && (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link href="/shop" style={{ color: "#d4af6a", textDecoration: "underline" }}>
          Xem tất cả sản phẩm →
        </Link>
      </div>
    )}
  </div>
</section>

        {/* ── Cam kết ── */}
        <section className={styles.pledgeSection}>
          <div className={styles.sectionInner}>
            <div className={styles.pledgeGrid}>
              {[
                { icon: "🚚", title: "Miễn Phí Vận Chuyển", desc: "Freeship toàn quốc cho đơn mô hình từ 500K. Nhận hàng 2–3 ngày." },
                { icon: "✅", title: "Cam Kết Chính Hãng", desc: "100% Bandai và Figure chính hãng. Nói không với hàng nhái, bootleg." },
                { icon: "📦", title: "Đóng Gói Siêu Kỹ", desc: "Bọt khí chống sốc nhiều lớp, đảm bảo hộp đến tay bạn nguyên vẹn." },
              ].map((item) => (
                <div key={item.title} className={styles.pledgeCard}>
                  <span className={styles.pledgeIcon}>{item.icon}</span>
                  <h4 className={styles.pledgeTitle}>{item.title}</h4>
                  <p className={styles.pledgeDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}