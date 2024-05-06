import { 
        nail, massage, bridal_makeup, eyebrow,
        main_microblading1, main_microblading2,
        main_microblading3 } from "../images";


export const ServiceData = [
    {
        id: 1,
        title: "婚礼 / 婚纱照",
        detail: "经验丰富的婚礼化妆师，精通多种化妆技巧，擅长迅速应对各种突发情况。能准确把握客户需求，为每位新娘打造独特完美妆容。",
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
        detail: "运用色彩群掌握适合自己的发色、妆容、服饰色，提升个人魅力，节省时间，避免浪费。科学使用色彩，让肤色更加光泽透明。",
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
        detail: "提供专业日式美甲美睫服务，技师精通细致精湛的技艺，根据个人风格定制，使用高品质材料，确保安全舒适。",
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
        detail: "经验丰富的中式按摩师，擅长深层肌肉按摩，有效缓解疼痛，促进血液循环，帮助肌肉放松恢复活力。",
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
