export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a mobile app for parking slot reservation",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "School Management System",
    des: "A comprehensive school management system built with C#, designed to streamline administrative tasks such as student enrollment, course management, grade management, and more.",
    img: "/pr1.png",
    iconLists: ["/csharp.svg", "/pgsql.svg", "/fm.svg"],
    link: "https://github.com/George-Acquah/School_Management_System",
  },
  {
    id: 2,
    title: "Smart car Parking - Admin",
    des: "An advanced admin dashboard for managing parking systems. This application provides real-time insights into parking availability, user management, and payment processing, making parking management efficient and seamless.",
    img: "/pr2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://admin-scp.vercel.app/auth/login",
  },
  // {
  //   id: 3,
  //   title: "AI Image SaaS - Canva Application",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "/ui.aiimg.com",
  // },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

export const testimonials = [
  {
    quote:
      "Collaborating with George was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. George's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, George is the ideal partner.",
    name: "Charles Asiedu",
    title: "Colleaque, UMaT",
  },
  {
    quote:
      "Collaborating with George was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. George's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, George is the ideal partner.",
    name: "Charles Asiedu",
    title: "Colleaque, UMaT",
  },
  {
    quote:
      "Collaborating with George was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. George's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, George is the ideal partner.",
    name: "Charles Asiedu",
    title: "Colleaque, UMaT",
  },
  {
    quote:
      "Collaborating with George was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. George's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, George is the ideal partner.",
    name: "Charles Asiedu",
    title: "Colleaque, UMaT",
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
    id: 2,
    title: "Mobile App Dev - Smart-Parking",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Worked with some colleaques at the University of Mines and Technology to develop a mobile app.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 1,
    title: "Science & ICT Teacher",
    desc: "Educated students in Science and Information & Communication Technology (ICT), fostering a passion for technology and critical thinking.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },

  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
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
