import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Brain,
  ChevronDown,
  ChevronRight,
  Code2,
  Database,
  FileCode2,
  Globe,
  HardDrive,
  LayoutGrid,
  Laptop2,
  Monitor,
  Network,
  Shield,
  Sparkles,
  Server,
  Terminal,
  Wrench,
  Cloud,
  Binary,
  Lock,
  Search,
  Radar,
  Cpu,
  Bug,
  Workflow,
  Binary as BinaryIcon,
} from "lucide-react";
import { useMemo, useState, type ComponentType } from "react";

type IconComponent = ComponentType<{ className?: string }>;

type SkillChip = {
  name: string;
  tone: string;
};

type SkillBranch = {
  title: string;
  icon: IconComponent;
  bullets: string[];
  chips: SkillChip[];
  tone: string;
};

type SkillDomain = {
  id: string;
  title: string;
  eyebrow: string;
  icon: IconComponent;
  summary: string;
  accent: string;
  orbit: SkillChip[];
  branches: SkillBranch[];
};

type ToolGroup = {
  title: string;
  icon: IconComponent;
  tone: string;
  tools: string[];
};

const skillDomains: SkillDomain[] = [
  {
    id: "fullstack",
    title: "Full Stack Web Developer",
    eyebrow: "Frontend • Backend • Database",
    icon: Code2,
    summary:
      "Strong across the full product loop: interface design, API development, and dependable data modeling with a security-first mindset.",
    accent: "from-sky-500/25 via-cyan-500/20 to-blue-500/15",
    orbit: [
      { name: "HTML5", tone: "bg-orange-500/15 text-orange-100 border-orange-400/30" },
      { name: "CSS3", tone: "bg-sky-500/15 text-sky-100 border-sky-400/30" },
      { name: "JavaScript", tone: "bg-yellow-400/15 text-yellow-50 border-yellow-300/30" },
      { name: "TypeScript", tone: "bg-blue-500/15 text-blue-50 border-blue-400/30" },
      { name: "React", tone: "bg-cyan-500/15 text-cyan-50 border-cyan-400/30" },
      { name: "Node.js", tone: "bg-green-500/15 text-green-50 border-green-400/30" },
      { name: "Python", tone: "bg-indigo-500/15 text-indigo-50 border-indigo-400/30" },
      { name: "MySQL", tone: "bg-amber-500/15 text-amber-50 border-amber-400/30" },
    ],
    branches: [
      {
        title: "Front End",
        icon: LayoutGrid,
        tone: "from-sky-500/20 to-cyan-500/10",
        bullets: [
          "Solid grasp of HTML, CSS, TailwindCSS, JavaScript, and TypeScript.",
          "Worked with jQuery, Bootstrap, Material UI, Chakra UI, Framer Motion, and other UI systems.",
          "Built interactive apps with React, React Router, React Query, React Hook Form, Redux, and Next.js.",
        ],
        chips: [
          { name: "HTML5", tone: "bg-orange-500/15 text-orange-100" },
          { name: "CSS3", tone: "bg-sky-500/15 text-sky-100" },
          { name: "JavaScript", tone: "bg-yellow-400/15 text-yellow-50" },
          { name: "TypeScript", tone: "bg-blue-500/15 text-blue-50" },
          { name: "TailwindCSS", tone: "bg-cyan-500/15 text-cyan-50" },
          { name: "Bootstrap", tone: "bg-purple-500/15 text-purple-50" },
          { name: "Material UI", tone: "bg-sky-600/15 text-sky-50" },
          { name: "Chakra UI", tone: "bg-teal-500/15 text-teal-50" },
          { name: "Framer Motion", tone: "bg-fuchsia-500/15 text-fuchsia-50" },
          { name: "React", tone: "bg-cyan-500/15 text-cyan-50" },
          { name: "React Router", tone: "bg-rose-500/15 text-rose-50" },
          { name: "React Query", tone: "bg-red-500/15 text-red-50" },
          { name: "React Hook Form", tone: "bg-pink-500/15 text-pink-50" },
          { name: "Redux", tone: "bg-violet-500/15 text-violet-50" },
          { name: "styled-components", tone: "bg-amber-500/15 text-amber-50" },
          { name: "Next.js", tone: "bg-zinc-800/20 text-zinc-50" },
        ],
      },
      {
        title: "Back End",
        icon: Server,
        tone: "from-violet-500/20 to-fuchsia-500/10",
        bullets: [
          "Built APIs using Node.js and Express for production-style backend flows.",
          "Worked with PHP, Python, Flask, and FastAPI for service-side logic and integration.",
          "Applied JWT-based auth, request handling, and API testing workflows with Postman and Swagger.",
        ],
        chips: [
          { name: "Node.js", tone: "bg-green-500/15 text-green-50" },
          { name: "Express.js", tone: "bg-zinc-700/20 text-zinc-50" },
          { name: "PHP", tone: "bg-indigo-500/15 text-indigo-50" },
          { name: "Python", tone: "bg-blue-500/15 text-blue-50" },
          { name: "Flask", tone: "bg-slate-700/25 text-slate-50" },
          { name: "FastAPI", tone: "bg-teal-500/15 text-teal-50" },
          { name: "JWT", tone: "bg-amber-500/15 text-amber-50" },
          { name: "Postman", tone: "bg-orange-500/15 text-orange-50" },
          { name: "Swagger", tone: "bg-lime-500/15 text-lime-50" },
        ],
      },
      {
        title: "Database",
        icon: Database,
        tone: "from-emerald-500/20 to-teal-500/10",
        bullets: [
          "Worked with industry standard databases across relational and NoSQL systems.",
          "Comfortable with user management, permissions, performance tuning, and row-level security concepts.",
          "Understands schema design, query behavior, and persistence choices across application types.",
        ],
        chips: [
          { name: "MySQL", tone: "bg-blue-500/15 text-blue-50" },
          { name: "MariaDB", tone: "bg-sky-500/15 text-sky-50" },
          { name: "PostgreSQL", tone: "bg-indigo-500/15 text-indigo-50" },
          { name: "SQLite", tone: "bg-stone-600/20 text-stone-50" },
          { name: "MongoDB", tone: "bg-green-500/15 text-green-50" },
          { name: "Firebase", tone: "bg-yellow-500/15 text-yellow-50" },
        ],
      },
    ],
  },
  {
    id: "network",
    title: "Network Engineer",
    eyebrow: "Networking • Simulation • Security",
    icon: Network,
    summary:
      "Comfortable with networking fundamentals, real-world tooling, virtual labs, and cloud/network troubleshooting patterns.",
    accent: "from-cyan-500/25 via-sky-500/20 to-blue-500/15",
    orbit: [
      { name: "Wireshark", tone: "bg-cyan-500/15 text-cyan-50 border-cyan-400/30" },
      { name: "Nmap", tone: "bg-sky-500/15 text-sky-50 border-sky-400/30" },
      { name: "NS3", tone: "bg-blue-500/15 text-blue-50 border-blue-400/30" },
      { name: "Scapy", tone: "bg-teal-500/15 text-teal-50 border-teal-400/30" },
      { name: "Cisco", tone: "bg-indigo-500/15 text-indigo-50 border-indigo-400/30" },
      { name: "Docker", tone: "bg-sky-600/15 text-sky-50 border-sky-400/30" },
      { name: "AWS", tone: "bg-amber-500/15 text-amber-50 border-amber-400/30" },
      { name: "Azure", tone: "bg-blue-600/15 text-blue-50 border-blue-400/30" },
    ],
    branches: [
      {
        title: "Core Networking",
        icon: Radar,
        tone: "from-cyan-500/20 to-sky-500/10",
        bullets: [
          "Solid understanding of foundational networking concepts and traffic behavior.",
          "Hands-on with packet inspection, mapping, and virtual networking flows.",
          "Comfortable with Wireshark, Nmap/Zenmap, Network Miner, and packet capture analysis.",
        ],
        chips: [
          { name: "Wireshark", tone: "bg-cyan-500/15 text-cyan-50" },
          { name: "Nmap", tone: "bg-sky-500/15 text-sky-50" },
          { name: "Zenmap", tone: "bg-blue-500/15 text-blue-50" },
          { name: "Network Miner", tone: "bg-teal-500/15 text-teal-50" },
          { name: "Packet Capture", tone: "bg-violet-500/15 text-violet-50" },
        ],
      },
      {
        title: "Simulation & Labs",
        icon: Monitor,
        tone: "from-sky-500/20 to-indigo-500/10",
        bullets: [
          "Worked in simulated environments with NS3 and Cisco Packet Tracer.",
          "Understands VM networking, container networking, and lab-driven experimentation.",
          "Able to model and validate network behavior before production-style deployment.",
        ],
        chips: [
          { name: "NS3", tone: "bg-blue-500/15 text-blue-50" },
          { name: "Cisco Packet Tracer", tone: "bg-orange-500/15 text-orange-50" },
          { name: "VM Networking", tone: "bg-slate-700/20 text-slate-50" },
          { name: "Docker Networking", tone: "bg-sky-500/15 text-sky-50" },
        ],
      },
      {
        title: "Cloud & Network Ops",
        icon: Cloud,
        tone: "from-blue-500/20 to-cyan-500/10",
        bullets: [
          "Basics of cloud networking across AWS and Azure.",
          "Practical awareness of firewalls, routing, and security controls in hosted environments.",
          "Understands how cloud, container, and host networking interact in real systems.",
        ],
        chips: [
          { name: "AWS", tone: "bg-amber-500/15 text-amber-50" },
          { name: "Azure", tone: "bg-blue-500/15 text-blue-50" },
          { name: "firewalld", tone: "bg-rose-500/15 text-rose-50" },
          { name: "ufw", tone: "bg-red-500/15 text-red-50" },
          { name: "SSH", tone: "bg-slate-700/20 text-slate-50" },
        ],
      },
    ],
  },
  {
    id: "cyber",
    title: "Cyber Security",
    eyebrow: "Web • Binary • Forensics • AI",
    icon: Shield,
    summary:
      "Hands-on across web security, reverse engineering, digital forensics, network security, and AI security.",
    accent: "from-rose-500/25 via-orange-500/20 to-red-500/15",
    orbit: [
      { name: "Burp Suite", tone: "bg-rose-500/15 text-rose-50 border-rose-400/30" },
      { name: "Ghidra", tone: "bg-orange-500/15 text-orange-50 border-orange-400/30" },
      { name: "Autopsy", tone: "bg-violet-500/15 text-violet-50 border-violet-400/30" },
      { name: "Volatility", tone: "bg-indigo-500/15 text-indigo-50 border-indigo-400/30" },
      { name: "Wireshark", tone: "bg-cyan-500/15 text-cyan-50 border-cyan-400/30" },
      { name: "Gnu GEF", tone: "bg-slate-700/20 text-slate-50 border-slate-500/30" },
      { name: "OWASP", tone: "bg-red-500/15 text-red-50 border-red-400/30" },
      { name: "LLM Security", tone: "bg-fuchsia-500/15 text-fuchsia-50 border-fuchsia-400/30" },
    ],
    branches: [
      {
        title: "Web Security",
        icon: Search,
        tone: "from-rose-500/20 to-orange-500/10",
        bullets: [
          "Comfortable finding common OWASP Top 10 vulnerabilities in labs and CTFs.",
          "Hands-on with SQL injection, command injection, XSS, LFI, path traversal, SSRF, and deserialization issues.",
          "Practiced through PortSwigger labs, WebGoat, DVWA, and real CTF challenges.",
        ],
        chips: [
          { name: "Burp Suite", tone: "bg-rose-500/15 text-rose-50" },
          { name: "PortSwigger Labs", tone: "bg-orange-500/15 text-orange-50" },
          { name: "WebGoat", tone: "bg-yellow-500/15 text-yellow-50" },
          { name: "DVWA", tone: "bg-red-500/15 text-red-50" },
          { name: "sqlmap", tone: "bg-stone-700/20 text-stone-50" },
          { name: "Nikto", tone: "bg-violet-500/15 text-violet-50" },
          { name: "OWASP Top 10", tone: "bg-fuchsia-500/15 text-fuchsia-50" },
        ],
      },
      {
        title: "Binary Security",
        icon: BinaryIcon,
        tone: "from-orange-500/20 to-amber-500/10",
        bullets: [
          "Studied executable-level vulnerabilities such as buffer overflow, off-by-one, use-after-free, and double free.",
          "Works primarily on Linux ELF research and understands the basics of binary exploitation workflows.",
          "Uses reverse engineering tooling to inspect control flow, symbols, and memory behavior.",
        ],
        chips: [
          { name: "Ghidra", tone: "bg-orange-500/15 text-orange-50" },
          { name: "IDA Pro", tone: "bg-rose-500/15 text-rose-50" },
          { name: "Radare2", tone: "bg-slate-700/20 text-slate-50" },
          { name: "Cutter", tone: "bg-violet-500/15 text-violet-50" },
          { name: "GNU GEF", tone: "bg-stone-700/20 text-stone-50" },
        ],
      },
      {
        title: "Cyber Forensics",
        icon: HardDrive,
        tone: "from-violet-500/20 to-fuchsia-500/10",
        bullets: [
          "Basic digital forensics awareness across disk, memory, and network evidence.",
          "Worked with OSForensics on Linux-focused investigations and artifact analysis.",
          "Understands chain of custody, integrity preservation, and structured evidence reporting.",
        ],
        chips: [
          { name: "Autopsy", tone: "bg-violet-500/15 text-violet-50" },
          { name: "Volatility", tone: "bg-indigo-500/15 text-indigo-50" },
          { name: "Wireshark", tone: "bg-cyan-500/15 text-cyan-50" },
          { name: "OSForensics", tone: "bg-pink-500/15 text-pink-50" },
          { name: "Chain of Custody", tone: "bg-emerald-500/15 text-emerald-50" },
        ],
      },
      {
        title: "Network & AI Security",
        icon: Lock,
        tone: "from-cyan-500/20 to-blue-500/10",
        bullets: [
          "Comfortable with network security concepts such as TLS/SSL, SSH, OpenPGP, and AKE basics.",
          "Aware of AI security issues including prompt injection, jailbreaking, and training data poisoning.",
          "Built and studied security-focused tools and assessments in both web and model settings.",
        ],
        chips: [
          { name: "TLS/SSL", tone: "bg-cyan-500/15 text-cyan-50" },
          { name: "SSH", tone: "bg-slate-700/20 text-slate-50" },
          { name: "OpenPGP", tone: "bg-blue-500/15 text-blue-50" },
          { name: "Prompt Injection", tone: "bg-fuchsia-500/15 text-fuchsia-50" },
          { name: "Jailbreaking", tone: "bg-rose-500/15 text-rose-50" },
        ],
      },
    ],
  },
  {
    id: "systems",
    title: "System Administration",
    eyebrow: "Linux • Scripting • Ops",
    icon: Server,
    summary:
      "Confident working in Linux-first environments with strong support for user, storage, network, and service operations.",
    accent: "from-emerald-500/25 via-lime-500/20 to-teal-500/15",
    orbit: [
      { name: "Ubuntu", tone: "bg-orange-500/15 text-orange-50 border-orange-400/30" },
      { name: "Debian", tone: "bg-red-500/15 text-red-50 border-red-400/30" },
      { name: "Fedora", tone: "bg-blue-500/15 text-blue-50 border-blue-400/30" },
      { name: "Kali", tone: "bg-slate-700/20 text-slate-50 border-slate-500/30" },
      { name: "Docker", tone: "bg-cyan-500/15 text-cyan-50 border-cyan-400/30" },
      { name: "GitHub Actions", tone: "bg-violet-500/15 text-violet-50 border-violet-400/30" },
      { name: "PowerShell", tone: "bg-blue-600/15 text-blue-50 border-blue-400/30" },
      { name: "Windows Terminal", tone: "bg-stone-700/20 text-stone-50 border-stone-500/30" },
    ],
    branches: [
      {
        title: "Linux Administration",
        icon: Terminal,
        tone: "from-emerald-500/20 to-lime-500/10",
        bullets: [
          "Primary comfort zone is Linux-based operating systems and CLI-driven workflows.",
          "Works across Ubuntu, Debian, Fedora, Linux Mint, Kali Linux, and Tails OS.",
          "Handles user management, networking, permissions, and routine troubleshooting.",
        ],
        chips: [
          { name: "Ubuntu", tone: "bg-orange-500/15 text-orange-50" },
          { name: "Debian", tone: "bg-red-500/15 text-red-50" },
          { name: "Fedora", tone: "bg-blue-500/15 text-blue-50" },
          { name: "Linux Mint", tone: "bg-green-500/15 text-green-50" },
          { name: "Kali Linux", tone: "bg-slate-700/20 text-slate-50" },
          { name: "Tails OS", tone: "bg-violet-500/15 text-violet-50" },
        ],
      },
      {
        title: "Storage & Troubleshooting",
        icon: HardDrive,
        tone: "from-lime-500/20 to-emerald-500/10",
        bullets: [
          "Understands disk management, partitions, LVM basics, and swap configuration.",
          "Comfortable with practical system troubleshooting and memory-related operations.",
          "Knows enough about SELinux and AppArmor basics to navigate security controls.",
        ],
        chips: [
          { name: "Disk Management", tone: "bg-emerald-500/15 text-emerald-50" },
          { name: "Partitions", tone: "bg-lime-500/15 text-lime-50" },
          { name: "LVM", tone: "bg-green-500/15 text-green-50" },
          { name: "Swap", tone: "bg-teal-500/15 text-teal-50" },
          { name: "SELinux", tone: "bg-rose-500/15 text-rose-50" },
          { name: "AppArmor", tone: "bg-fuchsia-500/15 text-fuchsia-50" },
        ],
      },
      {
        title: "Scripting & Ops",
        icon: Wrench,
        tone: "from-teal-500/20 to-cyan-500/10",
        bullets: [
          "Shell scripting and PowerShell are part of the everyday toolkit.",
          "Works with containers, terminals, and build tooling in daily development.",
          "Comfortable with Git, GitHub, GitHub Actions, and command-line workflows.",
        ],
        chips: [
          { name: "Shell Script", tone: "bg-slate-700/20 text-slate-50" },
          { name: "PowerShell", tone: "bg-blue-500/15 text-blue-50" },
          { name: "Windows Terminal", tone: "bg-stone-700/20 text-stone-50" },
          { name: "Docker", tone: "bg-cyan-500/15 text-cyan-50" },
          { name: "GitHub Actions", tone: "bg-violet-500/15 text-violet-50" },
          { name: "CMake", tone: "bg-orange-500/15 text-orange-50" },
        ],
      },
      {
        title: "Networking Ops",
        icon: Cloud,
        tone: "from-blue-500/20 to-sky-500/10",
        bullets: [
          "Connects system work with networked deployments and firewall awareness.",
          "Understands basic cloud and host networking in real-world setups.",
          "Comfortable with the operational side of mixed Linux + cloud environments.",
        ],
        chips: [
          { name: "firewalld", tone: "bg-rose-500/15 text-rose-50" },
          { name: "ufw", tone: "bg-red-500/15 text-red-50" },
          { name: "Docker Networking", tone: "bg-cyan-500/15 text-cyan-50" },
          { name: "AWS Basics", tone: "bg-amber-500/15 text-amber-50" },
          { name: "Azure Basics", tone: "bg-blue-500/15 text-blue-50" },
        ],
      },
    ],
  },
  {
    id: "ai",
    title: "Artificial Intelligence & Machine Learning",
    eyebrow: "ML • Deep Learning • LLMs",
    icon: Brain,
    summary:
      "Comfortable with classical ML, deep learning, model tooling, visualization, and practical LLM workflows.",
    accent: "from-fuchsia-500/25 via-violet-500/20 to-indigo-500/15",
    orbit: [
      { name: "NumPy", tone: "bg-blue-500/15 text-blue-50 border-blue-400/30" },
      { name: "Pandas", tone: "bg-indigo-500/15 text-indigo-50 border-indigo-400/30" },
      { name: "scikit-learn", tone: "bg-yellow-500/15 text-yellow-50 border-yellow-400/30" },
      { name: "Matplotlib", tone: "bg-orange-500/15 text-orange-50 border-orange-400/30" },
      { name: "Plotly", tone: "bg-pink-500/15 text-pink-50 border-pink-400/30" },
      { name: "PyTorch", tone: "bg-rose-500/15 text-rose-50 border-rose-400/30" },
      { name: "Keras", tone: "bg-red-500/15 text-red-50 border-red-400/30" },
      { name: "Ollama", tone: "bg-lime-500/15 text-lime-50 border-lime-400/30" },
    ],
    branches: [
      {
        title: "Classical ML",
        icon: Cpu,
        tone: "from-fuchsia-500/20 to-violet-500/10",
        bullets: [
          "Familiar with core algorithms such as linear regression, logistic regression, decision trees, and ensemble methods.",
          "Understands metrics, tuning, and dimensionality reduction workflows.",
          "Uses data-centric experimentation to compare models and improve results.",
        ],
        chips: [
          { name: "scikit-learn", tone: "bg-yellow-500/15 text-yellow-50" },
          { name: "XGBoost", tone: "bg-emerald-500/15 text-emerald-50" },
          { name: "Random Forest", tone: "bg-lime-500/15 text-lime-50" },
          { name: "PCA", tone: "bg-sky-500/15 text-sky-50" },
          { name: "Hyperparameter Tuning", tone: "bg-violet-500/15 text-violet-50" },
        ],
      },
      {
        title: "Deep Learning",
        icon: Sparkles,
        tone: "from-violet-500/20 to-fuchsia-500/10",
        bullets: [
          "Comfortable with perceptrons, CNNs, RNNs, LSTMs, and reinforcement learning basics.",
          "Has worked through practical deep learning workflows and model experimentation.",
          "Understands modern multimodal and representation-driven model concepts.",
        ],
        chips: [
          { name: "PyTorch", tone: "bg-rose-500/15 text-rose-50" },
          { name: "Keras", tone: "bg-red-500/15 text-red-50" },
          { name: "TensorFlow", tone: "bg-orange-500/15 text-orange-50" },
          { name: "CNN", tone: "bg-fuchsia-500/15 text-fuchsia-50" },
          { name: "LSTM", tone: "bg-violet-500/15 text-violet-50" },
        ],
      },
      {
        title: "LLMs & Agents",
        icon: Workflow,
        tone: "from-indigo-500/20 to-cyan-500/10",
        bullets: [
          "Uses modern LLMs, local runtimes, and agentic workflows in day-to-day experimentation.",
          "Built AI agents and chatbots using LangChain and model SDKs in projects.",
          "Understanding of prompt injection, jailbreaks, poisoning, and AI security basics.",
        ],
        chips: [
          { name: "Ollama", tone: "bg-lime-500/15 text-lime-50" },
          { name: "LM Studio", tone: "bg-cyan-500/15 text-cyan-50" },
          { name: "Hugging Face", tone: "bg-amber-500/15 text-amber-50" },
          { name: "LangChain", tone: "bg-indigo-500/15 text-indigo-50" },
          { name: "LLM Security", tone: "bg-fuchsia-500/15 text-fuchsia-50" },
        ],
      },
      {
        title: "Visualization & Data",
        icon: BookOpen,
        tone: "from-cyan-500/20 to-blue-500/10",
        bullets: [
          "Strong with data wrangling, charts, and model analysis storytelling.",
          "Uses visualization to compare performance and present insights clearly.",
          "Comfortable with notebook-driven exploration and reproducible analysis.",
        ],
        chips: [
          { name: "NumPy", tone: "bg-blue-500/15 text-blue-50" },
          { name: "Pandas", tone: "bg-indigo-500/15 text-indigo-50" },
          { name: "Matplotlib", tone: "bg-orange-500/15 text-orange-50" },
          { name: "Seaborn", tone: "bg-sky-500/15 text-sky-50" },
          { name: "Plotly", tone: "bg-pink-500/15 text-pink-50" },
          { name: "Anaconda", tone: "bg-emerald-500/15 text-emerald-50" },
        ],
      },
    ],
  },
];

