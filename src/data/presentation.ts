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
    "I'm a *french fullstack developer*. I mainly code in *TypeScript*, but I enjoy exploring and cultivating my skills in various programming languages. Current stack is *Node.js*, *Fastify*, & *React*.<br> I like learning new things, reading, watching movies and a lot of others random things",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/tristan-derez/",
    },
    {
      label: "Bento",
      link: "https://bento.me/dreyz",
    },
    {
      label: "GitHub",
      link: "https://github.com/tristan-derez",
    },
  ],
};

export default presentation;
