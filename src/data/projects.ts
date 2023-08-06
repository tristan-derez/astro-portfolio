export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Bestyol",
    techs: ["typescript", "node.js", "express", "prisma", "zod"],
    link: "https://bestyol.vercel.app/",
  },
  {
    title: "Devfinder",
    techs: ["typescript", "react"],
    link: "https://devfinder-dreyzu.vercel.app/",
  },
];

export default projects;
