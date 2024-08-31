import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import pythonicon from "../../assets/icons/python_svg.svg";
import fastapiicon from "../../assets/icons/FastAPI.svg";
import sqlicon from "../../assets/icons/sql_svg.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import project01 from "../../assets/img/project01.png";
import project02 from "../../assets/img/project02.png";
import project03 from "../../assets/img/project03.png";
import profilepicture from "../img/imtiaz_shawn.png";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    bn: "হ্যালো, আমি শাওন",
    en: "Hi, I'm Shawn",
  },
  subtitle: {
    bn: "ফুল স্ট্যাক ডেভেলপার",
    en: "Fullstack Developer"
  },
  description: {
    bn: "আমি ইমতিয়াজ শাওন, একজন ফুলস্ট্যাক ডেভেলপার যার লক্ষ্য আমার ক্যারিয়ারে অগ্রসর হওয়া এবং অনুপ্রেরণামূলক প্রকল্পে অংশগ্রহণ করা। এখানে আমি আমার কাজ এবং ওয়েব ডেভেলপমেন্টের জন্য আমার আবেগ উপস্থাপন করি। আসুন একসাথে ডিজিটাল সমাধানগুলিকে আকার দেই এবং ভবিষ্যতকে আকৃতি দেই!",
    en: "I'm Imtiaz Shawn, a fullstack developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        bn: "যোগাযোগ",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        bn: "আমার প্রজেক্ট",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Druuto.com",
    description:
      "Druuto.com: একটি মনোরম প্রতিক্রিয়া-চালিত PWA খাদ্য অর্ডারে বিপ্লব ঘটাচ্ছে। একটি নিরবচ্ছিন্ন ই-কমার্সের অভিজ্ঞতায় আনন্দিত হও আধুনিক ফ্লেয়ারের সাথে। এই নিমজ্জিত এবং ব্যবহারকারী-বান্ধব ওয়েব অ্যাপ্লিকেশনে আপনার স্বাদ কুঁড়ি উন্নত করুন৷",
    description_EN:
      "Druuto.com: A delectable React-powered PWA revolutionizing food ordering. Delight in a seamless e-commerce experience with a dash of modern flair. Elevate your taste buds in this immersive and user-friendly web application.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: figmaicon },
      { name: "Netlify", icon: netlifyicon },
      { name: "Trello", icon: trelloicon },
    ],
    image: project01,
    deploymenturl: "https://druuto.com/",
    githuburl: "https://github.com/imtiazshawn",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Moon Light Pharmacy",
    description:
      "মুন লাইট ফার্মেসি: কোড সহ একটি স্বাস্থ্যকর আগামীকাল তৈরি করা। এই প্রতিক্রিয়া-চালিত মেডিসিন ই-কমার্স সাইটটি বিকাশ করার জন্য আমার যাত্রায় ডুব দিন। একটি বর্ধিত অনলাইন ফার্মেসির অভিজ্ঞতার জন্য ব্যবহারকারী-বান্ধব ইন্টারফেস, মিশ্রিত প্রযুক্তি এবং স্বাস্থ্যসেবা সহ নির্বিঘ্নে প্রেসক্রিপশন অর্ডার করুন।",
    description_EN:
      "Moon Light Pharmacy: Crafting a healthier tomorrow with code. Dive into my journey developing this React-powered medicine e-commerce site. Seamlessly order prescriptions with a user-friendly interface, blending technology and healthcare for an enhanced online pharmacy experience.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
    ],
    image: project02,
    deploymenturl: "https://www.arogga.com/",
    githuburl:
      "https://github.com/imtiazshawn",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "CareMaster",
    description:
      "CareMaster: কোড দিয়ে লালনপালন। এই কেয়ার ম্যানেজমেন্ট প্রকল্পের সাথে আমার কোডিং যাত্রা শুরু করুন। নির্ভুলতার সাথে ডিজাইন করা এবং প্রতিক্রিয়া দ্বারা চালিত, এটি যত্নের প্রক্রিয়াগুলিকে স্ট্রীমলাইন করে, দক্ষ এবং সহানুভূতিশীল ব্যবস্থাপনা নিশ্চিত করে। স্বাস্থ্যসেবা সমাধানে প্রযুক্তি এবং সহানুভূতির সংমিশ্রণের অভিজ্ঞতা নিন।",
    description_EN:
      "CareMaster: Nurturing with Code. Embark on my coding journey with this Care Management Project. Designed with precision and powered by React, it streamlines care processes, ensuring efficient and compassionate management. Experience the fusion of technology and empathy in healthcare solutions.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "TypeScript", icon: typescripticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Trello", icon: trelloicon },
    ],
    image: project03,
    deploymenturl: "https://www.care-planner.co.uk/",
    githuburl: "https://github.com/imtiazshawn",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    bn: "আরো প্রজেক্ট দেখুন গিটহাবে",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Python",
        hash: "#python",
        icon: pythonicon,
        color: "#049688",
      },
      {
        title: "SQL",
        hash: "#sql",
        icon: sqlicon,
        color: "#00bcf2",
      },
      {
        title: "FastAPI",
        hash: "#fastapi",
        icon: fastapiicon,
        color: "#366f9e",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { bn: "হোম", en: "Home", hash: "#home", icon: GoHome },
  { bn: "দক্ষতা", en: "Skills", hash: "#skills", icon: GoStack },
  { bn: "প্রজেক্টস", en: "Projects", hash: "#projects", icon: GoProject },
  { bn: "আমার সম্পর্কে", en: "About me", hash: "#about-me", icon: GoPerson },
  { bn: "যোগাযোগ", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { bn: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { bn: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:myemail@com",
  text: "myemail@com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/imtiazshawn/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/imtiazshawn",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:imtiazshawn0@com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    bn: '"প্রথমবার ঠিক করাটা মোটেও গুরুত্বপূর্ণ নয়। শেষবার ঠিক করাটা খুবই গুরুত্বপূর্ণ।"',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    bn: '"ওয়েব একটি ক্যানভাসের মত, এবং কোড হল পেইন্ট। আপনার মাস্টারপিস তৈরি করুন."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "আমার সম্পর্কে",
  title_EN: "About me",
  description: "আমার সম্পর্কে কিছু কোড স্নিপেট",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "আমার হৃদয়ের সার্কিট",
      description:
        "যখন আমি ডিজিটাল দুনিয়ায় থাকি না, তখন আমি প্রযুক্তি এবং হার্ডওয়্যারের আকর্ষণীয় জগতে ঘুরে বেড়াই। আমার জন্য, সার্কিট এবং সোল্ডার জয়েন্টগুলি একটি উত্তেজনাপূর্ণ অ্যাডভেঞ্চারের ধাঁধার টুকরোগুলির মতো।",
      icon: hardwareicon,
    },
    {
      title: "জীবনের দ্রুত গলিতে",
      description:
        "কোডিং ছাড়াও, আমি দ্রুত লেনের মধ্যে থাকতে পছন্দ করি - শব্দের সত্য অর্থে। গাড়ি আমার নেশা এবং আমি অজানা রাস্তায় উচ্চ-হর্সপাওয়ার মেশিন চালানো উপভোগ করি।",
      icon: caricon,
    },
    {
      title: "জীবনের মূলমন্ত্র হিসাবে আবিষ্কারের আনন্দ",
      description:
        "একজন ওয়েব ডেভেলপার হিসেবে আমার যাত্রা আমার জীবনের পথের একটি অংশ মাত্র। আমি এই নীতিবাক্যে বাস করি যে অ্যাডভেঞ্চার তখনই শুরু হয় যখন আপনি পরিচিতদের পিছনে ফেলে যান। নতুন জায়গা আবিষ্কার করা আমার সৃজনশীল অনুপ্রেরণার ফর্ম।",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    bn: "যোগাযোগ",
    en: "Contact",
  },
  description: {
    bn: "আমার উদ্দেশ্য কিছু লিখুন, যা আমি রিপ্লাই করবো।",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        bn: "আপনার নাম",
        en: "Your Name",
      },
      type: "text",
      validation: {
        bn: "দয়া করে আপনার নাম লিখুন",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        bn: "আপনার ইমেইল",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        bn: "আপনার ইমেইল পূরণ করুন",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        bn: "বিষয়",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        bn: "আপনার বিষয় লিখুন",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      bn: "আপনার ম্যাসেজ",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      bn: "আপনার ম্যাসেজটি এখানে লিখুন",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      bn: "পাঠান",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      bn: "আমি সম্মত যে, আমার ব্যক্তিগত তথ্য (নাম এবং ই-মেইল ঠিকানা) ব্যবহার করে আমার সাথে যোগাযোগ করতে পারে।",
      en: "I agree that Alpay may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      bn: "এই অনুরোধ জমা দেওয়ার মাধ্যমে, আপনি নিশ্চিত করেন যে আপনি গোপনীয়তা নীতি পড়েছেন",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    bn: "🦄 লাইভ ডেমো শীঘ্রই খোলা হবে. সার্ভার শুরু হচ্ছে...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    bn: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    bn: "🦄 আপনার ইমেইল করার জন্য আপনাকে ধন্যবাদ. আমি যত তাড়াতাড়ি সম্ভব আপনার সাথে যোগাযোগ করব",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    bn: "দয়া করে আপনার নাম লিখুন",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    bn: "BN",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
