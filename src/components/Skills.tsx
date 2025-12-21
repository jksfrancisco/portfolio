"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js/Express", level: 87 },
      { name: "Python/Django", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 83 },
      { name: "AWS/Azure", level: 78 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Kubernetes", level: 75 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "REST APIs", level: 90 },
      { name: "Testing (Jest/Pytest)", level: 85 },
      { name: "Agile/Scrum", level: 88 },
    ],
  },
]

function SkillBar({ skill, delay }: { skill: { name: string; level: number }; delay: number }) {
  const [width, setWidth] = useState(0)
  const [counter, setCounter] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setWidth(skill.level)
        // Animate counter
        const interval = setInterval(() => {
          setCounter((prev) => {
            if (prev >= skill.level) {
              clearInterval(interval)
              return skill.level
            }
            return prev + 2
          })
        }, 20)
        return () => clearInterval(interval)
      }, delay)
    }
  }, [isInView, skill.level, delay])

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{counter}%</span>
      </div>
      <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{
            width: `${width}%`,
            boxShadow: width === skill.level ? '0 0 10px hsl(var(--primary))' : 'none'
          }}
          transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] as const }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Subtle entrance animations for category cards
  const getSkillCardVariants = (index: number) => {
    const positions = [
      // Card 0: Slide from left
      { hidden: { x: -30, opacity: 0 }, visible: { x: 0, opacity: 1 } },
      // Card 1: Slide from right
      { hidden: { x: 30, opacity: 0 }, visible: { x: 0, opacity: 1 } },
      // Card 2: Slide from left
      { hidden: { x: -30, opacity: 0 }, visible: { x: 0, opacity: 1 } },
      // Card 3: Slide from right
      { hidden: { x: 30, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    ]
    return {
      hidden: positions[index].hidden,
      visible: {
        ...positions[index].visible,
        transition: { duration: 0.5, ease: "easeOut" as const },
      },
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  }

  // Subtle wave animation for tech tags
  const techTagVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.03,
        duration: 0.3,
        ease: "easeOut" as const,
      },
    }),
  }

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 tech-dots">
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
            Skills & Expertise
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Technologies and tools I work with
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.category} variants={getSkillCardVariants(categoryIndex)}>
              <Card className="h-full border-t-2 border-t-primary">
                <CardHeader>
                  <div className="h-1.5 w-20 bg-primary rounded-full mb-4" />
                  <CardTitle className="text-2xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={categoryIndex * 200 + skillIndex * 100}
                    />
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-16 text-center"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "JavaScript",
                "HTML5",
                "CSS3",
                "GraphQL",
                "Redis",
                "WebSockets",
                "Prisma",
                "tRPC",
                "Zustand",
                "Webpack",
                "Vite",
                "Linux",
                "Nginx",
                "Vercel",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  variants={techTagVariants}
                  initial="hidden"
                  animate={controls}
                  custom={index}
                  className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