const toolGroups: ToolGroup[] = [
  {
    title: "Frontend Constellation",
    icon: LayoutGrid,
    tone: "from-sky-500/20 to-cyan-500/10",
    tools: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "jQuery",
      "TailwindCSS",
      "Bootstrap",
      "Material UI",
      "Chakra UI",
      "Framer Motion",
      "React",
      "React Router",
      "React Query",
      "React Hook Form",
      "Redux",
      "styled-components",
      "Next.js",
      "Vite",
      "Webpack",
      "NPM",
    ],
  },
  {
    title: "Backend & API Trail",
    icon: Server,
    tone: "from-violet-500/20 to-fuchsia-500/10",
    tools: [
      "Node.js",
      "Express.js",
      "PHP",
      "Python",
      "Flask",
      "FastAPI",
      "JWT",
      "Postman",
      "Swagger",
      "Nginx",
      "Apache",
    ],
  },
  {
    title: "Data & ML Grid",
    icon: Brain,
    tone: "from-fuchsia-500/20 to-violet-500/10",
    tools: [
      "Anaconda",
      "NumPy",
      "Pandas",
      "scikit-learn",
      "Matplotlib",
      "Plotly",
      "PyTorch",
      "Keras",
      "TensorFlow",
      "Hugging Face",
      "Ollama",
      "LM Studio",
      "LangChain",
    ],
  },
  {
    title: "System & DevOps Orbit",
    icon: Cloud,
    tone: "from-emerald-500/20 to-teal-500/10",
    tools: [
      "Ubuntu",
      "Debian",
      "Fedora",
      "Linux Mint",
      "Kali Linux",
      "Tails OS",
      "Shell Script",
      "PowerShell",
      "Windows Terminal",
      "Docker",
      "Git",
      "GitHub",
      "GitHub Actions",
      "CMake",
      "Azure",
      "AWS",
      "Vercel",
      "Firebase",
      "GitHub Pages",
    ],
  },
  {
    title: "Security & Networking Field",
    icon: Shield,
    tone: "from-rose-500/20 to-orange-500/10",
    tools: [
      "Wireshark",
      "Nmap",
      "Zenmap",
      "NS3",
      "Scapy",
      "Snort",
      "Network Miner",
      "firewalld",
      "ufw",
      "Cisco Packet Tracer",
      "Burp Suite",
      "sqlmap",
      "Nikto",
      "John the Ripper",
      "Metasploit",
      "Ghidra",
      "IDA Pro",
      "Radare2",
      "Cutter",
      "GNU GEF",
      "Autopsy",
      "Volatility",
      "TLS/SSL",
      "SSH",
      "OpenPGP",
    ],
  },
  {
    title: "Design & Productivity Shelf",
    icon: Sparkles,
    tone: "from-amber-500/20 to-yellow-500/10",
    tools: ["Figma", "Canva", "GIMP", "Markdown", "LaTeX", "Arduino", "Qt", "Linux Terminal", "Windows Terminal"],
  },
];

