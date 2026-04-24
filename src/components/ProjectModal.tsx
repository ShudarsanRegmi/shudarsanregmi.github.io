import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Github,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Monitor,
  Server,
  Database,
  Cloud,
  Terminal,
  FlaskConical,
  Workflow,
  Link,
  Box,
  Search,
  Globe,
  Wrench,
  Binary,
  ScanSearch,
  Cpu,
  Brain,
  FileText,
  Network,
  Rocket,
  Code2,
  Shield,
  HardDrive,
  Mic,
  Lock,
  Layers,
  type LucideIcon,
} from "lucide-react";
import {
  SiPython,
  SiReact,
  SiFastapi,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiVite,
  SiElectron,
  SiPydantic,
  SiDocker,
  SiAmazon,
  SiGooglecloud,
  SiFirebase,
  SiCloudinary,
  SiSqlite,
  SiFlask,
  SiOpenai,
  SiCss3,
  SiHtml5,
  SiLinux,
  SiJson,
  SiUbuntu,
} from "react-icons/si";
import { useEffect, useMemo, useState, type ComponentType, type CSSProperties } from "react";
import packetSniffer1 from '@/assets/packetsniffer1.png';
import classroom1 from '@/assets/classroom1.png';
import vox1 from "@/assets/vox1_1.png";
import osForensicsDesktopApp from '@/assets/osforensics/Desktopapp.png';
import osForensicsAiInvestigator from '@/assets/osforensics/ai_investigator.png';
import osForensicsBrowserArtifacts from '@/assets/osforensics/browser_artifacts.png';
import osForensicsCaseMgmt from '@/assets/osforensics/casemgmt.png';
import osForensicsExport from '@/assets/osforensics/export.png';
import osForensicsFilesystemBrowser from '@/assets/osforensics/filesystem_browser.png';
import osForensicsMemoryAnalysis from '@/assets/osforensics/memory_analysis.png';
import osForensicsRecent from '@/assets/osforensics/recent.png';
import osForensicsServices from '@/assets/osforensics/services.png';
import osForensicsSources from '@/assets/osforensics/sources.png';
import osForensicsTimeline from '@/assets/osforensics/timeline.png';
import nutriSuppliers01 from '@/assets/nutrisuppliers/01.png';
import nutriSuppliers02 from '@/assets/nutrisuppliers/02.png';
import nutriSuppliers03 from '@/assets/nutrisuppliers/03.png';
import nutriSuppliers04 from '@/assets/nutrisuppliers/04.png';
import nutriSuppliers05 from '@/assets/nutrisuppliers/05.png';
import nutriSuppliers06 from '@/assets/nutrisuppliers/06.png';
import nutriSuppliers07 from '@/assets/nutrisuppliers/07.png';
import nutriSuppliers08 from '@/assets/nutrisuppliers/08.png';
import nutriSuppliers09 from '@/assets/nutrisuppliers/09.png';
import llmVuln01 from '@/assets/llmvuln/01.png';
import llmVuln02 from '@/assets/llmvuln/02.png';
import llmVuln03 from '@/assets/llmvuln/03.png';
import llmVuln04 from '@/assets/llmvuln/04.png';
import llmVuln05 from '@/assets/llmvuln/05.png';
import llmVuln06 from '@/assets/llmvuln/06.png';
import llmVuln07 from '@/assets/llmvuln/07.png';
import negces01 from '@/assets/negces/01.png';
import negces02 from '@/assets/negces/02.png';
import negces03 from '@/assets/negces/03.png';
import negces04 from '@/assets/negces/04.png';
import negces05 from '@/assets/negces/05.png';
import negces06 from '@/assets/negces/06.png';
import negces07 from '@/assets/negces/07.png';
import negces08 from '@/assets/negces/08.png';
import negces09 from '@/assets/negces/09.png';
import negces10 from '@/assets/negces/10.png';
import negces11 from '@/assets/negces/11.png';
import negces12 from '@/assets/negces/12.png';
import styleverse01 from '@/assets/styleverse/01.png';
import styleverse02 from '@/assets/styleverse/02.png';
import styleverse03 from '@/assets/styleverse/03.png';
import styleverse04 from '@/assets/styleverse/04.png';
import styleverse05 from '@/assets/styleverse/05.png';
import styleverse06 from '@/assets/styleverse/06.png';
import styleverse07 from '@/assets/styleverse/07.png';
import styleverse08 from '@/assets/styleverse/08.png';
import styleverse09 from '@/assets/styleverse/09.png';
import styleverse10 from '@/assets/styleverse/10.png';
import styleverse11 from '@/assets/styleverse/11.png';
import styleverse12 from '@/assets/styleverse/12.png';
import styleverse13 from '@/assets/styleverse/13.png';
import styleverse14 from '@/assets/styleverse/14.png';
import styleverse15 from '@/assets/styleverse/15.png';
import styleverse16 from '@/assets/styleverse/16.png';
import styleverse17 from '@/assets/styleverse/17.png';
import styleverse18 from '@/assets/styleverse/18.png';
import styleverse19 from '@/assets/styleverse/19.png';
import styleverse20 from '@/assets/styleverse/20.png';
import styleverse21 from '@/assets/styleverse/21.png';
import styleverse22 from '@/assets/styleverse/22.png';


