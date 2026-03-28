import { Navigate, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import RelatedProducts from '../components/RelatedProducts'
import { buildProductJsonLd, getDisplayPrice, getProductBySlug, getRelatedProducts, productContentGuide } from '../data/products'
import { siteConfig } from '../data/site'
import { usePageSeo } from '../hooks/usePageSeo'
import { buildPhoneHref, buildZaloProductLink } from '../utils/commerce'

function ProductDetailPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  usePageSeo({
    title: product ? `${product.name} | ${siteConfig.brandName}` : `Sản phẩm | ${siteConfig.brandName}`,
    description: product ? product.shortDescription : siteConfig.seo.description,
    jsonLd: product ? buildProductJsonLd(product) : siteConfig.defaultJsonLd,
    pathname: product ? `/san-pham/${product.slug}` : '/san-pham',
    image: product ? product.image : siteConfig.seo.defaultImage,
  })

  if (!product) {
    return <Navigate to="/khong-tim-thay" replace />
  }

  const relatedProducts = getRelatedProducts(product)

  return (
    <div className="page-shell product-detail-shell">
      <Breadcrumbs
        items={[
          { label: 'Trang chủ', to: '/' },
          { label: 'Sản phẩm', to: '/#san-pham' },
          { label: product.name },
        ]}
      />

      <section className="section-block product-detail-layout">
        <div className="product-detail-media">
          <img src={product.image} alt={product.name} className="product-detail-image" />
        </div>

        <div className="product-detail-main">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-detail-description">{product.shortDescription}</p>
          <p className="product-sales-pitch">{product.salesPitch}</p>

          <div className="product-badge-row" aria-label="Điểm nổi bật của sản phẩm">
            {product.badges.map((badge) => (
              <span key={badge} className="product-badge">
                {badge}
              </span>
            ))}
          </div>

          <div className="product-detail-meta">
            <div className="detail-pill">
              <span>Giá demo</span>
              <strong>{getDisplayPrice(product)}</strong>
            </div>
            <div className="detail-pill">
              <span>Tồn kho demo</span>
              <strong>
                {product.stock} {product.unit}
              </strong>
            </div>
          </div>

          <div className="product-detail-actions">
            <a href={buildZaloProductLink(product)} target="_blank" rel="noreferrer" className="solid-button">
              Hỏi sản phẩm này qua Zalo
            </a>
            <a href={buildPhoneHref(siteConfig.phoneNumber)} className="outline-button">
              Gọi để hỏi hàng
            </a>
          </div>

          <a href="/#san-pham" className="inline-return-link">
            ← Quay lại catalog sản phẩm
          </a>
        </div>
      </section>

      <section className="section-block detail-content-grid">
        <article className="detail-panel">
          <p className="eyebrow">Trạng thái nội dung</p>
          <h2>{productContentGuide.placeholderLabel}</h2>
          <p>{productContentGuide.placeholderNote}</p>
          <ul className="detail-list">
            <li>Trạng thái hiện tại: {product.placeholderStatus}</li>
            {product.bestFor.map((item) => (
              <li key={item}>Phù hợp với: {item}</li>
            ))}
          </ul>
        </article>

        <article className="detail-panel">
          <p className="eyebrow">Điểm nổi bật</p>
          <h2>Tốt cho sức khỏe và dễ kể câu chuyện bán hàng hơn</h2>
          <ul className="detail-list">
            {product.healthBenefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-block detail-content-grid secondary-grid">
        <article className="detail-panel">
          <p className="eyebrow">Gợi ý chế biến</p>
          <h2>Một trang riêng giúp shop tư vấn món dễ hơn</h2>
          <ul className="detail-list">
            {product.dishIdeas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="detail-panel">
          <p className="eyebrow">Bảo quản</p>
          <p>{product.storage}</p>
        </article>
      </section>

      <section className="section-block detail-content-grid secondary-grid">
        <article className="detail-panel">
          <p className="eyebrow">Nguồn hàng</p>
          <p>{product.sourcingNote}</p>
        </article>
      </section>

      <RelatedProducts products={relatedProducts} />
    </div>
  )
}

export default ProductDetailPage
