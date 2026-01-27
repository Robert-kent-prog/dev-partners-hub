import { Github, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  role: string;
  specialization: string;
  skills: string[];
  philosophy: string;
  image: string;
  index?: number;
}

const TeamMember = ({
  name,
  role,
  specialization,
  skills,
  philosophy,
  image,
  index = 0,
}: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group"
    >
      <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 card-hover">
        {/* Image Section */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-transparent" />

          {/* Social Links */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Name & Role Overlay */}
          <div className="absolute bottom-4 left-4">
            <h3 className="text-xl font-bold text-background">{name}</h3>
            <p className="text-background/80 text-sm">{role}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Specialization */}
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
              Specialization
            </span>
            <p className="text-foreground font-semibold">{specialization}</p>
          </div>

          {/* Skills */}
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium block mb-2">
              Skills & Technologies
            </span>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <div className="pt-2 border-t border-border">
            <p className="text-sm text-muted-foreground italic">"{philosophy}"</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;
