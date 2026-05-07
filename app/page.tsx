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
          </div>
        </div>
      </motion.nav>

   {/* HERO */}
<section
  id="hero"
  className="relative min-h-screen flex items-center px-6 overflow-hidden"
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
    }}
    animate={{
      backgroundPosition: ["0px 0px", "40px 40px"],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  {/* TOP GLOW */}
  <motion.div
    className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full"
    animate={{ x: [0, 40, -40, 0] }}
    transition={{ duration: 12, repeat: Infinity }}
  />

  {/* BOTTOM GLOW */}
  <motion.div
    className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full"
    animate={{ y: [0, -30, 30, 0] }}
    transition={{ duration: 14, repeat: Infinity }}
  />

  {/* HERO VIDEO */}
<div className="absolute inset-0 overflow-hidden">

  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover object-right opacity-60"
  >
    <source src="/hero-video.mp4" type="video/mp4" />
  </video>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/20" />

</div>

  {/* CONTENT */}
  <div className="relative z-20 max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center gap-16 px-10">

    {/* LEFT SIDE */}
    <div className="text-left max-w-2xl pt-24">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold tracking-[-0.04em] leading-[0.9]"
      >
        I Build Automated
<br />
Systems That{" "}
<span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
  Replace Manual Work
</span>
<br />
&{" "}
<span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
  Increase Conversions
</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 text-lg text-gray-300/90 max-w-lg leading-relaxed"
      >
        I use vibe coding, n8n and automation tools to build systems that save hours of work and help businesses scale faster.
      </motion.p>

      {/* CTA BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-10 flex gap-4"
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="px-6 py-3 bg-white text-black rounded-xl font-medium transition"
        >
          Book a Call
        </motion.a>

        <a
          href="#projects"
          className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
        >
          See Work
        </a>
      </motion.div>

    </div>

    {/* RIGHT SIDE */}
    <div />

  </div>
</section>

  {/* TRUST / PROOF */}
<section className="px-6 py-16 text-center bg-[#111111]">
  <div className="max-w-5xl mx-auto">

    <p className="text-sm uppercase tracking-widest text-gray-400">
      Proof & Experience
    </p>

    <h2 className="text-3xl font-semibold mt-2">
      Systems I’ve Already Built
    </h2>

    <div className="grid md:grid-cols-3 gap-8 mt-12">

      {/* Tattoo Website */}
      <motion.div
        className="p-6 rounded-2xl border bg-white/60 backdrop-blur-lg dark:bg-white/5"
        whileHover={{ y: -6 }}
      >
        <h3 className="font-semibold">Tattoo Business Website</h3>

        <p className="mt-3 text-gray-500">
          Built and launched a live website for a local tattoo business.
        </p>

      <a href="https://northinkcdo.com" target="_blank" className="underline">
  View Live Site
</a>
        <p className="mt-4 text-sm text-gray-400">
          Result: Online presence + client inquiries
        </p>
      </motion.div>

      {/* KPI Dashboard */}
      <motion.div
        className="p-6 rounded-2xl border bg-white/60 backdrop-blur-lg dark:bg-white/5"
        whileHover={{ y: -6 }}
      >
        <h3 className="font-semibold">KPI Dashboard</h3>

<p className="mt-3 text-gray-500">
  Contributed to building a KPI dashboard as part of a task to track performance and business metrics.
</p>

<p className="mt-4 text-sm text-gray-400">
  Result: Improved visibility and better decision-making
</p>
      </motion.div>

      {/* Automation Task */}
      <motion.div
        className="p-6 rounded-2xl border bg-white/60 backdrop-blur-lg dark:bg-white/5"
        whileHover={{ y: -6 }}
      >
        <h3 className="font-semibold">Automation Workflow</h3>

        <p className="mt-3 text-gray-500">
          Created a working automation system using vibe coding tools.
        </p>

        <p className="mt-4 text-sm text-gray-400">
          Result: Reduced manual work and improved efficiency
        </p>
      </motion.div>

    </div>

    {/* PERSONAL PROJECTS */}
<div className="mt-12 text-sm text-gray-500">
  <p>Personal Builds:</p>

  <div className="mt-4 flex justify-center gap-6">
    <a
      href="https://mcgreg-linkhub.vercel.app/"
      target="_blank"
      className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      View Link Hub
    </a>

    <a
      href="https://finance-tracker-ver-1.vercel.app/"
      target="_blank"
      className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      View FlowTrack
    </a>
  </div>
</div>
  </div>   {/* CLOSE max-w container */}
</section>  {/* CLOSE TRUST SECTION */}

      {/* SERVICES (RESTORED) */}
      <motion.section
        id="services"
        className="px-6 py-20 text-center bg-[#161616]"
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

    {/* CASE STUDIES */}
<section
  id="projects"
  className="px-6 py-20 bg-[#1a1a1a]"
>
  <div className="max-w-5xl mx-auto">

    <div className="text-center">
      <p className="text-sm uppercase tracking-widest text-gray-400">
        Case Studies
      </p>
      <h2 className="text-3xl font-semibold mt-2">
        Real Systems, Real Results
      </h2>
    </div>

    <div className="mt-16 space-y-12">

      {/* CASE 1 */}
      <motion.div
        className="p-8 rounded-2xl border bg-white/60 backdrop-blur-lg dark:bg-white/5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold">
          Content Automation System
        </h3>

        <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-300">

          <p>
            <span className="font-semibold text-black dark:text-white">
              Problem:
            </span>{" "}
            Content workflow was manual, slow, and required constant follow-ups.
          </p>

          <p>
            <span className="font-semibold text-black dark:text-white">
              Solution:
            </span>{" "}
            Built an automated system connecting ClickUp, Slack, and publishing tools using automation workflows.
          </p>

          <p>
            <span className="font-semibold text-black dark:text-white">
              Result:
            </span>{" "}
            Reduced manual work by 80% and significantly sped up content production.
          </p>

        </div>
      </motion.div>

      {/* CASE 2 */}
      <motion.div
        className="p-8 rounded-2xl border bg-white/60 backdrop-blur-lg dark:bg-white/5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold">
          Lead Funnel System
        </h3>

        <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-300">

          <p>
            <span className="font-semibold text-black dark:text-white">
              Problem:
            </span>{" "}
            Leads were not being followed up consistently, resulting in missed opportunities.
          </p>

          <p>
            <span className="font-semibold text-black dark:text-white">
              Solution:
            </span>{" "}
            Built an automated funnel with CRM follow-ups and lead tracking system.
          </p>

          <p>
            <span className="font-semibold text-black dark:text-white">
              Result:
            </span>{" "}
            Increased conversion rate and eliminated manual follow-ups.
          </p>

        </div>
      </motion.div>

    </div>

  </div>
</section>


{/* WHY ME */}
<section className="px-6 py-20 text-center bg-[#141414]">
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
      <section
  id="contact"
  className="px-6 py-20 text-center bg-[#101010]"
>
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



