import { motion } from "framer-motion";
import { projects } from "../data";

export function Projects() {
    return (
        <section id="projects" className="section-padding px-6 md:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                    <div className="lg:col-span-1 hidden lg:block">
                        <span className="text-sm font-black tracking-widest vertical-text opacity-20 uppercase">
                            Index 03 — Works
                        </span>
                    </div>
                    <div className="lg:col-span-11">
                        <h2 className="editorial-header mb-4">The <span className="italic font-serif opacity-30">Showcase.</span></h2>
                        <p className="text-xs font-black uppercase tracking-[0.4em] text-secondary">A curated list of engineering exhibits</p>
                    </div>
                </div>

                <div className="space-y-40">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                        >
                            <div className={`lg:col-span-7 relative group ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="layered-card aspect-video w-full overflow-hidden bg-zinc-100 flex items-center justify-center border-none">
                                    <div className="p-12 text-center group-hover:scale-105 transition-transform duration-700">
                                        <span className="text-8xl font-black text-zinc-200 block mb-4">0{idx + 1}</span>
                                        <h3 className="text-4xl font-black tracking-tighter uppercase">{project.title}</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={`lg:col-span-5 space-y-8 ${idx % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
                                <div className={`flex flex-wrap gap-2 ${idx % 2 === 1 ? 'lg:justify-end' : ''}`}>
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="text-[10px] font-black uppercase tracking-widest text-primary border-b border-primary/20">{tag}</span>
                                    ))}
                                </div>
                                <p className="text-2xl font-medium tracking-tight leading-relaxed italic text-secondary">
                                    {project.description}
                                </p>
                                <div className={`pt-4 ${idx % 2 === 1 ? 'lg:justify-end flex' : ''}`}>
                                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center space-x-4 group">
                                        <span className="text-xs font-black uppercase tracking-widest">Observe Code</span>
                                        <div className="w-8 h-8 rounded-full border border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-white transition-all">
                                            →
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
