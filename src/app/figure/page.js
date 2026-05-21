// src/app/figure/page.js
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/app/component/header/header.js";
import { Footer } from "@/app/component/footer/footer.js";
import { products } from "@/data/products";
import styles from "./page.module.css";

export const metadata = {
  title: "Figure | FigNirvana",
  description: "Articulated Figures và Scales & Statues chính hãng — figure có khớp linh hoạt và tượng tỉ lệ cao cấp.",
};

const types = [
  {
    slug: "articulated",
    label: "Articulated",
    full: "Articulated Figures",
    desc: "Figure có khớp linh hoạt, thay đổi tư thế tự do. Phù hợp cho cả trưng bày lẫn chụp ảnh sáng tạo.",
    banner: "/InartAlbum1.jpeg",
    tag: "Khớp linh hoạt",
    wide: true,
  },
  {
    slug: "scales",
    label: "Scales",
    full: "Scales & Statues",
    desc: "Tượng figure tỉ lệ cao cấp với độ chi tiết tuyệt hảo. Đỉnh cao của nghệ thuật sưu tầm.",
    banner: "/RenektonAlbum2.webp",
    tag: "Tỉ lệ cao cấp",
    wide: false,
  },
];

export default function FigureOverview() {
  return (
    <div className={styles.page}>
      <Header />

      <main>
        {/* ── Hero banner ── */}
        <div className={styles.hero}>
          <Image src="/InartAlbum1.jpeg" alt="Figure" fill style={{ objectFit: "cover" }} className={styles.heroBg} />
          <div className={styles.heroOverlay}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Trang chủ</Link>
              <span>/</span>
              <span>Figure</span>
            </nav>
            <h1 className={styles.heroTitle}>Thế Giới Figure</h1>
            <p className={styles.heroDesc}>
              Từ figure khớp linh hoạt đến tượng tỉ lệ cao cấp — mỗi sản phẩm là một tác phẩm nghệ thuật đỉnh cao.
            </p>
          </div>
        </div>

        {/* ── Type grid ── */}
        <section className={styles.section}>
          <div className={styles.inner}>
            <div className={styles.typeGrid}>
              {types.map((t) => {
                const count = products.filter((p) => p.category === t.slug).length;
                return (
                  <Link key={t.slug} href={`/figure/${t.slug}`} className={styles.typeCard}>
                    <div className={styles.typeImg}>
                      <Image src={t.banner} alt={t.full} fill style={{ objectFit: "cover" }} className={styles.typePhoto} />
                      <div className={styles.typeImgOverlay} />
                    </div>

                    <div className={styles.typeBody}>
                      <span className={styles.typeTag}>{t.tag}</span>
                      <div className={styles.typeLabel}>
                        <strong className={styles.typeCode}>{t.label}</strong>
                        <span className={styles.typeFull}>{t.full}</span>
                      </div>
                      <p className={styles.typeDesc}>{t.desc}</p>
                      <div className={styles.typeFooter}>
                        <span className={styles.typeCount}>{count} sản phẩm</span>
                        <span className={styles.typeArrow}>Khám phá →</span>
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
