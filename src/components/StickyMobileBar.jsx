import { siteConfig } from '../data/site'

function StickyMobileBar() {
  return (
    <div className="sticky-mobile-bar">
      <a href={`tel:${siteConfig.phoneNumber.replace(/\s+/g, '')}`} className="outline-button">
        Gọi ngay
      </a>
      <a href={siteConfig.zaloLink} target="_blank" rel="noreferrer" className="solid-button">
        Zalo nhanh
      </a>
    </div>
  )
}

export default StickyMobileBar
