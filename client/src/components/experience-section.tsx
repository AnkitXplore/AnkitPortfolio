import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      period: "[Month, Year] – [Month, Year]",
      title: "Campus Ambassador & Marketing Intern",
      company: "Corizo",
      description: "Represented Corizo on campus, engaging students through events, workshops, and campaigns. Promoted courses and career opportunities, driving awareness and sign-ups. Built marketing, communication, and leadership skills while coordinating with the Corizo team.",
      technologies: ["Marketing", "Communication", "Leadership", "Event Management"],
      type: "internship",
    },
    {
      id: 2,
      period: "[Month, Year] – [Month, Year]",
      title: "Project Intern – Network Traffic Anomaly Detection",
      company: "Phemesoft",
      description: "Worked on Network Traffic Anomaly Detection using Machine Learning & Streamlit. Designed and implemented a system to identify suspicious patterns in real-time traffic data. Contributed to the development of the project's UI, prediction logic, and model integration.",
      technologies: ["Python", "Machine Learning", "Streamlit", "Network Security"],
      type: "internship",
    },
    {
      id: 3,
      period: "[Month, Year] – Present",
      title: "Full-Stack Development & SEO Intern",
      company: "Webflairs",
      description: "Developing and maintaining full-stack web applications using React, Node.js, Express, and MongoDB. Implementing SEO strategies to improve website visibility and search engine rankings. Collaborating with the team to enhance UI/UX and ensure responsive, scalable solutions.",
      technologies: ["React", "Node.js", "MongoDB", "SEO", "UI/UX"],
      type: "internship",
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
