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
  const [activeSection, setActiveSection] = useState("hero");

  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);


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
            <a
  href="#services"
  className={`transition ${
    activeSection === "services"
      ? "text-black dark:text-white font-semibold"
      : "text-gray-500 hover:text-black dark:hover:text-white"
  }`}
>
  Services
</a>

<a
  href="#projects"
  className={`transition ${
    activeSection === "projects"
      ? "text-black dark:text-white font-semibold"
      : "text-gray-500 hover:text-black dark:hover:text-white"
  }`}
>
  Projects
</a>

<a
  href="#contact"
  className={`transition ${
    activeSection === "contact"
      ? "text-black dark:text-white font-semibold"
      : "text-gray-500 hover:text-black dark:hover:text-white"
  }`}
>
  Contact
</a>

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
<section
  id="hero"
  className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 overflow-hidden"
>

  {/* BASE BACKGROUND */}
  <div className="absolute inset-0 -z-20 bg-black" />

  {/* ANIMATED GRID */}
  <motion.div
    className="absolute inset-0 -z-10 opacity-20"
    style={{
  backgroundImage:
    "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
  backgroundPosition: "0px 0px",
}}
animate={{
  backgroundPosition: ["0px 0px", "40px 40px"],
}}
transition={{
  duration: 20,
  repeat: Infinity,
  ease: "linear",
}}
    animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  />

  {/* GLOW EFFECTS */}
  <motion.div
    className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full"
    animate={{ x: [0, 40, -40, 0] }}
    transition={{ duration: 12, repeat: Infinity }}
  />

  <motion.div
    className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full"
    animate={{ y: [0, -30, 30, 0] }}
    transition={{ duration: 14, repeat: Infinity }}
  />

  {/* HERO CONTENT */}
  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-4xl md:text-6xl font-bold max-w-5xl tracking-tight leading-tight"
  >
    I Build Automated Systems That{" "}
    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
      Replace Manual Work
    </span>{" "}
    and{" "}
    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
      Increase Conversions
    </span>
    <br />
    <span className="text-gray-400 text-2xl md:text-3xl font-medium">
      
    </span>
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="mt-6 text-lg text-gray-400 max-w-xl"
  >
    I use vibe coding, n8n and automation tools to build systems that save hours of work and help businesses scale faster.
  </motion.p>

  {/* CTA BUTTONS */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="mt-8 flex gap-4"
  >
    <motion.a
      href="#contact"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      className="px-6 py-3 bg-white text-black rounded-xl font-medium transition"
    >
      Book a Free Strategy Call
    </motion.a>

    <a
      href="#projects"
      className="px-6 py-3 border border-white/30 rounded-xl hover:bg-white/10 transition"
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
<section id="projects" className="snap-start min-h-screen px-6 py-20 flex items-center">
  <div className="max-w-5xl mx-auto w-full">

    <div className="text-center">
      <p className="text-sm uppercase tracking-widest text-gray-400">
        Projects
      </p>
      <h2 className="text-3xl font-semibold mt-2">
        Systems I’ve Built
      </h2>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-8 mt-12">

      {[
        {
  title: "Content Automation System",
  desc: "Built an automated content pipeline connecting ClickUp, Slack, and publishing tools.",
  result: "Reduced manual work by 80% and sped up content production",
},
{
  title: "Lead Funnel System",
  desc: "Created a fully automated funnel with CRM follow-ups and lead tracking.",
  result: "Increased conversion rate and eliminated manual follow-ups",
},
      ].map((project, i) => (

        <motion.div
          key={i}
          className="group p-6 rounded-2xl border bg-white/60 backdrop-blur-lg dark:bg-white/5 transition shadow-sm hover:shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          viewport={{ once: true }}
        >

          {/* GLOW EFFECT */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-transparent via-white/10 to-transparent dark:via-white/5" />

          <h3 className="text-xl font-semibold relative z-10">
            {project.title}
          </h3>

          <p className="mt-3 text-gray-600 dark:text-gray-300 relative z-10">
            {project.desc}
          </p>

          <p className="mt-4 text-sm text-gray-500 relative z-10">
            {project.result}
          </p>

        </motion.div>

      ))}

    </div>

  </div>
</section>


{/* WHY ME */}
<section className="px-6 py-20 text-center">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-3xl font-semibold">
      Why Work With Me
    </h2>

    <div className="grid md:grid-cols-3 gap-8 mt-12">

      <div>
        <h3 className="font-semibold">Fast Execution</h3>
        <p className="mt-2 text-gray-500">
          I build working systems in days, not weeks.
        </p>
      </div>

      <div>
        <h3 className="font-semibold">Automation First</h3>
        <p className="mt-2 text-gray-500">
          Everything is designed to reduce manual work and scale operations.
        </p>
      </div>

      <div>
        <h3 className="font-semibold">Results Focused</h3>
        <p className="mt-2 text-gray-500">
          I focus on outcomes—time saved, conversions improved, systems that work.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold">
          Let’s Build a System That Saves You Time and Drives Results
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Tell me what you need—I’ll turn it into a working system.
        </p>

        <a
          href="mailto:your@email.com"
          className="inline-block mt-8 px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-xl hover:scale-105 transition"
        >
          Book a Free Strategy Call
        </a>
      </section>

    </main>
  );
}
