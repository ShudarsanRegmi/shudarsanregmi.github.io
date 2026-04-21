import { personalInfo } from "../data";

export function Footer() {
    return (
        <footer id="contact" className="bg-foreground text-background pt-40 pb-12 px-6 md:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-end mb-40">
                    <div className="lg:col-span-8">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary opacity-80 mb-8 block">Project Inquiry</span>
                        <h2 className="text-5xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-12">
                            Let's Start <br />
                            <span className="text-primary italic font-serif">The Dialogue.</span>
                        </h2>
                        <a href={`mailto:${personalInfo.email}`} className="text-2xl md:text-4xl font-medium border-b-2 border-primary/30 hover:border-primary transition-all pb-2 tracking-tight">
                            {personalInfo.email}
                        </a>
                    </div>

                    <div className="lg:col-span-4 flex flex-col md:items-end space-y-12 text-right">
                        <div className="space-y-4">
                            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="block text-sm font-black uppercase tracking-widest hover:text-primary transition-colors">Github ↗</a>
                            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="block text-sm font-black uppercase tracking-widest hover:text-primary transition-colors">Linkedin ↗</a>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
                        {personalInfo.name} — Architecture of Resilience
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
                        © {new Date().getFullYear()} — Directed by Code
                    </p>
                </div>
            </div>
        </footer>
    );
}
