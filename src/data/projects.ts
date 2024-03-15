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
    link: "projects-details/bestyol",
  },
  {
    title: "Devfinder",
    techs: ["typescript", "react", "axios", "zustand"],
    link: "projects-details/devfinder",
  },
  {
    title: "Static site generator",
    techs: ["python", "md", "html"],
    link: "projects-details/static-site-generator",
  },
];

export default projects;