function ToolPill({ name, tone }: SkillChip) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide uppercase ${tone}`}
    >
      {name}
    </span>
  );
}

function BranchCard({ branch }: { branch: SkillBranch }) {
  const Icon = branch.icon;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`rounded-[1.6rem] border border-border/70 bg-gradient-to-br ${branch.tone} p-5 shadow-lg backdrop-blur-sm`}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white shadow-md">
          <Icon className="h-6 w-6" />
        </div>
        <div className="min-w-0">
          <h4 className="text-xl font-bold tracking-tight">{branch.title}</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground leading-relaxed">
            {branch.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-blue)]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {branch.chips.map((chip) => (
              <span key={chip.name} className={`rounded-full border px-3 py-1 text-[11px] font-medium ${chip.tone}`}>
                {chip.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DomainNode({
  domain,
  selected,
  onSelect,
  counterRotate,
}: {
  domain: SkillDomain;
  selected: boolean;
  onSelect: () => void;
  counterRotate: number;
}) {
  const Icon = domain.icon;

  return (
    <motion.button
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className={`group relative flex h-[122px] w-[122px] flex-col items-center justify-center rounded-full border p-3 text-center transition-all duration-300 ${
        selected
          ? "border-[var(--accent-blue)]/60 bg-background/90 shadow-2xl shadow-black/40"
          : "border-white/10 bg-white/5 hover:bg-white/10"
      }`}
      style={{ transform: `rotate(${counterRotate}deg)` }}
    >
      <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white ${selected ? "ring-2 ring-[var(--accent-blue)]/60" : ""}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-2 line-clamp-2 text-[11px] font-bold leading-tight text-foreground">{domain.title}</div>
      <div className={`mt-1 inline-flex items-center gap-1 text-[10px] font-semibold transition-colors ${selected ? "text-[var(--accent-blue)]" : "text-muted-foreground group-hover:text-[var(--accent-blue)]"}`}>
        Open <ChevronRight className="h-3.5 w-3.5" />
      </div>
    </motion.button>
  );
}

function ToolGroupCard({ group }: { group: ToolGroup }) {
  const Icon = group.icon;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`rounded-[1.8rem] border border-white/10 bg-gradient-to-br ${group.tone} p-5 shadow-xl backdrop-blur-sm`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white shadow-md">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h4 className="text-lg font-bold tracking-tight text-foreground">{group.title}</h4>
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Creative tool shelf</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {group.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-white/10 bg-black/15 px-3 py-1 text-xs font-medium text-white/90"
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const [selectedDomainId, setSelectedDomainId] = useState<string | null>(null);
  const [domainRotation, setDomainRotation] = useState(0);
  const [showBranchOrbit, setShowBranchOrbit] = useState(false);
  const [selectedBranchTitle, setSelectedBranchTitle] = useState<string | null>(null);
  const [branchRotation, setBranchRotation] = useState(0);

  const domainCount = skillDomains.length;
  const domainStep = 360 / domainCount;
  const selectedDomain = useMemo(
    () => skillDomains.find((domain) => domain.id === selectedDomainId) ?? null,
    [selectedDomainId]
  );

  const selectedBranch = useMemo(
    () => selectedDomain?.branches.find((branch) => branch.title === selectedBranchTitle) ?? null,
    [selectedBranchTitle, selectedDomain]
  );

  const domainNodeRadius = 250;

  const handleDomainClick = (domainId: string) => {
    const index = skillDomains.findIndex((domain) => domain.id === domainId);
    if (index === -1) return;

    if (domainId === selectedDomainId) {
      setShowBranchOrbit(true);
      return;
    }

    const rawTarget = -(index * domainStep);
    const shortestDelta = ((rawTarget - domainRotation + 540) % 360) - 180;

    setSelectedDomainId(domainId);
    setDomainRotation(domainRotation + shortestDelta);
    setShowBranchOrbit(false);
    setSelectedBranchTitle(null);
    setBranchRotation(0);
  };

  const handleBranchClick = (branchTitle: string, branchIndex: number) => {
    setSelectedBranchTitle(branchTitle);
    if (!selectedDomain) return;
    const branchStep = 360 / selectedDomain.branches.length;
    const rawTarget = -(branchIndex * branchStep);
    const shortestDelta = ((rawTarget - branchRotation + 540) % 360) - 180;
    setBranchRotation(branchRotation + shortestDelta);
  };

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center space-y-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            <Sparkles className="h-4 w-4 text-[var(--accent-blue)]" />
            Skills map
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight gradient-text">Tech Stack</h2>
          <p className="mx-auto max-w-4xl text-base md:text-lg text-muted-foreground leading-relaxed">
            A visual skill graph that branches from a central profile node into major domains, then into sub-domains and tools.
          </p>
        </motion.div>

        <div className="relative overflow-x-auto overflow-y-visible rounded-[2.5rem] border border-border/70 bg-background/60 p-6 md:p-10 shadow-2xl backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.08),transparent_35%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_32%)]" />

          <div className="relative min-h-[860px] min-w-[1900px] overflow-visible">
            <motion.div
              animate={{ x: selectedDomain ? -140 : 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
              className="absolute left-[520px] top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2"
            >
              <div className="pointer-events-none absolute inset-0 rounded-full border border-dashed border-white/12" />
              <div className="pointer-events-none absolute inset-10 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute inset-[122px] rounded-full border border-white/5" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 -translate-x-1/2 -translate-y-1/2">
                {skillDomains.map((_, index) => {
                  const angle = index * domainStep;

                  return (
                    <motion.div
                      key={`domain-line-${index}`}
                      className="absolute left-0 top-0 h-[1px] origin-left bg-white/20"
                      style={{ width: domainNodeRadius, transform: `translate(0px, 0px) rotate(${angle + domainRotation}deg)` }}
                    />
                  );
                })}
              </div>

              <motion.div
                animate={{ rotate: domainRotation }}
                transition={{ type: "spring", stiffness: 110, damping: 20 }}
                className="absolute inset-0"
              >
                {skillDomains.map((domain, index) => {
                  const angle = index * domainStep;
                  const rad = (angle * Math.PI) / 180;
                  const x = domainNodeRadius * Math.cos(rad);
                  const y = domainNodeRadius * Math.sin(rad);

                  return (
                    <div
                      key={domain.id}
                      className="absolute left-1/2 top-1/2"
                      style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                    >
                      <DomainNode
                        domain={domain}
                        selected={domain.id === selectedDomainId}
                        onSelect={() => handleDomainClick(domain.id)}
                        counterRotate={-domainRotation}
                      />
                    </div>
                  );
                })}
              </motion.div>

              <motion.div
                className="profile-image-container absolute left-1/2 top-1/2 z-10 flex aspect-square w-[300px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 shadow-2xl shadow-black/40"
              >
                <div className={`absolute inset-2 rounded-full bg-gradient-to-br ${selectedDomain?.accent ?? "from-sky-500/25 via-cyan-500/20 to-blue-500/15"} opacity-80 blur-2xl`} />
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <img src="/profile.jpeg" alt="Profile portrait" className="profile-image relative z-10 h-[82%] w-[82%] rounded-full object-cover shadow-xl" />
                <div className="absolute bottom-3 z-10 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/85 backdrop-blur-sm">
                  Central profile node
                </div>
              </motion.div>
            </motion.div>

            <AnimatePresence>
              {selectedDomain && (
                <motion.aside
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 60 }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                  className="absolute left-[900px] top-1/2 h-[700px] w-[440px] -translate-y-1/2 overflow-hidden rounded-[2.2rem] border border-border/70 bg-background/75 shadow-2xl backdrop-blur-xl"
                >
                  <div className="border-b border-border/70 px-6 py-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Expanded Domain</div>
                        <h3 className="mt-2 text-2xl font-black tracking-tight text-foreground">{selectedDomain.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{selectedDomain.summary}</p>
                      </div>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
                        <selectedDomain.icon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  <div className="h-[calc(100%-132px)] overflow-y-auto px-6 py-6 [scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.25)_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/35">
                    <button
                      type="button"
                      onClick={() => setShowBranchOrbit(true)}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Expand Subdomain Orbit <ChevronRight className="h-4 w-4" />
                    </button>

                    <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Domain Tool Orbit</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedDomain.orbit.map((chip, index) => (
                          <span key={`${selectedDomain.id}-orbit-${chip.name}-${index}`} className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${chip.tone}`}>
                            {chip.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted-foreground">
                      Click the same selected node in the main orbit again to open its subdomain spinner.
                    </div>
                  </div>
                </motion.aside>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {selectedDomain && showBranchOrbit && (
                <motion.div
                  initial={{ opacity: 0, x: 70 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 70 }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                  className="absolute left-[1400px] top-1/2 h-[700px] w-[440px] -translate-y-1/2 overflow-hidden rounded-[2.2rem] border border-border/70 bg-background/75 shadow-2xl backdrop-blur-xl"
                >
                  <div className="border-b border-border/70 px-6 py-5">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Subdomain Spinner</div>
                    <h4 className="mt-2 text-2xl font-black tracking-tight">{selectedDomain.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">Click a subdomain node. It rotates to the right and expands next.</p>
                  </div>

                  <div className="h-[calc(100%-132px)] overflow-y-auto px-6 py-6 [scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.25)_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/35">
                    <div className="relative mx-auto h-[360px] w-[360px]">
                      <div className="absolute inset-0 rounded-full border border-white/10 bg-white/5" />
                      <div className="absolute inset-8 rounded-full border border-dashed border-white/10" />
                      <motion.div
                        animate={{ rotate: branchRotation }}
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        className="absolute inset-0"
                      >
                        {selectedDomain.branches.map((branch, index) => {
                          const step = 360 / selectedDomain.branches.length;
                          const angle = index * step;
                          const rad = (angle * Math.PI) / 180;
                          const radius = 130;
                          const x = radius * Math.cos(rad);
                          const y = radius * Math.sin(rad);
                          const BranchIcon = branch.icon;

                          return (
                            <button
                              key={`${selectedDomain.id}-branch-${branch.title}`}
                              type="button"
                              onClick={() => handleBranchClick(branch.title, index)}
                              className={`absolute left-1/2 top-1/2 flex h-[102px] w-[102px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border px-2 text-center text-[11px] font-semibold shadow-lg ${selectedBranchTitle === branch.title ? "border-[var(--accent-blue)]/60 bg-background/90" : "border-white/15 bg-white/10 hover:bg-white/15"}`}
                              style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${-branchRotation}deg)` }}
                            >
                              <BranchIcon className="h-4 w-4 text-foreground" />
                              <span className="mt-1 line-clamp-2 leading-tight text-foreground">{branch.title}</span>
                            </button>
                          );
                        })}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {selectedDomain && showBranchOrbit && selectedBranch && (
                <motion.aside
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 80 }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                  className="absolute left-[1900px] top-1/2 h-[700px] w-[440px] -translate-y-1/2 overflow-hidden rounded-[2.2rem] border border-border/70 bg-background/75 shadow-2xl backdrop-blur-xl"
                >
                  <div className="border-b border-border/70 px-6 py-5">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Expanded Subdomain</div>
                    <h4 className="mt-2 text-2xl font-black tracking-tight">{selectedBranch.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{selectedDomain.title} → {selectedBranch.title}</p>
                  </div>

                  <div className="h-[calc(100%-132px)] overflow-y-auto px-6 py-6 [scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.25)_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/35">
                    <div className="space-y-3">
                      {selectedBranch.bullets.map((bullet, index) => (
                        <motion.div
                          key={`${selectedBranch.title}-bullet-${index}`}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="rounded-2xl border border-border/70 bg-background/55 p-4"
                        >
                          <div className="flex items-start gap-3">
                            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--accent-blue)]" />
                            <span className="text-sm leading-relaxed text-muted-foreground">{bullet}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-5 rounded-2xl border border-border/70 bg-background/55 p-4">
                      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Tools / Keywords</div>
                      <div className="flex flex-wrap gap-2">
                        {selectedBranch.chips.map((chip) => (
                          <span key={`${selectedBranch.title}-${chip.name}`} className={`rounded-full border px-3 py-1 text-xs font-semibold ${chip.tone}`}>
                            {chip.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.aside>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-blue)]/10 text-[var(--accent-blue)]">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Tool sea</h3>
              <p className="text-sm text-muted-foreground">A broader, more decorative inventory of the tools I keep nearby.</p>
            </div>
          </motion.div>

          <div className="grid gap-5 xl:grid-cols-2">
            {toolGroups.map((group) => (
              <ToolGroupCard key={group.title} group={group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

