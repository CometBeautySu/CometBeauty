import { 
        nail, massage, bridal_makeup, eyebrow,
        main_microblading1, main_microblading2,
        main_microblading3 } from "../images";


export const ServiceData = [
    {
        id: 1,
        title: "婚礼 / 婚纱照",
        detail: "我是一位经验丰富的亚洲风格婚礼化妆师，拥有近100场婚礼跟妆的丰富经验。通过多年的实践，我不仅精通各种化妆技巧，还能够准确地把握不同客户的需求，为他们打造出独特而完美的妆容。同时，我具备应对各种临场情况的能力，无论是天气变化、时间紧迫还是客户需求的突然改变，我都能够迅速做出调整，确保婚礼当天一切顺利进行。快来约试妆吧，一定不会让你失望。",
        // detail: "We excel in Asian-inspired makeup and hairstyling, with a focus on stunning Chinese bridal looks. Our expertise ensures that every bride radiates natural beauty on her special day, embracing traditional elegance with a modern touch. Let us elevate your bridal style with our specialized services.",
        artist: "Susu",
        path: "/makeup",
        label: "MakeUp",
        images: [
            {
                "src": bridal_makeup,
                "alt": "bridal makeup"
            },
            {
                "src": nail,
                "alt": "bridal makeup"
            },
            {
                "src": massage,
                "alt": "bridal makeup"
            },
        ],
        alt: "化妆"
    },
    {
        id: 2,
        title: "个人色彩分析 / 1v1化妆课",
        detail: "根据解决了装扮中色彩的一切难题 知道自己适合的发色 妆容色 服饰 配饰色 学会并运用自己的色彩群 不仅能完美的显现自身独有的品味魅力更能通晓装扮间的色彩关系而节省时间回避浪费 科学掌握形象。适合你的色彩会使你的皮肤变得光泽 透明。",
        // detail: "Learning makeup is about pleasing oneself and becoming more beautiful. The makeup course consists of one-on-one teaching, covering both theoretical knowledge and practical application. It consists of 6 sessions, each lasting 1.5 hours.",
        artist: "Susu",
        path: "/makeup",
        label: "MakeUp",
        images: [
            {
                "src": bridal_makeup,
                "alt": "bridal makeup"
            },
            {
                "src": nail,
                "alt": "bridal makeup"
            },
            {
                "src": massage,
                "alt": "bridal makeup"
            },
        ],
        alt: "beauty"
    },  
    {
        id: 3,
        title: "半永久纹绣",
        detail: "打造全脸幼态自然感定妆 / 温柔风纯手工微针雾眉 / 野生感妈生线条眉 / 灵气有神自然美瞳线",
        artist: "Zoe Su",
        path: "/microblading",
        label: "Facial",
        // image: eyebrow,
        images: [
            {
                "src": main_microblading2,
                "alt": "bridal makeup"
            },
            {
                "src": main_microblading1,
                "alt": "bridal makeup"
            },
            {
                "src": main_microblading3,
                "alt": "bridal makeup"
            },
        ],
        alt: "美容"
    },
    {
        id: 4,
        title: "美甲 / 美睫",
        // title: "Nail / Eyelash Extension",
        // detail: "Explore glamour in our Beauty Series, featuring expert services in nail art and stunning eyelash enhancements.",
        detail: "我们店铺提供专业的日式美甲美睫服务，以独特的技术和精湛的手艺著称。日式美甲美睫注重细节和精致，我们的技师经过专业培训，精通各种日式美甲美睫技术，能够根据客户的需求和个人风格，为他们打造出符合亚洲审美标准的完美作品。我们采用高品质的材料和工具，保证服务过程安全舒适，并且注重卫生和环保。无论是日式简约风还是华丽繁复风，我们都能满足客户的需求，让他们在享受美甲美睫服务的同时感受到专业技术带来的优质体验。",
        artist: "Susu",
        path: "/makeup",
        label: "Facial",
        // image: nail,
        images: [
            {
                "src": bridal_makeup,
                "alt": "bridal makeup"
            },
            {
                "src": nail,
                "alt": "bridal makeup"
            },
            {
                "src": massage,
                "alt": "bridal makeup"
            },
        ],
        alt: "beauty"
    },    
    {
        id: 5,
        title: "SPA",
        detail: "作为一位经验丰富的中式按摩师，我擅长深处肌肉按摩，通过专业技巧和精准力度，能够有效缓解客户的肌肉紧张和疼痛。在过去的20年里，我不断精进技艺，致力于为客户提供高质量的按摩服务。我的深处肌肉按摩能够深入到肌肉组织内部，舒缓疲劳，促进血液循环，帮助客户放松身心，恢复活力。如果您需要一种能够真正解决肌肉问题的按摩，我会是您的最佳选择。",
        artist: "Lifang Su",
        path: "/makeup",
        label: "Body",
        // image: massage,
        images: [
            {
                "src": bridal_makeup,
                "alt": "bridal makeup"
            },
            {
                "src": nail,
                "alt": "bridal makeup"
            },
            {
                "src": massage,
                "alt": "bridal makeup"
            },
        ],
        alt: "美体"
    },
];

export const SusuServiceData = [
    // {
    //     title: 
    // },
];

export const ZoeServiceData = [
    {
        id: 1,
        title: "轻奢氧气雾眉",
        description: "打造出渐变层次感，像眉粉扫过的感觉，呈雾状，朦胧感。",
        img: main_microblading1,
        alt: "轻奢氧气雾眉",
        way: "点刺手法，以点成面",
        fit: "所有人",
        maintenance: "因人而异, 3-4 年",
    },
    {
        id: 2,
        title: "丝雾眉",
        description: "通过一根根仿真毛发结合空隙处雾化的填充达到灵动立体的效果，丝➕雾的结合达到妆感又毛流感",
        img: main_microblading2,
        alt: "丝雾眉",
        way: "点刺➕画线手法，层次感十足。",
        fit: "原生眉基础比较稀疏，毛发少",
        maintenance: "因人而异, 3-4 年",
    },
    {
        id: 3,
        title: "美瞳线",
        description: "增加睫毛密度，睁眼有神，闭眼无痕，自然的有氧妆感，放大双眼。",
        img: main_microblading3,
        alt: "美瞳线",
        way: "只在睫毛根部",
        fit: "所有人",
        maintenance: "因人而异, 3-4 年",
    },
];
