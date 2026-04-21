import { motion } from "framer-motion";
import { personalInfo, education } from "../data";

export function About() {
    return (
        <section id="about" className="section-padding px-6 md:px-24 border-t border-border bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-1 hidden lg:block">
                        <span className="text-sm font-black tracking-widest vertical-text opacity-20 uppercase">
                            Index 02 — Bio
                        </span>
                    </div>

                    <div className="lg:col-span-7">
                        <h2 className="editorial-header mb-12">
                            Deeply <br />
                            Rooted in <br />
                            <span className="text-primary italic font-serif">Security.</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <p className="text-xl font-medium leading-relaxed text-secondary italic">
                                {personalInfo.bio.split('.')[0]}.
                            </p>
                            <p className="text-lg font-medium leading-relaxed text-secondary">
                                {personalInfo.bio.split('.').slice(1).join('.')}
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col justify-end">
                        <div className="space-y-12">
                            <div>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6 block">Current Status</span>
                                <p className="text-3xl font-black leading-tight tracking-tighter">
                                    Pursuing B.Tech in CyberSecurity <br />
                                    <span className="text-secondary opacity-50">Amrita Vishwa Vidyapeetham</span>
                                </p>
                            </div>

                            <div className="pt-8 border-t border-border">
                                <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">Core Achievements</p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-6 py-3 border border-border rounded-full hover:border-primary transition-colors cursor-default">
                                        <span className="text-xs font-black uppercase tracking-widest italic">Rank 1 Semester 2</span>
                                    </div>
                                    <div className="px-6 py-3 border border-border rounded-full hover:border-primary transition-colors cursor-default">
                                        <span className="text-xs font-black uppercase tracking-widest italic">9.01 CGPA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
