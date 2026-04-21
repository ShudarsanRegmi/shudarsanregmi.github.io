import { personalInfo } from "../data";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-24 py-8 pointer-events-none">
            <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
                <div className="font-black text-xs uppercase tracking-[0.5em] text-foreground">
                    {personalInfo.name} — MMXXV
                </div>

                <div className="hidden md:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.3em]">
                    <a href="#about" className="hover:text-primary transition-colors">01. About</a>
                    <a href="#projects" className="hover:text-primary transition-colors">02. Works</a>
                    <a href="#experience" className="hover:text-primary transition-colors">03. Career</a>
                    <a href="#contact" className="hover:text-primary transition-colors">04. Reach</a>
                </div>
            </div>
        </nav>
    );
}
