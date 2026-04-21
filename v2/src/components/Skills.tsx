import { motion } from "framer-motion";
import { skills } from "../data";

export function Skills() {
    return (
        <section id="skills" className="section-padding px-6 md:px-24 border-t border-border">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">03 — Expertise</span>
                        <h2 className="editorial-header mb-8">Technical <br /><span className="italic font-serif">Arsenals.</span></h2>
                        <p className="text-xl font-medium text-secondary leading-relaxed italic">
                            A multidisciplinary stack focused on building resilient systems and proactively securing infrastructure.
                        </p>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                            {["Web", "Security", "Languages", "Tools"].map((cat, idx) => (
                                <div key={idx} className="space-y-6">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground border-b border-foreground/10 pb-4">{cat}</h3>
                                    <div className="flex flex-wrap gap-x-6 gap-y-4">
                                        {skills.filter(s => s.category === cat).map((skill, sIdx) => (
                                            <div key={sIdx} className="group cursor-default">
                                                <span className="text-2xl font-black tracking-tighter opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all duration-500">{skill.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
