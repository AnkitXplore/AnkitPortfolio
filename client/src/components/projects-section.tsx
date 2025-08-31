import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Download } from "lucide-react";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Dev" },
    { id: "ai", label: "AI/ML" },
    { id: "mobile", label: "Mobile" },
    { id: "opensource", label: "Open Source" },
  ];

  const projects = [
    {
      id: 1,
      title: "AI-Powered E-commerce Platform",
      description: "Full-stack e-commerce solution with AI-driven product recommendations and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      categories: ["web", "ai"],
      githubUrl: "https://github.com/ankittiwari/ecommerce-ai",
      liveUrl: "https://ecommerce-ai-demo.vercel.app",
    },
    {
      id: 2,
      title: "Intelligent Task Assistant",
      description: "Cross-platform mobile app with AI-powered task automation and natural language processing capabilities.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      technologies: ["React Native", "Python", "TensorFlow", "Firebase"],
      categories: ["ai", "mobile"],
      githubUrl: "https://github.com/ankittiwari/task-assistant",
      liveUrl: "https://play.google.com/store/apps/details?id=com.taskassistant",
    },
    {
      id: 3,
      title: "Real-time Analytics Dashboard",
      description: "Open-source dashboard for real-time data visualization with customizable widgets and interactive charts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      technologies: ["React", "D3.js", "Redis", "Docker"],
      categories: ["web", "opensource"],
      githubUrl: "https://github.com/ankittiwari/analytics-dashboard",
      liveUrl: "https://analytics-dashboard-demo.vercel.app",
    },
    {
      id: 4,
      title: "ML Model Deployment Platform",
      description: "Streamlined platform for deploying and monitoring machine learning models with automated scaling.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      technologies: ["Python", "FastAPI", "Kubernetes", "AWS"],
      categories: ["ai", "web"],
      githubUrl: "https://github.com/ankittiwari/ml-platform",
      liveUrl: "https://ml-platform-demo.herokuapp.com",
    },
    {
      id: 5,
      title: "Decentralized Finance App",
      description: "Mobile-first DeFi application with smart contract integration and multi-chain support.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      technologies: ["Flutter", "Solidity", "Web3", "Node.js"],
      categories: ["mobile", "opensource"],
      githubUrl: "https://github.com/ankittiwari/defi-app",
      liveUrl: "https://play.google.com/store/apps/details?id=com.defiapp",
    },
    {
      id: 6,
      title: "AI Content Creator Platform",
      description: "AI-powered content generation platform for social media with automated scheduling and analytics.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      technologies: ["Vue.js", "Python", "OpenAI", "MongoDB"],
      categories: ["web", "ai"],
      githubUrl: "https://github.com/ankittiwari/content-creator",
      liveUrl: "https://content-creator-ai.vercel.app",
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and contributions to the tech community
          </p>
        </motion.div>

        {/* Project Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className="transition-all duration-300 hover:scale-105"
              data-testid={`filter-${filter.id}`}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                data-testid={`project-${project.id}`}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        data-testid={`github-${project.id}`}
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                        data-testid={`live-${project.id}`}
                      >
                        {project.liveUrl.includes('play.google.com') ? (
                          <Download className="h-4 w-4" />
                        ) : (
                          <ExternalLink className="h-4 w-4" />
                        )}
                        {project.liveUrl.includes('play.google.com') ? 'Download' : 'Live Demo'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
