export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-7 lg:row-span-8 lg:min-h-[60vh] row-span-4 sm:row-span-3",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    // img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAU3e5xiEUmtCmtK48BMmOPEI1rzKgg7uDqQ&s",
    img: "https://res.cloudinary.com/dwxhfdats/image/upload/v1733728256/propb3wfqf81k1nwt0jy.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-4 md:col-span-3 md:row-span-7 row-span-4 sm:row-span-2 lg:row-span-6",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 sm:row-span-1 lg:row-span-2 row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 sm:row-span-1 lg:row-span-2 row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Sickomode.",
    des: `Sickomode is a social media platform designed to optimize connectivity and engagement through
    advanced real-time communication tools and interactive features. It offers real-time chat, video calls and
    secure access control, ensuring seamless interaction and data security for its users`,
    img: "https://res.cloudinary.com/dwxhfdats/image/upload/v1733828752/j4ke6on0twulxwfuxkos.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://sickomode.vercel.app/",
  },
  {
    id: 2,
    title: "Ozorawatches",
    des: `The Ozora Watches is an E-Commerce web application designed to deliver a seamless shopping
    experience for premium watches. It offers user-friendly navigation, a comprehensive product catalog, and
    secure payment options, all aimed at simplifying the online shopping process for high-quality watches.`,
    img: "https://res.cloudinary.com/dwxhfdats/image/upload/v1733828779/hc4cywpi50ngwlhmtzm5.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://ozorawatches.store/",
  },
  {
    id: 3,
    title: "Password Generator",
    des: `A robust password generator application using React.js.
    Allows users to securely sign in using their Google accounts.
    Generates passwords with customizable strength, from easy to strong.
    Users can easily copy generated passwords to the clipboard with a single click.
    Securely stores generated passwords in Firestore for easy access and retrieval`,
    img: "https://res.cloudinary.com/dwxhfdats/image/upload/v1733828826/q9toyzksybh9xbzwqcl3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/naveenmp1111/Password-Generator",
  },
  {
    id: 4,
    title: "Netflix",
    des: `A Netflix clone application developed using React.js. Integrated the TMDB API for content fetching and updates.
    Users can see the recent movies.
    Users can watch the trailers.
    `,
    img: "https://res.cloudinary.com/dwxhfdats/image/upload/v1733828861/doy6hzf0jy55ukmxpone.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/naveenmp1111/Netflix-Clone",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
