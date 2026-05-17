export default function Home() {
  return (
    <div className="text-center mt-20">

      <img
        src="https://i.pravatar.cc/150?img=12"
        className="rounded-full w-40 h-40 mx-auto border-4 border-blue-500"
      />

      <h1 className="text-5xl font-bold mt-6">Sujeet Singh</h1>

      <p className="text-gray-400 mt-4">
        Full Stack Developer | React | Python | PostgreSQL
      </p>

      {/* BIO */}
      <div className="mt-10 bg-gray-800 p-6 rounded-lg w-2/3 mx-auto">
        <h2 className="text-xl font-bold mb-2">About Me</h2>
        <p className="text-gray-300">
          I am a passionate developer who builds scalable web applications using modern technologies like React and FastAPI.
        </p>
      </div>

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
  )
}