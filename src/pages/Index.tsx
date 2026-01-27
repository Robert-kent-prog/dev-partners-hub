import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Download,
  Code,
  Smartphone,
  Palette,
  MessageSquare,
  Users,
  Sparkles,
  DollarSign,
  Handshake,
  Zap,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Modern, responsive web applications built with React, Vue, or Angular. From landing pages to complex web apps.",
    features: ["React & Vue", "Tailwind CSS", "Full-stack Solutions"],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps that feel native. Built with React Native and Flutter for iOS & Android.",
    features: ["React Native", "Flutter", "Progressive Web Apps"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that converts. Wireframing, prototyping, and design systems that delight users.",
    features: ["Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: MessageSquare,
    title: "Technical Consultation",
    description:
      "Expert guidance on technology choices, architecture decisions, and code reviews for your projects.",
    features: ["Code Reviews", "Tech Stack Advice", "Architecture"],
  },
  {
    icon: Users,
    title: "Project Collaboration",
    description:
      "We work as an extension of your team. Agile methodology, clear communication, and reliable delivery.",
    features: ["Agile Process", "Clear Communication", "On-time Delivery"],
  },
];

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with real-time inventory management and payment processing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Health & Fitness App",
    description:
      "Mobile app for tracking workouts, nutrition, and health metrics with AI-powered insights.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    technologies: ["React Native", "Firebase", "TensorFlow"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard with real-time data visualization and team collaboration features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "D3.js", "Python", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const whyChooseUs = [
  {
    icon: Sparkles,
    title: "Fresh, Modern Approaches",
    description:
      "We bring the latest technologies and design trends to every project we undertake.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description:
      "Quality work at fair prices. We offer transparent pricing with no hidden costs.",
  },
  {
    icon: Handshake,
    title: "Dedicated Partnership",
    description:
      "We treat every client as a partner, invested in your long-term success.",
  },
  {
    icon: Zap,
    title: "Latest Technologies",
    description:
      "Always up-to-date with cutting-edge tools, frameworks, and best practices.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Two Minds, Unlimited Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              We Build
              <span className="text-gradient"> Digital Solutions </span>
              That Matter
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"
            >
              Graduate developers specializing in custom web solutions, mobile
              apps, and digital innovation.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base text-muted-foreground mb-8 max-w-xl mx-auto"
            >
              Two passionate IT graduates offering bespoke software solutions for
              businesses of all sizes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/portfolio">
                <Button
                  size="lg"
                  className="group gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/25"
                >
                  View Our Work
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-2"
                >
                  Get a Quote
                </Button>
              </Link>
              <Button
                size="lg"
                variant="ghost"
                className="gap-2 text-muted-foreground hover:text-foreground"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </motion.div>
          </div>

          {/* Floating code elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="absolute top-40 left-20 font-mono text-sm text-muted-foreground/40 animate-float">
              &lt;code&gt;
            </div>
            <div
              className="absolute bottom-40 right-20 font-mono text-sm text-muted-foreground/40 animate-float"
              style={{ animationDelay: "1s" }}
            >
              &lt;/code&gt;
            </div>
            <div
              className="absolute top-60 right-40 font-mono text-sm text-muted-foreground/40 animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              {"{ }"}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Services"
            title="What We Can Build For You"
            description="From concept to deployment, we offer comprehensive development services tailored to your needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Featured Work"
            title="Projects We're Proud Of"
            description="A selection of our recent projects showcasing our capabilities and attention to detail."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="gap-2">
                View All Projects
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Why Us"
            title="Why Choose Nexus Dev Partners"
            description="We bring fresh perspectives and dedicated partnership to every project."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/80 p-8 md:p-16 text-center"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-background/10 rounded-full blur-2xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help bring your ideas to life. Free
                consultation included!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="gap-2 font-semibold"
                  >
                    Get Your Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
