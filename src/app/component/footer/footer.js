import styles from "./footer.module.css";
import Link from "next/link";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Col 1 – Về chúng tôi */}
        <div className={styles.col}>
          <span className={styles.logoText}>FigNirvana</span>
          <p className={styles.about}>
            Tại FigNirvana, chúng tôi không chỉ cung cấp mô hình — chúng tôi mang đến
            những giá trị nghệ thuật nguyên bản. 100% sản phẩm chính hãng, không hàng nhái.
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook" className={styles.social}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="#" aria-label="TikTok" className={styles.social}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"/>
              </svg>
            </a>
            <a href="mailto:user@gmail.com" aria-label="Email" className={styles.social}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2 – Danh mục */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Danh mục</h4>
          <ul className={styles.list}>
            <li><Link href="/gundam/hg">HG – High Grade</Link></li>
            <li><Link href="/gundam/mg">MG – Master Grade</Link></li>
            <li><Link href="/gundam/rg">RG – Real Grade</Link></li>
            <li><Link href="/gundam/pg">PG – Perfect Grade</Link></li>
            <li><Link href="/figure">Figure</Link></li>
            <li><Link href="/phu-kien">Phụ kiện &amp; Dụng cụ</Link></li>
          </ul>
        </div>

        {/* Col 3 – Thông tin */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Thông tin</h4>
          <ul className={styles.list}>
            <li><Link href="/gioithieu">Giới thiệu</Link></li>
            <li><Link href="/tintuc">Tin tức</Link></li>
            <li><Link href="/gioithieu">Chính sách đổi trả</Link></li>
            <li><Link href="/gioithieu">Chính sách bảo hành</Link></li>
            <li><Link href="/gioithieu">Câu hỏi thường gặp</Link></li>
            <li><Link href="/lienhe">Liên hệ</Link></li>
          </ul>
        </div>

        {/* Col 4 – Liên hệ */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Liên hệ</h4>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.icon}>📍</span>
              17/21C Nguyễn Thị Nghé, Đông Thạnh, HCM
            </li>
            <li>
              <span className={styles.icon}>📞</span>
              <a href="tel:+84392901848">+84 392 901 848</a>
            </li>
            <li>
              <span className={styles.icon}>📧</span>
              <a href="mailto:user@gmail.com">user@gmail.com</a>
            </li>
            <li>
              <span className={styles.icon}>🕐</span>
              08:00 – 17:00, Thứ 2 – Chủ nhật
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <span>Copyright 2025 © Bản quyền thuộc <strong>FigNirvana</strong></span>
          <span>Thiết kế bởi team yêu Gundam 🤖</span>
        </div>
      </div>
    </footer>
  );
}