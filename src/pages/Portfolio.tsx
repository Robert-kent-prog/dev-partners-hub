import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const categories = ["All", "Web", "Mobile", "Design", "Full-Stack"];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with real-time inventory management.",
    fullDescription:
      "A comprehensive e-commerce solution featuring real-time inventory tracking, secure payment processing via Stripe, user authentication, order management, and an intuitive admin dashboard. Built with React for a smooth user experience and Node.js for robust backend operations.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "Stripe", "PostgreSQL", "Redis", "AWS"],
    category: "Full-Stack",
    challenges:
      "Handling high traffic during sales events and ensuring real-time inventory sync across multiple platforms.",
    solutions:
      "Implemented Redis caching, database optimization, and WebSocket connections for real-time updates. Used AWS auto-scaling for handling traffic spikes.",
    testimonial:
      "Nexus Dev Partners delivered exactly what we needed. Our sales have increased by 40% since launch!",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Health & Fitness App",
    description: "Mobile app for tracking workouts, nutrition, and health metrics.",
    fullDescription:
      "A comprehensive health tracking application that helps users monitor their fitness journey. Features include workout logging, nutrition tracking, progress photos, AI-powered meal suggestions, and integration with wearable devices. Available on both iOS and Android.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    technologies: ["React Native", "Firebase", "TensorFlow", "HealthKit"],
    category: "Mobile",
    challenges:
      "Integrating with various health APIs and wearables while maintaining battery efficiency.",
    solutions:
      "Used background fetch wisely, implemented lazy loading for data, and created a modular architecture for different health platform integrations.",
    testimonial:
      "This app has transformed how I track my fitness. The AI meal suggestions are incredibly accurate!",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization.",
    fullDescription:
      "A powerful analytics dashboard for SaaS companies featuring real-time data visualization, team collaboration tools, custom report generation, and automated insights. Built with performance in mind to handle large datasets smoothly.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "D3.js", "Python", "AWS", "WebSockets"],
    category: "Web",
    challenges:
      "Rendering complex visualizations with thousands of data points without performance degradation.",
    solutions:
      "Implemented data aggregation on the backend, used WebGL for rendering, and created smart caching strategies for frequently accessed reports.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Restaurant Ordering System",
    description: "Complete digital ordering solution for restaurants.",
    fullDescription:
      "A complete restaurant management system featuring digital menu with QR code ordering, kitchen display system, order tracking, payment processing, and customer loyalty program. Helps restaurants streamline operations and improve customer experience.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "Socket.io", "Stripe", "MongoDB"],
    category: "Full-Stack",
    challenges:
      "Real-time order synchronization between customer devices and kitchen displays during peak hours.",
    solutions:
      "Built a robust WebSocket infrastructure with fallback to polling, implemented message queuing for order processing, and optimized database queries for high throughput.",
    testimonial:
      "Our order processing time decreased by 50% and customer satisfaction scores are through the roof!",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Event Management Platform",
    description: "Platform for organizing and managing events of all sizes.",
    fullDescription:
      "A comprehensive event management solution featuring event creation, ticketing, attendee management, virtual event support, analytics dashboard, and marketing tools. Scalable from small meetups to large conferences.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Vercel"],
    category: "Web",
    challenges:
      "Supporting both in-person and virtual events with seamless integration and real-time attendee interaction.",
    solutions:
      "Created a flexible event schema, integrated WebRTC for virtual events, and built a modular system that adapts to different event types.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management Mobile App",
    description: "Cross-platform productivity app with team collaboration features.",
    fullDescription:
      "A beautiful and intuitive task management app that helps teams stay organized. Features include task boards, time tracking, file attachments, team chat, notifications, and offline support. Syncs seamlessly across all devices.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
    category: "Mobile",
    challenges: "Ensuring offline functionality with complex sync logic when devices reconnect.",
    solutions:
      "Implemented a local-first architecture with conflict resolution, used Firebase's offline capabilities, and created a smart sync queue system.",
    testimonial:
      "Finally, a task app that works perfectly offline. Our remote team loves it!",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Fintech Dashboard Design",
    description: "Complete UI/UX design for a financial technology platform.",
    fullDescription:
      "A comprehensive design system and user interface for a fintech platform. Includes dashboard layouts, transaction flows, data visualization components, mobile-responsive designs, and accessibility-compliant interfaces.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Figma", "Design System", "Prototyping", "User Research"],
    category: "Design",
    challenges:
      "Presenting complex financial data in an intuitive way while meeting strict regulatory requirements.",
    solutions:
      "Conducted extensive user research, created a component library for consistency, and worked closely with compliance teams to ensure all designs met regulatory standards.",
    liveUrl: "#",
  },
  {
    title: "Social Media Analytics Tool",
    description: "Tool for tracking and analyzing social media performance.",
    fullDescription:
      "A powerful analytics tool that aggregates data from multiple social media platforms, providing insights on engagement, reach, and audience demographics. Features automated reporting, competitor analysis, and AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Chart.js"],
    category: "Web",
    challenges:
      "Aggregating data from multiple APIs with different rate limits and data structures.",
    solutions:
      "Built a robust data pipeline with rate limiting, created unified data models, and implemented background jobs for continuous data fetching.",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

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
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Projects We're
              <span className="text-gradient"> Proud Of</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              A showcase of our best work across web, mobile, and design projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border sticky top-[73px] bg-background/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={
                    activeCategory === category
                      ? "bg-gradient-to-r from-primary to-primary/80"
                      : ""
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  onClick={() => setSelectedProject(project)}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-lg text-muted-foreground mb-4">
                No projects found matching your criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <Footer />
    </div>
  );
};

export default Portfolio;
