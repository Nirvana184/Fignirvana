"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./HeroCarousel.module.css";

export function HeroCarousel({ banners }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback(
    (index) => setCurrent((index + banners.length) % banners.length),
    [banners.length]
  );
  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, 4500);
    return () => clearTimeout(timerRef.current);
  }, [current, paused, next]);

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {banners.map((b, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === current ? styles.active : ""}`}
        >
          {/* Ảnh nền — wrapper riêng để Image fill hoạt động đúng */}
          <div className={styles.imgWrap}>
            <Image
  src={b.image}
  alt={b.sub}
  fill
  priority={i === 0}
  sizes="100vw"
  style={{ objectFit: "contain" }} /* Đổi từ cover thành contain */
  className={styles.img}
/>
          </div>

          {/* Nội dung — link chỉ bao overlay, không bao ảnh */}
          <Link href={b.href} className={styles.overlay} tabIndex={i === current ? 0 : -1}>
            <p className={styles.sub}>{b.sub}</p>
            <h2 className={styles.label}>{b.label}</h2>
            <span className={styles.cta}>Khám phá ngay →</span>
          </Link>
        </div>
      ))}

      {/* Prev / Next */}
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={prev}
        aria-label="Trước"
      >‹</button>
      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={next}
        aria-label="Tiếp"
      >›</button>

      {/* Dots */}
      <div className={styles.dots}>
        {banners.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className={styles.progressBar}>
        <div
          key={current}
          className={`${styles.progressFill} ${!paused ? styles.progressAnimate : ""}`}
        />
      </div>
    </div>
  );
}