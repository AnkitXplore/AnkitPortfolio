import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Linkedin, 
  Github, 
  Twitter, 
  MessageSquare,
  QrCode
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual EmailJS configuration
      // await emailjs.send('service_id', 'template_id', formData, 'public_key');
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ankit.tiwari@example.com",
      href: "mailto:ankit.tiwari@example.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, India",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Usually within 24 hours",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/ankittiwari",
      color: "text-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/ankittiwari",
      color: "text-gray-900 dark:text-gray-100",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/ankittiwari",
      color: "text-blue-400",
    },
    {
      name: "Medium",
      icon: MessageSquare,
      href: "https://medium.com/@ankittiwari",
      color: "text-gray-700 dark:text-gray-300",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's collaborate on something amazing. I'm always open to discussing new opportunities and innovative projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="mt-2"
                      data-testid="input-name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="mt-2"
                      data-testid="input-email"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      className="mt-2 min-h-[120px] resize-none"
                      data-testid="input-message"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full transition-all duration-200 transform hover:scale-105"
                    data-testid="submit-form"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Let's connect</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="text-primary text-xl" />
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            data-testid={`contact-${info.label.toLowerCase()}`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Follow me on</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-accent rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 group"
                      data-testid={`social-${social.name.toLowerCase()}`}
                    >
                      <social.icon className={`text-xl ${social.color} group-hover:text-primary-foreground transition-colors`} />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* QR Code for Resume */}
            <Card className="shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Quick Resume Access</h3>
                <div className="bg-white p-4 rounded-lg inline-block border">
                  <div className="w-32 h-32 bg-gray-200 rounded flex items-center justify-center">
                    <QrCode className="text-4xl text-gray-500" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Scan to download my resume
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
