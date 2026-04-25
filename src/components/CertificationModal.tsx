import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Calendar, Award, BookOpen, Maximize2, Minimize2 } from "lucide-react";
import { useEffect, useState } from "react";
import rh124 from '@/assets/RH124.png';
import rh134 from '@/assets/RH134.png'; 
import rhcsaCert from '@/assets/certs/rhcsa.png';
import awsCert from '@/assets/certs/AWS.png';
import isc2Cert from '@/assets/certs/isc2.jpeg';
import llmSecurityCert from '@/assets/certs/llm_security.jpg';

const certificationDetails = {
  rhcsa: {
    title: "Red Hat Certified System Administrator (RHCSA)",
    image: rhcsaCert,
    certificateImage: rhcsaCert,
    issuer: "Red Hat",
    issueDate: "2024",
    validUntil: "Lifetime",
    credentialId: "RHCSA - Verified",
    overview: "Red Hat Certified System Administrator (RHCSA) validation covering Linux administration, user and permission management, networking, security hardening, shell scripting, and routine system troubleshooting in enterprise RHEL environments.",
    areasConvered: [
      "Linux user, group, and permission management",
      "Command-line productivity and shell scripting",
      "Systemd services, boot targets, and process control",
      "Networking, SSH access, and firewall basics",
      "Storage management, partitions, and file systems",
      "SELinux administration and security controls",
      "Package and software management with DNF",
      "Troubleshooting Linux services and logs"
    ],
    skills: {
      "Operating Systems": "RHEL, Linux CLI, systemd",
      "Security": "SELinux, SSH, firewall-cmd",
      "Administration": "Users, groups, services, storage",
      "Automation": "Shell scripting, scheduling, logging",
    },
    verificationUrl: "https://rhtapps.redhat.com/verify",
  },
  aws: {
    title: "AWS Certified Cloud Practitioner",
    image: awsCert,
    certificateImage: awsCert,
    issuer: "Amazon Web Services",
    issueDate: "2024",
    validUntil: "3 years",
    credentialId: "AWS-CCP-Verified",
    overview: "Foundational AWS certification covering cloud concepts, core AWS services, cloud security, pricing models, and high-level architecture best practices.",
    areasConvered: [
      "Cloud computing concepts and value proposition",
      "Core AWS services such as EC2, S3, IAM, and Lambda",
      "Shared Responsibility Model and cloud security",
      "Billing, pricing, and support plans",
      "Global infrastructure, regions, and availability zones",
      "Cloud architecture and deployment best practices",
      "Monitoring and governance fundamentals",
      "Business benefits and migration basics"
    ],
    skills: {
      "Cloud": "AWS core services, architecture basics",
      "Security": "IAM, shared responsibility model",
      "Operations": "Monitoring, billing, governance",
      "Deployment": "Regions, availability zones, scalability",
    },
    verificationUrl: "https://aws.amazon.com/verification",
  },
  isc2: {
    title: "ISC2 Certified in Cybersecurity (CC)",
    image: isc2Cert,
    certificateImage: isc2Cert,
    issuer: "ISC2",
    issueDate: "2024",
    validUntil: "3 years",
    credentialId: "ISC2-CC-Verified",
    overview: "Foundational cybersecurity certification focused on security principles, risk management, access controls, security operations, and incident response fundamentals.",
    areasConvered: [
      "Security principles and governance",
      "Risk management and asset protection",
      "Access control concepts and identity management",
      "Network and communication security basics",
      "Security operations and monitoring",
      "Incident response and recovery fundamentals",
      "Business continuity and disaster recovery",
      "Security awareness and policy enforcement"
    ],
    skills: {
      "Cybersecurity": "Risk analysis, controls, governance",
      "Operations": "Monitoring, incident response",
      "Identity": "Authentication, access control",
      "Resilience": "BCP, DR, recovery planning",
    },
    verificationUrl: "https://www.isc2.org/verify",
  },
  llm: {
    title: "LLM Security Course",
    image: llmSecurityCert,
    certificateImage: llmSecurityCert,
    issuer: "Udemy",
    issueDate: "2024",
    validUntil: "Lifetime Access",
    credentialId: "UC-ai-sec-2024-01-4567",
    overview: "Specialized course focusing on security implications and best practices for Large Language Models and AI systems, covering prompt injection, data privacy, and secure AI deployment.",
    areasConvered: [
      "AI/ML security fundamentals",
      "Prompt injection prevention",
      "Data privacy in AI systems",
      "Model security and adversarial attacks",
      "Secure AI development lifecycle",
      "Ethics in AI and responsible AI",
      "AI governance and compliance",
      "Threat modeling for AI systems"
    ],
    skills: {
      "AI Security": "Prompt engineering, model protection",
      "Privacy": "Data anonymization, privacy controls",
      "Development": "Secure AI coding, testing",
      "Governance": "Risk assessment, policy development",
    },
    verificationUrl: "https://www.udemy.com/certificate/verify",
  },
};

