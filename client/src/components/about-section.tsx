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
            <div className="relative">
              <motion.img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
                alt="Ankit Tiwari - Professional headshot"
                className="w-80 h-80 rounded-2xl object-cover shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                data-testid="profile-image"
              />
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
