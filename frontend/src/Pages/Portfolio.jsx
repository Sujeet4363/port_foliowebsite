export default function Portfolio() {
  return (
    <div className="text-center mt-20">

      <h1 className="text-4xl font-bold">My Projects 💼</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-10">

        {/* CARD 1 */}
        <div className="bg-gray-800 p-5 rounded-lg">
          <h2 className="text-xl font-bold">Project 1</h2>
          <p className="text-gray-400 mt-2">
            Dummy project description (will update later)
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-gray-800 p-5 rounded-lg">
          <h2 className="text-xl font-bold">Project 2</h2>
          <p className="text-gray-400 mt-2">
            Dummy project description (future project)
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-gray-800 p-5 rounded-lg">
          <h2 className="text-xl font-bold">Project 3</h2>
          <p className="text-gray-400 mt-2">
            Placeholder project card
          </p>
        </div>

      </div>

    </div>
  )
}