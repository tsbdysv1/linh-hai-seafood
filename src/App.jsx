import './App.css'

const phoneNumber = '0900 000 000'
const zaloLink = 'https://zalo.me/0900000000'

const categories = [
  {
    title: 'Hải sản tươi sống',
    description: 'Tôm, cua, ghẹ, cá biển, ốc và nhiều loại hải sản được chọn theo tiêu chí tươi - sạch - dễ chế biến.',
  },
  {
    title: 'Hải sản đông lạnh',
    description: 'Giữ trọn độ tươi, tiện bảo quản, phù hợp cho gia đình và quán ăn cần nguồn hàng ổn định.',
  },
  {
    title: 'Hải sản 1 nắng & khô',
    description: 'Mực một nắng, cá một nắng, khô hải sản tuyển chọn với vị đậm đà và hình thức đẹp mắt.',
  },
  {
    title: 'Hải sản phóng sinh',
    description: 'Danh mục riêng cho các loại hải sản phù hợp mục đích phóng sinh, giao nhanh và chọn kỹ.',
  },
]

const products = [
  {
    name: 'Mực một nắng',
    price: '100.000đ / 1kg',
    stock: 50,
    unit: 'kg',
    category: 'Hải sản 1 nắng & khô',
    image:
      'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Tôm sú biển',
    price: '100.000đ / 1kg',
    stock: 50,
    unit: 'kg',
    category: 'Hải sản tươi sống',
    image:
      'https://images.unsplash.com/photo-1565680018434-b513d92b92b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Cua biển',
    price: '100.000đ / 1kg',
    stock: 50,
    unit: 'kg',
    category: 'Hải sản tươi sống',
    image:
      'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Cá chim biển',
    price: '100.000đ / 1kg',
    stock: 50,
    unit: 'kg',
    category: 'Hải sản đông lạnh',
    image:
      'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Ốc hương',
    price: '100.000đ / 1kg',
    stock: 50,
    unit: 'kg',
    category: 'Hải sản tươi sống',
    image:
      'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Cá phóng sinh',
    price: '100.000đ / 1kg',
    stock: 50,
    unit: 'kg',
    category: 'Hải sản phóng sinh',
    image:
      'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1200&q=80',
  },
]

function App() {
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
              <p className="brand-kicker">Linh Hải Seafood</p>
              <h1>Hải sản tươi ngon, trình bày sang, đặt hàng thật nhanh</h1>
            </div>
          </div>

          <div className="quick-actions">
            <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="outline-button">
              Gọi ngay
            </a>
            <a href={zaloLink} target="_blank" rel="noreferrer" className="solid-button">
              Đặt qua Zalo
            </a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Phiên bản demo local</p>
            <h2>Website mẫu cho shop hải sản của bạn — đơn giản, sang và dễ mở rộng</h2>
            <p className="hero-text">
              Đây là bản xem trước cho Linh Hải Seafood. Mình đã để sẵn giá, hình ảnh, sản phẩm và
              nút liên hệ ở dạng placeholder để bạn duyệt giao diện trước khi chốt thông tin thật.
            </p>
            <div className="hero-cta-row">
              <a href="#san-pham" className="solid-button">
                Xem sản phẩm
              </a>
              <a href="#lien-he" className="outline-button">
                Xem thông tin liên hệ
              </a>
            </div>
            <ul className="trust-points">
              <li>Giao diện tối ưu cho điện thoại</li>
              <li>Hiển thị tồn kho rõ ràng</li>
              <li>Có khu riêng cho hải sản phóng sinh</li>
            </ul>
          </div>

          <aside className="hero-card">
            <p className="card-label">Logo concept</p>
            <h3>Linh Hải Seafood</h3>
            <p>
              Biểu tượng tối giản với sóng biển + dáng cá, tông xanh biển đậm kết hợp trắng kem,
              phù hợp định hướng đơn giản sang.
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
            <h2>Mẫu sản phẩm placeholder để bạn duyệt bố cục trước</h2>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article key={product.name} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-content">
                  <p className="product-category">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                  <p className="product-stock">
                    Còn <strong>{product.stock}</strong> {product.unit}
                  </p>
                  <div className="product-actions">
                    <a href={zaloLink} target="_blank" rel="noreferrer" className="solid-button small-button">
                      Đặt qua Zalo
                    </a>
                    <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="outline-button small-button">
                      Gọi điện
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block contact-section" id="lien-he">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Liên hệ đặt hàng</p>
              <h2>Khách có thể đặt qua Zalo hoặc gọi trực tiếp</h2>
              <p>
                Hiện tại website đang dùng thông tin placeholder. Khi bạn gửi số thật, mình sẽ thay
                vào ngay trước lúc deploy.
              </p>
            </div>
            <div className="contact-actions">
              <a href={zaloLink} target="_blank" rel="noreferrer" className="solid-button">
                Zalo: 0900 000 000
              </a>
              <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="outline-button">
                SĐT: 0900 000 000
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
