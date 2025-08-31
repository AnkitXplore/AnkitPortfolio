import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/ankittiwari",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/ankittiwari",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/ankittiwari",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:ankit.tiwari@example.com",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="mb-8 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-foreground font-medium text-lg">
              &copy; 2025 Ankit Tiwari. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Built with ❤️ using React, TypeScript, and Tailwind CSS
            </p>
          </motion.div>

          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                data-testid={`footer-${social.name.toLowerCase()}`}
              >
                <div className="w-12 h-12 glassmorphism rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <social.icon className="text-xl text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
                
                {/* Tooltip */}
                <motion.div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  {social.name}
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced bottom section */}
        <motion.div
          className="mt-12 pt-8 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Gradient divider */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          
          <div className="text-center">
            <motion.p 
              className="text-sm text-muted-foreground leading-relaxed"
              whileHover={{ scale: 1.02 }}
            >
              Designed and developed with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                ❤️
              </motion.span>{" "}
              for the future of web development
            </motion.p>
            
            <motion.div
              className="mt-4 text-xs text-muted-foreground/60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent font-medium">
                "Innovation distinguishes between a leader and a follower." - Steve Jobs
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
