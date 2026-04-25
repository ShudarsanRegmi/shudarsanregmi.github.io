import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Trophy,
  Calendar,
  Award,
  Shield,
  BookOpen,
  ChevronDown,
  Sparkles,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import secondSemImg1 from "@/assets/second_sem_rank1_1.jpeg";
import secondSemImg2 from "@/assets/second_sem_rank1_2.jpeg";
import secondSemImg3 from "@/assets/second_sem_rank1_3.jpeg";
import research1 from "@/assets/research_1_1.png";
import research2 from "@/assets/research_1_2.png";
import firstSemImg1 from "@/assets/first_sem_rank_3_1.jpeg";
import cybershieldPlaceholder1 from "@/assets/cybershield_placeholder_1.svg";
import cybershieldPlaceholder2 from "@/assets/cybershield_placeholder_2.svg";
import cybershieldPlaceholder3 from "@/assets/cybershield_placeholder_3.svg";

type AchievementKind = "hackathon" | "academic" | "research";

type AchievementFact = {
  label: string;
  value: string;
};

type AchievementDetail = {
  kind: AchievementKind;
  title: string;
  subtitle: string;
  date: string;
  rank: string;
  description: string;
  highlights: string[];
  facts: AchievementFact[];
  images: string[];
  recognition: string;
  impact: string;
  links: Array<{ title: string; url: string }>;
};

