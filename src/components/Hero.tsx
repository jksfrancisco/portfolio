"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getParallaxMultiplier } from "@/lib/animation-utils"

export default function Hero() {
  // Scroll-based parallax effects (subtle)
  const { scrollYProgress } = useScroll()
  const parallaxMultiplier = getParallaxMultiplier()

  // Different parallax speeds for depth effect (reduced intensity)
  const shapesY = useTransform(scrollYProgress, [0, 1], [0, -100 * parallaxMultiplier])
  const particlesY = useTransform(scrollYProgress, [0, 1], [0, -150 * parallaxMultiplier])
  const codeLinesY = useTransform(scrollYProgress, [0, 1], [0, -200 * parallaxMultiplier])

  // Gentle fade out main content on scroll
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.3])
  const contentScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.98])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden overflow-x-hidden bg-background">
      {/* Modern Tech Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Base grid */}
        <div className="absolute inset-0 tech-grid opacity-30" />

        {/* Animated geometric shapes - Parallax Layer 1 (slowest) */}
        <motion.div style={{ y: shapesY }}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-primary/20"
              style={{
                width: 150 + i * 50,
                height: 150 + i * 50,
                left: `${20 + i * 10}%`,
                top: `${10 + i * 15}%`,
                borderRadius: i % 2 === 0 ? '50%' : '0%',
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>

        {/* Floating particles - Parallax Layer 2 (medium) */}
        <motion.div style={{ y: particlesY }}>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        {/* Code-like lines - Parallax Layer 3 (fastest) */}
        <motion.div
          className="absolute inset-0 opacity-5 font-mono text-xs text-primary overflow-hidden"
          style={{ y: codeLinesY }}
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`code-${i}`}
              className="whitespace-nowrap"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ marginTop: i * 40 }}
            >
              {`<div className="tech-${i}"> {code.map(line => execute())} </div>`}
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity: contentOpacity, scale: contentScale }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        <motion.div variants={itemVariants}>
          <motion.h2
            className="text-lg sm:text-xl font-semibold text-primary mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I&apos;m
          </motion.h2>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 text-foreground"
        >
          James Francisco
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8">
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-4"
          >
            Software Engineer
          </motion.p>
          <motion.p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting elegant solutions to complex problems with modern web technologies
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          <Button size="lg" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-2">
            <a href="#projects">View My Work</a>
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-6">
          <motion.a
            href="https://www.linkedin.com/in/james-f-b802a0319"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="text-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            href="mailto:jf2023kheil@gmail.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-foreground hover:text-primary transition-colors"
          >
            <Mail size={28} />
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="text-primary" size={32} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
