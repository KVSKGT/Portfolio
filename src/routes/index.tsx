import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Moon,
  Sun,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ScrollReveal } from "../components/ScrollReveal";
import { MagneticCard } from "../components/MagneticCard";
import { InteractiveAvatar } from "../components/InteractiveAvatar";
import { CommandPalette } from "../components/CommandPalette";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Venkata Sai — Portfolio" },
      {
        name: "description",
        content: "Designer & developer building thoughtful digital products.",
      },
      { property: "og:title", content: "Venkata Sai — Portfolio" },
      {
        property: "og:description",
        content: "Designer & developer building thoughtful digital products.",
      },
    ],
  }),
  component: Index,
});

// ============================================================
// EDIT YOUR CONTENT HERE
// ============================================================
const PROFILE = {
  name: "Venkata Sai Kumar Kukkadapu",
  role: "AI & ML Engineer",
  location: "India",
  phone: "+91 9640328677",
  intro:
    "I design and build digital products that feel obvious in hindsight. Currently focused on web, AI tooling, and side projects that scratch my own itch. I care about craft, simple interfaces, and shipping.",
  email: "venkatasaikumarkukkadapu@gmail.com",
  // Replace with your image: drop a file in /public (e.g. /profile.jpg) and update this path
  avatar: "/profile.jpg",
  // Replace with your resume: drop a PDF in /public (e.g. /resume.pdf) and update this path
  resume: "/resume.pdf",
  social: {
    github: "https://github.com/KVSKGT/",
    linkedin: "https://linkedin.com/in/kukkadapu-venkata-sai-kumar/",
  },
};

const PROJECTS = [
  {
    title: "Network Monitoring Dashboard",
    description:
      "Real-time network traffic analysis and monitoring dashboard with anomaly detection.",
    tags: ["Next.js", "WebSockets", "FastAPI"],
    href: "https://github.com/KVSKGT/network-monitoring-dashboard",
    year: "2025",
  },
  {
    title: "People's voice",
    description:
      "An AI-powered platform for civic issue reporting and management with tech dashboard and analytics.",
    tags: ["TypeScript", "React", "MongoDB"],
    href: "https://github.com/KVSKGT/Peoples-voice",
    year: "2025",
  },
  {
    title: "AI Interview MVP",
    description:
      "An AI-powered mock interview platform that provides real-time voice recognition and intelligent feedback on clarity and structure.",
    tags: ["Next.js", "AI", "LLM"],
    href: "https://github.com/KVSKGT/ai-interview-practice",
    year: "2026",
  },
];

const RESEARCH = [
  {
    title:
      "Enhancing Trust in Pneumonia Detection: An Explainable Hybrid ResNet-50–Vision Transformer Framework",
    description:
      "Pneumonia detection model with Gradio interface. Achieved 96.67% accuracy with explainable predictions using GradCAM.",
    tags: ["Deep Learning", "Explainable AI", "GradCAM"],
    href: "https://github.com/KVSKGT/Pneumonia-Detection/",
    year: "2026",
  },
];

const EXPERIENCE = [
  { role: "Student Mentor for DSA", org: "Smart Interviews", period: "JAN 2026 — MAY 2026" },
];

const TECHNICAL_SKILLS = [
  "Full Stack Development",
  "System Design",
  "Machine Learning",
  "Python",
  "DataBases",
  "Deep Learning",
  "Git & GitHub",
];

const SOFT_SKILLS = [
  "Communication",
  "Public Speaking",
  "Problem Solving",
  "Team Leadership",
  "Time Management",
  "Event Management",
];

const EDUCATION = [
  {
    degree: "B.Tech CSE – AI & ML",
    school: "VNR VIGNANA JYOTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY",
    period: "2023 — 2027",
  },
  { degree: "Intermediate", school: "SRI GURU JUNIOR COLLEGE", period: "2021 — 2023" },
];
// ============================================================

function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check initial theme class
    if (document.documentElement.classList.contains("light")) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.add("light");
      setTheme("light");
    } else {
      document.documentElement.classList.remove("light");
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-accent"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  );
}

function fallbackCopyTextToClipboard(text: string) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    const successful = document.execCommand("copy");
    if (successful) {
      toast.success(`Copied "${text}" to clipboard!`);
    } else {
      toast.error("Failed to copy text");
    }
  } catch (err) {
    toast.error("Failed to copy text");
  }
  document.body.removeChild(textArea);
}