const achievementDetails: Record<string, AchievementDetail> = {
  cybershield: {
    kind: "hackathon",
    title: "CyberShield Hackathon Winner",
    subtitle: "Team Trace Trackers - 24-hour Cybersecurity Challenge",
    date: "2026",
    rank: "Winner",
    description:
      "Our team Trace Trackers secured a win at the CyberShield Hackathon, a 24-hour cybersecurity challenge organized by the Department of CSE, Amrita Vishwa Vidyapeetham, Chennai Campus. This was my first hackathon victory and a major milestone in my cybersecurity journey.",
    highlights: [
      "Built OSForensics, a desktop forensic analysis application for Linux and attacker-preferred security distributions",
      "Implemented core forensic workflows: case management, file system exploration, deleted file recovery, and timeline reconstruction",
      "Engineered attack-chain analysis with command categorization, frequency analysis, and behavioral profiling",
      "Added browser and multimedia artifact analysis, including entropy-based steganography checks and bit-plane inspection",
      "Integrated memory forensics modules for process trees, kernel modules, and shared library analysis",
      "Generated structured HTML and PDF reports with integrity-preservation and chain-of-custody considerations",
      "Designed a multi-agent AI orchestration model with a supervisory agent coordinating specialized worker agents",
      "Received appreciation from Tamil Nadu Police Cybercrime Wing with guidance for real-world refinement and scaling",
    ],
    facts: [
      { label: "Event", value: "CyberShield Hackathon" },
      { label: "Duration", value: "24 Hours" },
      { label: "Team", value: "Trace Trackers" },
      { label: "Product", value: "OSForensics" },
      { label: "Outcome", value: "Winner" },
      { label: "Teammates", value: "Hirthik C, Maangalya K S" },
    ],
    images: [cybershieldPlaceholder1, cybershieldPlaceholder2, cybershieldPlaceholder3],
    recognition: "Official Hackathon Winner - CyberShield 2026",
    impact:
      "This win validated our ability to deliver a technically deep cybersecurity product under extreme time pressure. The experience strengthened my confidence in digital forensics, system design, and team execution, and opened a pathway to evolve OSForensics for practical investigative use cases.",
    links: [
      { title: "Hackathon Post (Add Link)", url: "#" },
      { title: "OSForensics Demo (Add Link)", url: "#" },
    ],
  },
  semester1: {
    kind: "academic",
    title: "3rd Rank in 1st Semester",
    subtitle: "Academic Excellence Foundation",
    date: "First Semester 2023",
    rank: "3rd Position",
    description:
      "Achieved 3rd position in first semester with strong performance in foundational computer science courses. This achievement marked the beginning of consistent academic excellence.",
    highlights: [
      "Strong foundation in programming fundamentals",
      "Excellent performance in mathematics and logic",
      "Active participation in coding assignments",
      "Consistent study habits and time management",
    ],
    facts: [
      { label: "Semester", value: "First Semester" },
      { label: "Rank", value: "3rd Position" },
      { label: "Score", value: "9.07 SGPA" },
      { label: "Focus", value: "Core CS Foundations" },
    ],
    images: [firstSemImg1],
    recognition: "Top 3 Performance Recognition",
    impact:
      "This achievement boosted confidence and set the foundation for future academic success. It demonstrated strong analytical skills and dedication to learning.",
    links: [{ title: "Certificate", url: "#" }],
  },
  semester2: {
    kind: "academic",
    title: "1st Rank in 2nd Semester",
    subtitle: "Outstanding Academic Achievement",
    date: "Second Semester 2024",
    rank: "1st Position",
    description:
      "Secured 1st position in second semester with exceptional SGPA of 9.35. A wonderful semester with outstanding academic performance across all subjects.",
    highlights: [
      "Exceptional performance in advanced programming",
      "Leadership in technical projects and presentations",
      "Mentoring fellow students in difficult subjects",
      "Outstanding project submissions and practical work",
    ],
    facts: [
      { label: "Semester", value: "Second Semester" },
      { label: "Rank", value: "1st Position" },
      { label: "Score", value: "9.35 SGPA" },
      { label: "Recognition", value: "Dean's List" },
    ],
    images: [secondSemImg1, secondSemImg2, secondSemImg3],
    recognition: "Dean's List Recognition & Gold Medal",
    impact:
      "This achievement demonstrated mastery of advanced concepts and established leadership within the academic community. The high SGPA reflected deep understanding and consistent excellence.",
    links: [{ title: "Certificate", url: "#" }],
  },
  research: {
    kind: "research",
    title: "Research Publication",
    subtitle: "Automatic Detection of Leaf Diseases in Hibiscus Plants",
    date: "2024",
    rank: "Co-author",
    description:
      "Co-authored a research paper focusing on automatic detection of leaf diseases in hibiscus plants using deep-learning strategies.",
    highlights: [
      "Deep learning-based early detection of hibiscus plant diseases using CNNs",
      "Integration of Transfer Learning for robust performance on limited datasets",
      "User-friendly, real-time diagnostic system tailored for farmers and agronomists",
      "Non-invasive image analysis approach adaptable to multiple crops and diseases",
      "High-accuracy model ensuring sustainable cultivation with reduced pesticide use",
    ],
    facts: [
      { label: "Area", value: "Agricultural Technology" },
      { label: "Focus", value: "Early Disease Detection" },
      { label: "Method", value: "CNN + Transfer Learning" },
      { label: "Status", value: "Published" },
    ],
    images: [research1, research2],
    recognition: "Academic Research Publication",
    impact:
      "This publication contributes to the agricultural technology domain by applying cutting-edge deep learning techniques to real-world farming problems. It showcases innovation in plant disease diagnostics, strengthens credibility in precision agriculture research, and opens pathways for interdisciplinary advancements and future deployments across diverse crop systems.",
    links: [
      { title: "Research Paper", url: "https://ieeexplore.ieee.org/document/10803253" },
      { title: "Conference Proceedings", url: "https://ieeexplore.ieee.org/xpl/conhome/10803100/proceeding" },
    ],
  },
};

interface AchievementModalProps {
  achievementId: string;
  onClose: () => void;
}

function ExpandableSection({
  title,
  icon: Icon,
  defaultOpen = false,
  children,
}: {
  title: string;
  icon: typeof Shield;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  return (
    <details
      open={defaultOpen}
      className="group rounded-2xl border border-border/70 bg-background/60 backdrop-blur-sm overflow-hidden"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent-blue)]/10 text-[var(--accent-blue)]">
            <Icon className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold tracking-wide uppercase">{title}</span>
        </div>
        <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" />
      </summary>
      <div className="px-5 pb-5">{children}</div>
    </details>
  );
}

