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
<section className="relative -mt-24 px-6 pt-32 pb-20 text-center overflow-hidden bg-[#050816]">
  <div className="max-w-5xl mx-auto">

  {/* BACKGROUND ATMOSPHERE */}
<div className="absolute inset-0 -z-10">

  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[140px]" />

  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px]" />

</div>  

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
<div className="mt-14 mx-auto w-fit rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-10 py-6 text-sm text-gray-300">
  <p>Personal Builds:</p>

  <div className="mt-6 flex justify-center gap-4 flex-wrap">
    <a
      href="https://mcgreg-linkhub.vercel.app/"
      target="_blank"
      className="px-5 py-3 rounded-xl border border-white/15 bg-white/10 hover:bg-white/20 transition text-white"
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
  className="px-6 pt-24 pb-32 text-center bg-[#070b17] text-white"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>

  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-semibold">
      What I Build
    </h2>

    <div className="grid md:grid-cols-3 gap-6 mt-12">

      {/* CARD 1 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.05] transition duration-300 hover:border-blue-400/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
      >
        <h3 className="font-semibold">Automation Systems</h3>

        <p className="mt-3 text-gray-300">
          Replace manual work with smart workflows.
        </p>
      </motion.div>

      {/* CARD 2 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.05] transition duration-300 hover:border-blue-400/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
      >
        <h3 className="font-semibold">Custom Tools</h3>

        <p className="mt-3 text-gray-300">
          Build internal tools fast using vibe coding.
        </p>
      </motion.div>

      {/* CARD 3 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.05] transition duration-300 hover:border-blue-400/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
      >
        <h3 className="font-semibold">Funnels</h3>

        <p className="mt-3 text-gray-300">
          Capture and convert leads automatically.
        </p>
      </motion.div>

    </div>

  </div>

</motion.section>

    {/* CASE STUDIES */}
<section
  id="projects"
  className="px-6 py-32 bg-gradient-to-b from-[#070b17] to-[#0b1120] text-white"
>

  <div className="max-w-7xl mx-auto">

    {/* SECTION TITLE */}
    <div className="text-center max-w-3xl mx-auto">

      <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
        Case Studies
      </p>

      <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
        Real projects. Real systems.
      </h2>

      <p className="text-gray-400 mt-6 text-lg">
        A collection of websites, dashboards, and automation systems
        built using vibe coding and modern web technologies.
      </p>

    </div>

    {/* PROJECT 1 */}
    <div className="grid lg:grid-cols-2 gap-16 items-center mt-28">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <p className="text-sm uppercase tracking-[0.25em] text-blue-400">
          01 / Client Website
        </p>

        <h3 className="text-4xl font-bold mt-5 leading-tight">
          Tattoo Business Website
        </h3>

        <p className="text-gray-400 mt-6 text-lg leading-relaxed">
          Built and launched a modern website for a local tattoo business
          focused on online visibility, mobile responsiveness, and
          converting visitors into inquiries.
        </p>

        <div className="flex gap-10 mt-10">

          <div>
            <h4 className="text-3xl font-bold">3 Days</h4>

            <p className="text-gray-500 text-sm mt-2">
              Delivery time
            </p>
          </div>

          <div>
            <h4 className="text-3xl font-bold">Responsive</h4>

            <p className="text-gray-500 text-sm mt-2">
              Mobile optimized
            </p>
          </div>

        </div>

        <a
          href="https://northinkcdo.com"
          target="_blank"
          className="inline-block mt-10 px-7 py-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition"
        >
          Visit Website
        </a>

      </motion.div>

      {/* RIGHT VIDEO */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        whileHover={{
          y: -6,
          scale: 1.01,
        }}
        className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_60px_rgba(59,130,246,0.12)]"
      >

        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/tattoo-demo.mp4" type="video/mp4" />
        </video>

      </motion.div>

    </div>

    {/* PROJECT 2 */}
    <div className="grid lg:grid-cols-2 gap-16 items-center mt-40">

      {/* LEFT VIDEO */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        whileHover={{
          y: -6,
          scale: 1.01,
        }}
        className="order-2 lg:order-1 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_60px_rgba(59,130,246,0.12)]"
      >

        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/flowtrack-demo.mp4" type="video/mp4" />
        </video>

      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="order-1 lg:order-2"
      >

        <p className="text-sm uppercase tracking-[0.25em] text-blue-400">
          02 / Dashboard Tool
        </p>

        <h3 className="text-4xl font-bold mt-5 leading-tight">
          FlowTrack Dashboard
        </h3>

        <p className="text-gray-400 mt-6 text-lg leading-relaxed">
          A finance tracking dashboard concept designed for monitoring
          transactions, expenses, metrics, and performance insights in
          a clean SaaS-inspired interface.
        </p>

        <div className="flex gap-10 mt-10">

          <div>
            <h4 className="text-3xl font-bold">Realtime</h4>

            <p className="text-gray-500 text-sm mt-2">
              Tracking system
            </p>
          </div>

          <div>
            <h4 className="text-3xl font-bold">Modern UI</h4>

            <p className="text-gray-500 text-sm mt-2">
              SaaS design
            </p>
          </div>

        </div>

        <a
          href="https://finance-tracker-ver-1.vercel.app/"
          target="_blank"
          className="inline-block mt-10 px-7 py-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition"
        >
          Open Dashboard
        </a>

      </motion.div>

    </div>

    {/* LINKHUB MINI SHOWCASE */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{
        y: -6,
      }}
      className="mt-32 max-w-4xl mx-auto overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
    >

      <div className="grid md:grid-cols-2 items-center">

        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/linkhub-demo.mp4" type="video/mp4" />
        </video>

        {/* CONTENT */}
        <div className="p-10">

          <p className="text-sm uppercase tracking-[0.25em] text-blue-400">
            Featured Tool
          </p>

          <h3 className="text-3xl font-bold mt-5">
            LinkHub
          </h3>

          <p className="text-gray-400 mt-5 leading-relaxed">
            A lightweight link management tool designed for organizing,
            sharing, and managing important resources in one clean
            interface.
          </p>

          <a
            href="https://mcgreg-linkhub.vercel.app/"
            target="_blank"
            className="inline-block mt-8 px-7 py-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition"
          >
            Open Tool
          </a>

        </div>

      </div>

    </motion.div>

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



