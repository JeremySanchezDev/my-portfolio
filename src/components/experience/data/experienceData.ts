import type { Experience } from "@/types/Experience";
import companiesLogo from "@/components/experience/data/companiesLogo";
import NextIcon from "@/components/icons/NextIcon.astro";
import CloudflareIcon from "@/components/icons/colored/CloudflareIcon.astro";
import PythonIcon from "@/components/icons/colored/PythonIcon.astro";
import SupabaseIcon from "@/components/icons/colored/SupabaseIcon.astro";
import AwsIcon from "@/components/icons/colored/AwsIcon.astro";
import NodeIcon from "@/components/icons/colored/NodeIcon.astro";
import FirebaseIcon from "@/components/icons/colored/FirebaseIcon.astro";
import SqlServerIcon from "@/components/icons/colored/SqlServerIcon.astro";
import JavaIcon from "@/components/icons/colored/JavaIcon.astro";
import PostgreSQLIcon from "@/components/icons/colored/PostgreSQLIcon.astro";
import NessusServerIcon from "@/components/icons/colored/NessusServerIcon.astro";
import WebSocketIcon from "@/components/icons/colored/WebSocketIcon.astro";
import FirestoreIcon from "@/components/icons/colored/FirestoreIcon.astro";
import DockerIcon from "@/components/icons/colored/DockerIcon.astro";
import JavaScriptIcon from "@/components/icons/colored/JavaScriptIcon.astro";
import TailwindCSSIcon from "@/components/icons/colored/TailwindCSSIcon.astro";
import TypeScriptIcon from "@/components/icons/colored/TypeScriptIcon.astro";
import StatisticsIcon from "@/components/icons/StatisticsIcon.astro";
import LightBulbIcon from "@/components/icons/LightBulbIcon.astro";
import PersonIcon from "@/components/icons/PersonIcon.astro";


export const experienceData: Experience[] = [

  {
    title: "experience.lexia.title",
    company: "Lexia LegalTech S.A.C.",
    description: "experience.lexia.description",
    logo: companiesLogo.lexiaLogo,
    date: "experience.lexia.date",
    stack: [
      { title: "PostgreSQL", Icon: PostgreSQLIcon },
      { title: "Python", Icon: PythonIcon },
      { title: "Node.js", Icon: NodeIcon },
      { title: "Looker Studio", Icon: StatisticsIcon },
      { title: "Scrum", Icon: PersonIcon },
    ],
  },
  {
    title: "experience.hult.title",
    company: "Hult Prize 2025",
    description: "experience.hult.description",
    logo: companiesLogo.hultPrizeLogo,
    date: "experience.hult.date",
    stack: [
      { title: "Design/Vision", Icon: LightBulbIcon },
      { title: "Management", Icon: PersonIcon },
      { title: "Google Drive", Icon: CloudflareIcon },
    ],
  },
];
