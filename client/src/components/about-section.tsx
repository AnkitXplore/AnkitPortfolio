import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating innovative solutions and pushing the boundaries of technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    I'm a passionate Full-Stack Developer with expertise in modern web technologies and artificial intelligence. 
                    With a strong foundation in computer science and hands-on experience in building scalable applications, 
                    I enjoy solving complex problems and creating user-centric solutions.
                  </p>
                  <p>
                    My journey in tech spans across various domains including web development, machine learning, and cloud computing. 
                    I'm constantly learning and adapting to new technologies, with a particular interest in AI-driven applications 
                    and their potential to transform industries.
                  </p>
                  <p>
                    When I'm not coding, you'll find me contributing to open-source projects, participating in hackathons, 
                    or exploring the latest trends in technology. I believe in continuous learning and sharing knowledge with the community.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-80 h-80">
              <svg 
                viewBox="0 0 200 200" 
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background circle */}
                <circle cx="100" cy="100" r="90" fill="#f0f9ff" />
                
                {/* Head */}
                <motion.circle 
                  cx="100" 
                  cy="80" 
                  r="40" 
                  fill="#1e3a8a"
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ 
                    y: { 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      ease: "easeInOut"
                    } 
                  }}
                />
                
                {/* Body */}
                <motion.rect 
                  x="70" 
                  y="120" 
                  width="60" 
                  height="60" 
                  rx="10"
                  fill="#1e40af"
                  initial={{ y: 0 }}
                  animate={{ y: -5 }}
                  transition={{ 
                    y: { 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      ease: "easeInOut"
                    } 
                  }}
                />
                
                {/* Eyes */}
                <motion.circle 
                  cx="85" 
                  cy="75" 
                  r="5" 
                  fill="white"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                />
                <motion.circle 
                  cx="115" 
                  cy="75" 
                  r="5" 
                  fill="white"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ 
                    duration: 3, 
                    delay: 0.5,
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                />
                
                {/* Smile */}
                <motion.path 
                  d="M85 100 Q100 115 115 100" 
                  stroke="white" 
                  strokeWidth="3" 
                  fill="transparent"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                
                {/* Decorative animated circles */}
                <motion.circle 
                  cx="40" 
                  cy="50" 
                  r="5" 
                  fill="#60a5fa"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    scale: { 
                      duration: 1, 
                      delay: 0.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    } 
                  }}
                />
                <motion.circle 
                  cx="160" 
                  cy="150" 
                  r="8" 
                  fill="#93c5fd"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    scale: { 
                      duration: 1.5, 
                      delay: 0.7,
                      repeat: Infinity,
                      repeatType: "reverse"
                    } 
                  }}
                />
              </svg>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500/20 rounded-full"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [360, 0]
                }}
                transition={{ 
                  duration: 10, 
                  delay: 1,
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
