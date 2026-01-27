import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, X } from "lucide-react";

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  challenges: string;
  solutions: string;
  testimonial?: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
        {/* Image Header */}
        <div className="relative h-64 md:h-80">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="px-6 pb-6 -mt-20 relative z-10">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-4 mb-6">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="font-medium">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                About This Project
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-muted/50 rounded-xl p-4">
                <h5 className="font-semibold text-foreground mb-2">
                  🎯 Challenges
                </h5>
                <p className="text-sm text-muted-foreground">
                  {project.challenges}
                </p>
              </div>
              <div className="bg-primary/5 rounded-xl p-4">
                <h5 className="font-semibold text-foreground mb-2">
                  ✅ Solutions
                </h5>
                <p className="text-sm text-muted-foreground">
                  {project.solutions}
                </p>
              </div>
            </div>

            {/* Testimonial */}
            {project.testimonial && (
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border-l-4 border-primary">
                <p className="text-muted-foreground italic">
                  "{project.testimonial}"
                </p>
                <p className="text-sm font-medium text-foreground mt-2">
                  — Happy Client
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2 bg-gradient-to-r from-primary to-primary/80">
                    <ExternalLink className="w-4 h-4" />
                    View Live Demo
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <Github className="w-4 h-4" />
                    View Source Code
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
