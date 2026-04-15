import ProductCard from '../components/ProductCard'
import { categories, siteConfig } from '../data/site'
import { getFeaturedProducts } from '../data/products'
import { usePageSeo } from '../hooks/usePageSeo'
import { buildPhoneHref } from '../utils/commerce'

function HomePage() {
  const featuredProducts = getFeaturedProducts()

  usePageSeo({
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    jsonLd: siteConfig.defaultJsonLd,
    pathname: '/',
    image: siteConfig.seo.defaultImage,
  })

  return (
    <div>
      <nav className="site-nav">
        <div className="nav-inner">
          <a href="/" className="brand-lockup" aria-label="Linh Hải Seafood - Trang chủ">
            <div className="brand-mark" aria-hidden="true">
              <span className="wave wave-one"></span>
              <span className="wave wave-two"></span>
              <span className="brand-fish"></span>
            </div>
            <div>
              <p className="brand-kicker">Linh Hải Seafood</p>
              <strong className="brand-name">Linh Hải Seafood</strong>
            </div>
          </a>

          <div className="quick-actions">
            <a href={buildPhoneHref(siteConfig.phoneNumber)} className="outline-button small-button">
              Gọi ngay
            </a>
            <a
              href={siteConfig.zaloLink}
              target="_blank"
              rel="noreferrer"
              className="solid-button small-button"
            >
              Đặt qua Zalo
            </a>
          </div>
        </div>
      </nav>

      <header className="hero-section">
        <div className="page-shell hero-shell">
          <div className="hero-copy">
            <p className="eyebrow">Linh Hải Seafood</p>
            <h1 className="hero-title">{siteConfig.heroTitle}</h1>
            <p className="hero-text">{siteConfig.heroDescription}</p>
            <div className="hero-cta-row">
              <a href="#san-pham" className="solid-button">
                Xem sản phẩm
              </a>
              <a href="#lien-he" className="outline-button light-outline-button">
                Liên hệ ngay
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="trust-bar" aria-label="Lý do khách hàng chọn Linh Hải Seafood">
        <div className="page-shell trust-bar-inner">
          {siteConfig.trustPoints.map((point) => (
            <div key={point} className="trust-item">
              {point}
            </div>
          ))}
        </div>
      </section>

      <main className="page-shell page-content">
        <section className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Danh mục chính</p>
            <h2>Chọn nhanh nhóm hải sản phù hợp nhu cầu gia đình và quán ăn</h2>
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
            <h2>Một vài mặt hàng được khách hỏi nhiều và dễ đặt ngay trong ngày</h2>
            <p className="section-supporting-text">
              Hình ảnh rõ ràng, thông tin ngắn gọn và có trang chi tiết để khách xem nhanh trước khi
              liên hệ đặt hàng.
            </p>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>

        <section className="section-block contact-section" id="lien-he">
          <div className="contact-card warm-contact-card">
            <div>
              <p className="eyebrow">Liên hệ đặt hàng</p>
              <h2>Cần tư vấn nhanh món phù hợp, cứ gọi hoặc nhắn Zalo cho Linh Hải</h2>
              <p>
                Shop hỗ trợ chọn hải sản theo nhu cầu bữa cơm gia đình, đãi khách hoặc đơn hàng giao
                trong ngày.
              </p>
            </div>
            <div className="contact-actions">
              <a href={siteConfig.zaloLink} target="_blank" rel="noreferrer" className="solid-button">
                Zalo: {siteConfig.zaloLabel}
              </a>
              <a href={buildPhoneHref(siteConfig.phoneNumber)} className="outline-button">
                Gọi: {siteConfig.phoneNumber}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2025 Linh Hải Seafood. Mọi quyền được bảo lưu.</p>
      </footer>
    </div>
  )
}

export default HomePage
