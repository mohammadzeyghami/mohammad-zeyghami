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
} from "./public/projects";

export const menuItems: string[] = ["Hero"];
export const HeroDescription: string =
  "Hello, my name is Mohammad Zaighmi, I am 23 years old, I am a front end developer with a more than +3 years of experience.";

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
  { image: Metaversus1, Metaversus2, Metaversus3, name: "Metaversus Landing" },
  { image: Ecommerce1, Ecommerce2, Ecommerce3, Ecommerce4, name: "Ecommerce" },
  {
    image: Dashboard1,
    Dashboard2,
    Dashboard3,
    Dashboard4,
    Dashboard5,
    name: "Dashboard Admin",
  },
  { image: youtube1, youtube2, name: "Youtube Clone" },
  {
    image: modernportfolio1,
    modernportfolio2,
    modernportfolio3,
    modernportfolio4,
    name: "Modern Portfolio",
  },
];
