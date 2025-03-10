
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-2xl">
            <div className="animate-fade-in">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-6">
                Web Developer | Node.js Developer | Power BI Specialist
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                Building digital products with precision & purpose
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Hi! I'm John Doe, a web developer with a passion for creating innovative and efficient web applications. With expertise in Node.js and Power BI, I specialize in building seamless web experiences and data-driven insights that help businesses grow.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <a 
                href="#projects" 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center"
              >
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#contact" 
                className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 rounded-full font-medium transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="lg:justify-self-center relative animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-primary/5 flex items-center justify-center animate-pulse-slow">
              <div className="absolute inset-2 rounded-full bg-primary/10"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-primary/20 to-primary/5"></div>
              <div className="glass-card rounded-3xl h-80 w-72 overflow-hidden shadow-xl animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                  alt="John Doe" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 animate-float shadow-lg" style={{ animationDelay: "1s" }}>
                <div className="flex items-center justify-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">Available for hire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
