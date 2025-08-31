import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Code, Database, Cpu, Sparkles } from "lucide-react";

export function HeroSection() {
  const [typewriterText, setTypewriterText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const roles = [
    "Full-Stack Developer",
    "AI Enthusiast", 
    "Problem Solver",
    "Tech Innovator"
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let i = 0;
    const typing = setInterval(() => {
      setTypewriterText(currentRole.slice(0, i));
      i++;
      if (i > currentRole.length) {
        clearInterval(typing);
        setTimeout(() => {
          const erasing = setInterval(() => {
            setTypewriterText(currentRole.slice(0, i));
            i--;
            if (i < 0) {
              clearInterval(erasing);
              setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [currentRoleIndex]);

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-400/20 animate-gradient bg-[length:400%_400%]" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
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
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight font-serif">
              <motion.span 
                className="block text-foreground"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Ankit
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Tiwari
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="text-foreground font-medium">
              {typewriterText}
            </span>
            <span className="animate-pulse text-primary">|</span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                onClick={downloadResume}
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 glow-effect"
                data-testid="download-resume"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="glassmorphism border-2 border-primary/50 hover:bg-primary/10 font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300"
                data-testid="contact-me"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Floating Elements */}
      {floatingElements.map(({ icon: Icon, position, delay, color }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} hidden lg:block`}
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-20 h-20 glassmorphism rounded-2xl flex items-center justify-center shadow-xl floating-animation">
            <Icon className={`text-3xl ${color}`} />
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-600/20"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      ))}
      
      {/* Additional decorative elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 hidden xl:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="text-4xl text-yellow-400/60" />
      </motion.div>
    </section>
  );
}
