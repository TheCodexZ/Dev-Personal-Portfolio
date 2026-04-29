import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiDjango, SiTailwindcss, SiMysql, SiNextdotjs } from "react-icons/si";



export const EducationSkills = () => {
    return (

    <section id="educationSkills" className="py-25 relative overflow-hidden px-20">
        {/* Heaader */}

        <div>
            <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider animate-fade-in">EDUCATION & SKILLS</span>
            
            <div className="py-5">
                <span className="text-4xl md:text-5xl font-bold leading-tight animation-fade-in animation-delay-100 font-poppins ">Education</span><br /><br />
                    <span className="text-lg text-[var(--color-muted-foreground)] max-w-lg animate-fade-in animation-delay-200">  
                        Master of Computer Applications (MCA)
                        Pimpri Chinchwad College of Engineering (PCCoE)
                        Pune, India | 2025 – Present
                        <br /><br />
                        Bachelor of Commerce (B.Com)
                        Sant Gadge Baba Amravati University (SGBAU)
                        Maharashtra, India | Completed
                        CGPA: 7.5 / 10
                </span>
            </div>


            <div className="py-5">
                <span className="text-4xl md:text-5xl font-bold leading-tight animation-fade-in animation-delay-100  font-poppins ">Skills</span><br/><br />

                <div className="flex flex-wrap gap-4 max-w-lg animate-fade-in animation-delay-200">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-muted)]">
                        <FaReact className="text-blue-400 text-xl" />
                        <span className="mr-1">React</span>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-muted)]">
                        <FaNodeJs className="text-green-500 text-xl" />
                        <span>Node.js</span>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-muted)]">
                        <SiExpress className="text-gray-400 text-xl" />
                        <span>Express.js</span>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-muted)]">
                        <SiMongodb className="text-green-600 text-xl" />
                        <span className="mr-1">MongoDB</span>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-muted)]">
                        <SiDjango className="text-green-700 text-xl" />
                        <span className="mr-1">Django</span>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-muted)]">
                        <SiTailwindcss className="text-cyan-400 text-xl" />
                        <span className="mr-1">Tailwind CSS</span>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-muted)]">
                        <SiMysql className="text-cyan-400 text-xl" />
                        <span className="mr-1">MySql</span>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-muted)]">
                        <SiNextdotjs className="text-cyan-400 text-xl" />
                        <span className="mr-1">Next.js</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
};