const projectDetails = {
  negceslab: {
    title: "Negces Lab Slot Booking Management System",
    image: negces01,
    gallery: [
      negces01,
      negces02,
      negces03,
      negces04,
      negces05,
      negces06,
      negces07,
      negces08,
      negces09,
      negces10,
      negces11,
      negces12,
    ],
    overview: "Comprehensive slot booking management platform for the NEGCES Lab at Amrita Vishwa Vidyapeetham, Chennai, designed to simplify lab reservations and optimize scheduling for students and faculty.",
    features: [
      "User-friendly interface for booking management",
      "Real-time availability tracking",
      "Automated email notifications for bookings",
      "Admin dashboard for managing reservations",
    ],
    tech: {
      "Frontend": "React.js + Tailwind CSS",
      "Backend": "Node.js + Express.js",
      "Database": "MongoDB",
      "Hosting": "Onpremise Linux Server",
    },
    github: "https://github.com/ShudarsanRegmi/negceslab",
    video: "https://youtu.be/MB_2VwwThAA?si=v4ofba-Y_cmInDXL",
    deployment: "https://intranet.ch.amrita.edu/negces",
  },
  osforensics: {
    title: "OSForensics : Attacker Favoured Linux System Forensics",
    image: osForensicsDesktopApp,
    gallery: [
      osForensicsDesktopApp,
      osForensicsAiInvestigator,
      osForensicsBrowserArtifacts,
      osForensicsCaseMgmt,
      osForensicsExport,
      osForensicsFilesystemBrowser,
      osForensicsMemoryAnalysis,
      osForensicsRecent,
      osForensicsServices,
      osForensicsSources,
      osForensicsTimeline,
    ],
    overview: "An AI-assisted desktop digital forensics application for disk, live, remote, and memory investigations with case management and structured reporting focused on adversory favored Linux system distros",
    abstract: "OSForensics is a forensic prototype developed for the CyberSheild 2026 challenge on Analysis of Privacy-Focused and Adversary-Favored Operating Systems. The solution targets Linux environments commonly leveraged for offensive security and anonymity workflows, including distributions such as Kali Linux, BlackArch, and Tails OS.\n\nThe solution is delivered as a desktop application packaged with Electron and developed using web technologies. This approach provides a classical desktop-app experience for investigators while retaining a fast and maintainable modern UI development stack.\n\nThe platform performs operating-system-aware inspection on either a live Linux filesystem context or a disk image/filesystem snapshot. It identifies Linux distribution characteristics, detects potentially misused tool artefacts, classifies findings into risk-oriented categories, and generates structured reports with supporting indicators.\n\nThe backend is intentionally forensic-aware and non-destructive, with read-only evidence handling, integrity metadata, provenance, and audit context. Analysis modules focus on package and filesystem traces, configuration artefacts, metadata, persistence indicators, and related system evidence that remain meaningful even in privacy-centric or partially amnesic environments.\n\nThe final output is actionable for investigators: identified OS profile, detected tools and traces, risk classification, and investigation observations in JSON/HTML/PDF formats",
    features: [
      "Multi-source forensic analysis across live systems, disk images, and remote environments",
      "Advanced artifact detection and system abuse pattern recognition",
      "Memory forensics engine with RAM dump analysis and hidden process detection",
      "AI-assisted investigation layer for intelligent timeline analysis",
      "Browser, multimedia, and specialized artifact extraction",
      "Evidence integrity with hashing and chain-of-custody support",
      "Comprehensive reporting with interactive desktop UI",
    ],
    tech: {
      "Frontend": "Electron Desktop App, React.js (Vite), JavaScript (JSX), CSS, Lucide React icons",
      "Backend": "Python 3, FastAPI, Uvicorn, Pydantic",
      "Forensics Engines": "Sleuth Kit via pytsk3, Volatility 3 (memory dumps), Linux /proc live artifact parsing",
      "AI/LLM Integration": "Ollama-backed analysis modules (timeline + memory insights)",
      "Data Layer": "JSON/file-based case and report persistence",
      "Reporting": "JSON export + structured HTML/PDF report generation",
      "Remote Collection": "SSH/SSHFS-based bounded remote acquisition workflows",
      "Runtime/Platform": "Linux-first forensic runtime",
      "Deployment": "Desktop app"
    },
    github: "https://github.com/ShudarsanRegmi/negceslab",
    video: "https://youtu.be/MB_2VwwThAA?si=v4ofba-Y_cmInDXL",
  },
  nutrisuppliers: {
    title: "NutriSuppliers - Digital Ledger Management System",
    image: nutriSuppliers01,
    gallery: [
      nutriSuppliers01,
      nutriSuppliers02,
      nutriSuppliers03,
      nutriSuppliers04,
      nutriSuppliers05,
      nutriSuppliers06,
      nutriSuppliers07,
      nutriSuppliers08,
      nutriSuppliers09,
    ],
    overview: "A comprehensive digital ledger management system designed for pharmacy and medical supply businesses. The application digitizes traditional paper-based ledger operations, providing real-time transaction tracking, client management, and detailed financial reporting with mobile accessibility.",
    abstract: "NutriSuppliers is a custom-built ledger management application developed for pharmacy and medical supply business named Nutrisuppliers transitioning from paper-based record-keeping to digital operations. The system addresses the specific workflow requirements of medical supply distributors by providing comprehensive transaction management, client relationship tracking, and inventory ledger functionality. Delivered as a responsive web application with Progressive Web App (PWA) capabilities, the platform ensures accessibility across desktop and mobile devices with offline functionality. The architecture prioritizes data security through Firebase-backed authentication and real-time synchronization, while maintaining an intuitive interface optimized for daily business operations. The system supports multi-user workflows with role-based access control and generates structured financial reports for business analysis and compliance.",
    features: [
      "Real-time digital ledger transaction management",
      "Transaction tracking with automated running balances",
      "Debit and credit recording with payment source tracking",
      "Monthly financial reports and analytics",
      "Multi-device support with Progressive Web App technology",
      "Offline functionality and data synchronization",
      "Image upload and document attachment capabilities",
      "Secure authentication and data isolation",
      "Responsive design for desktop and mobile platforms",
    ],
    tech: {
      "Frontend": "React, TypeScript, Vite, Tailwind CSS, Radix UI",
      "Backend": "Firebase (Authentication + Firestore real-time database)",
      // "Storage": "Appwrite (image and document storage)",
      "State Management": "TanStack Query",
      "Routing": "Wouter",
      "Form Validation": "React Hook Form with Zod",
      "Progressive Web App": "Service Workers, Web App Manifest, offline caching",
      "Localization": "Nepali date picker support",
      "Build": "Vite"
    },
    github: "https://github.com/ShudarsanRegmi/nutrisuppliers",
    video: "https://youtu.be/DvJa44Kr5tk?si=N9kTgEvpRBwdXAr1",
  },
  llmvulnscanner: {
    title: "Vulnerability Scanner for LLM-Integrated Chatbots",
    image: llmVuln01,
    gallery: [
      llmVuln01,
      llmVuln02,
      llmVuln03,
      llmVuln04,
      llmVuln05,
      llmVuln06,
      llmVuln07,
    ],
    overview: "A security assessment tool designed to evaluate the vulnerability of LLM-integrated chatbots, focusing on potential sensitive data leakage and unauthorized access risks. The scanner performs comprehensive analysis of chatbot interactions, configuration, and underlying LLM behavior to identify security weaknesses and provide actionable insights for mitigation.",
    abstract: "Large Language Models (LLMs) are increasingly being integrated into conversational agents across critical domains, ranging from customer support to task automation. While their capabilities have improved significantly, their susceptibility to adversarial inputs has raised serious concerns regarding safety and reliability. Specifically, threats such as prompt injection, jailbreaking, and training data leakage can cause LLMs to disclose sensitive information or perform unauthorized actions.\n\nIn this work, we propose a supervised learning-based vulnerability scanner designed to assess the security posture of LLM-integrated chatbots by analyzing their responses. The core of our system is a multi-class text classifier built on top of transformer architectures. The classifier is trained to assign severity scores to chatbot outputs, indicating the likelihood and extent of security violations. We constructed a labeled dataset of synthetic responses generated by popular LLMs, categorized into four severity levels ranging from benign to critical.\n\nFour transformer-based models, RoBERTa, DeBERTa, ELECTRA, and DistilBERT were trained and evaluated on this dataset. Our experimental results indicate that ELECTRA achieves the best overall performance, reaching a classification accuracy of 97.08%. The proposed system has been implemented as an end-to-end assessment tool, capable of interfacing with live chatbot APIs, executing adversarial payloads, and producing actionable security reports.",
     "features": [
    "LLM vulnerability scanning using categorized adversarial payloads (prompt injection, jailbreak, data extraction, system manipulation)",
    "Real-time scan progress streaming with Server-Sent Events (SSE), including live status, counters, and activity feed",
    "Flexible scan modes: single payload, multi-select payloads, category-based scans, and full payload-database scans",
    "Automated risk scoring of LLM responses with 4-level severity classification (Level 0-3)",
    "Payload management with TXT/CSV upload, custom category creation, and category-level retrieval/deletion APIs",
    "Integrated classifier testing tab for direct inference on arbitrary response text",
    "Report dashboard with severity distribution, vulnerability counts, detailed per-payload results, and chart visualizations",
    "Service health checks, structured logging, and containerized multi-service startup for local testing"
  ],
  
  "tech": {
    "Frontend": "Flask/Jinja2, JavaScript, Chart.js",
    "Backend": "Python 3, FastAPI, Flask, Uvicorn, Pydantic",
    "LLM": "Google Gemini API, Ollama",
    "Classifier": "RoBERTa (Hugging Face Inference API)",
    "Data": "JSON/TXT file storage",
    "Deployment": "Docker, Docker Compose"
  },
    github: "https://github.com/ShudarsanRegmi/negceslab",
  },
  sniffer: {
    title: "Network Packet Sniffer",
    image: packetSniffer1,
    overview: "A comprehensive packet sniffer tool built from scratch in C, designed to intercept and analyze network traffic at the protocol level. This project demonstrates deep understanding of network protocols and low-level programming.",
    features: [
      "Real-time packet capture using raw sockets",
      "Protocol-level filtering (TCP, UDP)",
      "Packet header analysis and decoding",
      "Command-line interface with filtering options",
    ],
    tech: {
      "Language": "C",
      "Sockets": "Raw Socket Programming",
      "Protocols": "TCP/UDP",
      "Platform": "Linux/Unix",
    },
    github: "https://github.com/ShudarsanRegmi/packetSniffer",
  },
  classroom: {
    title: "Classroom Management System",
    image: classroom1,
    overview: "A full-stack MERN application designed to simplify classroom operations through centralized communication, content sharing, attendance tracking, and role-based access control.",
    features: [
      "Class announcements and notifications",
      "Subject-wise material management",
      "Auto attendance tracking system",
      "Role-based access for students, CRs, and admins",
      "Exam scheduling and event organization",
      "PWA support for offline and mobile-friendly access"
    ],
    tech: {
      Frontend: "React.js + Material UI + Tailwind CSS",
      Backend: "Node.js + Express.js",
      Database: "MongoDB",
      Auth: "Firebase Authentication",
      Storage: "Cloudinary",
      Additional: "PWA, Docker"
    },
    github: "https://github.com/ShudarsanRegmi/ClassMgmtSys"
  },
  ecommerce: {
    title: "Fashion E-Commerce Website",
    // abstract: "A fully functional fashion e-commerce platform built as part of an internship project. Features include product browsing, user authentication, shopping cart, order management, and admin-side analytics for sales and inventory.",
    image: styleverse01,
    gallery: [
      styleverse01,
      styleverse02,
      styleverse03,
      styleverse04,
      styleverse05,
      styleverse06,
      styleverse07,
      styleverse08,
      styleverse09,
      styleverse10,
      styleverse11,
      styleverse12,
      styleverse13,
      styleverse14,
      styleverse15,
      styleverse16,
      styleverse17,
      styleverse18,
      styleverse19,
      styleverse20,
      styleverse21,
      styleverse22,
    ],
    overview: "A fully functional fashion e-commerce platform built as part of an internship project. Features include product browsing, user authentication, shopping cart, order management, and admin-side analytics for sales and inventory.",
    features: [
      "User authentication and product browsing",
      "Shopping cart and secure checkout",
      "Admin dashboard with inventory management",
      "Order tracking and sales analytics with Matplotlib"
    ],
    tech: {
      Frontend: "HTML, CSS, JavaScript",
      Backend: "Python + Flask",
      Database: "SQLite + SQLAlchemy",
      Visualization: "Matplotlib"
    },
    github: "https://github.com/ShudarsanRegmi/InfoSys-SpringBoard-Fashion-Ecommerce-Project",
    ppt: "https://drive.google.com/file/d/1GKc3T0Z360t-7JSwiGHljyKfj9KNgCMi/view"
  },
  voxtalkinux: {
    title: "VoxTalkinux – Minimal Voice Transcription Utility",
    image: vox1,
    overview: "A lightweight voice transcription tool designed for Linux, built around OpenAI Whisper. It wraps Whisper into a streamlined interface with support for background execution (via systemd), clipboard integration (xclip), and quick access through a keyboard shortcut. Ideal for users seeking fast and offline transcription workflows.",
    features: [
      "Offline transcription using OpenAI Whisper",
      "Systemd service for background listening",
      "Clipboard integration with xclip",
      "Triggerable via global keyboard shortcut",
      "Adaptable to Windows with minor environment tweaks"
    ],
    tech: {
      "Language": "Python",
      "Speech-to-Text": "OpenAI Whisper",
      "OS Integration": "Systemd, Xclip, Keyboard Shortcuts",
      "Platform": "Linux (Desktop)"
    },
    github: "https://github.com/ShudarsanRegmi/voxtalkinux/"
  }
};

