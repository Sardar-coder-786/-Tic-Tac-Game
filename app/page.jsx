
import FbLink from "./component/fblink";
import GameFront from "./component/gamefront";

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
        <GameFront image="2player.png" href="/2player" name="👥 2 Player Mode" />
        {/* Single Player Mode */}
        <GameFront image="2player.png"  href="/singleplayer" name="🤖 Single Player" />
        {/* Quiz Game Mode */}
        <GameFront image="Quiz.png" href="/quiz" name="🧠 Quiz Game" />
      </div>

      {/* Footer */}
      <FbLink />

    </div>
  );
}

export default App;
