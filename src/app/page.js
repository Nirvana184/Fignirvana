import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./component/header/header.js";
import { Footer } from "./component/footer/footer";
import Link from "next/link";

// ─── Dữ liệu sản phẩm mẫu ─────────────────────────────────
// Thêm / sửa sản phẩm tại đây:
const products = [
  {
    id: 1,
    name: "Porsche GT3 RS",
    price: "20.000.000.000₫",
    oldPrice: "25.000.000.000₫",
    discount: "-20%",
    image: "/p1.jpg",
    remain: "Còn 30/30 suất",
    badge: "Flash Sale",
    href: "/san-pham/1",
  },
  // Thêm sản phẩm mới theo cấu trúc trên:
  // {
  //   id: 2,
  //   name: "Tên sản phẩm",
  //   price: "0₫",
  //   oldPrice: "0₫",
  //   discount: "-0%",
  //   image: "/anh.jpg",
  //   remain: "Còn x/x suất",
  //   badge: "Flash Sale",   // bỏ trống "" nếu không cần nhãn
  //   href: "/san-pham/2",
  // },
];

// ─── Card sản phẩm ────────────────────────────────────────
function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      {product.badge && (
        <span className={styles.badge}>{product.badge}</span>
      )}

      {/* Ảnh sản phẩm */}
      <div className={styles.cardImage}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Thông tin */}
      <div className={styles.cardBody}>
        <h5 className={styles.cardName}>{product.name}</h5>

        <div className={styles.cardPricing}>
          <strong className={styles.price}>{product.price}</strong>
          <div className={styles.oldRow}>
            <span className={styles.oldPrice}>{product.oldPrice}</span>
            <span className={styles.discount}>{product.discount}</span>
          </div>
        </div>

        {product.remain && (
          <div className={styles.remain}>
            <span>⚡</span>
            <span>{product.remain}</span>
          </div>
        )}
      </div>

      {/* Nút mua */}
      <Link href={product.href} className={styles.buyBtn}>
        Mua ngay
      </Link>
    </div>
  );
}

// ─── Trang chủ ────────────────────────────────────────────
export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.content}>

          {/* Banner */}
          <div className={styles.banner}>
            <h2>🔥 Flash Sale hôm nay</h2>
            <p>Giảm đến 20% – Số lượng có hạn!</p>
          </div>

          {/* Lưới sản phẩm */}
          <div className={styles.grid}>
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}

            {/* Khung trống để bạn thấy layout trước khi thêm sản phẩm */}
            {Array.from({ length: Math.max(0, 12 - products.length) }).map(
              (_, i) => (
                <div key={`empty-${i}`} className={styles.cardEmpty}>
                  <span>+</span>
                  <small>Thêm sản phẩm</small>
                </div>
              )
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}