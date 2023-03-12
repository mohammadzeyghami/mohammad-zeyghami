import {
  javascript,
  typescript,
  html,
  css,
  react,
  redux,
  tailwind,
  git,
  nextjs,
  bootstrap,
  rapid,
  sanity,
} from "./public/tech/index";
import {
  Ecommerce1,
  Ecommerce2,
  Ecommerce3,
  Ecommerce4,
  Metaversus1,
  Metaversus2,
  Metaversus3,
  Dashboard1,
  Dashboard2,
  Dashboard3,
  Dashboard4,
  Dashboard5,
  youtube1,
  youtube2,
  modernportfolio1,
  modernportfolio2,
  modernportfolio3,
  modernportfolio4,
  modernportfolio5,
} from "./public/projects";

export const menuItems: string[] = ["Hero"];
export const HeroDescription: string =
  "Hello, my name is Mohammad Zeyghmi, I am 23 years old, I am a frontend developer with a more than +3 years of experience.";

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "bootstarp",
    icon: bootstrap,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "next",
    icon: nextjs,
  },
  {
    name: "rapidapi",
    icon: rapid,
  },

  {
    name: "sanity",
    icon: sanity,
  },
];

export const projects = [
  {
    image: [Metaversus1, Metaversus2, Metaversus3],
    name: "Metaversus Landing",
    Description: "Modern Next 13 Website With Framer Motion & Tailwind CSS",
    Address: "https://modern-nextsite.vercel.app/",
    Github: "https://github.com/mohammadzeyghami/modern-nextsite",
  },
  {
    image: [Ecommerce1, Ecommerce2, Ecommerce3, Ecommerce4],
    name: "Ecommerce",
    Description:
      "this e-commerce application will include modern design and animations, the ability to add and edit products on the go using a Sanity, all advanced cart, and checkout functionalities, and most importantly, the complete integration with Stripe so that you can cover real payments.",
    Address: "https://ecommerce-stripe-gamma.vercel.app/",
    Github: "https://github.com/mohammadzeyghami/ecommerce-tailwindcss",
  },
  {
    image: [Dashboard1, Dashboard2, Dashboard3, Dashboard4, Dashboard5],
    name: "Dashboard Admin",
    Description:
      "this is a dashboard admin web site with react and mui 5  darkmode and ...",
    Address: "https://mz-admin-dashboard-mui.netlify.app/",
    Github: "https://github.com/mohammadzeyghami/admin-dashboard",
  },
  {
    image: [youtube1, youtube2],
    name: "Youtube Clone",
    Description:
      "a responsive React JS application consisting of stunning video sections, custom categories, channel pages, and, most importantly, you can play videos straight from your  Clone App",
    Address: "https://github.com/mohammadzeyghami/youtube",
    Github: "https://zeyghami-youtube.netlify.app",
  },
  {
    image: [
      modernportfolio1,
      modernportfolio2,
      modernportfolio3,
      modernportfolio4,
      modernportfolio5,
    ],
    name: "Modern Portfolio",
    Description:
      "in this websites use 3D graphics and animations to bring their content to life.  ",
    Address: "https://github.com/mohammadzeyghami/zeyghami-portfolio",
    Github: "https://mz-3dportfolio.netlify.app/",
  },
];
