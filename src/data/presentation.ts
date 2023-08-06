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
  title: "Hi, I’m Tristan 👋",
  // profile: "/profile.webp",
  description:
    "Hello, i'm a *french fullstack developer* working for *SNCF* Voyageurs - TER Pays de la Loire. I like learning new things. Current stack is *Node.js*, *Express*, & *React*. I like reading, watching movies and a lot of others random things",
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
