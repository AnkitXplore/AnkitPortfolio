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
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">
              &copy; 2025 Ankit Tiwari. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                data-testid={`footer-${social.name.toLowerCase()}`}
              >
                <social.icon className="text-xl" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-8 pt-8 border-t border-border text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-sm text-muted-foreground">
            Designed and developed with ❤️ for the future of web development
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
