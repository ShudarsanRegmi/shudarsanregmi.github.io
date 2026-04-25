import { motion } from "framer-motion";
import { TrendingUp, FileText, Sparkles, Shield, Trophy, ArrowRight } from "lucide-react";
import { useState } from "react";
import { AchievementModal } from "@/components/AchievementModal";
import badgeRankRed from "@/assets/badge_rank_red.svg";
import badgeRankGold from "@/assets/badge_rank_gold.svg";
import badgeRankSilver from "@/assets/badge_rank_silver.svg";
import badgeRankBronze from "@/assets/badge_rank_bronze.svg";
import badgeResearch from "@/assets/badge_research.svg";

const achievements = [
  {
    id: "cybershield",
    icon: Shield,
    date: "2026",
    title: "CyberShield Hackathon Winner",
    subtitle: "Team Trace Trackers • 24-hour cybersecurity sprint",
    description:
      "Built OSForensics under extreme time pressure and secured the winning position at CyberShield Hackathon.",
    stripe: "from-amber-400/35 via-orange-500/20 to-rose-500/20",
    dot: "bg-amber-400",
    badge: "Winner",
    shieldImage: badgeRankGold,
  },
  {
    id: "research",
    icon: FileText,
    date: "2024",
    title: "Research Publication",
    subtitle: "Scopus indexed publication",
    description:
      "Co-authored and published applied research with practical impact in real-world domains.",
    stripe: "from-emerald-400/35 via-teal-500/20 to-cyan-500/20",
    dot: "bg-emerald-400",
    badge: "Published",
    shieldImage: badgeResearch,
  },
  {
    id: "semester2",
    icon: TrendingUp,
    date: "Second Semester 2024",
    title: "1st Rank in 2nd Semester",
    subtitle: "Highest semester performance",
    description:
      "Secured first position with outstanding consistency across technical and analytical coursework.",
    stripe: "from-violet-400/35 via-fuchsia-500/20 to-indigo-500/20",
    dot: "bg-violet-400",
    badge: "9.34 SGPA",
    shieldImage: badgeRankRed,
  },
  {
    id: "semester1",
    icon: TrendingUp,
    date: "First Semester 2023",
    title: "3rd Rank in 1st Semester",
    subtitle: "Strong academic foundation",
    description:
      "Established a high-performance baseline early with top-3 results in foundational subjects.",
    stripe: "from-sky-400/35 via-blue-500/20 to-cyan-500/20",
    dot: "bg-sky-400",
    badge: "9.07 SGPA",
    shieldImage: badgeRankBronze,
  },
];

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<string | null>(null);

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            <Sparkles className="h-4 w-4 text-[var(--accent-blue)]" />
            Milestone Chronicle
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-black tracking-tight gradient-text">Achievements</h2>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-white/10 via-white/30 to-white/10 lg:block" />

          <div className="space-y-10">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const isRight = index % 2 === 0;

              return (
                <motion.button
                  key={achievement.id}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.995 }}
                  type="button"
                  onClick={() => setSelectedAchievement(achievement.id)}
                  className="group relative w-full text-left"
                >
                  <div className={`grid gap-5 lg:grid-cols-2 ${isRight ? "" : "lg:[&>*:first-child]:order-2"}`}>
                    <div className="hidden lg:block" />

                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-background/55 backdrop-blur-lg">
                      <div className={`absolute inset-y-0 left-0 w-3 bg-gradient-to-b ${achievement.stripe}`} />

                      <div className="p-6 md:p-7">
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                            <Trophy className="h-3.5 w-3.5 text-[var(--accent-blue)]" />
                            {achievement.date}
                          </div>
                          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-white/15 to-white/5 px-3 py-1.5 text-xs font-semibold text-foreground/90">
                            <span>{achievement.badge}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-5">
                          <div className="relative mt-0 h-24 w-24 shrink-0 md:h-28 md:w-28">
                            <img
                              src={achievement.shieldImage}
                              alt={`${achievement.title} medal badge`}
                              className="h-24 w-24 md:h-28 md:w-28 object-contain drop-shadow-[0_14px_22px_rgba(0,0,0,0.45)]"
                            />
                            <div className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white shadow-lg">
                              <Icon className="h-4 w-4" />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold tracking-tight">{achievement.title}</h3>
                            <p className="mt-1 text-sm text-[var(--accent-blue)]">{achievement.subtitle}</p>
                            <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                              {achievement.description}
                            </p>
                          </div>
                        </div>

                        <div className="mt-5 inline-flex items-center gap-2 text-sm text-foreground/80 group-hover:text-[var(--accent-blue)] transition-colors">
                          Open full details
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-background lg:block">
                    <span className={`block h-full w-full rounded-full ${achievement.dot}`} />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {selectedAchievement && (
          <AchievementModal
            achievementId={selectedAchievement}
            onClose={() => setSelectedAchievement(null)}
          />
        )}
      </div>
    </section>
  );
}
