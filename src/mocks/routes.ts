import type { RouteItem } from '@/types/route'

export const mockRoutes: RouteItem[] = [
  {
    id: 'shanghai-discovery-2025',
    city: 'shanghai',
    departureCity: {
      th: 'กรุงเทพมหานคร',
      en: 'Bangkok',
      zh: '曼谷',
    },
    title: {
      th: '7 วัน สำรวจเซี่ยงไฮ้ 2025',
      en: '7 Days Shanghai Discovery 2025',
      zh: '7天上海探索之旅 2025',
    },
    subtitle: {
      th: 'สัมผัสวัฒนธรรมจีนและเทคโนโลยีล้ำสมัยในมหานครเซี่ยงไฮ้',
      en: 'Experience Chinese culture and cutting-edge technology in Shanghai',
      zh: '体验上海大都市的中国文化与前沿科技',
    },
    durationDays: 7,
    ageMin: 9,
    ageMax: 18,
    themes: ['Culture', 'STEM', 'AI'],
    nextStartDates: ['2025-03-15', '2025-04-10', '2025-05-05', '2025-06-20'],
    priceTHB: 45000,
    rating: 4.9,
    seatsRemaining: 15,
    coverImage: '/images/routes/shanghai-discovery.jpg',
    gallery: [
      '/images/routes/shanghai-discovery-1.jpg',
      '/images/routes/shanghai-discovery-2.jpg',
      '/images/routes/shanghai-discovery-3.jpg',
    ],
    highlights: [
      'เยี่ยมชม Shanghai Tower และ The Bund',
      'สำรวจพิพิธภัณฑ์วิทยาศาสตร์และเทคโนโลยี',
      'เรียนรู้วัฒนธรรมจีนโบราณที่ Yu Garden',
      'เยี่ยมชมศูนย์วิจัย AI และนวัตกรรม',
      'สัมผัสชีวิตในเมืองสมัยใหม่',
      'ชมการแสดงวัฒนธรรมจีน',
    ],
    includes: [
      'ที่พัก 6 คืน (โรงแรม 4 ดาว)',
      'อาหาร 3 มื้อ/วัน',
      'มัคคุเทศก์และครูผู้สอนมืออาชีพ',
      'ค่าเข้าชมสถานที่ทุกแห่ง',
      'อุปกรณ์การเรียนและ Workshop',
      'ประกันการเดินทาง',
      'รถรับส่งสนามบิน',
    ],
    excludes: ['ตั๋วเครื่องบิน', 'ค่าขอวีซ่า', 'ค่าใช้จ่ายส่วนตัว'],
    flightInfo: {
      airline: 'Spring Airlines (9C)',
      flightNumber: '9C 8576',
      departure: {
        city: {
          th: 'กรุงเทพมหานคร',
          en: 'Bangkok',
          zh: '曼谷',
        },
        airport: 'BKK (Suvarnabhumi Airport)',
        date: '2025-03-15',
        time: '08:30',
      },
      arrival: {
        city: {
          th: 'เซี่ยงไฮ้',
          en: 'Shanghai',
          zh: '上海',
        },
        airport: 'PVG (Shanghai Pudong International Airport)',
        date: '2025-03-15',
        time: '13:45',
      },
    },
    itinerary: [
      {
        day: 1,
        title: {
          th: 'เดินทางถึงเซี่ยงไฮ้และปฐมนิเทศ',
          en: 'Arrival in Shanghai & Orientation',
          zh: '抵达上海，欢迎仪式',
        },
        activities: [
          {
            time: '08:30',
            title: { th: 'ออกเดินทาง', en: 'Departure', zh: '出发' },
            description: {
              th: 'ออกเดินทางจากสนามบินสุวรรณภูมิ (BKK) โดยสายการบิน Spring Airlines เที่ยวบิน 9C 8576',
              en: 'Depart from Suvarnabhumi Airport (BKK) via Spring Airlines Flight 9C 8576',
              zh: '从素万那普机场 (BKK) 出发，乘坐春秋航空 9C 8576 航班',
            },
          },
          {
            time: '13:45',
            title: { th: 'ถึงสนามบิน', en: 'Arrival', zh: '抵达机场' },
            description: {
              th: 'ถึงสนามบินปู่ตง (PVG) รับที่สนามบินและเดินทางสู่โรงแรม',
              en: 'Arrive at Pudong Airport (PVG), airport pickup and transfer to hotel',
              zh: '抵达浦东机场 (PVG)，接机并前往酒店',
            },
          },
          {
            time: '16:00',
            title: { th: 'เช็คอินโรงแรม', en: 'Hotel Check-in', zh: '酒店入住' },
            description: {
              th: 'เช็คอินที่โรงแรม 4 ดาว พักผ่อนและปรับตัว',
              en: 'Check-in at 4-star hotel, rest and adjust',
              zh: '入住四星级酒店，休息调整',
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
          th: 'สำรวจ The Bund และ Yu Garden',
          en: 'Explore The Bund & Yu Garden',
          zh: '探索外滩与豫园',
        },
        activities: [
          {
            time: '09:00',
            title: { th: 'เยี่ยมชม The Bund', en: 'Visit The Bund', zh: '参观外滩' },
            description: {
              th: 'เดินชม The Bund สถาปัตยกรรมยุโรปและวิวแม่น้ำหวงผู่',
              en: 'Walk along The Bund, admire European architecture and Huangpu River view',
              zh: '漫步外滩，欣赏欧式建筑和黄浦江景色',
            },
          },
          {
            time: '14:00',
            title: { th: 'เยี่ยมชม Yu Garden', en: 'Visit Yu Garden', zh: '参观豫园' },
            description: {
              th: 'เรียนรู้ประวัติศาสตร์และสถาปัตยกรรมจีนโบราณที่ Yu Garden',
              en: 'Learn about Chinese history and ancient architecture at Yu Garden',
              zh: '在豫园了解中国历史和古代建筑',
            },
          },
        ],
      },
      {
        day: 3,
        title: {
          th: 'พิพิธภัณฑ์วิทยาศาสตร์และเทคโนโลยี',
          en: 'Science & Technology Museum',
          zh: '科技博物馆',
        },
        activities: [
          {
            time: '09:00',
            title: { th: 'เยี่ยมชมพิพิธภัณฑ์', en: 'Museum Visit', zh: '参观博物馆' },
            description: {
              th: 'สำรวจ Shanghai Science and Technology Museum เรียนรู้เทคโนโลยีล้ำสมัย',
              en: 'Explore Shanghai Science and Technology Museum, learn cutting-edge technology',
              zh: '探索上海科技馆，了解前沿科技',
            },
          },
          {
            time: '14:00',
            title: { th: 'Workshop เทคโนโลยี', en: 'Technology Workshop', zh: '科技工作坊' },
            description: {
              th: 'เข้าร่วม Workshop เกี่ยวกับ AI และหุ่นยนต์',
              en: 'Participate in AI and Robotics workshop',
              zh: '参与 AI 和机器人工作坊',
            },
          },
        ],
      },
      {
        day: 4,
        title: {
          th: 'Shanghai Tower และศูนย์วิจัย AI',
          en: 'Shanghai Tower & AI Research Center',
          zh: '上海中心与 AI 研究中心',
        },
        activities: [
          {
            time: '09:00',
            title: {
              th: 'เยี่ยมชม Shanghai Tower',
              en: 'Visit Shanghai Tower',
              zh: '参观上海中心',
            },
            description: {
              th: 'ขึ้นไปชมวิวจาก Shanghai Tower อาคารสูงที่สุดในจีน',
              en: 'Visit Shanghai Tower, the tallest building in China',
              zh: '参观中国第一高楼上海中心',
            },
          },
          {
            time: '14:00',
            title: { th: 'ศูนย์วิจัย AI', en: 'AI Research Center', zh: 'AI 研究中心' },
            description: {
              th: 'เยี่ยมชมศูนย์วิจัย AI และนวัตกรรม เรียนรู้เทคโนโลยี AI ล่าสุด',
              en: 'Visit AI research center and innovation hub, learn latest AI technology',
              zh: '参观 AI 研究中心和创新中心，了解最新 AI 技术',
            },
          },
        ],
      },
      {
        day: 5,
        title: {
          th: 'วัฒนธรรมจีนและการแสดง',
          en: 'Chinese Culture & Performance',
          zh: '中国文化与表演',
        },
        activities: [
          {
            time: '09:00',
            title: {
              th: 'เรียนรู้วัฒนธรรมจีน',
              en: 'Chinese Culture Learning',
              zh: '学习中国文化',
            },
            description: {
              th: 'เรียนรู้ประเพณีและวัฒนธรรมจีนผ่านกิจกรรมต่างๆ',
              en: 'Learn Chinese traditions and culture through various activities',
              zh: '通过各种活动学习中国传统和文化',
            },
          },
          {
            time: '19:00',
            title: { th: 'ชมการแสดง', en: 'Cultural Performance', zh: '观看文化表演' },
            description: {
              th: 'ชมการแสดงวัฒนธรรมจีนแบบดั้งเดิม',
              en: 'Watch traditional Chinese cultural performance',
              zh: '观看中国传统文艺表演',
            },
          },
        ],
      },
      {
        day: 6,
        title: {
          th: 'อิสระและช้อปปิ้ง',
          en: 'Free Time & Shopping',
          zh: '自由活动与购物',
        },
        activities: [
          {
            time: '10:00',
            title: { th: 'ช้อปปิ้ง', en: 'Shopping', zh: '购物' },
            description: {
              th: 'ช้อปปิ้งที่ Nanjing Road และซื้อของฝาก',
              en: 'Shopping at Nanjing Road and buy souvenirs',
              zh: '在南京路购物，购买纪念品',
            },
          },
          {
            time: '18:00',
            title: { th: 'อาหารเย็นอำลา', en: 'Farewell Dinner', zh: '告别晚宴' },
            description: {
              th: 'รับประทานอาหารเย็นอำลาและสรุปโปรแกรม',
              en: 'Farewell dinner and program summary',
              zh: '告别晚宴，项目总结',
            },
          },
        ],
      },
      {
        day: 7,
        title: {
          th: 'เดินทางกลับ',
          en: 'Departure',
          zh: '返程',
        },
        activities: [
          {
            time: '10:00',
            title: { th: 'เช็คเอาท์', en: 'Check-out', zh: '退房' },
            description: {
              th: 'เช็คเอาท์จากโรงแรมและเดินทางสู่สนามบิน',
              en: 'Check-out from hotel and transfer to airport',
              zh: '酒店退房，前往机场',
            },
          },
          {
            time: '14:30',
            title: { th: 'ออกเดินทาง', en: 'Departure', zh: '出发' },
            description: {
              th: 'ออกเดินทางจากสนามบินปู่ตง (PVG) โดยสายการบิน Spring Airlines เที่ยวบิน 9C 8575',
              en: 'Depart from Pudong Airport (PVG) via Spring Airlines Flight 9C 8575',
              zh: '从浦东机场 (PVG) 出发，乘坐春秋航空 9C 8575 航班',
            },
          },
        ],
      },
    ],
    faq: [
      {
        question: {
          th: 'ต้องมีพื้นฐานภาษาจีนหรือไม่?',
          en: 'Do I need Chinese language skills?',
          zh: '需要中文基础吗？',
        },
        answer: {
          th: 'ไม่จำเป็น เรามีมัคคุเทศก์และครูผู้สอนที่พูดภาษาไทยและอังกฤษ',
          en: 'No, we have guides and instructors who speak Thai and English',
          zh: '不需要，我们有会说泰语和英语的导游和老师',
        },
      },
      {
        question: {
          th: 'ราคารวมตั๋วเครื่องบินหรือไม่?',
          en: 'Is the flight ticket included?',
          zh: '价格包含机票吗？',
        },
        answer: {
          th: 'ไม่รวมตั๋วเครื่องบิน แต่เราสามารถช่วยจัดหาตั๋วเครื่องบินให้ได้',
          en: 'Flight tickets are not included, but we can help arrange them',
          zh: '不包含机票，但我们可以协助安排',
        },
      },
    ],
  },
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
      en: "Explore China's Technology and Innovation Hub",
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
    coverImage: '/images/routes/shanghai-discovery.jpg',
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
    coverImage: '/images/routes/shanghai-discovery.jpg',
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
    coverImage: '/images/routes/shanghai-discovery.jpg',
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
    coverImage: '/images/routes/shanghai-discovery.jpg',
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
