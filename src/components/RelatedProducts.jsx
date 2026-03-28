import ProductCard from './ProductCard'

function RelatedProducts({ products }) {
  if (!products.length) {
    return null
  }

  return (
    <section className="section-block">
      <div className="section-heading">
        <p className="eyebrow">Xem thêm</p>
        <h2>Các sản phẩm liên quan</h2>
      </div>

      <div className="product-grid related-grid">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  )
}

export default RelatedProducts
