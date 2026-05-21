// src/app/gundam/page.js
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/app/component/header/header.js";
import { Footer } from "@/app/component/footer/footer.js";
import { products } from "@/data/products";
import styles from "./page.module.css";

export const metadata = {
  title: "Gundam | FigNirvana",
  description: "Tất cả dòng Gundam chính hãng Bandai — HG, MG, RG, PG. Chọn dòng phù hợp và bắt đầu hành trình Gunpla của bạn.",
};

const grades = [
  {
    slug: "hg",
    label: "HG",
    full: "High Grade",
    desc: "Entry-level hoàn hảo. Dễ ráp, giá hợp lý, chi tiết sắc nét — điểm khởi đầu lý tưởng cho mọi Gunpla builder.",
    banner: "/HG.jpg",
    tag: "Tỉ lệ 1/144",
  },
  {
    slug: "mg",
    label: "MG",
    full: "Master Grade",
    desc: "Khung nội thất bên trong, khớp nối linh hoạt, độ chi tiết vượt trội. Bước tiến thực sự cho người đam mê.",
    banner: "/MGHome.webp",
    tag: "Tỉ lệ 1/100",
  },
  {
    slug: "rg",
    label: "RG",
    full: "Real Grade",
    desc: "Nhỏ gọn nhưng cực kỳ chi tiết. Mỗi bộ RG là một tuyệt tác kỹ thuật thu nhỏ ở tỉ lệ 1/144.",
    banner: "/RGdep.webp",
    tag: "Tỉ lệ 1/144",
  },
  {
    slug: "pg",
    label: "PG",
    full: "Perfect Grade",
    desc: "Đỉnh cao của Gunpla. Kích thước lớn, cơ cấu bên trong cực kỳ phức tạp — chỉ dành cho người đam mê thực sự.",
    banner: "/PGmaybe32.webp",
    tag: "Tỉ lệ 1/60",
  },
];

export default function GundamOverview() {
  return (
    <div className={styles.page}>
      <Header />

      <main>
        {/* ── Hero banner ── */}
        <div className={styles.hero}>
          <Image src="/MGHome.webp" alt="Gundam" fill style={{ objectFit: "cover" }} className={styles.heroBg} />
          <div className={styles.heroOverlay}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Trang chủ</Link>
              <span>/</span>
              <span>Gundam</span>
            </nav>
            <h1 className={styles.heroTitle}>Thế Giới Gundam</h1>
            <p className={styles.heroDesc}>
              Từ entry-level đến kiệt tác — khám phá 4 dòng Gunpla chính hãng Bandai và tìm bộ kit phù hợp với bạn.
            </p>
          </div>
        </div>

        {/* ── Grade grid ── */}
        <section className={styles.section}>
          <div className={styles.inner}>
            <div className={styles.gradeGrid}>
              {grades.map((g) => {
                const count = products.filter((p) => p.category === g.slug).length;
                return (
                  <Link key={g.slug} href={`/gundam/${g.slug}`} className={styles.gradeCard}>
                    {/* Ảnh nền */}
                    <div className={styles.gradeImg}>
                      <Image src={g.banner} alt={g.full} fill style={{ objectFit: "cover" }} className={styles.gradePhoto} />
                      <div className={styles.gradeImgOverlay} />
                    </div>

                    {/* Nội dung */}
                    <div className={styles.gradeBody}>
                      <span className={styles.gradeTag}>{g.tag}</span>
                      <div className={styles.gradeLabel}>
                        <strong className={styles.gradeCode}>{g.label}</strong>
                        <span className={styles.gradeFull}>{g.full}</span>
                      </div>
                      <p className={styles.gradeDesc}>{g.desc}</p>
                      <div className={styles.gradeFooter}>
                        <span className={styles.gradeCount}>{count} sản phẩm</span>
                        <span className={styles.gradeArrow}>Khám phá →</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