interface ProjectModalProps {
  projectId: string;
  onClose: () => void;
}

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);
    let videoId = "";

    if (parsedUrl.hostname.includes("youtu.be")) {
      videoId = parsedUrl.pathname.replace("/", "");
    } else if (parsedUrl.pathname.includes("/watch")) {
      videoId = parsedUrl.searchParams.get("v") || "";
    } else if (parsedUrl.pathname.includes("/embed/")) {
      videoId = parsedUrl.pathname.split("/embed/")[1] || "";
    } else if (parsedUrl.pathname.includes("/shorts/")) {
      videoId = parsedUrl.pathname.split("/shorts/")[1] || "";
    }

    if (!videoId) return null;
    return `https://www.youtube.com/embed/${videoId}?rel=0`;
  } catch {
    return null;
  }
}

function getTechStackIcon(key: string): LucideIcon {
  const normalizedKey = key.toLowerCase();

  if (normalizedKey.includes("frontend")) return Monitor;
  if (normalizedKey.includes("backend")) return Server;
  if (normalizedKey.includes("database") || normalizedKey.includes("data layer")) return Database;
  if (normalizedKey.includes("hosting") || normalizedKey.includes("deployment")) return Cloud;
  if (normalizedKey.includes("engine")) return Cpu;
  if (normalizedKey.includes("ai") || normalizedKey.includes("llm")) return Brain;
  if (normalizedKey.includes("report")) return FileText;
  if (normalizedKey.includes("remote") || normalizedKey.includes("network")) return Network;
  if (normalizedKey.includes("runtime") || normalizedKey.includes("platform")) return Rocket;
  if (normalizedKey.includes("language") || normalizedKey.includes("sockets") || normalizedKey.includes("protocol")) return Code2;
  if (normalizedKey.includes("auth") || normalizedKey.includes("security")) return Shield;
  if (normalizedKey.includes("storage") || normalizedKey.includes("memory")) return HardDrive;
  if (normalizedKey.includes("speech") || normalizedKey.includes("voice") || normalizedKey.includes("audio")) return Mic;
  if (normalizedKey.includes("os integration")) return Lock;

  return Layers;
}

