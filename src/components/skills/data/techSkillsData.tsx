import { type TechGridItem } from "@/components/skills/components/TechGrid";
import {
  DotNetIcon,
  ExpressIcon,
  NodeIcon,
} from "@/components/skills/icons/server-side";
import {
  AndroidIcon,
  BootstrapIcon,
  NextIcon,
  TailwindIcon,
} from "@/components/skills/icons/client-side";
import {
  CSharpIcon,
  CssIcon,
  HtmlIcon,
  JavaIcon,
  JavaScriptIcon,
  KotlinIcon,
  PythonIcon,
  SQLLanguageIcon,
} from "@/components/skills/icons/languages";
import {
  MongoIcon,
  PostgreSQLIcon,
  SqlServerIcon,
  SQLiteIcon,
} from "@/components/skills/icons/databases";
import {
  AwsIcon,
  FirebaseIcon,
  VercelIcon,
} from "@/components/skills/icons/cloud-devops";
import {
  AndroidStudioIcon,
  GitHubIcon,
  GitIcon,
  IntellijIdeaIcon,
  TerminalIcon,
  VisualStudioIcon,
} from "@/components/skills/icons/tools-ides";

import type { TranslationKey } from "@/i18n/types";

export const techSkillsData: Partial<Record<TranslationKey, TechGridItem[]>> = {
  "skills.categories.server": [
    { Icon: NodeIcon, name: "Node.js", tooltip: { color: "#339933" } },
    { Icon: ExpressIcon, name: "Express", tooltip: { color: "#000000" } },
    { Icon: DotNetIcon, name: ".NET", tooltip: { color: "#512BD4" } },
  ],

  "skills.categories.client": [
    { Icon: NextIcon, name: "Next.js", tooltip: { color: "#000000" } },
    { Icon: TailwindIcon, name: "Tailwind CSS", tooltip: { color: "#06B6D4" } },
    { Icon: BootstrapIcon, name: "Bootstrap", tooltip: { color: "#563D7C" } },
    { Icon: AndroidIcon, name: "Android", tooltip: { color: "#a4c639" } },
  ],

  "skills.categories.languages": [
    { Icon: PythonIcon, name: "Python", tooltip: { color: "#3776AB" } },
    { Icon: JavaScriptIcon, name: "JavaScript", tooltip: { color: "#f7df1e" } },
    { Icon: JavaIcon, name: "Java", tooltip: { color: "#007396" } },
    { Icon: KotlinIcon, name: "Kotlin", tooltip: { color: "#7F52FF" } },
    { Icon: CSharpIcon, name: "C#", tooltip: { color: "#68217A" } },
    { Icon: HtmlIcon, name: "HTML", tooltip: { color: "#E34F26" } },
    { Icon: CssIcon, name: "CSS", tooltip: { color: "#1572B6" } },
    { Icon: SQLLanguageIcon, name: "SQL", tooltip: { color: "#00bcf2" } },
  ],

  "skills.categories.databases": [
    { Icon: PostgreSQLIcon, name: "PostgreSQL", tooltip: { color: "#336791" } },
    { Icon: MongoIcon, name: "MongoDB", tooltip: { color: "#499D4A" } },
    { Icon: SqlServerIcon, name: "SQL Server", tooltip: { color: "#000000" } },
    { Icon: SQLiteIcon, name: "SQLite", tooltip: { color: "#0f7fcc" } },
  ],

  "skills.categories.cloud": [
    { Icon: AwsIcon, name: "AWS", tooltip: { color: "#FF9900" } },
    { Icon: FirebaseIcon, name: "Firebase", tooltip: { color: "#ffc24a" } },
    { Icon: VercelIcon, name: "Vercel", tooltip: { color: "#000000" } },
  ],

  "skills.categories.tools": [
    { Icon: GitIcon, name: "Git", tooltip: { color: "#F05032" } },
    { Icon: GitHubIcon, name: "GitHub", tooltip: { color: "#181717" } },
    { Icon: TerminalIcon, name: "Terminal / CLI", tooltip: { color: "#323232" } },
    { Icon: VisualStudioIcon, name: "VS Code", tooltip: { color: "#007ACC" } },
    { Icon: IntellijIdeaIcon, name: "IntelliJ IDEA", tooltip: { color: "#3068B1" } },
    { Icon: AndroidStudioIcon, name: "Android Studio", tooltip: { color: "#3DDC84" } },
  ],
};