import profileImg from "../assets/sujeet.jpeg";
import { motion } from "framer-motion";
import Skills from "../components/skills.jsx";

export default function Home() {
  return (
    <div className="text-center mt-20">

      <img
  src={profileImg}
  alt="Sujeet"
  className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 mx-auto mb-8"
/>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold mt-6"
      >
        Hello, I'm Sujeet 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-gray-300 text-xl mt-6"
      >
        Full Stack Developer • DevOps Engineer • React Developer
      </motion.p>

      {/* BIO */}
      <div className="mt-10 bg-gray-800 p-6 rounded-lg w-2/3 mx-auto">
        <h2 className="text-xl font-bold mb-2">
          About Me
        </h2>

        <p className="text-gray-300">
          I am a passionate developer who builds scalable web applications using modern technologies like React and FastAPI.
        </p>
      </div>

      {/* SKILLS */}
      <Skills />

      {/* RESUME BUTTON */}
      <div className="mt-8">
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg"
        >
          Download Resume 📄
        </a>
      </div>

    </div>
  );
}