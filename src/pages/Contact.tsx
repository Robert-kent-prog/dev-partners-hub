import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Linkedin, Github, Clock, Briefcase, Users, Code } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    value: "contact@nexusdevpartners.com",
    href: "mailto:contact@nexusdevpartners.com",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Connect with us",
    href: "https://linkedin.com",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "View our repositories",
    href: "https://github.com",
  },
];

const collaborationTypes = [
  {
    icon: Briefcase,
    title: "Freelance Projects",
    description: "One-time projects with defined scope and deliverables.",
  },
  {
    icon: Clock,
    title: "Part-time Positions",
    description: "Ongoing part-time work with flexible hours.",
  },
  {
    icon: Users,
    title: "Internship Opportunities",
    description: "Learning opportunities and mentorship programs.",
  },
  {
    icon: Code,
    title: "Open-source Contributions",
    description: "Collaboration on open-source projects and initiatives.",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's Build Something
              <span className="text-gradient"> Amazing Together</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Have a project in mind? We'd love to hear about it. Send us a
              message and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Methods */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactMethods.map((method) => (
                    <a
                      key={method.title}
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <method.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">
                          {method.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {method.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">
                    Quick Response
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  We respond to all inquiries within 24 hours. For urgent
                  matters, mention it in your message.
                </p>
              </motion.div>

              {/* Collaboration Types */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Open For
                </h2>
                <div className="space-y-4">
                  {collaborationTypes.map((type) => (
                    <div
                      key={type.title}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                        <type.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">
                          {type.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border"
              >
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Check Out Our GitHub
            </h2>
            <p className="text-muted-foreground mb-8">
              We're active contributors to open-source projects. Check out our
              repositories and contributions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                <Github className="w-5 h-5" />
                View Alex's GitHub
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                <Github className="w-5 h-5" />
                View Jordan's GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
