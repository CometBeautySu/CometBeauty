import { susu, zoe, qrCode } from "../images";


export const InfoData = {
  heading: "Susu",
  paragraphOne: "Makeup Artist",
  paragraphTwo: "My name is Susu and I'm a licensed makeup artist & esthetician. I specialize in bridal and special events makeup in the Rochester, NY area and I absolutely love this little corner of the world!",
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
  delay: 100
}

export const InfoDataTwo = {
  heading: "Lifang Su",
  paragraphOne: "Traditional Chinese Medicine Meridian Therapist",
  paragraphTwo: "Harmonizing energy flow, a skilled Traditional Chinese Medicine Meridian Therapist fosters holistic wellness through ancient techniques.",
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
  delay: 300
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
  delay: 300
}