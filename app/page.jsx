import Link from "next/link";

function App() {
  return ( 
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
        Welcome To Game Zone
      </h1>
      {/* Game Mode Selection */}
      <div className="flex flex-wrap justify-center gap-10">
        
        {/* 2 Player Mode */}
        <div className="border-2 border-gray-600 rounded-2xl p-6 bg-gray-800/50 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-blue-400">
          <h1 className="text-2xl font-semibold text-gray-200 mb-3">👥 2 Player Mode</h1>
          <Link href="/2player">
            <img src="2player.png" alt="2 Player" className="h-40 w-40 object-cover rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"/>
          </Link>
        </div>

        {/* Single Player Mode */}
        <div className="border-2 border-gray-600 rounded-2xl p-6 bg-gray-800/50 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-green-400">
          <h1 className="text-2xl font-semibold text-gray-200 mb-3">🤖 Single Player</h1>
          <Link href="/singleplayer">
            <img src="2player.png" alt="Single Player" className="h-40 w-40 object-cover rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"/>
          </Link>
        </div>

        {/* Quiz Game Mode */}
        <div className="border-2 border-gray-600 rounded-2xl p-6 bg-gray-800/50 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-red-400">
          <h1 className="text-2xl font-semibold text-gray-200 mb-3">��� Quiz Game</h1>
          <Link href="/quiz">
            <img src="Quiz.png" alt="Quiz Game" className="h-40 w-44 object-cover rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"/>
          </Link>
        </div>

      </div>

      {/* Footer */}
      <p className="text-sm mt-6 text-gray-400">
        Made with ❤️ by <Link href="https://www.facebook.com/usmankhan.786.facebook" className="text-blue-400 underline">USMAN KHAN</Link>
      </p>

    </div>
  );
}

export default App;
