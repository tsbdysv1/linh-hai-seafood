import { Link, Navigate, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import RelatedProducts from '../components/RelatedProducts'
import { buildProductJsonLd, getProductBySlug, getRelatedProducts } from '../data/products'
import { siteConfig } from '../data/site'
import { usePageSeo } from '../hooks/usePageSeo'

function ProductDetailPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  usePageSeo({
    title: product ? `${product.name} | ${siteConfig.brandName}` : `Sản phẩm | ${siteConfig.brandName}`,
    description: product ? product.shortDescription : siteConfig.seo.description,
    jsonLd: product ? buildProductJsonLd(product) : siteConfig.defaultJsonLd,
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

          <div className="product-detail-meta">
            <div className="detail-pill">
              <span>Giá demo</span>
              <strong>{product.price}</strong>
            </div>
            <div className="detail-pill">
              <span>Tồn kho demo</span>
              <strong>
                {product.stock} {product.unit}
              </strong>
            </div>
          </div>

          <div className="product-detail-actions">
            <a href={siteConfig.zaloLink} target="_blank" rel="noreferrer" className="solid-button">
              Đặt qua Zalo
            </a>
            <a href={`tel:${siteConfig.phoneNumber.replace(/\s+/g, '')}`} className="outline-button">
              Gọi để hỏi hàng
            </a>
          </div>

          <Link to="/#san-pham" className="inline-return-link">
            ← Quay lại catalog sản phẩm
          </Link>
        </div>
      </section>

      <section className="section-block detail-content-grid">
        <article className="detail-panel">
          <p className="eyebrow">Điểm nổi bật</p>
          <h2>Tốt cho sức khỏe và dễ kể câu chuyện bán hàng hơn</h2>
          <ul className="detail-list">
            {product.healthBenefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="detail-panel">
          <p className="eyebrow">Gợi ý chế biến</p>
          <h2>Một trang riêng giúp shop tư vấn món dễ hơn</h2>
          <ul className="detail-list">
            {product.dishIdeas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-block detail-content-grid secondary-grid">
        <article className="detail-panel">
          <p className="eyebrow">Bảo quản</p>
          <p>{product.storage}</p>
        </article>

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
