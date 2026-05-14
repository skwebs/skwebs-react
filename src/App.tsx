import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Code2, GraduationCap, Briefcase, Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
  {
    title: "School Management System",
    description:
      "Complete school management system with attendance, fees, results, promotion and report cards.",
    tech: "Laravel 12 • React Native • MySQL",
  },
  {
    title: "Expense Tracker",
    description:
      "Double-entry accounting with bank, credit card and financial tracking.",
    tech: "Laravel • React Native • REST API",
  },
  {
    title: "Invoice Generator",
    description: "Responsive invoice system with JPG/PDF export support.",
    tech: "JavaScript • HTML • CSS",
  },
];

const skills = [
  "Laravel",
  "PHP",
  "React Native",
  "Expo",
  "JavaScript",
  "TypeScript",
  "MySQL",
  "REST API",
  "Git",
  "GitHub",
];

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <h1 className="text-xl font-bold text-sky-400 sm:text-2xl">SKWebs</h1>

          {/* Desktop Menu */}
          <nav className="hidden gap-8 text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-sky-400">
              About
            </a>

            <a href="#projects" className="transition hover:text-sky-400">
              Projects
            </a>

            <a href="#skills" className="transition hover:text-sky-400">
              Skills
            </a>

            <a href="#contact" className="transition hover:text-sky-400">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950 px-5 py-5 md:hidden">
            <div className="flex flex-col gap-5 text-slate-300">
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>

              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>

              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>

              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div>dajf</div>

      {/* HERO */}
      <section className="mx-auto flex min-h-[90vh]  items-center justify-center px-5 py-20 sm:px-6 w-full">
        <div className="grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mx-auto flex max-w-2xl flex-col items-center text-center lg:mx-0 lg:max-w-none lg:items-start lg:text-left"
          >
            <span className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sm text-sky-400">
              Full Stack & Mobile Developer
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
              Hi, I'm <span className="text-sky-400">Satish Kumar Sharma</span>
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
              Computer Teacher & Self-Taught Developer building modern web and
              mobile applications using Laravel, React Native, Expo and REST
              APIs.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
              <a
                href="#projects"
                className="rounded-2xl bg-sky-500 px-6 py-4 text-center font-semibold text-black transition hover:scale-[1.03] active:scale-95"
              >
                View Projects
              </a>

              <a
                href="https://github.com/skwebs"
                target="_blank"
                className="rounded-2xl border border-white/10 px-6 py-4 text-center text-slate-300 transition hover:border-sky-500 hover:text-sky-400 active:scale-95"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* PROFILE CARD */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="w-full rounded-[30px] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl sm:max-w-md sm:p-8">
              <div className="flex justify-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-sky-500 text-3xl font-bold text-black shadow-2xl sm:h-36 sm:w-36 sm:text-4xl">
                  SS
                </div>
              </div>

              <h2 className="mt-6 text-center text-2xl font-bold sm:text-3xl">
                Satish Sharma
              </h2>

              <p className="mt-2 text-center text-slate-400">
                Laravel • React Native • Expo
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-800 p-4 text-center">
                  <Code2 className="mx-auto mb-2" />
                  Developer
                </div>

                <div className="rounded-2xl bg-slate-800 p-4 text-center">
                  <GraduationCap className="mx-auto mb-2" />
                  Teacher
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28"
      >
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-14 text-center text-3xl font-bold sm:text-4xl"
        >
          Featured Projects
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="rounded-[30px] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl transition"
            >
              <h3 className="text-xl font-bold sm:text-2xl">{project.title}</h3>

              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                {project.description}
              </p>

              <p className="mt-5 text-sm text-sky-400">{project.tech}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24"
      >
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10 text-center text-3xl font-bold sm:text-4xl"
        >
          Skills
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-full border border-white/10 bg-slate-900 px-5 py-3 text-sm text-slate-300 transition hover:border-sky-500 hover:text-sky-400 sm:text-base"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-6 sm:py-24"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Briefcase className="mx-auto mb-5 text-sky-400" />

          <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            I am a Computer Teacher and Full-Stack Developer from India. I build
            practical education, finance and productivity applications using
            Laravel, React Native, Expo and REST APIs.
          </p>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-6 sm:py-24"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Mail className="mx-auto mb-5 text-sky-400" />

          <h2 className="text-3xl font-bold sm:text-4xl">Contact Me</h2>

          <p className="mt-4 text-slate-400">
            Let's build something amazing together.
          </p>

          <a
            href="mailto:yourmail@gmail.com"
            className="mt-8 inline-block rounded-2xl bg-sky-500 px-8 py-4 font-semibold text-black transition hover:scale-105 active:scale-95"
          >
            Send Email
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-500">
        <div className="flex justify-center gap-5">
          <a href="https://github.com/skwebs" target="_blank">
            <FaGithub className="text-3xl transition hover:scale-110 hover:text-sky-400" />
          </a>
        </div>

        <p className="mt-5 text-sm sm:text-base">
          © 2026 SKWebs • Built by Satish Kumar Sharma
        </p>
      </footer>
    </div>
  );
};

export default App;
