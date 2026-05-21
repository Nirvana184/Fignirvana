// src/app/shop/page.js
"use client";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../component/header/header.js";
import { Footer } from "../component/footer/footer.js";
import { products, categories, formatPrice } from "@/data/products.js";
import styles from "./page.module.css";

// ── Card sản phẩm ─────────────────────────────
function ProductCard({ product }) {
  return (
    <Link href={`/sanpham/${product.slug}`} className={styles.card}>
      {product.badge && <span className={styles.badge}>{product.badge}</span>}
      {product.stock === 0 && <span className={styles.soldOut}>Hết hàng</span>}

      <div className={styles.cardImg}>
        <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} className={styles.imgMain} />
        {product.imageHover && (
          <Image src={product.imageHover} alt={product.name} fill style={{ objectFit: "cover" }} className={styles.imgHover} />
        )}
        <div className={styles.quickView}>Xem Nhanh</div>
      </div>

      <div className={styles.cardBody}>
        <span className={styles.cardCat}>{categories.find(c => c.slug === product.category)?.label}</span>
        <h3 className={styles.cardName}>{product.name}</h3>
        <div className={styles.cardPrice}>
          {product.oldPrice && <s className={styles.oldPrice}>{formatPrice(product.oldPrice)}</s>}
          <strong className={styles.price}>{formatPrice(product.price)}</strong>
        </div>
      </div>
    </Link>
  );
}

// ── Trang shop ────────────────────────────────
// ── Trang shop ────────────────────────────────
export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const[sort, setSort] = useState("default");
  const [search, setSearch] = useState("");
  const[currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // 1. Tính toán filtered trước
  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== "all") list = list.filter((p) => p.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    return list;
  }, [activeCategory, sort, search]);

  // 2. Reset trang về 1 khi bộ lọc thay đổi (Dùng useEffect thay vì useMemo)

  // 3. Tính toán phân trang sau khi đã có filtered
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filtered.slice(indexOfFirstItem, indexOfLastItem);


  return (
    <div className={styles.page}>
      <Header />

      <main>
        {/* Banner */}
        <div className={styles.banner}>
          <h1 className={styles.bannerTitle}>Tất Cả Sản Phẩm</h1>
          <p className={styles.bannerDesc}>Gundam & Figure chính hãng — {products.length} sản phẩm</p>
        </div>

        <div className={styles.layout}>

          {/* ── Sidebar danh mục ── */}
          <aside className={styles.sidebar}>
            <h3 className={styles.sideTitle}>Danh mục</h3>

            <button
              className={`${styles.catBtn} ${activeCategory === "all" ? styles.catActive : ""}`}
             onClick={() => {
  setActiveCategory(cat.slug);
  setCurrentPage(1); // Thêm dòng này vào
}}
            >
              Tất cả
              <span className={styles.catCount}>{products.length}</span>
            </button>

            {/* Gundam group */}
            <p className={styles.catGroup}>Gundam</p>
            {categories.filter(c => c.parent === "gundam").map(cat => (
              <button
                key={cat.slug}
                className={`${styles.catBtn} ${activeCategory === cat.slug ? styles.catActive : ""}`}
                onClick={() => {
                  setActiveCategory(cat.slug);
                  setCurrentPage(1); // Thêm dòng này vào
                }}
              >
                {cat.label}
                <span className={styles.catCount}>
                  {products.filter(p => p.category === cat.slug).length}
                </span>
              </button>
            ))}

            {/* Figure group */}
            <p className={styles.catGroup}>Figure</p>
            {categories.filter(c => c.parent === "figure").map(cat => (
              <button
                key={cat.slug}
                className={`${styles.catBtn} ${activeCategory === cat.slug ? styles.catActive : ""}`}
                onClick={() => {
                  setActiveCategory(cat.slug);
                  setCurrentPage(1); // Thêm dòng này vào
                }}
              >
                {cat.label}
                <span className={styles.catCount}>
                  {products.filter(p => p.category === cat.slug).length}
                </span>
              </button>
            ))}

            {/* Danh mục không có parent */}
            <p className={styles.catGroup}>Khác</p>
            {categories.filter(c => c.parent === null).map(cat => (
              <button
                key={cat.slug}
                className={`${styles.catBtn} ${activeCategory === cat.slug ? styles.catActive : ""}`}
                onClick={() => {
                  setActiveCategory(cat.slug);
                  setCurrentPage(1); // Thêm dòng này vào
                }}
              >
                {cat.label}
                <span className={styles.catCount}>
                  {products.filter(p => p.category === cat.slug).length}
                </span>
              </button>
            ))}
          </aside>

          {/* ── Main content ── */}
          <div className={styles.main}>

            {/* Toolbar */}
            <div className={styles.toolbar}>
              <input
                type="text"
                placeholder="Tìm sản phẩm..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1); // Thêm dòng này vào
                }}
                className={styles.searchInput}
              />
              <div className={styles.toolRight}>
                <span className={styles.resultCount}>{filtered.length} sản phẩm</span>
                <select className={styles.sort} value={sort} onChange={(e) => {
  setSort(e.target.value);
  setCurrentPage(1); // Thêm dòng này vào
}}>
                  <option value="default">Mặc định</option>
                  <option value="price-asc">Giá tăng dần</option>
                  <option value="price-desc">Giá giảm dần</option>
                </select>
              </div>
            </div>

            {/* Grid */}
{currentProducts.length > 0 ? (
  <div className={styles.grid}>
    {currentProducts.map((p) => <ProductCard key={p.slug} product={p} />)}
  </div>
) : (
  <div className={styles.empty}>
    <span>🔍</span>
    <p>Không tìm thấy sản phẩm nào.</p>
  </div>
)}

{/* Thanh chuyển trang */}
{totalPages > 1 && (
  <div className={styles.pagination}>
    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i}
        className={currentPage === i + 1 ? styles.activePage : ""}
        onClick={() => setCurrentPage(i + 1)}
      >
        {i + 1}
      </button>
    ))}
  </div>
)}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}