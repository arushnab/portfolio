import { useState } from "react";
import { cn } from "@/lib/utils";

const SKILLS = [
  // Programming
  { name: "Python", category: ["software", "ml"] },
  { name: "C++", category: ["software"] },
  { name: "C", category: ["software"] },
  { name: "Java", category: ["software"] },
  { name: "JavaScript", category: ["software", "web"] },
  { name: "Verilog", category: ["software"] },
  { name: "HTML/CSS", category: ["web"] },

  // Software / Systems
  { name: "Data Structures & Algorithms", category: ["software"] },
  { name: "Object-Oriented Design", category: ["software"] },
  { name: "Debugging & Testing", category: ["software"] },
  { name: "API Fundamentals", category: ["software", "web"] },

  // ML
  { name: "PyTorch", category: ["ml"] },
  { name: "TensorFlow", category: ["ml"] },
  { name: "scikit-learn", category: ["ml"] },
  { name: "Model Training & Evaluation", category: ["ml"] },
  { name: "Data Preprocessing", category: ["ml"] },

  // Data
  { name: "NumPy", category: ["ml", "software"] },
  { name: "pandas", category: ["ml"] },
  { name: "Matplotlib", category: ["ml"] },
  { name: "Jupyter", category: ["ml"] },

  // Web
  { name: "React", category: ["web"] },
  { name: "REST APIs", category: ["web", "software"] },

  // Cloud & Tools
  {
    name: "AWS (Lambda, DynamoDB, API Gateway, CloudWatch, CDK)",
    category: ["cloud"],
  },
  { name: "Docker", category: ["cloud"] },
  { name: "Git/GitHub", category: ["software", "cloud"] },
  { name: "Linux", category: ["software", "cloud"] },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "software", label: "Software" },
  { key: "ml", label: "Machine Learning" },
  { key: "web", label: "Web" },
  { key: "cloud", label: "Cloud" },
];

export const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSkills =
    activeFilter === "all"
      ? SKILLS
      : SKILLS.filter((s) => s.category.includes(activeFilter));

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Skills <span className="text-primary">&amp; Toolkit</span>
        </h2>

        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          A balanced skill set across software engineering, full-stack
          development, and machine learning.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-150 hover:shadow-lg",
                activeFilter === filter.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Skill pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {filteredSkills.map((skill) => (
            <span
              key={skill.name}
              className="px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground card-hover"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
