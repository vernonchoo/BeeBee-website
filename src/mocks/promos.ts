import type { PromoItem } from '@/types/promo'

export const mockPromos: PromoItem[] = [
  {
    id: 'promo-flight-shanghai-1',
    type: 'flight',
    city: 'shanghai',
    title: {
      th: 'ตั๋วเครื่องบินกรุงเทพ-เซี่ยงไฮ้ ลด 30%',
      en: 'Bangkok-Shanghai Flight 30% OFF',
      zh: '曼谷-上海机票 立减30%',
    },
    desc: {
      th: 'จองเลยวันนี้! ราคาพิเศษสำหรับเที่ยวบินตรง',
      en: 'Book now! Special price for direct flights',
      zh: '今日预订！直飞航班特惠价',
    },
    priceTHB: 8500,
    originalPriceTHB: 12000,
    discountPercent: 30,
    validUntil: '2025-01-31',
    coverImage: '/images/promos/flight-shanghai.jpg',
    badge: 'HOT',
  },
  {
    id: 'promo-hotel-guangzhou-1',
    type: 'hotel',
    city: 'guangzhou',
    title: {
      th: 'โรงแรม 4 ดาว กว่างโจว ฟรี 1 คืน',
      en: '4-Star Guangzhou Hotel - 1 Free Night',
      zh: '广州四星级酒店 买三送一',
    },
    desc: {
      th: 'จอง 3 คืน ฟรี 1 คืน พร้อมอาหารเช้า',
      en: 'Book 3 nights, get 1 free with breakfast',
      zh: '预订3晚送1晚，含早餐',
    },
    priceTHB: 6000,
    validUntil: '2025-02-15',
    coverImage: '/images/promos/hotel-guangzhou.jpg',
    badge: 'LIMITED',
  },
  {
    id: 'promo-bundle-beijing-1',
    type: 'bundle',
    city: 'beijing',
    title: {
      th: 'แพ็คเกจปักกิ่ง เที่ยว + พัก + กิน',
      en: 'Beijing Complete Package - Tour + Stay + Meals',
      zh: '北京全包套餐 游+住+吃',
    },
    desc: {
      th: 'ครบจบในแพ็คเกจเดียว ประหยัดกว่า 40%',
      en: 'All-in-one package, save over 40%',
      zh: '一站式套餐，节省超40%',
    },
    priceTHB: 18000,
    originalPriceTHB: 30000,
    discountPercent: 40,
    validUntil: '2025-03-01',
    coverImage: '/images/promos/bundle-beijing.jpg',
    badge: 'BEST DEAL',
  },
  {
    id: 'promo-flight-zhuhai-1',
    type: 'flight',
    city: 'zhuhai',
    title: {
      th: 'เที่ยวบินกรุงเทพ-จูไห่ ราคาโปร',
      en: 'Bangkok-Zhuhai Promotional Flights',
      zh: '曼谷-珠海促销机票',
    },
    priceTHB: 7500,
    validUntil: '2025-02-28',
    coverImage: '/images/promos/flight-zhuhai.jpg',
  },
  {
    id: 'promo-hotel-shanghai-1',
    type: 'hotel',
    city: 'shanghai',
    title: {
      th: 'โรงแรมติดรถไฟฟ้าเซี่ยงไฮ้',
      en: 'Shanghai Metro-Adjacent Hotel',
      zh: '上海地铁沿线酒店特惠',
    },
    desc: {
      th: 'ใกล้สถานีรถไฟฟ้า สะดวกสบาย',
      en: 'Near metro station, convenient access',
      zh: '紧邻地铁站，交通便利',
    },
    priceTHB: 2500,
    validUntil: '2025-03-15',
    coverImage: '/images/promos/hotel-shanghai.jpg',
  },
]

