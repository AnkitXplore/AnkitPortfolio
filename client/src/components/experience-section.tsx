import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      period: "June 2024 - Present",
      title: "Full-Stack Developer Intern",
      company: "TechCorp Solutions",
      description: "Developed and maintained web applications using React, Node.js, and PostgreSQL. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      type: "internship",
    },
    {
      id: 2,
      period: "March 2024",
      title: "1st Place - HackInnovate 2024",
      company: "National Hackathon Winner",
      description: "Led a team of 4 developers to create an AI-powered healthcare solution. Built a real-time symptom checker using machine learning and natural language processing.",
      technologies: ["Python", "TensorFlow", "Flask"],
      type: "achievement",
    },
    {
      id: 3,
      period: "Jan 2024 - May 2024",
      title: "Software Development Intern",
      company: "StartupXYZ",
      description: "Contributed to the development of a mobile application using React Native. Implemented user authentication, payment integration, and real-time messaging features.",
      technologies: ["React Native", "Firebase", "Node.js"],
      type: "internship",
    },
    {
      id: 4,
      period: "November 2023",
      title: "AWS Certified Developer",
      company: "Amazon Web Services",
      description: "Achieved AWS Certified Developer - Associate certification, demonstrating expertise in developing and maintaining applications on the AWS platform.",
      technologies: ["AWS", "Lambda", "DynamoDB"],
      type: "certification",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey through internships, hackathons, and professional development
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="relative flex items-center justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                
                {/* Content alternating sides */}
                {index % 2 === 0 ? (
                  <>
                    <div className="w-5/12 pr-8 text-right">
                      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="text-sm text-primary font-semibold mb-2">
                            {experience.period}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                          <p className="text-muted-foreground font-medium mb-3">
                            {experience.company}
                          </p>
                          <p className="text-sm leading-relaxed mb-4">
                            {experience.description}
                          </p>
                          <div className="flex flex-wrap gap-2 justify-end">
                            {experience.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="w-5/12"></div>
                    <div className="w-5/12 pl-8">
                      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="text-sm text-primary font-semibold mb-2">
                            {experience.period}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                          <p className="text-muted-foreground font-medium mb-3">
                            {experience.company}
                          </p>
                          <p className="text-sm leading-relaxed mb-4">
                            {experience.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