function CopyBadge({ children, textToCopy }: { children: React.ReactNode; textToCopy: string }) {
  return (
    <span
      onClick={() => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard
            .writeText(textToCopy)
            .then(() => toast.success(`Copied "${textToCopy}" to clipboard!`))
            .catch(() => fallbackCopyTextToClipboard(textToCopy));
        } else {
          fallbackCopyTextToClipboard(textToCopy);
        }
      }}
      className="inline-flex cursor-pointer items-center justify-center rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent text-center shadow-sm"
    >
      {children}
    </span>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <CommandPalette resumeUrl={PROFILE.resume} email={PROFILE.email} />
      {/* Top Navigation */}
      <div className="sticky top-0 z-50 w-full border-b border-border bg-background/80 px-6 py-4 backdrop-blur-md md:px-12 lg:px-16">
        <Nav />
      </div>

      <div className="w-full px-6 py-12 md:px-12 lg:px-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-16">
          {/* Left Sticky Column for Desktop */}
          <div className="lg:sticky lg:top-24 lg:flex lg:h-[calc(100vh-6rem)] lg:w-1/2 lg:flex-col lg:justify-between lg:py-12">
            <div>
              <Hero />
            </div>
            <div className="pb-12 lg:pb-12">
              <SocialLinks />
            </div>
          </div>

          {/* Right Scrolling Column for Desktop */}
          <div className="pt-12 lg:w-1/2 lg:py-12 space-y-24">
            <Section id="work" label="Projects">
              <div className="space-y-1">
                {PROJECTS.map((p) => (
                  <ProjectRow key={p.title} {...p} />
                ))}
              </div>
            </Section>

            <Section id="research" label="Research">
              <div className="space-y-1">
                {RESEARCH.map((r) => (
                  <ProjectRow key={r.title} {...r} />
                ))}
              </div>
            </Section>

            <Section id="skills" label="Skills & Education">
              <div>
                <h3 className="mb-3 font-sans text-xl font-bold tracking-tight text-foreground">
                  Technical skills
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {TECHNICAL_SKILLS.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center justify-center rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent text-center shadow-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="mb-3 font-sans text-xl font-bold tracking-tight text-foreground">
                  Soft skills
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {SOFT_SKILLS.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center justify-center rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent text-center shadow-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="mb-3 font-sans text-xl font-bold tracking-tight text-foreground">
                  Education
                </h3>
                <ul className="space-y-4">
                  {EDUCATION.map((e) => (
                    <MagneticCard key={e.degree} className="w-full">
                      <li className="flex flex-col gap-1.5">
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="font-medium text-foreground">{e.degree}</span>
                          <span className="shrink-0 font-mono text-xs text-muted-foreground">
                            {e.period}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">{e.school}</span>
                      </li>
                    </MagneticCard>
                  ))}
                </ul>
              </div>
            </Section>

            <Section id="experience" label="Experience">
              <ul className="space-y-4">
                {EXPERIENCE.map((e) => (
                  <MagneticCard key={e.role} className="w-full">
                    <li className="flex flex-col gap-1.5">
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="font-medium text-foreground">{e.role}</span>
                        <span className="shrink-0 font-mono text-xs text-muted-foreground">
                          {e.period}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">{e.org}</span>
                    </li>
                  </MagneticCard>
                ))}
              </ul>
            </Section>
          </div>
        </div>
        <footer className="mt-24 pb-8 text-center text-sm text-muted-foreground w-full">
          © 2026 Venkata Sai Kumar Kukkadapu. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="relative flex w-full items-center justify-between text-sm">
      <div className="flex shrink-0">
        <span className="font-display text-2xl font-black text-foreground ">Venkata Sai</span>
      </div>

      {/* Center items on large screens */}
      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-14 text-muted-foreground md:flex text-base">
        <a href="#work" className="transition-colors hover:text-foreground px-2 py-1">
          Work
        </a>
        <a href="#research" className="transition-colors hover:text-foreground px-2 py-1">
          Research
        </a>
        <a href="#skills" className="transition-colors hover:text-foreground px-2 py-1">
          Skills
        </a>
        <a
          href={PROFILE.resume}
          download
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2 text-base text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <Download size={14} />
          <span>Resume</span>
        </a>
      </div>

      {/* Right side items */}
      <div className="flex items-center gap-4 text-muted-foreground">
        <a
          href={PROFILE.resume}
          download
          className="inline-flex items-center justify-center rounded-md border border-border bg-card p-1.5 text-foreground transition-colors hover:border-accent hover:text-accent md:hidden"
        >
          <Download size={16} />
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="mb-12 lg:mb-0">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
        <InteractiveAvatar
          src={PROFILE.avatar}
          alt={PROFILE.name}
          className="w-full h-auto aspect-square sm:aspect-auto sm:h-56 sm:w-56"
        />
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Available for work · {PROFILE.location}
          </div>
          <h1 className="font-sans text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
            {PROFILE.name}
            <br />
            <span className="text-3xl font-bold text-muted-foreground sm:text-4xl">
              {PROFILE.role}
            </span>
          </h1>
        </div>
      </div>
      <p className="mt-6 max-w-lg text-muted-foreground leading-relaxed">{PROFILE.intro}</p>
    </header>
  );
}

function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      <IconLink
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}`}
        icon={<Mail size={14} />}
      >
        {PROFILE.email}
      </IconLink>
      <IconLink href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`} icon={<Phone size={14} />}>
        {PROFILE.phone}
      </IconLink>
      <IconLink
        href={`https://maps.google.com/?q=${encodeURIComponent(PROFILE.location)}`}
        icon={<MapPin size={14} />}
      >
        {PROFILE.location}
      </IconLink>
      <IconLink href={PROFILE.social.github} icon={<Github size={14} />}>
        GitHub
      </IconLink>
      <IconLink href={PROFILE.social.linkedin} icon={<Linkedin size={14} />}>
        LinkedIn
      </IconLink>
    </div>
  );
}

function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <ScrollReveal>
        <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-foreground">
          {label}
        </h2>
        {children}
      </ScrollReveal>
    </section>
  );
}

function ProjectRow({
  title,
  description,
  tags,
  href,
  year,
}: {
  title: string;
  description: string;
  tags: string[];
  href: string;
  year: string;
}) {
  return (
    <a href={href} className="group -mx-3 block rounded-lg px-3 py-4 transition-colors">
      <MagneticCard className="px-2 py-1">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-medium text-foreground">
            {title}
            <ArrowUpRight
              size={14}
              className="ml-1 inline -translate-y-px text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          </h3>
          <span className="shrink-0 font-mono text-xs text-muted-foreground">{year}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-background px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </MagneticCard>
    </a>
  );
}

function IconLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
    >
      {icon}
      {children}
    </a>
  );
}