function getTechStackIconColor(key: string): string {
  const normalizedKey = key.toLowerCase();

  if (normalizedKey.includes("frontend")) return "#38bdf8";
  if (normalizedKey.includes("backend")) return "#22c55e";
  if (normalizedKey.includes("database") || normalizedKey.includes("data layer")) return "#10b981";
  if (normalizedKey.includes("hosting") || normalizedKey.includes("deployment")) return "#f59e0b";
  if (normalizedKey.includes("engine")) return "#ef4444";
  if (normalizedKey.includes("ai") || normalizedKey.includes("llm")) return "#a855f7";
  if (normalizedKey.includes("remote") || normalizedKey.includes("network")) return "#06b6d4";
  if (normalizedKey.includes("auth") || normalizedKey.includes("security")) return "#f97316";

  return "#60a5fa";
}

function getTechnologyTokens(value: string): string[] {
  return value
    .split(/,|\+|\(|\)|\//g)
    .flatMap((part) => part.split(/\bvia\b/gi))
    .map((token) => token.trim())
    .filter(Boolean)
    .filter((token, index, arr) => arr.findIndex((t) => t.toLowerCase() === token.toLowerCase()) === index);
}

function getTechnologyIcon(technology: string): ComponentType<{ className?: string; style?: CSSProperties }> {
  const token = technology.toLowerCase();

  if (token.includes("python")) return SiPython;
  if (token.includes("react")) return SiReact;
  if (token.includes("fastapi")) return SiFastapi;
  if (token.includes("mongodb")) return SiMongodb;
  if (token.includes("node")) return SiNodedotjs;
  if (token.includes("express")) return SiExpress;
  if (token.includes("tailwind")) return SiTailwindcss;
  if (token.includes("javascript") || token.includes("jsx")) return SiJavascript;
  if (token.includes("vite")) return SiVite;
  if (token.includes("electron")) return SiElectron;
  if (token.includes("pydantic")) return SiPydantic;
  if (token.includes("docker")) return SiDocker;
  if (token.includes("aws")) return SiAmazon;
  if (token.includes("gcp") || token.includes("google cloud")) return SiGooglecloud;
  if (token.includes("azure")) return Cloud;
  if (token.includes("firebase")) return SiFirebase;
  if (token.includes("cloudinary")) return SiCloudinary;
  if (token.includes("sqlite")) return SiSqlite;
  if (token.includes("flask")) return SiFlask;
  if (token.includes("ollama") || token.includes("whisper") || token.includes("openai")) return SiOpenai;
  if (token === "css" || token.includes("css3")) return SiCss3;
  if (token === "html" || token.includes("html5")) return SiHtml5;
  if (token.includes("ubuntu")) return SiUbuntu;
  if (token.includes("linux")) return SiLinux;
  if (token.includes("json")) return SiJson;

  if (token.includes("pytsk3")) return Terminal;
  if (token.includes("uvicorn")) return FlaskConical;
  if (token.includes("sqlalchemy")) return Database;
  if (token.includes("material ui")) return Monitor;
  if (token.includes("sleuth kit") || token.includes("tsk") || token.includes("volatility") || token.includes("forensic")) return ScanSearch;
  if (token.includes("matplotlib")) return Brain;
  if (token.includes("ssh") || token.includes("sshfs") || token.includes("socket") || token.includes("tcp") || token.includes("udp")) return Network;
  if (token.includes("unix") || token.includes("systemd")) return Binary;
  if (token.includes("firebase") || token.includes("auth")) return Shield;
  if (token.includes("cloud")) return Cloud;
  if (token.includes("runtime") || token.includes("platform") || token.includes("desktop")) return Box;
  if (token.includes("workflow") || token.includes("integration")) return Workflow;
  if (token.includes("remote") || token.includes("web") || token.includes("html")) return Globe;
  if (token.includes("report") || token.includes("pdf")) return FileText;
  if (token.includes("xclip") || token.includes("tool")) return Wrench;
  if (token.includes("proc") || token.includes("artifact")) return Search;

  return Link;
}

function getTechnologyIconColor(technology: string): string {
  const token = technology.toLowerCase();

  if (token.includes("python")) return "#3776ab";
  if (token.includes("react")) return "#61dafb";
  if (token.includes("fastapi")) return "#009688";
  if (token.includes("mongodb")) return "#47a248";
  if (token.includes("node")) return "#339933";
  if (token.includes("express")) return "#9ca3af";
  if (token.includes("tailwind")) return "#06b6d4";
  if (token.includes("javascript") || token.includes("jsx")) return "#f7df1e";
  if (token.includes("vite")) return "#646cff";
  if (token.includes("electron")) return "#47848f";
  if (token.includes("pydantic")) return "#e92063";
  if (token.includes("docker")) return "#2496ed";
  if (token.includes("aws")) return "#ff9900";
  if (token.includes("gcp") || token.includes("google cloud")) return "#4285f4";
  if (token.includes("azure")) return "#0078d4";
  if (token.includes("firebase")) return "#ffca28";
  if (token.includes("cloudinary")) return "#3448c5";
  if (token.includes("sqlite")) return "#003b57";
  if (token.includes("flask")) return "#d1d5db";
  if (token.includes("ollama") || token.includes("whisper") || token.includes("openai")) return "#10a37f";
  if (token === "css" || token.includes("css3")) return "#1572b6";
  if (token === "html" || token.includes("html5")) return "#e34f26";
  if (token.includes("ubuntu")) return "#e95420";
  if (token.includes("linux")) return "#facc15";
  if (token.includes("json")) return "#f59e0b";

  if (token.includes("sleuth kit") || token.includes("tsk") || token.includes("volatility") || token.includes("forensic")) return "#ef4444";
  if (token.includes("pytsk3") || token.includes("uvicorn") || token.includes("sqlalchemy")) return "#8b5cf6";
  if (token.includes("ssh") || token.includes("sshfs") || token.includes("tcp") || token.includes("udp") || token.includes("socket")) return "#06b6d4";
  if (token.includes("systemd") || token.includes("unix")) return "#14b8a6";
  if (token.includes("report") || token.includes("pdf")) return "#fb7185";

  return "#60a5fa";
}

export function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  const project = projectDetails[projectId as keyof typeof projectDetails];
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [isFullscreenGallery, setIsFullscreenGallery] = useState(false);

  const galleryImages = useMemo(() => {
    if (project && "gallery" in project && Array.isArray(project.gallery) && project.gallery.length > 0) {
      return project.gallery;
    }

    return project ? [project.image] : [];
  }, [project]);

  const videoEmbedUrl = useMemo(() => {
    if (project && "video" in project && project.video) {
      return getYouTubeEmbedUrl(project.video);
    }

    return null;
  }, [project]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    setCurrentGalleryIndex(0);
    setIsFullscreenGallery(false);
  }, [projectId]);

  if (!project) return null;

  const hasGallery = "gallery" in project && Array.isArray(project.gallery) && project.gallery.length > 0;
  const hasAbstract = "abstract" in project && Boolean(project.abstract);
  const hasVideo = "video" in project && Boolean(project.video) && Boolean(videoEmbedUrl);
  const hasDeployment = "deployment" in project && Boolean(project.deployment);
  const hasPpt = "ppt" in project && Boolean(project.ppt);
  const canBrowseGallery = galleryImages.length > 1;

  const showPreviousImage = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const showNextImage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="glass-panel dark:glass-panel light:glass-panel-light rounded-3xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl border border-border"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-bold gradient-text">{project.title}</h3>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 transition-all duration-300"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <div className="relative">
                <img
                  src={galleryImages[currentGalleryIndex]}
                  alt={`${project.title} preview ${currentGalleryIndex + 1}`}
                  className="w-full h-64 object-cover rounded-2xl"
                />

                {canBrowseGallery && (
                  <button
                    onClick={() => setIsFullscreenGallery(true)}
                    className="absolute right-3 top-3 p-2 rounded-full bg-black/45 text-white hover:bg-black/65 transition-colors"
                    aria-label="Open fullscreen gallery"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                )}

                {canBrowseGallery && (
                  <>
                    <button
                      onClick={showPreviousImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/45 text-white hover:bg-black/65 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={showNextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/45 text-white hover:bg-black/65 transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {hasGallery && (
                <div className="flex flex-wrap gap-2">
                  {galleryImages.map((img, index) => (
                    <button
                      key={`${img}-${index}`}
                      onClick={() => setCurrentGalleryIndex(index)}
                      className={`h-14 w-20 rounded-lg overflow-hidden border transition-all ${
                        index === currentGalleryIndex ? "border-[var(--accent-blue)]" : "border-border"
                      }`}
                      aria-label={`Open gallery image ${index + 1}`}
                    >
                      <img src={img} alt={`${project.title} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {hasVideo && (
              <div>
                <h4 className="text-xl font-bold mb-3 text-[var(--accent-blue)]">
                  Demo Video
                </h4>
                <div className="rounded-2xl overflow-hidden border border-border bg-black">
                  <iframe
                    src={videoEmbedUrl || undefined}
                    title={`${project.title} video`}
                    className="w-full aspect-video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold mb-4 text-[var(--accent-blue)]">
                  Project Overview
                </h4>
                <p className="text-muted-foreground mb-6">
                  {project.overview}
                </p>

                {hasAbstract && (
                  <>
                    <h4 className="text-xl font-bold mb-4 text-[var(--accent-blue)]">
                      Abstract
                    </h4>
                    <p className="text-muted-foreground mb-6 whitespace-pre-line">
                      {project.abstract}
                    </p>
                  </>
                )}
                
                <h4 className="text-xl font-bold mb-4 text-[var(--accent-blue)]">
                  Key Features
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  {project.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 text-[var(--accent-purple)]">
                  Tech Stack
                </h4>
                <div className="space-y-3">
                  {Object.entries(project.tech).map(([key, value]) => {
                    const TechStackIcon = getTechStackIcon(key);
                    const techStackIconColor = getTechStackIconColor(key);
                    const technologies = getTechnologyTokens(value);

                    return (
                    <div key={key} className="glass-panel dark:glass-panel light:glass-panel-light rounded-xl p-4 bg-background/50">
                      <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                        <TechStackIcon className="w-4 h-4 shrink-0" style={{ color: techStackIconColor }} />
                        <p className="text-xs font-semibold tracking-wide uppercase">
                          {key}
                        </p>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {technologies.map((technology) => {
                          const TechnologyIcon = getTechnologyIcon(technology);
                          const technologyIconColor = getTechnologyIconColor(technology);

                          return (
                            <span
                              key={`${key}-${technology}`}
                              className="inline-flex items-center gap-1.5 rounded-full border border-border/80 px-2.5 py-1 text-xs text-foreground/90 bg-background/60"
                            >
                              <TechnologyIcon className="w-3.5 h-3.5 shrink-0" style={{ color: technologyIconColor }} />
                              {technology}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {(project.github || hasDeployment || hasPpt) && (
              <div className="pt-6 border-t border-border flex justify-end gap-4">
                {hasPpt && (
                  <a
                    href={project.ppt}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
                  >
                    <FileText className="w-5 h-5" />
                    View Presentation
                  </a>
                )}
                {hasDeployment && (
                  <a
                    href={project.deployment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
                  >
                    <Globe className="w-5 h-5" />
                    View Deployment
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>

      {isFullscreenGallery && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] bg-black/95 flex items-center justify-center"
          onClick={() => setIsFullscreenGallery(false)}
        >
          <div className="relative w-full h-full max-w-[95vw] max-h-[95vh] flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[currentGalleryIndex]}
              alt={`${project.title} fullscreen ${currentGalleryIndex + 1}`}
              className="w-full h-full object-contain"
            />

            <button
              onClick={() => setIsFullscreenGallery(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/45 text-white hover:bg-black/65 transition-colors"
              aria-label="Exit fullscreen gallery"
            >
              <Minimize2 className="w-4 h-4" />
            </button>

            {canBrowseGallery && (
              <>
                <button
                  onClick={showPreviousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/45 text-white hover:bg-black/65 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={showNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/45 text-white hover:bg-black/65 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