export function AchievementModal({ achievementId, onClose }: AchievementModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreenImage, setIsFullscreenImage] = useState(false);
  const achievement = achievementDetails[achievementId];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    setCurrentImageIndex(0);
    setIsFullscreenImage(false);
  }, [achievementId]);

  const canBrowseGallery = achievement.images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % achievement.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + achievement.images.length) % achievement.images.length);
  };

  const mainImage = useMemo(() => achievement.images[currentImageIndex], [achievement.images, currentImageIndex]);

  const snapshotTitle =
    achievement.kind === "hackathon"
      ? "Hackathon Snapshot"
      : achievement.kind === "research"
        ? "Research Snapshot"
        : "Academic Snapshot";

  const SnapshotIcon = achievement.kind === "hackathon" ? Shield : achievement.kind === "research" ? BookOpen : Award;
  const subjectRows =
    achievement.kind === "academic"
      ? achievementId === "semester2"
        ? [
            { name: "Programming Lab", grade: "O" },
            { name: "Engineering Physics", grade: "A+" },
            { name: "Computer Architecture", grade: "A+" },
            { name: "Computer Programming", grade: "A+" },
            { name: "Cyber Security Essentials", grade: "A+" },
            { name: "Number Theory", grade: "A+" },
          ]
        : [
            { name: "Principles of Engineering", grade: "A+" },
            { name: "Linear Algebra", grade: "A+" },
            { name: "Algorithmic Thinking & PS", grade: "A+" },
            { name: "Computer Hardware", grade: "A" },
          ]
      : [];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="glass-panel dark:glass-panel light:glass-panel-light w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-3xl border border-border bg-background/95 backdrop-blur-xl shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="shrink-0 border-b border-border px-6 py-5 md:px-8 md:py-6">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 min-w-0">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 tracking-[0.22em] text-[11px] font-semibold text-foreground/80">
                    <Trophy className="h-3.5 w-3.5 text-[var(--accent-blue)]" />
                    {achievement.rank}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 tracking-[0.22em] text-[11px] font-semibold text-foreground/80">
                    <Calendar className="h-3.5 w-3.5 text-[var(--accent-blue)]" />
                    {achievement.date}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold gradient-text leading-tight">{achievement.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{achievement.subtitle}</p>
              </div>

              <button
                onClick={onClose}
                className="shrink-0 rounded-xl p-2 transition-colors hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10"
                aria-label="Close achievement dialog"
              >
                <X className="h-6 w-6 text-foreground" />
              </button>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto [scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.25)_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/35">
            <div className="px-6 py-6 md:px-8 md:py-8 space-y-8">
              <div className="space-y-3">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-black shadow-lg">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsFullscreenImage(true);
                    }}
                    className="group relative block w-full overflow-hidden text-left"
                    aria-label="Open achievement image in fullscreen"
                  >
                    <img
                      src={mainImage}
                      alt={`${achievement.title} preview ${currentImageIndex + 1}`}
                      className="h-[22rem] w-full object-cover md:h-[28rem]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute right-4 top-4 flex items-center gap-2 rounded-full bg-black/50 px-3 py-2 text-white backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Maximize2 className="h-4 w-4" />
                      <span className="text-[11px] font-medium uppercase tracking-[0.22em]">Expand</span>
                    </div>
                  </button>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  {canBrowseGallery && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}

                  <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/85 backdrop-blur-sm">
                    Image {currentImageIndex + 1} of {achievement.images.length}
                  </div>
                </div>

                {achievement.images.length > 1 && (
                  <div className="flex flex-wrap gap-2">
                    {achievement.images.map((img, index) => (
                      <button
                        key={`${achievementId}-thumb-${index}-${img}`}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`group relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border transition-all sm:h-16 sm:w-16 ${
                          index === currentImageIndex ? "border-[var(--accent-blue)] ring-2 ring-[var(--accent-blue)]/40" : "border-border"
                        }`}
                        aria-label={`Open gallery image ${index + 1}`}
                      >
                        <img
                          src={img}
                          alt={`${achievement.title} thumbnail ${index + 1}`}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid gap-8 lg:grid-cols-[1.25fr_0.95fr]">
                <div className="space-y-5">
                  <ExpandableSection title="Overview" icon={BookOpen} defaultOpen>
                    <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </ExpandableSection>

                  <ExpandableSection title="Key Highlights" icon={Sparkles} defaultOpen>
                    <div className="space-y-3">
                      {achievement.highlights.map((highlight, index) => (
                        <motion.div
                          key={`${achievementId}-highlight-${index}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/50 p-4"
                        >
                          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--accent-purple)]" />
                          <span className="text-sm md:text-[15px] leading-relaxed text-muted-foreground">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </ExpandableSection>

                  <ExpandableSection title="Impact & Recognition" icon={Award} defaultOpen>
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">{achievement.impact}</p>
                      <div className="rounded-2xl border border-[var(--accent-blue)]/15 bg-gradient-to-r from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10 p-4">
                        <p className="font-medium text-[var(--accent-blue)]">{achievement.recognition}</p>
                      </div>
                    </div>
                  </ExpandableSection>
                </div>

                <div className="space-y-5">
                  <div className="rounded-3xl border border-border/70 bg-background/60 p-5 shadow-sm backdrop-blur-sm">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent-blue)]/10 text-[var(--accent-blue)]">
                          <SnapshotIcon className="h-5 w-5" />
                        </span>
                        <div>
                          <h4 className="text-lg font-bold text-foreground">{snapshotTitle}</h4>
                          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Relevant property set</p>
                        </div>
                      </div>
                    </div>

                    {achievement.kind === "academic" ? (
                      <div className="space-y-4">
                        <div className="rounded-2xl border border-border/70 bg-gradient-to-br from-[var(--accent-blue)]/12 to-[var(--accent-purple)]/12 p-5 text-center">
                          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">GPA / Status</div>
                          <div className="mt-2 text-4xl font-black tracking-tight text-[var(--accent-blue)]">
                            {achievement.facts.find((item) => item.label === "Score")?.value}
                          </div>
                          <div className="mt-1 text-sm text-muted-foreground">{achievement.rank}</div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          {achievement.facts.map((fact, index) => (
                            <div key={`${achievementId}-fact-${fact.label}-${index}`} className="rounded-2xl border border-border/70 bg-background/55 p-4">
                              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{fact.label}</div>
                              <div className="mt-1 text-sm font-semibold text-foreground">{fact.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          {achievement.facts.map((fact, index) => (
                            <div key={`${achievementId}-fact-${fact.label}-${index}`} className="rounded-2xl border border-border/70 bg-background/55 p-4">
                              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{fact.label}</div>
                              <div className="mt-1 text-sm font-semibold text-foreground">{fact.value}</div>
                            </div>
                          ))}
                        </div>

                        <div className="rounded-2xl border border-border/70 bg-gradient-to-br from-white/8 to-transparent p-4">
                          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Focus</div>
                          <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
                            {achievement.kind === "hackathon"
                              ? "An event-driven build focused on rapid forensic analysis, autonomous reasoning, and judge-ready presentation quality."
                              : "A research-driven study focused on accuracy, practical applicability, and scientific relevance."}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {achievement.kind === "academic" && (
                    <ExpandableSection title="Subject Breakdown" icon={Trophy}>
                      <div className="grid gap-2">
                        {subjectRows.map((subject, index) => (
                          <div
                            key={`${achievementId}-subject-${subject.name}-${index}`}
                            className="flex items-center justify-between rounded-xl border border-border/70 bg-background/55 px-4 py-3"
                          >
                            <span className="text-sm text-muted-foreground">{subject.name}</span>
                            <span className="text-sm font-semibold text-[var(--accent-blue)]">{subject.grade}</span>
                          </div>
                        ))}
                      </div>
                    </ExpandableSection>
                  )}
                </div>
              </div>

              {(achievement.links?.length ?? 0) > 0 && (
                <div className="pt-2 border-t border-border flex flex-wrap justify-end gap-4">
                  {achievement.links.map((link, index) => (
                    <a
                      key={`${achievementId}-link-${index}-${link.title}`}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
                    >
                      <ExternalLink className="h-5 w-5" />
                      {link.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {isFullscreenImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsFullscreenImage(false)}
        >
          <div
            className="relative flex h-full w-full max-w-[95vw] max-h-[95vh] items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={mainImage}
              alt={`${achievement.title} fullscreen ${currentImageIndex + 1}`}
              className="max-h-full max-w-full object-contain"
            />

            <button
              onClick={() => setIsFullscreenImage(false)}
              className="absolute top-4 right-4 rounded-full bg-black/45 p-2 text-white hover:bg-black/65 transition-colors"
              aria-label="Exit fullscreen image"
            >
              <Minimize2 className="h-4 w-4" />
            </button>

            {canBrowseGallery && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white hover:bg-black/65 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white hover:bg-black/65 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}