// app/tin-tuc/page.js

import Image from "next/image";
import Link from "next/link";
import { Header } from "../component/header/header.js";
import { Footer } from "../component/footer/footer.js";
import styles from "./page.module.css";

// ════════════════════════════════════════════════
// BÀI VIẾT — thêm bài vào đây
// ════════════════════════════════════════════════
const posts = [
  // {
  //   id: 1,
  //   title: "RG Crossbone Gundam X2 – nhỏ nhưng cực kỳ \"có lực\"",
  //   excerpt: "Trong dòng Real Grade, RG Crossbone Gundam X2 là một trong những mẫu được nhiều người yêu thích nhất...",
  //   image: "/CrossboneBox.webp",
  //   date: "07 Tháng 5, 2025",
  //   category: "Gundam",
  //   href: "/tin-tuc/rg-crossbone-x2",
  // },
];

export const metadata = { title: "Tin tức | FigNirvana" };

export default function TinTucPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        {/* Banner */}
        <div className={styles.pageBanner}>
          <h1 className={styles.pageTitle}>Trạm Tin Mô Hình</h1>
          <p className={styles.pageDesc}>Review, unbox và cập nhật tin tức mới nhất từ thế giới Gunpla & Figure</p>
        </div>

        <section className={styles.section}>
          <div className={styles.inner}>
            {posts.length > 0 ? (
              <div className={styles.postGrid}>
                {posts.map((post) => (
                  <Link key={post.id} href={post.href} className={styles.postCard}>
                    <div className={styles.postImg}>
                      <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} />
                    </div>
                    <div className={styles.postBody}>
                      <div className={styles.postMeta}>
                        <span className={styles.postCategory}>{post.category}</span>
                        <span className={styles.postDate}>{post.date}</span>
                      </div>
                      <h2 className={styles.postTitle}>{post.title}</h2>
                      <p className={styles.postExcerpt}>{post.excerpt}</p>
                      <span className={styles.readMore}>Đọc tiếp →</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className={styles.empty}>
                <span>📰</span>
                <p>Chưa có bài viết nào.</p>
                <small>Thêm bài vào mảng <code>posts</code> trong file <code>tin-tuc/page.js</code>.</small>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}