import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import packetSniffer1 from '@/assets/packetsniffer1.png';
import classroom1 from '@/assets/classroom1.png';
import vox1 from "@/assets/vox1_1.png";
import negcesthumb from "@/assets/negcesthumb.png";
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


const projectDetails = {
  negceslab: {
    title: "Negces Lab Booking Management System",
    image: negcesthumb,
    overview: "Comprehensive booking management platform for the NEGCES Lab at Amrita Vishwa Vidyapeetham, Chennai, designed to simplify lab reservations and optimize scheduling for students and faculty.",
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
      "Hosting": "AWS",
    },
    github: "https://github.com/ShudarsanRegmi/negceslab",
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
      "Frontend": "Electron Desktop App, React.js (Vite), JavaScript (JSX), custom CSS, Lucide React icons",
      "Backend": "Python 3, FastAPI, Uvicorn, Pydantic",
      "Forensics Engines": "Sleuth Kit via pytsk3, Volatility 3 (memory dumps), Linux /proc live artifact parsing",
      "AI/LLM Integration": "Ollama-backed analysis modules (timeline + memory insights)",
      "Data Layer": "JSON/file-based case and report persistence",
      "Reporting": "JSON export + structured HTML/PDF report generation",
      "Remote Collection": "SSH/SSHFS-based bounded remote acquisition workflows",
      "Runtime/Platform": "Linux-first forensic runtime",
      "Deployment": "Local/self-hosted (cloud deployment target can be added separately, e.g., AWS/GCP/Azure)"
    },
    github: "https://github.com/ShudarsanRegmi/negceslab",
    video: "https://youtu.be/MB_2VwwThAA?si=v4ofba-Y_cmInDXL",
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
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1200&h=600&q=80",
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
    github: "https://github.com/ShudarsanRegmi/InfoSys-SpringBoard-Fashion-Ecommerce-Project"
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
                  {Object.entries(project.tech).map(([key, value]) => (
                    <div key={key} className="glass-panel dark:glass-panel light:glass-panel-light rounded-xl p-4 bg-background/50">
                      <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-2">
                        {key}
                      </p>
                      <p className="font-medium text-foreground text-sm leading-relaxed break-words whitespace-pre-wrap">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {project.github && (
              <div className="pt-6 border-t border-border flex justify-end">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
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
