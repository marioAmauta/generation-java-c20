import {
  Code,
  Database,
  Globe,
  Server,
  Users,
  Calendar,
  ShoppingCart,
  CreditCard,
  FileText,
  Calculator
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function HomePage() {
  const projects = [
    {
      id: 1,
      title: "Banking Management System",
      description:
        "A comprehensive banking application with account management, transactions, and loan processing features.",
      technologies: ["Java", "Spring Boot", "MySQL", "REST API"],
      icon: <CreditCard className="h-8 w-8" />,
      author: "Sarah Chen",
      completionDate: "Week 12",
      features: [
        "Account Creation",
        "Fund Transfers",
        "Transaction History",
        "Loan Calculator"
      ]
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description:
        "Full-featured online shopping platform with user authentication, product catalog, and payment integration.",
      technologies: ["Java", "Spring MVC", "PostgreSQL", "Thymeleaf"],
      icon: <ShoppingCart className="h-8 w-8" />,
      author: "Marcus Rodriguez",
      completionDate: "Week 14",
      features: [
        "Product Catalog",
        "Shopping Cart",
        "User Profiles",
        "Order Management"
      ]
    },
    {
      id: 3,
      title: "Task Management API",
      description:
        "RESTful API for project and task management with team collaboration features and real-time updates.",
      technologies: ["Java", "Spring Boot", "MongoDB", "WebSocket"],
      icon: <FileText className="h-8 w-8" />,
      author: "Emily Johnson",
      completionDate: "Week 10",
      features: [
        "Task CRUD",
        "Team Collaboration",
        "Real-time Updates",
        "File Attachments"
      ]
    },
    {
      id: 4,
      title: "Library Management System",
      description:
        "Digital library system for book inventory, member management, and automated fine calculations.",
      technologies: ["Java", "Hibernate", "MySQL", "JavaFX"],
      icon: <Database className="h-8 w-8" />,
      author: "David Kim",
      completionDate: "Week 8",
      features: [
        "Book Inventory",
        "Member Management",
        "Fine Calculation",
        "Search & Filter"
      ]
    },
    {
      id: 5,
      title: "Weather Analytics Dashboard",
      description:
        "Weather data aggregation and visualization platform with historical analysis and forecasting.",
      technologies: ["Java", "Spring Boot", "H2 Database", "Chart.js"],
      icon: <Globe className="h-8 w-8" />,
      author: "Lisa Wang",
      completionDate: "Week 11",
      features: [
        "Data Visualization",
        "Historical Analysis",
        "API Integration",
        "Export Reports"
      ]
    },
    {
      id: 6,
      title: "Payroll Management System",
      description:
        "Employee payroll processing system with tax calculations, deductions, and automated report generation.",
      technologies: ["Java", "Spring Security", "PostgreSQL", "JasperReports"],
      icon: <Calculator className="h-8 w-8" />,
      author: "Alex Thompson",
      completionDate: "Week 13",
      features: [
        "Salary Calculation",
        "Tax Processing",
        "Report Generation",
        "Employee Portal"
      ]
    }
  ];

  const stats = [
    { label: "Total Projects", value: "24" },
    { label: "Students", value: "18" },
    { label: "Completion Rate", value: "94%" },
    { label: "Average Grade", value: "A-" }
  ];

  return (
    <div className="flex flex-col min-h-screen container mx-auto">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center">
          <Code className="h-8 w-8 text-primary" />
          <span className="ml-2 text-xl font-bold">Raíces Digitales</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#projects"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Projects
          </Link>
          <Link
            href="#students"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Students
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Desarrollador Full Stack Jr Java
                  <span className="block text-primary">
                    Cohorte 20 Generation
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"></p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground text-center">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Student Projects
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Explore the diverse range of applications our students have
                built from scratch during their bootcamp journey.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="flex flex-col h-full hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          by {project.author} • {project.completionDate}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-4">
                    <p className="text-sm text-muted-foreground flex-1">
                      {project.description}
                    </p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">
                          Key Features:
                        </h4>
                        <div className="grid grid-cols-2 gap-1 text-xs">
                          {project.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-1"
                            >
                              <div className="w-1 h-1 bg-primary rounded-full" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-2">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        View Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Source Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Graduate Success Stories
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Hear from our graduates about their bootcamp experience and how
                it transformed their careers.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Sarah Chen"
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">Sarah Chen</h4>
                      <p className="text-sm text-muted-foreground">
                        Software Engineer at TechCorp
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Banking System Project
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-sm italic">
                    "The bootcamp completely changed my career trajectory.
                    Building the banking management system taught me not just
                    Java, but how to think like a software engineer. I landed my
                    dream job just 2 weeks after graduation!"
                  </blockquote>
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Marcus Rodriguez"
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">Marcus Rodriguez</h4>
                      <p className="text-sm text-muted-foreground">
                        Full-Stack Developer at StartupXYZ
                      </p>
                      <p className="text-xs text-muted-foreground">
                        E-Commerce Platform Project
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-sm italic">
                    "The hands-on approach was incredible. My e-commerce project
                    became the centerpiece of my portfolio. The instructors
                    pushed us to build real-world applications, not just toy
                    examples."
                  </blockquote>
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Emily Johnson"
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">Emily Johnson</h4>
                      <p className="text-sm text-muted-foreground">
                        Backend Developer at DataFlow Inc
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Task Management API Project
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-sm italic">
                    "Coming from a non-tech background, I was nervous about
                    learning Java. The bootcamp's project-based learning made
                    complex concepts click. My API project impressed my current
                    employer!"
                  </blockquote>
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="David Kim"
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">David Kim</h4>
                      <p className="text-sm text-muted-foreground">
                        Java Developer at Enterprise Solutions
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Library Management System Project
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-sm italic">
                    "The bootcamp prepared me for enterprise development.
                    Working with Hibernate and MySQL in my library project gave
                    me the database skills that employers were looking for."
                  </blockquote>
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Lisa Wang"
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">Lisa Wang</h4>
                      <p className="text-sm text-muted-foreground">
                        Data Engineer at CloudTech
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Weather Analytics Project
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-sm italic">
                    "The weather analytics project opened my eyes to data
                    visualization and API integration. It directly led to my
                    current role in data engineering. The skills transfer was
                    seamless!"
                  </blockquote>
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Alex Thompson"
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">Alex Thompson</h4>
                      <p className="text-sm text-muted-foreground">
                        Senior Java Developer at FinanceFlow
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Payroll Management Project
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-sm italic">
                    "Six months after graduation, I got promoted to senior
                    developer! The payroll system project taught me Spring
                    Security and complex business logic that I use daily in my
                    current role."
                  </blockquote>
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </CardContent>
              </Card>
            </div>

            {/* Success Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">
                  Job Placement Rate
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">$75K</div>
                <div className="text-sm text-muted-foreground">
                  Average Starting Salary
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">3 Weeks</div>
                <div className="text-sm text-muted-foreground">
                  Average Time to Job Offer
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Building Tomorrow's Developers
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Our intensive Java bootcamp transforms beginners into skilled
                  developers through hands-on projects, industry best practices,
                  and mentorship from experienced professionals.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <Server className="h-5 w-5 text-primary" />
                    <span className="text-sm">Enterprise-grade projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-sm">Collaborative learning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="h-5 w-5 text-primary" />
                    <span className="text-sm">Industry best practices</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-sm">16-week intensive program</span>
                  </div>
                </div>
                <Button size="lg" className="mt-4">
                  Apply Now
                </Button>
              </div>
              <div className="lg:order-first">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Students coding"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Start Your Journey?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Join our next cohort and build amazing projects while learning
                  Java development from industry experts.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">Enroll Today</Button>
                <Button variant="outline" size="lg">
                  Download Curriculum
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2024 JavaBootcamp. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  );
}
