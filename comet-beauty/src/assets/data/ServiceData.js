import { 
        nail, massage, bridal_makeup, eyebrow,
        main_microblading1, main_microblading2,
        main_microblading3 } from "../images";


export const ServiceData = [
    {
        id: 1,
        title: "新娘妆发 / 写真妆发",
        detail: "我们擅长亚洲风格的化妆和发型设计，专注于令人惊叹的中式新娘造型。 我们的专业知识确保每位新娘在特殊的日子里散发出自然之美，将传统优雅与现代风格融为一体。 让我们通过专业服务提升您的新娘风格。",
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
        title: "色彩 / 化妆课",
        detail: "学习化妆是为了取悦自己，让自己变得更美丽。 化妆课程采用一对一教学，涵盖理论知识和实际应用。",
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
        detail: "亚洲式睫毛嫁接是一种注重实现自然妆效的方法，使用更细的睫毛材料，为眼睛打造自然美感。",
        artist: "Susu",
        path: "/nail&eyelash",
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
        title: "Meridians Therapy / Hair Removal",
        detail: "Revitalize with meridian clearing. Achieve smooth skin with effective hair removal.",
        artist: "Lifang Su",
        path: "/spa",
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