interface CertificationModalProps {
  certificationId: string;
  onClose: () => void;
}

export function CertificationModal({ certificationId, onClose }: CertificationModalProps) {
  const certification = certificationDetails[certificationId as keyof typeof certificationDetails];
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    setIsFullscreen(false);
  }, [certificationId]);

  if (!certification) return null;

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
          className="glass-panel dark:glass-panel light:glass-panel-light rounded-3xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl border border-border [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.22)_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/35"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <Award className="w-8 h-8 text-[var(--accent-blue)]" />
              <h3 className="text-3xl font-bold gradient-text">{certification.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 transition-all duration-300"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          <div className="space-y-8">
            {/* Certificate Image - Cover Style (clipped/cropped) */}
            <div>
              <button
                type="button"
                onClick={() => setIsFullscreen(true)}
                className="group relative block w-full overflow-hidden rounded-xl border border-border shadow-lg h-64"
                aria-label="Open certificate fullscreen"
              >
                <img
                  src={certification.certificateImage}
                  alt="Certificate"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/25 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                    <Maximize2 className="h-4 w-4" />
                    Click to expand
                  </span>
                </div>
              </button>
            </div>
            
            {/* Certification Details */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-4 text-[var(--accent-blue)] flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Certification Overview
                </h4>
                <p className="text-muted-foreground mb-6">
                  {certification.overview}
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 text-[var(--accent-blue)]">
                  Areas Covered
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {certification.areasConvered.map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 glass-panel rounded-xl"
                    >
                      <div className="w-2 h-2 bg-[var(--accent-blue)] rounded-full"></div>
                      <span className="text-muted-foreground text-sm">{area}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills & Technologies */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-[var(--accent-purple)]">
                  Skills & Technologies
                </h4>
                <div className="space-y-3">
                  {Object.entries(certification.skills).map(([category, skills]) => (
                    <div key={category} className="glass-panel dark:glass-panel light:glass-panel-light rounded-xl p-4 bg-background/50">
                      <div className="flex flex-col md:flex-row md:justify-between">
                        <span className="text-muted-foreground font-medium mb-1 md:mb-0">{category}</span>
                        <span className="text-foreground text-sm">{skills}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certificate Metadata */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="glass-panel rounded-xl p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="w-4 h-4 text-[var(--accent-blue)]" />
                  <span className="font-medium">Issue Date</span>
                </div>
                <p className="text-muted-foreground">{certification.issueDate}</p>
              </div>

              <div className="glass-panel rounded-xl p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="w-4 h-4 text-[var(--accent-purple)]" />
                  <span className="font-medium">Valid Until</span>
                </div>
                <p className="text-muted-foreground">{certification.validUntil}</p>
              </div>

              <div className="glass-panel rounded-xl p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="font-medium">Credential ID</span>
                </div>
                <p className="text-muted-foreground text-sm font-mono">{certification.credentialId}</p>
              </div>
            </div>

            {/* Verify Button */}
            <motion.a
              href={certification.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center space-x-2 w-full p-4 rounded-xl bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] text-white font-medium hover:shadow-lg transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Verify Certificate</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {isFullscreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] bg-black/95 flex items-center justify-center"
          onClick={() => setIsFullscreen(false)}
        >
          <div className="relative w-full h-full max-w-[96vw] max-h-[96vh] flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={certification.certificateImage}
              alt="Certificate fullscreen"
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/45 text-white hover:bg-black/65 transition-colors"
              aria-label="Exit fullscreen certificate"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}