// app/gioi-thieu/page.js

import { Header } from "../component/header/header.js";
import { Footer } from "../component/footer/footer.js";
import styles from "./page.module.css";

export const metadata = { title: "Giới thiệu | FigNirvana" };

export default function GioiThieuPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <div className={styles.pageBanner}>
          <h1 className={styles.pageTitle}>Về FigNirvana</h1>
          <p className={styles.pageDesc}>Mô hình chính hãng — Đam mê thực sự</p>
        </div>

        <section className={styles.section}>
          <div className={styles.innerNarrow}>

            {/* Story */}
            <div className={styles.block}>
              <h2 className={styles.blockTitle}>Câu chuyện của chúng tôi</h2>
              <p>
                FigNirvana ra đời từ niềm đam mê với Gunpla và Figure cao cấp. Chúng tôi hiểu rằng mỗi bộ mô hình
                không chỉ là một món đồ chơi — đó là một tác phẩm nghệ thuật, một ký ức, một phần của bản sắc người
                sưu tầm.
              </p>
              <p>
                Với sứ mệnh đồng hành cùng cộng đồng đam mê tại Việt Nam, mọi sản phẩm tại FigNirvana đều được
                tuyển chọn khắt khe để đảm bảo sự tinh tế và đẳng cấp vượt thời gian.
              </p>
            </div>

            {/* Values */}
            <div className={styles.valueGrid}>
              {[
                { icon: "✅", title: "100% Chính Hãng", desc: "Cam kết không bán hàng nhái, hàng bootleg dưới bất kỳ hình thức nào." },
                { icon: "📦", title: "Đóng Gói Cẩn Thận", desc: "Mỗi kiện hàng được quấn bọt khí nhiều lớp, đảm bảo hộp đến tay bạn nguyên vẹn." },
                { icon: "🚚", title: "Giao Hàng Nhanh", desc: "Freeship đơn từ 500K, nhận hàng trong 2–3 ngày toàn quốc." },
                { icon: "💬", title: "Hỗ Trợ Tận Tình", desc: "Đội ngũ am hiểu sản phẩm, sẵn sàng tư vấn từ 08:00 – 17:00 mỗi ngày." },
              ].map((v) => (
                <div key={v.title} className={styles.valueCard}>
                  <span className={styles.valueIcon}>{v.icon}</span>
                  <h4 className={styles.valueTitle}>{v.title}</h4>
                  <p className={styles.valueDesc}>{v.desc}</p>
                </div>
              ))}
            </div>

            {/* Address */}
            <div className={styles.block}>
              <h2 className={styles.blockTitle}>Địa chỉ cửa hàng</h2>
              <p>📍 17/21C Nguyễn Thị Nghé, Đông Thạnh, TP. Hồ Chí Minh</p>
              <p>🕐 Thứ 2 – Chủ nhật: 08:00 – 17:00</p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}