// export const Projects = () => {
//     return <section></section>
// }

import { ArrowUpRight} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const projects = [
  {
    title: "getUpdated a news feed web",
    description:
      "Builded a news feed website that shows real time news data based on user defind categories.",
    image: asset("getUpdated.png"),
    tags: ["JavaScript", "django"],
    link: "#",
    FaGithub: "https://github.com/TheCodexZ",
  },
  {
    title: "Real Time Chat app",
    description: "Created a Real Time chat app where users can communicate live",
    image: asset("gossify 2.png"),
    tags: ["ReactJs", "TailwindCSS"],
    link: "#",
    FaGithub: "https://github.com/TheCodexZ",
  },
  
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-foreground)] transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.FaGithub}
                    className="p-3 rounded-full glass hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-foreground)] transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-[var(--color-muted-foreground)] group-hover:text-[var(--color-primary)]
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-[var(--color-muted-foreground)] text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-[var(--color-muted-foreground)] hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary)] transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          {/* <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight/>
          </AnimatedBorderButton> */}

           <button 
                className="relative bg-transparent border border-border 
                text-[var(--color-foreground)] hover:border-[var(--color-primary)]/50 transition-all 
                duration-1000 focus:outline-none focus-visible:ring-2 
                focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 
                disabled:opacity-50 disabled:cursor-not-allowed group 
                px-6 py-3 text-lg font-medium rounded-full overflow-visible 
                animated-border">

        {/* Animation SVG Border */}
            <svg
                className="absolute left-0 top-0 w-full h-full pointer-events-none download-cv-border"
                viewBox="0 0 200 60"
                preserveAspectRatio="none"
                style={{overflow: "visible"}}
            >
            <path
                d="M 30,0 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="2"
                strokeDasharray="400 550"
                strokeDashoffset="400"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animated-border-path"
            />
            </svg>
            <div className="justify-center flex items-center ">View all projects
              <ArrowUpRight/>
            </div>
        </button>
          
        </div>
      </div>
    </section>
  );
};
