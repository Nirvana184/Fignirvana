import styles from "./header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.header}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <span>📞 Hotline: 1900 232 461</span>
          <span>🚚 Miễn phí giao hàng toàn quốc</span>
        </div>
      </div>

      {/* Main header */}
      <div className={styles.mainHeader}>
        <div className={styles.inner}>

          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>ShopX</span>
          </Link>

          {/* Search bar */}
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className={styles.searchInput}
            />
            <button className={styles.searchBtn}>🔍</button>
          </div>

          {/* Icons */}
          <div className={styles.actions}>
            <button className={styles.actionBtn}>
              <span className={styles.icon}>🛒</span>
              <span className={styles.actionLabel}>Giỏ hàng</span>
            </button>
            <button className={styles.actionBtn}>
              <span className={styles.icon}>👤</span>
              <span className={styles.actionLabel}>Đăng nhập</span>
            </button>
          </div>

        </div>
      </div>

      {/* Nav bar */}
      <nav className={styles.navBar}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.navItem}>Trang chủ</Link>
          <Link href="/dien-thoai" className={styles.navItem}>Điện thoại</Link>
          <Link href="/laptop" className={styles.navItem}>Laptop</Link>
          <Link href="/phu-kien" className={styles.navItem}>Phụ kiện</Link>
          <Link href="/khuyen-mai" className={styles.navItem}>🔥 Khuyến mãi</Link>
          <Link href="/lien-he" className={styles.navItem}>Liên hệ</Link>
        </div>
      </nav>
    </header>
  );
}