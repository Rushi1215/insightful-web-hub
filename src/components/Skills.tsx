
import { Code, Database, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
  {
    id: "web",
    title: "Web Development",
    icon: Code,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    description: "Building responsive, dynamic websites using modern HTML, CSS, JavaScript, and front-end frameworks.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design", "Tailwind CSS", "UX/UI", "Web Accessibility"]
  },
  {
    id: "nodejs",
    title: "Node.js Development",
    icon: Database,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    description: "Creating robust backend solutions with Node.js for APIs, real-time web applications, and database integrations.",
    technologies: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL", "Authentication", "Real-time Applications", "Microservices"]
  },
  {
    id: "powerbi",
    title: "Power BI Specialist",
    icon: BarChart3,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    description: "Transforming complex data into visual insights with Power BI to drive business decisions and growth.",
    technologies: ["Power BI Desktop", "DAX", "Data Modeling", "Interactive Dashboards", "ETL", "Data Analysis", "Visual Reporting", "KPI Tracking"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">My Expertise</h2>
        <p className="section-subtitle">
          I've developed a diverse set of skills focused on creating efficient, data-driven web solutions.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {skills.map((skill, index) => (
            <div 
              key={skill.id}
              className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={cn("h-14 w-14 rounded-xl flex items-center justify-center mb-6", skill.bgColor)}>
                <skill.icon className={cn("h-7 w-7", skill.color)} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-muted-foreground mb-6">{skill.description}</p>
              <div className="flex flex-wrap">
                {skill.technologies.map((tech) => (
                  <span key={tech} className="skill-chip">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
