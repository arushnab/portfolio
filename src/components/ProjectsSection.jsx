import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "silverscore",
    title: "SilverScore",
    description:
      "Full-stack movie recommendation + rating platform with a serverless backend and personalized suggestions.",
    image: "/projects/silverscore.png",
    tags: ["React", "AWS", "Python", "Docker"],
    githubUrl: "https://github.com/arushnab/SilverScore", 
  },
  {
    id: "saferoute",
    title: "SafeRoute",
    description:
      "Real-time navigation tool with advanced routing algorithms and fast performance on large map graphs.",
    image: "/projects/saferoute.png",
    tags: ["C++", "Algorithms", "OpenStreetMap", "Performance"],
    githubUrl: "https://github.com/arushnab/SafeRoute",
  },
  {
    id: "seizure-classifier",
    title: "Seizure Detection Classifier",
    description:
      "Machine learning classifier for seizure detection with an end-to-end pipeline for preprocessing, training, and evaluation.",
    image: "/projects/seizure.png",
    tags: ["Python", "scikit-learn", "Signal Data", "ML"],
    githubUrl: "https://github.com/arushnab/bonn-eeg-ml", 
  },
  
  {
    id: "pop-pop-rush",
    title: "Pop Pop Rush",
    description:
      "Real-time reaction game on DE1-SoC using memory-mapped I/O, interrupts, and VGA rendering for low-latency input.",
    image: "/projects/pop-pop-rush.png",
    tags: ["C", "Embedded", "Interrupts", "Real-time"],
    githubUrl: "",
  },

  {
    id: "fashion-fantasy-fpga",
    title: "Fashion Fantasy (FPGA Memory Game)",
    description:
      "Memory matching game built in Verilog on an FPGA with VGA graphics, PS/2 keyboard input, randomized outfits, and increasing difficulty.",
    image: "/projects/fashion-fantasy.png",
    tags: ["Verilog", "FPGA", "FSMs", "VGA", "PS/2"],
    githubUrl: "",
  },
];

const hasLink = (url) => typeof url === "string" && url.trim().length > 0;

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects across software, systems, and machine learning —
          from full-stack apps to performance-focused and hardware-level builds.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-border bg-card shadow-sm overflow-hidden transition-all duration-200 hover:-translate-y-2 hover:shadow-lg flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {hasLink(project.demoUrl) && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`Open demo for ${project.title}`}
                        title="Live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    {hasLink(project.githubUrl) && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`Open GitHub repo for ${project.title}`}
                        title="GitHub repo"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {!hasLink(project.demoUrl) && !hasLink(project.githubUrl) && (
                  <p className="text-xs text-muted-foreground mt-3">
                    Details available on request.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/arushnab"
          >
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};