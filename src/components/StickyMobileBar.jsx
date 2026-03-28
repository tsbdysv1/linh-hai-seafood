import { siteConfig } from '../data/site'
import { buildPhoneHref } from '../utils/commerce'

function StickyMobileBar() {
  return (
    <div className="sticky-mobile-bar">
      <a href={buildPhoneHref(siteConfig.phoneNumber)} className="outline-button">
        Gọi ngay
      </a>
      <a href={siteConfig.zaloLink} target="_blank" rel="noreferrer" className="solid-button">
        Zalo nhanh
      </a>
    </div>
  )
}

export default StickyMobileBar
