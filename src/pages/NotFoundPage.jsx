import { Link } from 'react-router-dom'
import { siteConfig } from '../data/site'
import { usePageSeo } from '../hooks/usePageSeo'

function NotFoundPage() {
  usePageSeo({
    title: 'Không tìm thấy trang | Linh Hải Seafood',
    description: 'Trang bạn đang tìm không tồn tại hoặc đã được di chuyển.',
    pathname: '/khong-tim-thay',
    image: siteConfig.seo.defaultImage,
  })

  return (
    <div className="page-shell">
      <section className="section-block not-found-card">
        <p className="eyebrow">404</p>
        <h1>Trang này không còn ở đây</h1>
        <p>
          Có thể đường dẫn đã thay đổi, hoặc sản phẩm chưa được xuất bản. Bạn quay lại trang chủ để
          xem catalog hiện tại nhé.
        </p>
        <div className="hero-cta-row">
          <Link to="/" className="solid-button">
            Về trang chủ
          </Link>
          <a href="/#san-pham" className="outline-button">
            Xem sản phẩm
          </a>
          <a href={siteConfig.zaloLink} target="_blank" rel="noreferrer" className="outline-button">
            Liên hệ Zalo
          </a>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage
