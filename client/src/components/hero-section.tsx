import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Code, Database, Cpu } from "lucide-react";

export function HeroSection() {
  const downloadResume = () => {
    // TODO: Replace with actual resume download URL
    const resumeUrl = "/resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const floatingElements = [
    { icon: Code, position: "top-20 left-10", delay: 0, color: "text-blue-400" },
    { icon: Database, position: "bottom-20 right-10", delay: 2, color: "text-green-400" },
    { icon: Cpu, position: "top-1/2 left-1/4", delay: 4, color: "text-yellow-400" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/20 via-blue-600/20 to-primary/20"
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-600/10 to-primary/10 animate-gradient bg-[length:400%_400%]" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Ankit
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Tiwari
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Full-Stack Developer | AI Enthusiast | Problem Solver
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              onClick={downloadResume}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
              data-testid="download-resume"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
              data-testid="contact-me"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      {floatingElements.map(({ icon: Icon, position, delay, color }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} hidden lg:block`}
          animate={{ y: [-20, 20, -20] }}
          transition={{
            duration: 6,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-16 h-16 bg-background/10 dark:bg-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-border/20">
            <Icon className={`text-2xl ${color}`} />
          </div>
        </motion.div>
      ))}
    </section>
  );
}
