
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "simplify",
    title: "Simplify",
    description: "A web application built with Node.js that helps users streamline their daily tasks. The app integrates with Power BI to display key performance metrics and insights in real-time.",
    role: "My role involved developing the backend with Node.js, implementing real-time data feeds, and building dynamic dashboards with Power BI.",
    challenges: "Overcame challenges in real-time data synchronization and optimizing dashboard performance for large datasets.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tech: ["Node.js", "Express", "MongoDB", "Power BI", "WebSockets", "React"],
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: "dataflow",
    title: "DataFlow",
    description: "An analytics platform that transforms complex business data into actionable insights through intuitive visualizations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tech: ["Power BI", "SQL", "DAX", "Data Modeling"],
    link: "#",
    featured: false
  },
  {
    id: "connecthub",
    title: "ConnectHub",
    description: "A real-time communication platform built with Node.js and WebSockets, facilitating seamless team collaboration.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tech: ["Node.js", "Socket.io", "React", "MongoDB"],
    link: "#",
    github: "#",
    featured: false
  }
];

export function Projects() {
  // First display the featured project, then the rest
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Showcasing my work in web development and data visualization
        </p>
        
        {featuredProject && (
          <div className="mb-16 animate-fade-in">
            <div className="glass-card rounded-2xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-full">
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                    Featured Project
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{featuredProject.title}</h3>
                  <p className="text-muted-foreground mb-4">{featuredProject.description}</p>
                  <p className="text-muted-foreground mb-4">{featuredProject.role}</p>
                  <p className="text-muted-foreground mb-6">{featuredProject.challenges}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.tech.map((tech) => (
                      <span key={tech} className="skill-chip">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    {featuredProject.link && (
                      <a 
                        href={featuredProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </a>
                    )}
                    {featuredProject.github && (
                      <a 
                        href={featuredProject.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-medium hover:text-foreground/80 transition-colors"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <div 
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="skill-chip">{tech}</span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium hover:text-foreground/80 transition-colors"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
