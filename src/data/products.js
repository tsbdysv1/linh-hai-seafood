import { formatPriceLabel } from '../utils/commerce'

export const products = [
  {
    slug: 'muc-mot-nang',
    name: 'Mực một nắng',
    priceValue: 100000,
    priceSuffix: '/ 1kg',
    stock: 50,
    unit: 'kg',
    category: 'Hải sản 1 nắng & khô',
    image:
      'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Thịt dày, ngọt đậm, phù hợp nướng mọi hoặc chiên nước mắm.',
    healthBenefits: [
      'Cung cấp đạm biển chất lượng cao, phù hợp cho bữa ăn giàu protein.',
      'Có thể bổ sung khoáng chất tự nhiên từ hải sản biển.',
      'Thích hợp cho gia đình muốn chuẩn bị món nhanh mà vẫn đậm vị.',
    ],
    dishIdeas: ['Mực một nắng nướng muối ớt', 'Mực chiên nước mắm', 'Mực xé trộn gỏi xoài'],
    storage: 'Bảo quản ngăn đông, rã đông chậm trước khi chế biến để giữ độ ngọt.',
    sourcingNote: 'Placeholder content — sẽ thay bằng thông tin nguồn hàng thật sau.',
  },
  {
    slug: 'tom-su-bien',
    name: 'Tôm sú biển',
    priceValue: 100000,
    priceSuffix: '/ 1kg',
    stock: 50,
    unit: 'kg',
    category: 'Hải sản tươi sống',
    image:
      'https://images.unsplash.com/photo-1565680018434-b513d92b92b3?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Tôm chắc thịt, dễ chế biến, hợp nướng, hấp, rang muối.',
    healthBenefits: [
      'Giàu protein và phù hợp cho nhiều kiểu ăn gia đình.',
      'Dễ kết hợp với rau củ để cân bằng bữa ăn.',
      'Thường được chọn cho các món đãi khách vì hình thức đẹp.',
    ],
    dishIdeas: ['Tôm sú hấp sả', 'Tôm nướng bơ tỏi', 'Tôm rang muối Hong Kong'],
    storage: 'Giữ lạnh sâu nếu chưa dùng ngay; chế biến sớm để giữ độ ngọt.',
    sourcingNote: 'Placeholder content — sẽ thay bằng thông tin nguồn hàng thật sau.',
  },
  {
    slug: 'cua-bien',
    name: 'Cua biển',
    priceValue: 100000,
    priceSuffix: '/ 1kg',
    stock: 50,
    unit: 'kg',
    category: 'Hải sản tươi sống',
    image:
      'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Thịt cua ngọt, chắc và hợp các món hấp, rang me, nấu lẩu.',
    healthBenefits: [
      'Mang lại cảm giác bữa ăn cao cấp và giàu dinh dưỡng.',
      'Phù hợp cho các món gia đình cuối tuần hoặc tiếp khách.',
      'Có thể kết hợp với cháo, miến hoặc sốt bơ tỏi rất linh hoạt.',
    ],
    dishIdeas: ['Cua hấp bia', 'Cua rang me', 'Miến cua tay cầm'],
    storage: 'Nên giữ sống hoặc chế biến sớm để bảo toàn chất lượng.',
    sourcingNote: 'Placeholder content — sẽ thay bằng thông tin nguồn hàng thật sau.',
  },
  {
    slug: 'ca-chim-bien',
    name: 'Cá chim biển',
    priceValue: 100000,
    priceSuffix: '/ 1kg',
    stock: 50,
    unit: 'kg',
    category: 'Hải sản đông lạnh',
    image:
      'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Thịt cá mềm, thơm, hợp chiên sả ớt hoặc hấp xì dầu.',
    healthBenefits: [
      'Là lựa chọn dễ ăn cho cả người lớn lẫn trẻ em.',
      'Có thể dùng trong bữa cơm thường ngày hoặc món đãi khách.',
      'Dễ chế biến và không cần quá nhiều gia vị phức tạp.',
    ],
    dishIdeas: ['Cá chim chiên giòn', 'Cá chim hấp xì dầu', 'Cá chim nấu canh chua'],
    storage: 'Rã đông trong ngăn mát trước khi nấu để cá giữ kết cấu tốt hơn.',
    sourcingNote: 'Placeholder content — sẽ thay bằng thông tin nguồn hàng thật sau.',
  },
  {
    slug: 'oc-huong',
    name: 'Ốc hương',
    priceValue: 100000,
    priceSuffix: '/ 1kg',
    stock: 50,
    unit: 'kg',
    category: 'Hải sản tươi sống',
    image:
      'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Ốc giòn ngọt, hợp hấp sả, rang muối và sốt bơ cay.',
    healthBenefits: [
      'Mang lại trải nghiệm món ốc đậm chất quán hải sản tại nhà.',
      'Phù hợp cho các bữa tụ họp, nhâm nhi cuối tuần.',
      'Kết hợp tốt với nhiều kiểu sốt đậm vị.',
    ],
    dishIdeas: ['Ốc hương hấp sả', 'Ốc hương rang muối', 'Ốc hương sốt bơ tỏi'],
    storage: 'Giữ mát, thoáng và nên chế biến sớm để đảm bảo độ tươi.',
    sourcingNote: 'Placeholder content — sẽ thay bằng thông tin nguồn hàng thật sau.',
  },
  {
    slug: 'ca-phong-sinh',
    name: 'Cá phóng sinh',
    priceValue: 100000,
    priceSuffix: '/ 1kg',
    stock: 50,
    unit: 'kg',
    category: 'Hải sản phóng sinh',
    image:
      'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Danh mục riêng phục vụ nhu cầu chọn cá phù hợp cho mục đích phóng sinh.',
    healthBenefits: [
      'Trang chi tiết loại này hiện thiên về mục đích sử dụng thay vì dinh dưỡng.',
      'Giúp khách xem nhanh thông tin trước khi liên hệ chọn loại phù hợp.',
      'Có thể mở rộng sau với lưu ý vận chuyển và chăm sóc.',
    ],
    dishIdeas: ['Danh mục này ưu tiên mục đích phóng sinh hơn là chế biến món ăn.'],
    storage: 'Cần trao đổi trực tiếp để chọn phương án giao nhận phù hợp.',
    sourcingNote: 'Placeholder content — sẽ thay bằng thông tin nguồn hàng thật sau.',
  },
]

export function getDisplayPrice(product) {
  return formatPriceLabel(product)
}

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug)
}

export function getRelatedProducts(currentProduct, limit = 3) {
  return products
    .filter((product) => product.slug !== currentProduct.slug)
    .sort((left, right) => {
      const leftScore = left.category === currentProduct.category ? 1 : 0
      const rightScore = right.category === currentProduct.category ? 1 : 0
      return rightScore - leftScore
    })
    .slice(0, limit)
}

export function buildProductJsonLd(product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    image: [product.image],
    category: product.category,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'VND',
      price: product.priceValue,
      availability: 'https://schema.org/InStock',
    },
  }
}
