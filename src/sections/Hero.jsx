import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import heroBackground from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/r-profile.png";
import resumePdf from "@/assets/resume.pdf";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "django",
  "Docker",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Git",
  "GitHub Actions",
];

export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg */}
        <div className="absolute inset-0">
            <img 
                src={heroBackground} 
                alt="" 
                className="w-full 
                object-cover 
                opacity-40" />

            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)]/20 via-[var(--color-background)]/80 to-[var(--color-background)]"></div>
        </div>

        {/* Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div 
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                        backgroundColor: "#20b2a6",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                />
            ))}
        </div>

        {/* Content */}

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column - Text Content */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[var(--color-primary)]">
                            <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse"/>
                                Software Developer 
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Turning <b></b>
                            <span className="text-[var(--color-primary)] glow-text ">
                                 ideas
                            </span>
                            <br />
                            <span>into powerful</span>
                            <br />
                            <span className="font-serif italic font-normal text-white">
                                web experiences.
                            </span>
                        </h1>

                        <p className="text-lg text-[var(--color-muted-foreground)] max-w-lg animate-fade-in animation-delay-200">
                            <span className="text-2xl font-poppins text-[var(--color-primary)] tracking-wider">Hi</span>, I’m Digvijay Basunde, an MCA student with a strong interest in full-stack development.
                            I have experience working with React, Node.js, Express, Django, MongoDB, and SQL.
                            I enjoy building efficient web applications and continuously learning new technologies.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <a href="#contact">
                            <Button  size="lg" className="cursor-pointer " >
                                Contact Me
                            <ArrowRight className="w-5 h-5"/>
                        </Button>
                        </a>

                        <a href={resumePdf} download="Digvijay-Basunde-Resume.pdf">
                            <AnimatedBorderButton>
                                <Download className="w-5 h-5"/>
                                Download CV
                            </AnimatedBorderButton>
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">Follow Me: </span>
                        {[
                            { icon: FaGithub, href: "https://github.com/TheCodexZ"},
                            { icon: FaLinkedin, href: "https://www.linkedin.com/in/digvijay-basunde-5a5161281"},
                            { icon: FaTwitter, href: "#"},
                        ].map((social, idx) => (
                            <a 
                                key={idx}
                                href={social.href}
                                className="p-2 rounded-full glass hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-all duration-300">
                                {<social.icon className="w-5 h-5"/>}
                            </a>
                        ))}
                    </div>
                </div>


                {/* Right Column - Profile Image */}
                <div className="relative animate-fade-in animation-delay-300 ">
                    {/* {Profile Image} */}
                    <div className="relative max-w-md mx-auto">
                        <div className="
                            absolute inset-0
                            rounded-3xl bg-gradient-to-br
                            from-[var(--color-primary)]/30 via-transparent
                            to-[var(--color-primary)]/10 blur-2xl animate-pulse"
                            />

                        {/* this parent div controls image profile position */}
                        <div className="relative w-[320px] h-[320px] mx-auto mt-15">    
                            {/* Gradient Border Layer */}
                            <div className="profile-border absolute inset-0 rounded-full"></div>

                            {/* Profile Image */}
                            <div className="relative w-full h-full rounded-full overflow-hidden p-[30px] bg-[var(--color-background)]">
                                <img
                                src={profileImage}
                                alt=""
                                className="w-full h-full object-cover rounded-full scale-145 "
                                />
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-[var(--color-muted-foreground)] mb-6 text-center">
                    Technologies I work with
                </p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="flex-shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-[var(--color-muted-foreground)]/50 hover:text-[var(--color-muted-foreground)] transition-colors">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2
                        animate-fade-in animation-delay-800">
            <a 
                href="#about"
                className="flex flex-col items-center gap-2 text-[var(--color-muted-foreground)] hover-text-[var(--color-primary)] transition-colors group"
            >
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce"/>
            </a>
        </div>
    </section>
    );
};

