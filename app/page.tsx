"use client";

import {
  motion,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 80) setHidden(true);
    else setHidden(false);
  });

  return (
    <main className="bg-white text-black dark:bg-black dark:text-white transition">

      {/* SCROLL BAR */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-black dark:bg-white origin-left z-50"
      />

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-black dark:via-gray-900 dark:to-black" />

      {/* NAVBAR */}
      <motion.nav
        initial={false}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 w-full backdrop-blur-md border-b z-50 transition ${
          hidden
            ? "bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70"
            : "bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-90"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold">Greg.dev</h1>

          <div className="flex gap-6 items-center text-sm">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

            <button
              onClick={() => setDark(!dark)}
              className="border px-3 py-1 rounded-lg"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold max-w-4xl tracking-tight"
        >
          I Build Systems Fast Using{" "}
          <span className="text-gray-500">Vibe Coding</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl"
        >
          I create automation workflows, tools, and funnels in days—not weeks.
        </motion.p>

        {/* CTA BUTTONS (RESTORED) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-xl hover:scale-105 transition"
          >
            Book a Call
          </a>

          <a
            href="#projects"
            className="px-6 py-3 border rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            See Work
          </a>
        </motion.div>
      </section>

      {/* SERVICES (RESTORED) */}
      <motion.section
        id="services"
        className="px-6 py-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold">What I Build</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold">Automation Systems</h3>
              <p className="mt-3 text-gray-500">
                Replace manual work with smart workflows.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold">Custom Tools</h3>
              <p className="mt-3 text-gray-500">
                Build internal tools fast using vibe coding.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold">Funnels</h3>
              <p className="mt-3 text-gray-500">
                Capture and convert leads automatically.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            <motion.div
              className="p-6 rounded-2xl border bg-white/60 backdrop-blur-lg dark:bg-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold">Automation System</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Built workflow automation connecting tools.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl border bg-white/60 backdrop-blur-lg dark:bg-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold">Lead Funnel</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Built automated funnel system.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold">
          Let’s Build Something Fast
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Tell me what you need—I’ll turn it into a working system.
        </p>

        <a
          href="mailto:your@email.com"
          className="inline-block mt-8 px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-xl hover:scale-105 transition"
        >
          Book a Call
        </a>
      </section>

    </main>
  );
}