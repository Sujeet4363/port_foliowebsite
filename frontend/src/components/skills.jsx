const skills = [
  "React",
  "JavaScript",
  "Python",
  "Docker",
  "Linux",
  "GitHub",
  "MongoDB",
  "PostgreSQL",
  "Jenkins",
  "AWS"
];

export default function Skills() {
  return (
    <section className="text-white py-20 px-6">
      <h1 className="text-5xl font-bold text-center mb-12">
        Skills ⚡
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 px-8 py-4 rounded-xl text-xl hover:scale-110 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}