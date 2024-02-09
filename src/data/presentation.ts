type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "tristan.derez@gmail.com",
  title: "Hi, I'm Tristan 👋",
  // profile: "/profile.webp",
  description:
    "a *french fullstack developer*. I mainly code in *TypeScript*, but I enjoy coding in Python, Go and c#. Most of the time, I use react for the frontend and node.js with adonis or hono for the backend. <br> I like learning new things, reading, watching movies and a lot of others random things",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/tristan-derez/",
    },
    {
      label: "GitHub",
      link: "https://github.com/tristan-derez",
    },
  ],
};

export default presentation;
