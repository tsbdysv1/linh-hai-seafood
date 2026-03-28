import { Link } from 'react-router-dom'
import { siteConfig } from '../data/site'

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-content">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.shortDescription}</p>
        <p className="product-price">{product.price}</p>
        <p className="product-stock">
          Còn <strong>{product.stock}</strong> {product.unit}
        </p>
        <div className="product-actions">
          <Link to={`/san-pham/${product.slug}`} className="solid-button small-button">
            Xem chi tiết
          </Link>
          <a href={siteConfig.zaloLink} target="_blank" rel="noreferrer" className="outline-button small-button">
            Đặt qua Zalo
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
