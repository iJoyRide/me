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
    "As a software engineer, I specialise in developing high-impact solutions that boost efficiency and drive innovation. During my internship, I created a [full-stack web application using .NET, JavaScript, FastAPI and PostgreSQL, which streamlined examination workflows and cut grading time by 90%.](#work) On top of web development, I also gained first-hand experience with  [optimized pose-estimation models for detecting abandoned objects, leading to a 300% increase in efficiency and a 40% improvement in accuracy.](#work) My experience extends to building dynamic platforms and leading engineering projects, including enhancing products like the [Smart Camera Trap, designed with Raspberry Pi 5 and YOLO to process and capture images of only animals locally. The images are scheduled with CronJob to execute shellscript to upload to Google Drive for data back up.](#work) With a strong technical background and a commitment to delivering measurable results, I am dedicated to developing solutions that make a real difference.",
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
    "React",
    "Next.js",
    "MySQL",
    "PostgreSQL",
    "Pocketbase",
    "MongoDB",
    "Spring",
    ".Net",
    "Django",
    "FastAPI",
    "Gin",
    "Material-UI",
    "Docker",
    "Git",
    "Azure",
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
      company: "CTC Global Pte Ltd",
      href: "https://www.ctc-g.com.sg",
      badges: [],
      location: "Remote",
      title: "Technical Associate, Artificial Intelligence",
      logoUrl: "/ctc.jpg",
      start: "Nov 2024",
      end: "-",
      description: "Training and developing company chatbot using Llama 3",
    },
    {
      company: "Cynapse AI",
      href: "https://www.cynapse.ai/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/cy.jpg",
      start: "Mar 2024",
      end: "Jul 2024",
      description: "Developed a full-stack web application using .NET, JavaScript, and PostgreSQL for an institutional examination portal.This platform includes a teacher dashboard for setting questions, assigning exams, and monitoring student performance.Developed a REST API using FastAPI to manage and store image file paths for efficient post-processing and grading with the YOLOv8 object detection model, serving a cohort of approximately 200 students.",
    },
    {
      company: "Cynapse AI",
      href: "https://www.cynapse.ai/",
      badges: [],
      location: "Remote",
      title: "AI Software Engineer Intern",
      logoUrl: "/cy.jpg",
      start: "Aug 2023",
      end: "Mar 2024",
      description: "Trained and deployed the YOLOv8 pose-estimation model in Docker, improving training efficiency by 300% and accuracy by 40%. Successfully detected abandoned or suspicious objects in shopping malls and public transport.",
    },
    {
      company: "TUV SUD",
      href: "https://www.tuvsud.com/en-sg",
      badges: [],
      location: "Remote",
      title: "Machine Learning Engineer Intern",
      logoUrl: "/ts.png",
      start: "Jun 2022",
      end: "Nov 2022",
      description: "Trained YOLOv5 object detection model to detect defects on commercial building facades using a DJI M600 drone while masking all sensitive objects during inspection.",
    },
  ],
  education: [
    {
      school: "Singapore Institute of Technology",
      href: "",
      // href: "https://www.singaporetech.edu.sg/",
      degree: "BEng with Honours in Aerospace Engineering",
      logoUrl: "/sit.png",
      start: "Sep 2021",
      end: "Sep 2024",
    },
    {
      school: "Singapore Polytechnic",
      href: "",
      // href: "https://www.sp.edu.sg/",
      degree: "Diploma in Electrical Electronic Engineering",
      logoUrl: "/sp.jpg",
      start: "May 2016",
      end: "May 2019",
    },
  ],
  projects: [
    {
      title: "Smart Camera Trap",
      href: "https://docs.google.com/document/d/1UBY6HJ1y0EhNJwXxYn-W5j6YNfHycWxHrLZohvU51nM/edit#heading=h.8bqnk2oytbyg",
      dates: "May 2024 - Aug 2024",
      active: true,
      description:
        "The Smart Camera Trap revolutionizes wildlife monitoring by using IoT, edge computing, computer vision, and cloud computing. It captures images only when animals are detected, processes them locally to save only relevant data, and uploads these images to the cloud at scheduled intervals.",
      technologies: [
        "Python",
        "YOLOv8",
        "RaspberryPi 5",
        "CronJob",
        "Shellscript",
        "Google Drive API",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/iJoyRide/fyp",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/fyp.mp4",
    },
    {
      title: "Cy-Education Portal",
      href: "https://docs.google.com/document/d/1UBY6HJ1y0EhNJwXxYn-W5j6YNfHycWxHrLZohvU51nM/edit#heading=h.8bqnk2oytbyg",
      dates: "Mar 2024 - Jul 2024",
      active: true,
      description:
        "Developed an examination portal for a local institution in Singapore. The platform features a dashboard for teachers to monitor student progress. Students can take practical exams where they move objects, capture images, and run object detection algorithms. The grading process is fully automated to minimize teachers' workload.",
      technologies: [
        ".Net",
        "C#",
        "HTML",
        "CSS",
        "JavaScript",
        "PostgreSQL",
        "FastAPI",
        "Python",
        "Docker",
        "GCP",
      ],
      links: [
        {
          type: "Website",
          href: "https://cyeducation.cynapse.ai/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/ite.mp4",
    },
    {
      title: "Crypto Swap",
      href: "https://uniswap-rust.vercel.app/",
      dates: "Mar 2024 - Mar 2024",
      active: true,
      description:
        "Interactive front-end interface for a cryptocurrency exchange application.",
      technologies: [
        "ViteJs",
        "Reactjs",
        "Typescript",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/iJoyRide/uniswap",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/swap.mp4",
    },
    {
      title: "E-Commerce",
      href: "https://ecommerce-phi-six-62.vercel.app/",
      dates: "Feb 2024 - Feb 2024",
      active: true,
      description:
        "Robust platform with product catalogues, shopping cart functionality, and user authentication.",
      technologies: [
        "Next",
        "Typescript",
        "Prisma",
        "TailwindCSS",
        "Stripe",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/iJoyRide/ecommerce",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/ecom.mp4",
    },
    {
      title: "Will You Be My Valentines?",
      href: "https://valentine-tau-blush.vercel.app/",
      dates: "Jan 2024 - Jan 2024",
      active: true,
      description:
        "Engaging Valentine's Day application in Next.js for the front end with Go and Gin for the backend to seamlessly automate email via SMTP, sending personalized messages to users.",
      technologies: [
        "NextJS",
        "Go",
        "Gin",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/iJoyRide/valentine",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/val.mp4",
    },
    
  ],
  hackathons: [
    {
      title: "AngelHack Singapore 2024",
      dates: "Jun 25th - Jun 26th, 2024",
      location: "Singapore",
      description:
        "Crafted a concept to encourage DBS users to actively plan for retirement, offering them the option to use either a straightforward form or an AI-powered chatbot for detailed planning. Our app is aimed towards individuals gearing up for retirement, especially targeting a younger demographic keen on planning early.",
      image:
        "/ah.jpg",
      win: "1st Place Winner",
      links: [],
    },
    {
      title: "HackOMania 2024",
      dates: "Jul 6th - Jul 7th, 2024",
      location: "Singapore",
      description:
        "Developed a web scraping extension powered by big data to shield online users from malicious websites.",
      image:
        "/hacko.png",
      win: "1st Place Winner",
      links: []
    },
    {
      title: "National AI Student Challenge 2024 (AWS)",
      dates: "Jan 15th - Mar 20th, 2024",
      location: "Singapore",
      description:
        "Fine-tuned Llama 2 language model with 90% accuracy with Amazon Sagemaker and AI Singapore.",
      image:
        "/awslol.png",
      win: "1st Place Winner",
      links: []
    },
  ],
} as const;
