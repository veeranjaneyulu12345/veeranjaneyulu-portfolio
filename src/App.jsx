import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const resumeUrl =
  "https://drive.google.com/file/d/1O9X8rPLmVhjdRYu-v4RpGlgVzKpC9-Dt/view?usp=drivesdk";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "internships", label: "Internships" },
  { id: "projects", label: "Projects" },
  { id: "extra", label: "Extra" },
  { id: "contact", label: "Contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: 0.12 * i } }),
};

export default function App() {
  const [theme, setTheme] = useState(() => {
    // read from localStorage or default to dark
    try {
      return localStorage.getItem("theme") || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen font-sans">
      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/40 dark:bg-black/40 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="text-xl font-semibold text-blue-600 dark:text-blue-400"
            aria-label="Home"
          >
            Veeranjaneyulu K
          </button>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm hover:text-blue-500 dark:hover:text-blue-300 transition"
              >
                {n.label}
              </button>
            ))}

            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm transition"
            >
              <FaFilePdf /> Resume
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              className="text-xl hover:text-blue-500 dark:hover:text-blue-300"
              href="mailto:veeranjaneyulu@example.com"
              aria-label="email"
            >
              <FaEnvelope />
            </a>
            <a
              className="text-xl hover:text-blue-500 dark:hover:text-blue-300"
              href="https://github.com/veeranjaneyulu"
              target="_blank"
              rel="noreferrer"
              aria-label="github"
            >
              <FaGithub />
            </a>
            <a
              className="text-xl hover:text-blue-500 dark:hover:text-blue-300"
              href="https://linkedin.com/in/veeranjaneyulu"
              target="_blank"
              rel="noreferrer"
              aria-label="linkedin"
            >
              <FaLinkedin />
            </a>

            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-105 transition"
              aria-label="toggle-theme"
              title="Toggle theme"
            >
              {theme === "dark" ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-blue-600" />
              )}
            </button>

            {/* Mobile menu trigger (simple) */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main id="home" className="max-w-6xl mx-auto px-6">
        <section className="flex flex-col items-center text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            👋 Hi, I’m{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Veeranjaneyulu K
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
          >
            Cloud | DevOps | VLSI | Frontend Developer
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              <FaFilePdf /> View Resume
            </a>

            <button
              onClick={() => scrollTo("projects")}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              View Projects
            </button>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl p-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
          >
            <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-3">
              About Me
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              I’m a Cloud Solutions Architect at <strong>L&T Cloudfiniti</strong>,
              working on the CMP (Cloud Management Platform) portal development.
              I graduated from NIT Andhra Pradesh (ECE) and have interned in
              domains spanning Machine Learning, Data Science and Organic
              Semiconductor Fabrication. I enjoy building cloud-native systems,
              automation pipelines, and AI-driven features that scale.
            </motion.p>
          </motion.div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-12">
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Python",
              "TensorFlow",
              "AWS",
              "Docker",
              "Kubernetes",
              "React",
              "Mysql",
              "Git",
              "Linux",
              "Jenkins",
              "JavaScript",
              "Node.js",
              "CI/CD",
              "Terraform",
              "Ansible",
            ].map((s) => (
              <motion.div
                key={s}
                variants={fadeUp}
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-center"
              >
                {s}
              </motion.div>
            ))}
          </div>
        </section>

        {/* INTERNSHIPS */}
        <section id="internships" className="py-12">
          <h3 className="text-xl font-semibold mb-6">Internships & Early Roles</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                company: "IIT Madras",
                role: "Organic Semiconductor Fabrication Intern",
                desc: "Worked on Organic Thin-Film Transistors.",
              },
              {
                company: "Null Class",
                role: "Machine Learning Developer Intern",
                desc: "Developed an Automatic Age and Gender Detection model.",
              },
              {
                company: "Exposys Data Labs",
                role: "Data Science Intern",
                desc: "Built an Early Prediction and Diagnosis of Diabetes system.",
              },
              {
                company: "Bharat Intern",
                role: "Machine Learning Intern",
                desc: "Developed a Movie Recommendation System.",
              },
            ].map((it) => (
              <motion.div
                key={it.company}
                variants={fadeUp}
                className="p-5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  {it.company}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{it.role}</p>
                <p className="mt-2 text-gray-500 dark:text-gray-400">{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-12">
          <h3 className="text-xl font-semibold mb-6">Selected Projects</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "House Price Prediction",
                tech: "Decision Tree, Python",
                desc: "Built a model to predict house prices at based on area, years.",
                link: "https://github.com/veeranjaneyulu12345/Bharath-Internship",
              },
              {
                title: "Movie Recommendation System",
                tech: "Python, Collaborative Filtering",
                desc: "Movie recommender as part of internship project.",
                link: "https://github.com/veeranjaneyulu12345/Bharath-Internship-task2",
              },
              {
                title: "Early prediction of diabetes",
                tech: "ML, Data Science",
                desc: "Predict diabetes at an early stages based on symptoms using ML models.",
                link: "https://github.com/veeranjaneyulu12345/project-1",
              },
              {
                title: "VLSI Intern",
                tech: "Organic Semiconductor Fabrication, Circuit simulation, Data Analysis, Research, VLSI",
                desc: "Worked on simulations."
              },
            ].map((p) => (
              <motion.article
                key={p.title}
                variants={fadeUp}
                className="p-5 rounded-xl bg-gray-100 dark:bg-gray-800"
              >
                <h4 className="text-lg font-semibold">{p.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{p.tech}</p>
                <p className="mt-2 text-gray-500 dark:text-gray-400">{p.desc}</p>
                <div className="mt-3">
                  <a
                    href={p.link}
                    className="text-blue-600 dark:text-blue-300 hover:underline text-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View details
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* EXTRA CURRICULAR */}
        <section id="extra" className="py-12">
          <h3 className="text-xl font-semibold mb-4">Extra-Curricular Activities</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Joint Secretary, ECE Association</li>
            <li>Executive Member, Nature and Value Education Club</li>
            <li>Executive Member, Artificial Intelligence and Robotics Club</li>
          </ul>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-12">
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Interested in collaborating? I’m currently open to cloud and AI
            engagements — reach me using the links below.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="mailto:veeranjaneyulu@example.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <FaEnvelope /> Email
            </a>

            <a
              href="https://github.com/veeranjaneyulu"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://linkedin.com/in/veeranjaneyulu"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </section>

        <footer className="py-10 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Veeranjaneyulu K — Built with React + Vite + Tailwind
        </footer>
      </main>
    </div>
  );
}

/* Small inline mobile menu component (keeps App.jsx in one file) */
function MobileMenu() {
  const [open, setOpen] = useState(false);
  const items = navItems;
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="menu"
        className="p-2 rounded-md bg-gray-100 dark:bg-gray-800"
      >
        ☰
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 p-3"
        >
          <div className="flex flex-col space-y-2">
            {items.map((it) => (
              <button
                key={it.id}
                onClick={() => {
                  document.getElementById(it.id)?.scrollIntoView({ behavior: "smooth" });
                  setOpen(false);
                }}
                className="text-left text-sm px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              >
                {it.label}
              </button>
            ))}

            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 px-2 py-2 bg-blue-600 text-white rounded"
            >
              <FaFilePdf /> Resume
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}
