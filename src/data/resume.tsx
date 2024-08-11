import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "SumFei SeeToh",
  initials: "SF",
  url: "https://dillion.io",
  location: "Singapore",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I am a Software Engineer. I love building things and meeting people.",
  // summary:
  //   "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  summary:
    "As a Software Engineering, I developed a [full-stack web application using .NET, JavaScript, and PostgreSQL](/#education) that streamlined examination processes by reducing grading time by 90%. I also enhanced pose-estimation models for detecting abandoned objects, improving efficiency by 300% and accuracy by 40%. My experience extends to creating dynamic platforms and participating in hackathons, demonstrating my ability to innovate under pressure. My technical skills and proven track record in delivering efficient, impactful software solutions make me a valuable asset in any software engineering role.",
  avatarUrl: "/me.jpg",
  skills: [
    "Java",
    "C++",
    "C#",
    "Python",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Go",
    "PostgreSQL",
    "MongoDB",
    "React",
    "Next.js",
    "Node.js",
    "Spring",
    ".Net",
    "Django",
    "FastAPI",
    "Gin",
    "Material-UI",
    "Docker",
    "Kubernetes",
    "Git",
    "AWS",
    "GCP",
    "Kafka",
    "Pytorch",
    "Pandas",
    "YOLO",
    "Llama"
],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "sumfeis3@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/iJoyRide",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sum-fei-see-toh-2bb713153/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      Email: {
        name: "Send Email",
        url: "mailto:sumfeis3@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Cynapse AI",
      href: "https://www.cynapse.ai/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/cy.jpg",
      start: "Mar 2024",
      end: "Jul 2024",
      description:(
        <>
          Developed a full-stack web application using .NET, JavaScript, and PostgreSQL for an institutional examination portal.
          This platform includes a teacher dashboard for setting questions, assigning exams, and monitoring student performance.
          <br />
          <br />
          Developed a REST API using FastAPI to manage and store image file paths for efficient post-processing and grading with
          the YOLOv8 object detection model, serving a cohort of approximately 200 students.
          <br />
          <br />
          Migrated company’s portal to ReactJS and Typescript for front end development and .NET8 and C# for backend development.
        </>
      ),
    },
    {
      company: "Cynapse AI",
      href: "https://www.cynapse.ai/",
      badges: [],
      location: "Remote",
      title: "AI Software Engineer",
      logoUrl: "/cy.jpg",
      start: "Aug 2023",
      end: "Mar 2024",
      description:(
        <>
          Trained and deployed the YOLOv8 pose-estimation model in Docker, improving training efficiency by 300% and accuracy by 40%. 
          Successfully detected abandoned or suspicious objects in shopping malls and public transport.
        </>
      ),
    },
    {
      company: "TUV SUD",
      href: "https://www.tuvsud.com/en-sg",
      badges: [],
      location: "Remote",
      title: "Machine Learning Engineer",
      logoUrl: "/ts.png",
      start: "Jun 2022",
      end: "Nov 2022",
      description:(
        <>
          Trained YOLOv5 object detection model to detect defects on commercial building facades using a DJI M600 drone while masking all sensitive objects during inspection.
        </>
      ),
    },
  ],
  education: [
    {
      school: "Singapore Institute of Technology",
      href: "https://www.singaporetech.edu.sg/",
      degree: "BEng with Honours in Aerospace Engineering",
      logoUrl: "/sit.png",
      start: "2021",
      end: "2024",
    },
    {
      school: "Singapore Polytechnic",
      href: "https://www.sp.edu.sg/",
      degree: "Diploma in Electrical Electronic Engineering",
      logoUrl: "/sp.jpg",
      start: "2016",
      end: "2019",
    },
  ],
  projects: [
    // {
    //   title: "Chat Collect",
    //   href: "https://chatcollect.com",
    //   dates: "Jan 2024 - Feb 2024",
    //   active: true,
    //   description:
    //     "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://chatcollect.com",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    // },
    // {
    //   title: "Magic UI",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Designed, developed and sold animated UI components for developers.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://magicui.design",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
    // {
    //   title: "llm.report",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
  hackathons: [
    {
      title: "AngelHack 2024 - Singapore",
      dates: "June 25th - 26th, 2024",
      location: "Singapore",
      description:
        "Crafted a concept to encourage DBS users to actively plan for retirement, offering them the option to use either a straightforward form or an AI-powered chatbot for detailed planning. Our app is aimed towards individuals gearing up for retirement, especially targeting a younger demographic keen on planning early.",
      image:
        "/ah.jpg",
      win: "1st Place Winner",
      // links: [
      //   {
      //     title: "Article",
      //     icon: <Icons.globe className="h-4 w-4" />,
      //     href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
      //   },
      //   {
      //     title: "Source",
      //     icon: <Icons.github className="h-4 w-4" />,
      //     href: "https://github.com/TinySamosas/",
      //   },
      // ],
    },
    {
      title: "HackOMania 2024 - Singapore",
      dates: "July 6th - 7th, 2024",
      location: "Singapore",
      description:
        "Developed a web scraping extension powered by big data to shield online users from malicious websites.",
      image:
        "/hacko.png",
      win: "1st Place Winner",
    },
  ],
} as const;
