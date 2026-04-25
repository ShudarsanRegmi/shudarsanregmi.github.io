import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { CertificationModal } from "@/components/CertificationModal";
import rhcsaBadge from "@/assets/certs/rhcsa_badge.png";
import awsBadge from "@/assets/certs/awsbadge.png";
import isc2Badge from "@/assets/certs/isc2badge.png";
import udemyBadge from "@/assets/certs/udemy.webp";

type CertificationCard = {
  id: string;
  title: string;
  description: string;
  issuer: string;
  date: string;
  level: string;
  bgColor: string;
  accent: string;
  badge?: string;
};

const industryCertifications: CertificationCard[] = [
  {
    id: "rhcsa",
    badge: rhcsaBadge,
    title: "Red Hat Certified System Administrator (RHCSA)",
    description: "Linux administration, permissions, storage, services, networking, and SELinux hardening.",
    issuer: "Red Hat",
    date: "2024",
    level: "System Administration",
    bgColor: "from-sky-500/20 to-cyan-500/10",
    accent: "border-sky-400/30",
  },
  {
    id: "aws",
    badge: awsBadge,
    title: "AWS Certified Cloud Practitioner",
    description: "Core AWS services, cloud security, pricing models, and global infrastructure fundamentals.",
    issuer: "Amazon Web Services",
    date: "2024",
    level: "Cloud Computing",
    bgColor: "from-amber-500/20 to-orange-500/10",
    accent: "border-amber-400/30",
  },
  {
    id: "isc2",
    badge: isc2Badge,
    title: "ISC2 Certified in Cybersecurity (CC)",
    description: "Security principles, risk management, access control, operations, and incident response.",
    issuer: "ISC2",
    date: "2024",
    level: "Cybersecurity",
    bgColor: "from-emerald-500/20 to-green-500/10",
    accent: "border-emerald-400/30",
  },
];

const trainingAndCourses: CertificationCard[] = [
  {
    id: "llm",
    badge: udemyBadge,
    title: "LLM Security Course",
    description: "Prompt injection, AI security, privacy, and secure deployment of LLM systems.",
    issuer: "Udemy",
    date: "2024",
    level: "AI Security",
    bgColor: "from-violet-500/20 to-fuchsia-500/10",
    accent: "border-violet-400/30",
  },
];

export default function Certifications() {
  const [selectedCertification, setSelectedCertification] = useState<string | null>(null);

  const renderCertificationCard = (cert: CertificationCard, index: number) => (
    <motion.div
      key={cert.id}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.3,
        ease: "easeOut"
      }}
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
      className={`cursor-pointer relative group overflow-hidden rounded-3xl border ${cert.accent} bg-gradient-to-br ${cert.bgColor} shadow-xl backdrop-blur-xl`}
      onClick={() => setSelectedCertification(cert.id)}
    >
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-5 md:p-6">
        <div className="grid md:grid-cols-[200px_1fr] gap-6 items-start">
          <div className="flex flex-col items-center gap-4">
            {cert.badge && (
              <img
                src={cert.badge}
                alt={`${cert.title} badge`}
                className="h-48 w-48 object-contain drop-shadow-lg"
              />
            )}
            <div className="flex items-center gap-2 rounded-full bg-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
              {cert.level}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold leading-tight group-hover:text-white transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="mt-2 text-white/75">
                  {cert.description}
                </p>
              </div>
              <div className="hidden lg:flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/90 shrink-0">
                <ExternalLink className="h-4 w-4" />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-white/75">
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 font-medium text-white/90">
                {cert.issuer}
              </span>
              <span>•</span>
              <span>{cert.date}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {cert.id === "rhcsa" && ["Linux", "SELinux", "Networking", "Shell Scripting"].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-black/15 px-3 py-1 text-xs text-white/80">{tag}</span>
              ))}
              {cert.id === "aws" && ["EC2", "S3", "IAM", "Cloud Security"].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-black/15 px-3 py-1 text-xs text-white/80">{tag}</span>
              ))}
              {cert.id === "isc2" && ["Risk", "Access Control", "Incident Response", "Governance"].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-black/15 px-3 py-1 text-xs text-white/80">{tag}</span>
              ))}
              {cert.id === "llm" && ["Prompt Injection", "AI Security", "Privacy", "LLM Defense"].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-black/15 px-3 py-1 text-xs text-white/80">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-5 md:px-6 pb-5 md:pb-6 text-xs text-white/70 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        Click to view certificate details, evidence image, and verification →
      </div>
    </motion.div>
  );

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          Certifications
        </motion.h2>

        <div className="space-y-14">
          <div>
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">Industry Grade Certifications</h3>
              <p className="text-sm text-muted-foreground">Professional certifications and vendor-backed credentials.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
              {industryCertifications.map((cert, index) => renderCertificationCard(cert, index))}
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">Training and Courses Certifications</h3>
              <p className="text-sm text-muted-foreground">Course-based learning and upskilling certificates.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
              {trainingAndCourses.map((cert, index) => renderCertificationCard(cert, index))}
            </div>
          </div>
        </div>
      </div>

      {selectedCertification && (
        <CertificationModal
          certificationId={selectedCertification}
          onClose={() => setSelectedCertification(null)}
        />
      )}
    </section>
  );
}
