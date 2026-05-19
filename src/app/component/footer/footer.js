import styles from "./footer.module.css";
import Link from "next/link";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Col 1 – Brand */}
        <div className={styles.col}>
          <span className={styles.logoText}>ShopX</span>
          <p className={styles.tagline}>
            Mua sắm thông minh — Giá tốt mỗi ngày.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialBtn}>f</a>
            <a href="#" className={styles.socialBtn}>in</a>
            <a href="#" className={styles.socialBtn}>yt</a>
          </div>
        </div>

        {/* Col 2 – Hỗ trợ */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Tổng đài hỗ trợ</h4>
          <ul className={styles.list}>
            <li>📞 Gọi mua: <strong>1900 232 461</strong></li>
            <li>😟 Khiếu nại: <strong>1800 1063</strong></li>
            <li>🔧 Bảo hành: <strong>1900 232 465</strong></li>
            <li className={styles.note}>Thời gian: 8:00 – 21:30</li>
          </ul>
        </div>

        {/* Col 3 – Về công ty */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Về công ty</h4>
          <ul className={styles.list}>
            <li><Link href="#">Giới thiệu</Link></li>
            <li><Link href="#">Tuyển dụng</Link></li>
            <li><Link href="#">Góp ý / Khiếu nại</Link></li>
            <li><Link href="#">Tìm cửa hàng</Link></li>
          </ul>
        </div>

        {/* Col 4 – Chính sách */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Chính sách</h4>
          <ul className={styles.list}>
            <li><Link href="#">Chính sách đổi trả</Link></li>
            <li><Link href="#">Bảo hành sản phẩm</Link></li>
            <li><Link href="#">Thanh toán & Giao hàng</Link></li>
            <li><Link href="#">Bảo mật thông tin</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <span>© 2025 ShopX. Tất cả quyền được bảo lưu.</span>
          <span>GPDKKD: 0303217354 – TP.Hồ Chí Minh</span>
        </div>
      </div>
    </footer>
  );
}