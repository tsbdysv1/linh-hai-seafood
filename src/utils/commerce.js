import { siteConfig } from '../data/site'

export function normalizePhoneNumber(phoneNumber) {
  return phoneNumber.replace(/\D+/g, '')
}

export function formatCurrencyVnd(value) {
  return new Intl.NumberFormat('vi-VN').format(value)
}

export function formatPriceLabel(product) {
  const suffix = product.priceSuffix ? ` ${product.priceSuffix}` : ''
  return `${formatCurrencyVnd(product.priceValue)}đ${suffix}`
}

export function buildProductInquiryMessage(product) {
  return `Chào shop, mình muốn hỏi về sản phẩm ${product.name}.`
}

export function buildZaloProductLink(product) {
  const query = new URLSearchParams({
    text: buildProductInquiryMessage(product),
  })

  return `${siteConfig.zaloLink}?${query.toString()}`
}

export function buildPhoneHref(phoneNumber = siteConfig.phoneNumber) {
  return `tel:${normalizePhoneNumber(phoneNumber)}`
}
