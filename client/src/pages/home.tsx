import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <motion.div 
      className="min-h-screen bg-background text-foreground"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Navigation />
      
      <motion.div variants={sectionVariants}>
        <HeroSection />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <AboutSection />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <SkillsSection />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <ProjectsSection />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <ExperienceSection />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <BlogSection />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <ContactSection />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <Footer />
      </motion.div>
    </motion.div>
  );
}
