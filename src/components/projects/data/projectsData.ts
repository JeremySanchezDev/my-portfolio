import reviewStarImage from "@/assets/projects/review_star.webp";
import TailwindCSSIcon from "@/components/icons/colored/TailwindCSSIcon.astro";
import TypeScriptIcon from "@/components/icons/colored/TypeScriptIcon.astro";
import VercelIcon from "@/components/icons/colored/VercelIcon.astro";
import NextIcon from "@/components/icons/NextIcon.astro";
import type { Project } from "@/types/Project";
import JavaScriptIcon from "@/components/icons/colored/JavaScriptIcon.astro";
import NodeIcon from "@/components/icons/colored/NodeIcon.astro";
import EmailIcon from "@/components/icons/EmailIcon.astro";
import CodeIcon from "@/components/icons/CodeIcon.astro";

export const projectsData: Project[] = [
  {
    title: "projects.review_star.title",
    description: "projects.review_star.description",
    image: reviewStarImage,
    demoUrl: "https://reviewstar-web.vercel.app/",
    codeUrl: "https://github.com/JeremySG31/ReviewStar",
    stack: [
      { title: "Next.js", Icon: NextIcon },
      { title: "JavaScript", Icon: JavaScriptIcon },
      { title: "TypeScript", Icon: TypeScriptIcon },
      { title: "Tailwind CSS", Icon: TailwindCSSIcon },
      { title: "Node.js", Icon: NodeIcon },
      { title: "Nodemailer", Icon: EmailIcon },
      { title: "Vercel", Icon: VercelIcon },
      { title: "Backend (Express/MongoDB)", Icon: CodeIcon },
    ],
  },

];
