import type { RouteItem } from '@/types/route'

export const mockRoutes: RouteItem[] = [
  {
    id: 'shanghai-ai-stem',
    city: 'shanghai',
    title: {
      th: 'ค่าย AI และนวัตกรรมเซี่ยงไฮ้',
      en: 'Shanghai AI Innovation Camp',
      zh: '上海 · AI 科创实验营',
    },
    subtitle: {
      th: 'สำรวจศูนย์กลางเทคโนโลยีและนวัตกรรมของจีน',
      en: 'Explore China\'s Technology and Innovation Hub',
      zh: '探索中国科技创新中心',
    },
    durationDays: 5,
    ageMin: 10,
    ageMax: 18,
    themes: ['STEM', 'AI'],
    nextStartDates: ['2024-12-15', '2025-01-10', '2025-02-05'],
    priceTHB: 32000,
    rating: 4.9,
    seatsRemaining: 8,
    coverImage: '/images/routes/shanghai-ai.jpg',
    gallery: [
      '/images/routes/shanghai-ai-1.jpg',
      '/images/routes/shanghai-ai-2.jpg',
      '/images/routes/shanghai-ai-3.jpg',
    ],
    highlights: [
      'เยี่ยมชมห้องปฏิบัติการ AI ชั้นนำ',
      'ฝึกปฏิบัติการเขียนโปรแกรม Python และ Machine Learning',
      'ศึกษาดูงานบริษัทเทคโนโลยีระดับโลก',
      'สร้างโปรเจกต์ AI ของตัวเอง',
      'เยี่ยมชม Shanghai Tower และพิพิธภัณฑ์วิทยาศาสตร์',
    ],
    includes: [
      'ที่พัก 4 คืน (โรงแรม 4 ดาว)',
      'อาหาร 3 มื้อ/วัน',
      'มัคคุเทศก์และครูผู้สอนมืออาชีพ',
      'ค่าเข้าชมสถานที่ทุกแห่ง',
      'อุปกรณ์การเรียนและ Workshop',
      'ประกันการเดินทาง',
    ],
    excludes: ['ตั๋วเครื่องบิน', 'ค่าขอวีซ่า', 'ค่าใช้จ่ายส่วนตัว'],
    itinerary: [
      {
        day: 1,
        title: {
          th: 'มาถึงเซี่ยงไฮ้และปฐมนิเทศ',
          en: 'Arrival in Shanghai & Orientation',
          zh: '抵达上海，欢迎仪式',
        },
        activities: [
          {
            time: '14:00',
            title: { th: 'รับที่สนามบิน', en: 'Airport Pickup', zh: '机场接机' },
            description: {
              th: 'รับจากสนามบินพุ่งตง เดินทางสู่โรงแรม',
              en: 'Pickup from Pudong Airport, transfer to hotel',
              zh: '浦东机场接机，前往酒店',
            },
          },
          {
            time: '16:00',
            title: { th: 'เช็คอิน', en: 'Check-in', zh: '酒店入住' },
            description: {
              th: 'เช็คอินที่โรงแรมและพักผ่อน',
              en: 'Hotel check-in and rest',
              zh: '办理入住手续，休息调整',
            },
          },
          {
            time: '18:00',
            title: { th: 'งานต้อนรับ', en: 'Welcome Dinner', zh: '欢迎晚宴' },
            description: {
              th: 'รับประทานอาหารเย็นต้อนรับและปฐมนิเทศโปรแกรม',
              en: 'Welcome dinner and program orientation',
              zh: '欢迎晚宴，项目介绍',
            },
          },
        ],
      },
      {
        day: 2,
        title: {
          th: 'ห้องปฏิบัติการ AI และ Machine Learning',
          en: 'AI Lab & Machine Learning',
          zh: 'AI 实验室与机器学习',
        },
        activities: [
          {
            time: '09:00',
            title: {
              th: 'Workshop AI พื้นฐาน',
              en: 'AI Fundamentals Workshop',
              zh: 'AI 基础研讨会',
            },
            description: {
              th: 'เรียนรู้พื้นฐานของ AI และ Machine Learning',
              en: 'Learn AI and Machine Learning fundamentals',
              zh: '学习 AI 和机器学习基础知识',
            },
          },
          {
            time: '14:00',
            title: {
              th: 'ฝึกปฏิบัติ Python',
              en: 'Python Programming Lab',
              zh: 'Python 编程实验',
            },
            description: {
              th: 'ฝึกเขียนโค้ด Python สำหรับ AI',
              en: 'Hands-on Python coding for AI',
              zh: '动手实践 Python AI 编程',
            },
          },
        ],
      },
    ],
    faq: [
      {
        question: {
          th: 'ต้องมีพื้นฐานการเขียนโปรแกรมหรือไม่?',
          en: 'Do I need programming experience?',
          zh: '需要编程基础吗？',
        },
        answer: {
          th: 'ไม่จำเป็น เราจะสอนตั้งแต่พื้นฐาน',
          en: 'No, we teach from basics',
          zh: '不需要，我们从基础开始教学',
        },
      },
    ],
  },
  {
    id: 'guangzhou-robotics-culture',
    city: 'guangzhou',
    title: {
      th: 'หุ่นยนต์และวัฒนธรรมกว่างโจว',
      en: 'Guangzhou Robotics & Culture',
      zh: '广州 · 机器人与岭南文化探访',
    },
    subtitle: {
      th: 'ผสมผสานเทคโนโลยีหุ่นยนต์และมรดกวัฒนธรรมกวางตุ้ง',
      en: 'Blend of Robotics Technology and Cantonese Heritage',
      zh: '科技与岭南传统文化完美结合',
    },
    durationDays: 4,
    ageMin: 7,
    ageMax: 15,
    themes: ['STEM', 'Culture'],
    nextStartDates: ['2024-12-20', '2025-01-15', '2025-02-10'],
    priceTHB: 28000,
    rating: 4.7,
    seatsRemaining: 12,
    coverImage: '/images/routes/guangzhou-robot.jpg',
    highlights: [
      'สร้างหุ่นยนต์ของตัวเอง',
      'เรียนรู้วัฒนธรรมกวางตุ้ง',
      'ชมโชว์ Canton Tower',
      'ลิ้มรสอาหารติ่มซำแท้',
    ],
    includes: [
      'ที่พัก 3 คืน',
      'อาหาร 3 มื้อ/วัน',
      'มัคคุเทศก์',
      'ค่าเข้าชมสถานที่',
      'อุปกรณ์ Workshop',
    ],
    excludes: ['ตั๋วเครื่องบิน', 'วีซ่า', 'ค่าใช้จ่ายส่วนตัว'],
  },
  {
    id: 'beijing-history-ai',
    city: 'beijing',
    title: {
      th: 'ประวัติศาสตร์และ AI ปักกิ่ง',
      en: 'Beijing History & AI Experience',
      zh: '北京 · 历史博物馆 × 人工智能体验',
    },
    subtitle: {
      th: 'สัมผัสอารยธรรมจีนโบราณและเทคโนโลยีอนาคต',
      en: 'Experience Ancient Chinese Civilization and Future Technology',
      zh: '感受古代文明与未来科技的碰撞',
    },
    durationDays: 6,
    ageMin: 8,
    ageMax: 18,
    themes: ['History', 'AI'],
    nextStartDates: ['2024-12-10', '2025-01-08', '2025-02-15'],
    priceTHB: 35000,
    rating: 4.8,
    seatsRemaining: 6,
    coverImage: '/images/routes/beijing-history.jpg',
    highlights: [
      'เที่ยวกำแพงเมืองจีน',
      'พระราชวังต้องห้าม',
      'ศูนย์วิจัย AI แห่งชาติ',
      'วัดสวรรค์และสวนกลางฤดูร้อน',
    ],
    includes: [
      'ที่พัก 5 คืน (โรงแรม 4 ดาว)',
      'อาหาร 3 มื้อ/วัน',
      'มัคคุเทศก์',
      'ค่าเข้าชม',
      'ประกัน',
    ],
    excludes: ['ตั๋วเครื่องบิน', 'วีซ่า', 'ค่าใช้จ่ายส่วนตัว'],
  },
  {
    id: 'zhuhai-aerospace',
    city: 'zhuhai',
    title: {
      th: 'การบินและอวกาศจูไห่',
      en: 'Zhuhai Aerospace & Aviation',
      zh: '珠海 · 航空航天与海洋科普',
    },
    subtitle: {
      th: 'สำรวจเทคโนโลยีการบินและมหาสมุทร',
      en: 'Explore Aviation and Ocean Technology',
      zh: '探索航空航天与海洋科技的奥秘',
    },
    durationDays: 4,
    ageMin: 9,
    ageMax: 16,
    themes: ['Aerospace', 'STEM'],
    nextStartDates: ['2024-12-18', '2025-01-12', '2025-02-08'],
    priceTHB: 30000,
    rating: 4.6,
    seatsRemaining: 10,
    coverImage: '/images/routes/zhuhai-aerospace.jpg',
    highlights: [
      'Zhuhai Airshow Museum',
      'เครื่องจำลองการบิน',
      'พิพิธภัณฑ์สมุทรศาสตร์',
      'โครงการจรวดขนาดเล็ก',
    ],
    includes: ['ที่พัก 3 คืน', 'อาหาร 3 มื้อ/วัน', 'มัคคุเทศก์', 'ค่าเข้าชม', 'ประกัน'],
    excludes: ['ตั๋วเครื่องบิน', 'วีซ่า', 'ค่าใช้จ่ายส่วนตัว'],
  },
]

