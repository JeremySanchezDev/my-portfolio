import type { FloatingOrbConfig } from "@/types/FloatingOrbConfig";
import PythonIcon from "@/components/icons/colored/PythonIcon.astro";
import PostgreSQLIcon from "@/components/icons/colored/PostgreSQLIcon.astro";
import JavaScriptIcon from "@/components/icons/colored/JavaScriptIcon.astro";
import AwsIcon from "@/components/icons/colored/AwsIcon.astro";
import GithubIcon from "@/components/icons/GithubIcon.astro";
import KotlinIcon from "@/components/icons/KotlinIcon.astro";
import NodeIcon from "@/components/icons/colored/NodeIcon.astro";
import TypeScriptIcon from "@/components/icons/colored/TypeScriptIcon.astro";
import FirebaseIcon from "@/components/icons/colored/FirebaseIcon.astro";
import JavaIcon from "@/components/icons/colored/JavaIcon.astro";
import DotNetIcon from "@/components/icons/DotNetIcon.astro";

export const floatingOrbsData: FloatingOrbConfig[] = [
  {
    Icon: PythonIcon,
    position: "top-0 left-0 xl:left-5 2xl:left-2",
    size: "size-6 md:size-8 2xl:size-10", // Slightly larger as it's the most important
    tooltip: "Python (Avanzado)",
    url: "https://www.python.org/",
  },
  {
    Icon: KotlinIcon,
    position: "bottom-0 left-0 xl:left-5 2xl:left-2",
    size: "size-4 md:size-5 2xl:size-6",
    tooltip: "Kotlin",
    url: "https://kotlinlang.org/",
  },
  {
    Icon: NodeIcon,
    position: "top-0 right-3 sm:right-0",
    size: "size-5 md:size-7 2xl:size-8",
    tooltip: "Node.js",
    url: "https://nodejs.org/",
  },
  {
    Icon: JavaScriptIcon,
    position: "bottom-0 right-3 sm:right-0",
    size: "size-4 md:size-5 2xl:size-6",
    tooltip: "JavaScript",
    url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  {
    Icon: PostgreSQLIcon,
    position: "top-15 md:top-50 left-0 xs:left-4 xl:left-5 2xl:left-2",
    size: "size-4 md:size-5 2xl:size-6",
    tooltip: "PostgreSQL",
    url: "https://www.postgresql.org/",
  },
  {
    Icon: FirebaseIcon,
    position: "bottom-10 md:bottom-20 right-3 xs:right-8 sm:right-15 md:right-8",
    size: "size-4 xs:size-6 md:size-7 2xl:size-8",
    url: "https://firebase.google.com/",
    tooltip: "Firebase",
  },
  {
    Icon: DotNetIcon,
    position: "top-60 xs:top-50 right-0 xs:right-1 sm:right-2 md:right-3 xl:right-5 2xl:right-2",
    size: "size-5 md:size-6 2xl:size-7",
    tooltip: "C# / .NET",
    url: "https://dotnet.microsoft.com/",
  },
  {
    Icon: JavaIcon,
    position: "top-0 xs:top-8 md:top-15 right-4 xs:right-8 md:right-12",
    size: "size-6 md:size-7 2xl:size-8",
    tooltip: "Java",
    url: "https://www.java.com/",
  },
  {
    Icon: GithubIcon,
    position: "top-5 md:top-20 left-4 xs:left-8 md:left-12",
    size: "size-6 md:size-7 2xl:size-8",
    tooltip: "GitHub",
    url: "https://github.com/JeremySG31",
  },
  {
    Icon: AwsIcon,
    position: "bottom-20 left-0 xs:left-4 xl:left-5 2xl:left-2",
    size: "size-6 md:size-7 2xl:size-8",
    tooltip: "AWS",
    url: "https://aws.amazon.com/",
  },
];
