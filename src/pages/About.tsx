import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import TeamMember from "@/components/TeamMember";
import SkillBar from "@/components/SkillBar";
import { GraduationCap, Rocket, Target, Heart } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Developer",
    role: "Co-Founder",
    specialization: "Frontend & UI/UX",
    skills: ["React", "Vue", "Tailwind CSS", "Figma", "TypeScript"],
    philosophy: "Clean code solves complex problems",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Jordan Engineer",
    role: "Co-Founder",
    specialization: "Backend & Mobile",
    skills: ["Node.js", "Python", "React Native", "Flutter", "PostgreSQL"],
    philosophy: "Engineering scalable solutions",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
  },
];

const skills = [
  { skill: "Frontend Technologies", percentage: 90 },
  { skill: "Backend Development", percentage: 85 },
  { skill: "Mobile Development", percentage: 80 },
  { skill: "UI/UX Design", percentage: 75 },
  { skill: "DevOps & Cloud", percentage: 70 },
];

const journey = [
  {
    icon: GraduationCap,
    title: "University Years",
    description:
      "Met during our BSc Information Technology program, collaborating on projects and hackathons.",
  },
  {
    icon: Target,
    title: "Skill Building",
    description:
      "Focused on different specializations - frontend/design and backend/mobile - to complement each other.",
  },
  {
    icon: Rocket,
    title: "Nexus Dev Partners",
    description:
      "Combined our skills and passion to offer professional software development services.",
  },
  {
    icon: Heart,
    title: "Today & Beyond",
    description:
      "Delivering quality solutions while continuing to learn and grow with every project.",
  },
];

const About = () => {
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
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              From IT Students to
              <span className="text-gradient"> Professional Developers</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We're 4th Year BSc Information Technology Graduates with a passion
              for creating impactful digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Journey"
            title="How It All Started"
            description="From university collaboration to a professional partnership."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journey.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < journey.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -translate-x-8" />
                )}

                <div className="bg-card rounded-2xl p-6 border border-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Meet The Team"
            title="The Minds Behind Nexus"
            description="Two developers with complementary skills, united by a shared vision."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamMember key={member.name} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Skills & Technologies
              </h2>
              <p className="text-muted-foreground mb-8">
                Our combined expertise spans the full spectrum of modern software
                development, from pixel-perfect frontends to robust backend
                systems.
              </p>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <SkillBar key={skill.skill} {...skill} index={index} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Technologies We Love
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { category: "Frontend", techs: ["React", "Vue", "Angular"] },
                    { category: "Backend", techs: ["Node.js", "Python", "PHP"] },
                    {
                      category: "Mobile",
                      techs: ["React Native", "Flutter", "PWA"],
                    },
                    {
                      category: "Design",
                      techs: ["Figma", "Tailwind", "Framer"],
                    },
                    {
                      category: "Database",
                      techs: ["PostgreSQL", "MongoDB", "Firebase"],
                    },
                    { category: "DevOps", techs: ["Docker", "AWS", "Vercel"] },
                  ].map((group) => (
                    <div key={group.category} className="space-y-2">
                      <h4 className="text-sm font-medium text-muted-foreground">
                        {group.category}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {group.techs.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-muted rounded-md text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 via-card to-secondary/5 rounded-2xl p-8 md:p-12 border border-border text-center"
          >
            <GraduationCap className="w-16 h-16 mx-auto text-primary mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Academic Foundation
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Both founders are 4th Year BSc Information Technology graduates with
              strong academic backgrounds in software engineering, computer
              science, and digital systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Software Engineering",
                "Web Development",
                "Database Systems",
                "Mobile Development",
                "UI/UX Design",
                "Project Management",
              ].map((course) => (
                <span
                  key={course}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground"
                >
                  {course}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
