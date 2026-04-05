import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white relative overflow-hidden">

      {/* 🌌 Glow background */}
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-emerald-400 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

      {/* 🚀 Content */}
      <div className="z-10 text-center px-4">

        {/* 🔥 404 Text */}
        <h1 className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 animate-pulse">
          404
        </h1>

        {/* Message */}
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Oops! Page not found in this universe 🌌
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-center">

          {/* Home Button */}
          <Link
            to="/"
            className="px-6 py-2 border border-emerald-400 text-emerald-400 rounded-md hover:bg-emerald-400 hover:text-black transition duration-300"
          >
            Go Home
          </Link>

          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 border border-gray-500 text-gray-300 rounded-md hover:bg-gray-700 transition duration-300"
          >
            Go Back
          </button>

        </div>

      </div>

    </div>
  );
};

export default NotFound;