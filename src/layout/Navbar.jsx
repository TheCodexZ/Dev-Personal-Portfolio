import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#educationSkills", label: "Education & Skills"},
    {href: "#", label: "Home"},
];


export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMobileMenuOpen]);


    // for closing menu if desktop size applies
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) { // sm breakpoint (Tailwind)
            setIsMobileMenuOpen(false);
            setIsClosing(false);
            }
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);



    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 bg-[var(--color-black)]/95 
                            ${isScrolled ? "bg-[var(--color-background)]/80  py-3" : "bg-transparent  py-5"} 
                            z-50`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" 
                   className="text-white text-xl font-bold tracking-tight hover:text-[var(--color-primary)] transition">
                    DB<span className="text-[var(--color-primary)]">.</span>
                </a>

                {/* Desktop Nav */}

                <div className="hidden sm:flex flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a 
                                href={link.href} 
                                key={index}
                                className="px-4 py-2 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] rounded-full hover:bg-[var(--color-surface)]">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}  
                <div className="hidden sm:block">
                    <a href="#contact"><Button size="sm" className="cursor-pointer">Contact Me</Button></a>
                </div>

                {/* Mobile Menu Button */}

                <button 
                    className="sm:hidden p-2"
                    onClick={() => {
                        if (isMobileMenuOpen) {
                        setIsClosing(true);
                        setTimeout(() => {
                            setIsMobileMenuOpen(false);
                            setIsClosing(false);
                        }, 200);
                        } else {
                        setIsMobileMenuOpen(true);
                        }
                    }}
                    >
                    {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
            </nav>

            {/* Mobile Menu */}
            {(isMobileMenuOpen || isClosing) && (
                <div
                    className={`absolute top-full left-0 w-full z-40 
                    bg-[var(--color-background)]/80 backdrop-blur-md border-t border-[var(--color-white)]/10
                    ${isClosing ? "menu-close" : "menu-open"}`}
                >
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">

                    {navLinks.map((link, index) => (
                        <a
                        key={index}
                        href={link.href}
                        onClick={() => {
                            setIsClosing(true);
                            setTimeout(() => {
                            setIsMobileMenuOpen(false);
                            setIsClosing(false);
                            }, 250);
                        }}
                        className="text-lg text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] py-2"
                        >
                        {link.label}
                        </a>
                    ))}

                    <Button >
                        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Me</a>
                    </Button>

                    </div>
                </div>
                )}
        </header>
    );
};