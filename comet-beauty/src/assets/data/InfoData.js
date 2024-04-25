import { susu, zoe, qrCode } from "../images";


export const InfoData = {
  heading: "Susu",
  paragraphOne: "化妆师",
  paragraphTwo: "12届北京毛戈平形象造型学校毕业, 进修于北京东田造型设计班, 拥有专业大型T台后场化妆经验, 已有近100场婚礼跟妆经验, 专业日式美甲美睫师, 在西雅图婚礼跟妆已有8年时间。",
  contactInfo: [
    {
      id: 1,
      "contact": "WX: susuwx",
    },
    {
      id: 2,
      "contact": "INS: susuins",
    },
    {
      id: 3,
      "contact": "XHS: susuxhs",
    },
    // {
    //   id: 4,
    //   qrCode: qrCode,
    // }
  ],
  // contactInfo: [{
  //   id: 1,
  //   wx: 'susuweixin',
  //   ins: 'susuins',
  //   xhs: 'susuhongshu',
  // }],
  buttonLabel: "View more",
  path: "/services/makeup",
  image: susu,
  reverse: true, // image on the left or right
  delay: 100,
  services: [
    {
      id: 1,
      title: '化妆课',
      path: '/makeup'
    },
    {
      id: 2,
      title: '新娘妆发',
      path: '/makeup'
    }, 
    {
      id: 3,
      title: '美甲 / 美睫',
      path: '/makeup'
    }
  ]
}

export const InfoDataTwo = {
  heading: "Lifang Su",
  paragraphOne: "专业按摩师",
  paragraphTwo: "20年经验。擅长肌肉深组织按摩和热石按摩，以及中式艾灸疗法, 重点关注客户健康，致力于提供舒缓疲劳、促进血液循环的按摩治疗。",
  contactInfo: [
    {
      id: 1,
      "contact": "WX: susuwx",
    },
    {
      id: 2,
      "contact": "INS: susuins",
    },
    {
      id: 3,
      "contact": "XHS: susuxhs",
    },
    // {
    //   id: 4,
    //   qrCode: qrCode,
    // }
  ],
  buttonLabel: "View more",
  path: "",
  image: susu,
  reverse: false, // image on the left or right
  delay: 300,
  services: [
    {
      id: 1,
      title: '美体 / SPA',
      path: '/makeup'
    }
  ]
}

export const InfoDataThree = {
  heading: "Zoe Su",
  paragraphOne: "半永久纹绣师",
  paragraphTwo: "近十年工作经验，真诚、耐心、严谨、用作品说话，不断提升自我审美、技术创新、接轨时代整体风格面部塑形。半永久项目为你量身定制，好的纹绣就像是五官自带的，极度舒适，比画的还要自然，从而打造出伪素颜妆容。",
  paragraphThree: ['韩国IFBC国际美容文化家联合会', '首席面容设计师', '韩国IFBEA美业联合会 半永久纹绣师', '韩国半永久高级纹绣师', '色彩学定妆师', '全球医学纹绣机构', '中国首尔半永久教育培训机构', '韩国好运美美容机构'],
  contactInfo: [
    {
      id: 1,
      "contact": "WX: susuwx",
    },
    {
      id: 2,
      "contact": "INS: susuins",
    },
    {
      id: 3,
      "contact": "XHS: susuxhs",
    },
    // {
    //   id: 4,
    //   qrCode: qrCode,
    // }
  ],
  buttonLabel: "View more",
  path: "/services/microblading",
  image: zoe,
  reverse: true, // image on the left or right
  delay: 300,
  services: [
    {
      id: 1,
      title: '纹绣',
      path: '/microblading'
    }
  ]
}