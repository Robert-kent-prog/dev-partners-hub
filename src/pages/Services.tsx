import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Code,
  Smartphone,
  Palette,
  MessageSquare,
  ChevronDown,
  Check,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    description:
      "We build modern, responsive web applications that are fast, secure, and scalable.",
    details: [
      {
        title: "Frontend Development",
        items: ["React.js & Next.js", "Vue.js & Nuxt", "Angular", "Tailwind CSS & Styled Components"],
      },
      {
        title: "Backend Development",
        items: ["Node.js & Express", "Python & Django", "PHP & Laravel", "RESTful & GraphQL APIs"],
      },
      {
        title: "Full-Stack Solutions",
        items: ["E-commerce platforms", "Content management systems", "Custom web applications", "SaaS products"],
      },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications that deliver native-like experiences on iOS and Android.",
    details: [
      {
        title: "React Native",
        items: ["Cross-platform development", "Native modules integration", "Expo workflow", "App Store deployment"],
      },
      {
        title: "Flutter",
        items: ["Single codebase for all platforms", "Custom UI components", "Firebase integration", "Performance optimization"],
      },
      {
        title: "Progressive Web Apps",
        items: ["Offline functionality", "Push notifications", "Install to home screen", "Fast loading times"],
      },
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that creates intuitive, engaging, and conversion-focused experiences.",
    details: [
      {
        title: "Research & Strategy",
        items: ["User research", "Competitive analysis", "User personas", "Journey mapping"],
      },
      {
        title: "Design & Prototyping",
        items: ["Wireframing", "High-fidelity mockups", "Interactive prototypes", "Design systems"],
      },
      {
        title: "Implementation",
        items: ["Responsive design", "Motion design", "Accessibility (WCAG)", "Design handoff"],
      },
    ],
  },
  {
    icon: MessageSquare,
    title: "Technical Consulting",
    description:
      "Expert guidance on technology choices, architecture, and best practices for your projects.",
    details: [
      {
        title: "Code Review",
        items: ["Quality assessment", "Performance analysis", "Security audit", "Best practices recommendations"],
      },
      {
        title: "Technology Strategy",
        items: ["Tech stack selection", "Architecture planning", "Scalability planning", "Migration strategies"],
      },
      {
        title: "Project Support",
        items: ["Project scoping", "Timeline estimation", "Risk assessment", "Team mentoring"],
      },
    ],
  },
];

const pricingModels = [
  {
    title: "Project-Based",
    description: "Fixed price for defined scope and deliverables",
    features: ["Clear deliverables", "Defined timeline", "Milestone payments"],
    best: "Ideal for well-defined projects",
  },
  {
    title: "Hourly Rate",
    description: "Flexible engagement for ongoing work",
    features: ["Pay for time used", "Flexible scope", "Regular updates"],
    best: "Ideal for evolving requirements",
  },
  {
    title: "Retainer",
    description: "Dedicated hours each month for ongoing support",
    features: ["Priority support", "Guaranteed availability", "Discounted rates"],
    best: "Ideal for long-term partnerships",
  },
  {
    title: "Free Consultation",
    description: "Initial discussion to understand your needs",
    features: ["No obligation", "Expert advice", "Project estimation"],
    best: "Start here!",
    highlighted: true,
  },
];

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

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
              What We Offer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Comprehensive
              <span className="text-gradient"> Development Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              From initial concept to final deployment, we provide end-to-end
              solutions for your digital needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Services"
            title="What We Can Build"
            description="Explore our range of services designed to bring your vision to life."
          />

          <div className="max-w-4xl mx-auto space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border overflow-hidden"
              >
                {/* Service Header */}
                <button
                  onClick={() =>
                    setExpandedService(
                      expandedService === index ? null : index
                    )
                  }
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                      expandedService === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Service Details */}
                <AnimatePresence>
                  {expandedService === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {service.details.map((detail) => (
                            <div
                              key={detail.title}
                              className="bg-muted/50 rounded-xl p-4"
                            >
                              <h4 className="font-semibold text-foreground mb-3">
                                {detail.title}
                              </h4>
                              <ul className="space-y-2">
                                {detail.items.map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-center gap-2 text-sm text-muted-foreground"
                                  >
                                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Pricing"
            title="Flexible Pricing Models"
            description="Choose the engagement model that best fits your project needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pricingModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-card rounded-2xl p-6 border ${
                  model.highlighted
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "border-border"
                }`}
              >
                {model.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-medium text-primary-foreground bg-gradient-to-r from-primary to-primary/80 rounded-full">
                      Recommended
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {model.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {model.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {model.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-primary font-medium">{model.best}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your requirements and create something amazing
              together.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-primary to-primary/80"
              >
                Get Your Free Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
