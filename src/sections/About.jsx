import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className=" text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
              <p>
                I'm a passionate aspiring software developer currently pursuing my Master of Computer Applications (MCA). Coming from a non-technical background, I started my journey with curiosity about how web applications work, and gradually built a strong foundation in full-stack development.
              </p>

              <p>
                I have hands-on experience with technologies like React, Node.js, Express.js, MongoDB, and SQL, along with a basic understanding of Django. I enjoy building user interfaces and developing backend APIs, continuously improving my skills through projects and practical learning.
              </p>
              
              <p>
                I'm currently focused on strengthening my development skills, exploring modern web technologies, and building real-world projects that solve meaningful problems.
              </p>
              

            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-[var(--color-foreground)]">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4 hover:bg-[var(--color-primary)]/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};