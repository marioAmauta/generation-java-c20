import { ContainerSection, RegularSection, SectionHeader } from "@/components/layout/sections";
import { TypographyH4, TypographyMuted } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Project = {
  id: string | number;
  title: string;
  description: string;
  technologies: string[];
  author: string;
  completionDate: string;
  features: string[];
};

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Banking Management System",
      description:
        "A comprehensive banking application with account management, transactions, and loan processing features.",
      technologies: ["Java", "Spring Boot", "MySQL", "REST API"],
      author: "Sarah Chen",
      completionDate: "Week 12",
      features: ["Account Creation", "Fund Transfers", "Transaction History", "Loan Calculator"]
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description:
        "Full-featured online shopping platform with user authentication, product catalog, and payment integration.",
      technologies: ["Java", "Spring MVC", "PostgreSQL", "Thymeleaf"],
      author: "Marcus Rodriguez",
      completionDate: "Week 14",
      features: ["Product Catalog", "Shopping Cart", "User Profiles", "Order Management"]
    },
    {
      id: 3,
      title: "Task Management API",
      description:
        "RESTful API for project and task management with team collaboration features and real-time updates.",
      technologies: ["Java", "Spring Boot", "MongoDB", "WebSocket"],
      author: "Emily Johnson",
      completionDate: "Week 10",
      features: ["Task CRUD", "Team Collaboration", "Real-time Updates", "File Attachments"]
    },
    {
      id: 4,
      title: "Library Management System",
      description: "Digital library system for book inventory, member management, and automated fine calculations.",
      technologies: ["Java", "Hibernate", "MySQL", "JavaFX"],
      author: "David Kim",
      completionDate: "Week 8",
      features: ["Book Inventory", "Member Management", "Fine Calculation", "Search & Filter"]
    },
    {
      id: 5,
      title: "Weather Analytics Dashboard",
      description: "Weather data aggregation and visualization platform with historical analysis and forecasting.",
      technologies: ["Java", "Spring Boot", "H2 Database", "Chart.js"],
      author: "Lisa Wang",
      completionDate: "Week 11",
      features: ["Data Visualization", "Historical Analysis", "API Integration", "Export Reports"]
    },
    {
      id: 6,
      title: "Payroll Management System",
      description:
        "Employee payroll processing system with tax calculations, deductions, and automated report generation.",
      technologies: ["Java", "Spring Security", "PostgreSQL", "JasperReports"],
      author: "Alex Thompson",
      completionDate: "Week 13",
      features: ["Salary Calculation", "Tax Processing", "Report Generation", "Employee Portal"]
    }
  ];

  return (
    <RegularSection>
      <ContainerSection>
        <SectionHeader
          title="Proyectos de los Estudiantes"
          description="Explora la diversa gama de aplicaciones que nuestros estudiantes han construido desde cero durante su viaje
            por el bootcamp."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </ContainerSection>
    </RegularSection>
  );
}

function ProjectCard({ title, description, technologies, author, completionDate, features }: Project) {
  return (
    <Card className="transition-shadow hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-sm">
          by {author} • {completionDate}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <TypographyMuted>{description}</TypographyMuted>
        <div className="space-y-2">
          <div className="space-y-2">
            <TypographyH4 className="text-lg">Funciones Principales</TypographyH4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-1">
                  <div className="h-1 w-1 rounded-full bg-primary" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <TypographyH4 className="text-lg">Tecnologías</TypographyH4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button size="sm">Ver Proyecto</Button>
          <Button size="sm" variant="outline">
            Ver Código
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
