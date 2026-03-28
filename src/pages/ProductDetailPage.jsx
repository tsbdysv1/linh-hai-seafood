import { Link, Navigate, useParams } from 'react-router-dom'
import { getProductBySlug } from '../data/products'
import { siteConfig } from '../data/site'

function ProductDetailPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  if (!product) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="page-shell product-detail-shell">
      <div className="breadcrumb-row">
        <Link to="/" className="breadcrumb-link">
          ← Về trang chủ
        </Link>
      </div>

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
    </div>
  )
}

export default ProductDetailPage
