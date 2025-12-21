"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "SaaS Dashboard Builder",
    description: "A modern dashboard builder allowing users to create custom analytics dashboards with drag-and-drop widgets, real-time data updates, and responsive design",
    tags: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com/yourusername/dashboard-builder",
    demo: "https://dashboard-builder-demo.vercel.app",
  },
  {
    title: "Real-Time Chat Application",
    description: "Full-stack chat app with WebSocket support, message encryption, file sharing, typing indicators, and read receipts",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/yourusername/chat-app",
    demo: "https://chat-app-demo.vercel.app",
  },
  {
    title: "E-Commerce API",
    description: "RESTful API for e-commerce with authentication, product management, order processing, payment integration, and admin controls",
    tags: ["Express.js", "PostgreSQL", "Redis", "Stripe"],
    github: "https://github.com/yourusername/ecommerce-api",
    demo: "https://api-docs-demo.vercel.app",
  },
  {
    title: "Portfolio CMS",
    description: "Headless CMS for developers to manage portfolio content with Markdown support, media library, and REST/GraphQL APIs",
    tags: ["Next.js", "GraphQL", "Prisma", "Cloudinary"],
    github: "https://github.com/yourusername/portfolio-cms",
    demo: "https://portfolio-cms-demo.vercel.app",
  },
  {
    title: "Weather Forecast App",
    description: "Progressive web app displaying detailed weather forecasts with geolocation, favorites, and beautiful UI animations",
    tags: ["React", "OpenWeather API", "PWA", "Tailwind"],
    github: "https://github.com/yourusername/weather-app",
    demo: "https://weather-app-demo.vercel.app",
  },
  {
    title: "Task Automation Bot",
    description: "Discord/Slack bot for task automation with custom commands, scheduled tasks, webhooks, and database integration",
    tags: ["Python", "Discord.py", "MongoDB", "Docker"],
    github: "https://github.com/yourusername/automation-bot",
    demo: "https://bot-demo-docs.vercel.app",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Simplified entrance patterns for each project card
  const getProjectVariants = (index: number) => {
    const patterns = [
      // Card 0: Slide from left
      { hidden: { x: -40, opacity: 0 }, visible: { x: 0, opacity: 1 } },
      // Card 1: Slide from bottom
      { hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } },
      // Card 2: Slide from right
      { hidden: { x: 40, opacity: 0 }, visible: { x: 0, opacity: 1 } },
      // Card 3: Fade in + slight scale
      { hidden: { scale: 0.95, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
      // Card 4: Slide from bottom
      { hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } },
      // Card 5: Fade in + slight scale
      { hidden: { scale: 0.95, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
    ]
    return {
      hidden: patterns[index % patterns.length].hidden,
      visible: {
        ...patterns[index % patterns.length].visible,
        transition: { duration: 0.5, ease: "easeOut" as const },
      },
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  }

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 tech-grid">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-4 text-primary"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A showcase of my recent work and side projects
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={getProjectVariants(index)}
            >
              <Card className="h-full flex flex-col overflow-hidden border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-4">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
