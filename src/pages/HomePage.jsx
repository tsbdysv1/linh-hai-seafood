import ProductCard from '../components/ProductCard'
import { categories, siteConfig } from '../data/site'
import { products } from '../data/products'
import { usePageSeo } from '../hooks/usePageSeo'

function HomePage() {
  usePageSeo({
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    jsonLd: siteConfig.defaultJsonLd,
  })

  return (
    <div className="page-shell">
      <header className="hero-section">
        <nav className="topbar">
          <div className="brand-lockup">
            <div className="brand-mark" aria-hidden="true">
              <span className="wave wave-one"></span>
              <span className="wave wave-two"></span>
              <span className="brand-fish"></span>
            </div>
            <div>
              <p className="brand-kicker">{siteConfig.brandName}</p>
              <h1>{siteConfig.headline}</h1>
            </div>
          </div>

          <div className="quick-actions">
            <a href={`tel:${siteConfig.phoneNumber.replace(/\s+/g, '')}`} className="outline-button">
              Gọi ngay
            </a>
            <a href={siteConfig.zaloLink} target="_blank" rel="noreferrer" className="solid-button">
              Đặt qua Zalo
            </a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Technical foundation</p>
            <h2>{siteConfig.heroTitle}</h2>
            <p className="hero-text">{siteConfig.heroDescription}</p>
            <div className="hero-cta-row">
              <a href="#san-pham" className="solid-button">
                Xem sản phẩm
              </a>
              <a href="#lien-he" className="outline-button">
                Xem thông tin liên hệ
              </a>
            </div>
            <ul className="trust-points">
              {siteConfig.trustPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <aside className="hero-card">
            <p className="card-label">Product-ready structure</p>
            <h3>Đã chuẩn bị sẵn trang chi tiết cho từng sản phẩm</h3>
            <p>
              Từ đây mình có thể cắm thông tin thật dần dần cho từng mặt hàng: mô tả, lợi ích,
              món gợi ý, bảo quản và nội dung bán hàng.
            </p>
            <div className="logo-preview" aria-hidden="true">
              <div className="logo-preview-mark">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div>
                <strong>Linh Hải</strong>
                <p>SEAFOOD</p>
              </div>
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Danh mục chính</p>
            <h2>Thiết kế theo đúng kiểu shop cần bán nhanh, dễ xem, dễ đặt</h2>
          </div>
          <div className="category-grid">
            {categories.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="san-pham">
          <div className="section-heading">
            <p className="eyebrow">Sản phẩm nổi bật</p>
            <h2>Catalog demo đã có route chi tiết cho từng sản phẩm</h2>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>

        <section className="section-block contact-section" id="lien-he">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Liên hệ đặt hàng</p>
              <h2>Thông tin business thật sẽ được thay dần sau, còn flow kỹ thuật đã sẵn sàng</h2>
              <p>
                Rooney đã note riêng tech debt cho số điện thoại, Zalo, địa chỉ, giờ mở cửa và dữ
                liệu sản phẩm thật để mình quay lại hoàn thiện sau.
              </p>
            </div>
            <div className="contact-actions">
              <a href={siteConfig.zaloLink} target="_blank" rel="noreferrer" className="solid-button">
                Zalo: {siteConfig.zaloLabel}
              </a>
              <a href={`tel:${siteConfig.phoneNumber.replace(/\s+/g, '')}`} className="outline-button">
                SĐT: {siteConfig.phoneNumber}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage
