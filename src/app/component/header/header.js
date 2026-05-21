import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className={styles.header}>

      {/* ── Announcement bar ── */}
      <div className={styles.announce}>
        <div className={styles.announceTrack}>
          <span>✦ Chi nhánh 2 sắp mở tại 17/21C Nguyễn Thị Nghé, Đông Thạnh, HCM ✦</span>
          <span>🚚 MIỄN PHÍ SHIP ĐƠN TRÊN 500K</span>
        </div>
      </div>

      {/* ── Top utility bar ── */}
      <div className={styles.topBar}>
        <div className={styles.topInner}>
          <div className={styles.topLeft}>
            <a href="mailto:user@gmail.com">📧 user@gmail.com</a>
            <span>🕐 08:00 – 17:00</span>
            <a href="tel:+84392901848">📞 +84 392 901 848</a>
          </div>
          <div className={styles.topRight}>
            <Link href="/my-account">Đăng nhập</Link>
            <span className={styles.divider}>|</span>
            <Link href="/register">Đăng ký</Link>
          </div>
        </div>
      </div>

      {/* ── Main header ── */}
      <div className={styles.mainHeader}>
        <div className={styles.mainInner}>

          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>FigNirvana</span>
            <small className={styles.logoSub}>Mô hình chính hãng</small>
          </Link>

          {/* Search */}
          <div className={styles.search}>
            <input type="text" placeholder="Tìm kiếm sản phẩm..." className={styles.searchInput} />
            <button className={styles.searchBtn}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
          </div>

          {/* Cart */}
          <Link href="/cart" className={styles.cartBtn}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <span>Giỏ hàng</span>
            <span className={styles.cartCount}>0</span>
          </Link>

        </div>
      </div>

      {/* ── Nav bar ── */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.navLink}>TRANG CHỦ</Link>
          <Link href="/shop" className={styles.navLink}>SẢN PHẨM</Link>

          {/* Mega dropdown – Gundam */}
          <div className={styles.navDropdown}>
          <Link href="/gundam" className={styles.navLink}>GUNDAM ▾</Link>
            <div className={styles.dropMenu}>
              <Link href="/gundam/hg">HG – High Grade</Link>
              <Link href="/gundam/mg">MG – Master Grade</Link>
              <Link href="/gundam/rg">RG – Real Grade</Link>
              <Link href="/gundam/pg">PG – Perfect Grade</Link>
            </div>
          </div>

          {/* Mega dropdown – Figure */}
          <div className={styles.navDropdown}>
          <Link href="/figure" className={styles.navLink}>FIGURE ▾</Link>

            <div className={styles.dropMenu}>
              <Link href="/figure/articulated">Articulated Figures</Link>
              <Link href="/figure/scales">Scales &amp; Statues</Link>
            </div>
          </div>
          <Link href="/mohinh-khac" className={styles.navLink}>MÔ HÌNH KHÁC</Link>
          <Link href="/tintuc" className={styles.navLink}>TIN TỨC</Link>
          <Link href="/gioithieu" className={styles.navLink}>GIỚI THIỆU</Link>
          <Link href="/lienhe" className={styles.navLink}>LIÊN HỆ</Link>
        </div>
      </nav>

    </header>
  );
}