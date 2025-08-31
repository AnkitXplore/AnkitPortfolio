import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Brain, 
  Palette,
  GitBranch,
  Container,
  Server,
  Cpu,
  Globe,
  Zap
} from "lucide-react";

export function SkillsSection() {
  const skills = [
    { name: "React", icon: Code, color: "text-blue-500" },
    { name: "Node.js", icon: Server, color: "text-green-500" },
    { name: "TypeScript", icon: Code, color: "text-blue-600" },
    { name: "Python", icon: Cpu, color: "text-yellow-500" },
    { name: "AWS", icon: Cloud, color: "text-orange-500" },
    { name: "Container", icon: Container, color: "text-blue-400" },
    { name: "MongoDB", icon: Database, color: "text-green-600" },
    { name: "Git", icon: GitBranch, color: "text-red-500" },
    { name: "Machine Learning", icon: Brain, color: "text-purple-500" },
    { name: "UI/UX", icon: Palette, color: "text-pink-500" },
    { name: "React Native", icon: Smartphone, color: "text-blue-500" },
    { name: "Firebase", icon: Zap, color: "text-orange-600" },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.15, 
                y: -8,
                rotateY: 15,
                transition: { duration: 0.3 }
              }}
              data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <Card className="relative p-6 text-center glassmorphism hover:shadow-2xl cursor-pointer group transition-all duration-500 border-0 overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                {/* Skill icon with enhanced animations */}
                <motion.div
                  className="relative z-10 mb-4"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.icon className={`text-5xl ${skill.color} group-hover:text-white transition-all duration-500 mx-auto drop-shadow-lg`} />
                </motion.div>
                
                {/* Skill name with gradient text */}
                <motion.h3 
                  className="font-semibold text-sm relative z-10 group-hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill.name}
                </motion.h3>
                
                {/* Floating particles effect */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />
                
                {/* Glow effect border */}
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/50 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)"
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
