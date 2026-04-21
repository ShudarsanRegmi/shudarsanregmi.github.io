import { motion } from "framer-motion";
import { personalInfo } from "../data";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center px-6 md:px-24">
            <div className="w-full max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Indexing number */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hidden lg:block lg:col-span-1"
                    >
                        <span className="text-sm font-black tracking-widest vertical-text opacity-20 uppercase">
                            Index 01 — Identity
                        </span>
                    </motion.div>

                    <div className="lg:col-span-11">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-12"
                        >
                            Strategic Software Architecture & Security
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="editorial-header mb-16"
                        >
                            <span className="block italic font-serif">I architect</span>
                            <span className="block text-primary">Unbreakable</span>
                            <span className="block">Digital Systems.</span>
                        </motion.h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-xl md:text-2xl font-medium leading-relaxed max-w-lg text-secondary"
                            >
                                Based in <span className="text-foreground">Amrita Vishwa Vidyapeetham</span>, I specialize in full-stack engineering with a core focus on proactive defensive security.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex flex-col md:items-end space-y-4"
                            >
                                <a href="#projects" className="group flex items-center space-x-4">
                                    <span className="text-sm font-black uppercase tracking-widest group-hover:mr-4 transition-all">Explore Showcase</span>
                                    <div className="w-12 h-[1px] bg-foreground group-hover:w-24 group-hover:bg-primary transition-all" />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
