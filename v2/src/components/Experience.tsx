import { motion } from "framer-motion";
import { experience } from "../data";

export function Experience() {
    return (
        <section id="experience" className="section-padding px-6 md:px-24 bg-white border-t border-border">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                    <div className="lg:col-span-1 hidden lg:block">
                        <span className="text-sm font-black tracking-widest vertical-text opacity-20 uppercase">
                            Index 04 — Career
                        </span>
                    </div>
                    <div className="lg:col-span-11">
                        <h2 className="editorial-header mb-4">Evolution <span className="italic font-serif opacity-30">& Path.</span></h2>
                    </div>
                </div>

                <div className="space-y-32">
                    {experience.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
                        >
                            <div className="lg:col-span-3">
                                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary block mb-2">{exp.period}</span>
                                <p className="text-sm font-bold text-secondary">{exp.company}</p>
                            </div>

                            <div className="lg:col-span-9 space-y-12">
                                <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">{exp.role}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <ul className="space-y-8">
                                        {exp.description.map((item, iIdx) => (
                                            <li key={iIdx} className="text-lg font-medium leading-relaxed text-secondary italic border-l-2 border-primary/20 pl-6">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="hidden md:flex items-end justify-end">
                                        <div className="w-32 h-32 rounded-full border border-border flex items-center justify-center opacity-10 rotate-12">
                                            <span className="text-sm font-black uppercase tracking-widest">Industry focus</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
