// app/lien-he/page.js
"use client";

import { useState } from "react";
import { Header } from "../component/header/header.js";
import { Footer } from "../component/footer/footer.js";
import styles from "./page.module.css";

export default function LienHePage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: gửi form đến API / EmailJS / Formspree của bạn
    setSent(true);
  }

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <div className={styles.pageBanner}>
          <h1 className={styles.pageTitle}>Liên Hệ</h1>
          <p className={styles.pageDesc}>Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
        </div>

        <section className={styles.section}>
          <div className={styles.inner}>

            {/* Info cards */}
            <div className={styles.infoGrid}>
              {[
                { icon: "📍", title: "Địa chỉ", lines: ["17/21C Nguyễn Thị Nghé,", "Đông Thạnh, TP. HCM"] },
                { icon: "📞", title: "Điện thoại", lines: ["+84 392 901 848"] },
                { icon: "📧", title: "Email", lines: ["user@gmail.com"] },
                { icon: "🕐", title: "Giờ làm việc", lines: ["Thứ 2 – Chủ nhật", "08:00 – 17:00"] },
              ].map((item) => (
                <div key={item.title} className={styles.infoCard}>
                  <span className={styles.infoIcon}>{item.icon}</span>
                  <h4 className={styles.infoTitle}>{item.title}</h4>
                  {item.lines.map((l) => <p key={l} className={styles.infoLine}>{l}</p>)}
                </div>
              ))}
            </div>

            {/* Form */}
            <div className={styles.formWrap}>
              <h2 className={styles.formTitle}>Gửi tin nhắn cho chúng tôi</h2>

              {sent ? (
                <div className={styles.thankYou}>
                  <span>✅</span>
                  <p>Cảm ơn bạn! Chúng tôi sẽ phản hồi sớm nhất có thể.</p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className={styles.label}>Họ tên *</label>
                      <input
                        name="name" required value={form.name} onChange={handleChange}
                        className={styles.input} placeholder="Nguyễn Văn A"
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Email *</label>
                      <input
                        name="email" type="email" required value={form.email} onChange={handleChange}
                        className={styles.input} placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Số điện thoại</label>
                    <input
                      name="phone" value={form.phone} onChange={handleChange}
                      className={styles.input} placeholder="0912 345 678"
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Tin nhắn *</label>
                    <textarea
                      name="message" required rows={5} value={form.message} onChange={handleChange}
                      className={styles.textarea} placeholder="Nội dung bạn muốn hỏi..."
                    />
                  </div>
                  <button type="submit" className={styles.submitBtn}>Gửi tin nhắn</button>
                </form>
              )}
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}