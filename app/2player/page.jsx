"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

function App() {
  let [turnO, setturnO] = useState(true);
  let winnerPets = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [3, 4, 5], [6, 7, 8], [2, 4, 6]];
  let [value, setvalue] = useState(["", "", "", "", "", "", "", "", ""]);
  let [winner, setWinner] = useState("");
  let [winningCells, setWinningCells] = useState([]);

  // handle click event to mark the cell as X or O
  let handleValue = (index) => {
    if (value[index] === "" && winner === "") {
      setvalue((prevState) => {
        let copyArray = [...prevState];
        copyArray[index] = turnO ? "O" : "X";
        setturnO(!turnO);
        return copyArray;
      });
    }
  };
  // winning check
  let checkWinner = () => {
    for (let i = 0; i < winnerPets.length; i++) {
      let [a, b, c] = winnerPets[i];
      if (value[a] !== "" && value[a] === value[b] && value[b] === value[c]) {
        setWinner(value[a] + " is the winner! 🎉");
        setWinningCells(winnerPets[i]);
        break;
      } if (value.every((val) => val !== "" && winner === "")) {
        setWinner("It's a draw! 🤝 Try again!");
      }
    }
  }
  // let checkWinner = () => {
  //   winnerPets.forEach((pet) => {
  //     if (value[pet[0]] !== "" && value[pet[0]] === value[pet[1]] && value[pet[1]] === value[pet[2]]) {
  //       setWinner(value[pet[0]] + " is the winner! 🎉");
  //       setWinningCells(pet);
  //     } else if (value.every((val) => val !== "" && winner === "")) {
  //       setWinner("It's a draw! 🤝 Try again!");
  //     }
  //   });
  // };
  // useEffect to check winner after each move
  useEffect(() => {
    checkWinner();
  }, [value]);
  // reset button
  let resetGame = () => {
    setturnO(true);
    setvalue(["", "", "", "", "", "", "", "", ""]);
    setWinner("");
    setWinningCells([]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
        Tic Tac Toe
      </h1>
      {/* Winner Message */}
      <h2 className={`text-3xl font-bold mb-4 transition-all duration-300 ${winner ? "text-green-400 animate-bounce" : "text-gray-300"}`}>
        {winner || `Turn: ${turnO ? "O" : "X"}`}
      </h2>
      {/* Game Board */}
      <div className="grid grid-cols-3 gap-4 bg-gray-800/50 p-5 rounded-2xl shadow-xl backdrop-blur-md">
        {/* buttons */}
        {value.map((val, index) => (
          <button
            key={index}
            disabled={winner !== "" || val !== ""}
            onClick={() => handleValue(index)}
            className={`h-24 w-24 flex items-center justify-center text-5xl font-bold rounded-xl shadow-lg transition-all duration-300 
              ${val === "O"
                ? "bg-blue-500 text-white shadow-blue-500/50"
                : val === "X"
                  ? "bg-red-500 text-white shadow-red-500/50"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"}

              ${winner !== "" || val !== ""
                ? "opacity-50 cursor-not-allowed"
                : "hover:shadow-2xl hover:scale-105 active:scale-95"}
              
              ${winningCells.includes(index) ? "border-4 border-yellow-400 animate-pulse" : ""}`}>
            {val}
          </button>
        ))}
      </div>
      {/* Reset Button */}
      <button
        onClick={resetGame}
        className="mt-6 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md transition-all duration-300 hover:from-purple-600 hover:to-blue-500 active:scale-95"
      >
        🔄 Restart Game
      </button>
      {/* Footer */}
      <p className="text-sm mt-6 text-gray-400">
        Made with ❤️ by <Link href="https://www.facebook.com/usmankhan.786.facebook" className="text-blue-400 underline">USMAN KHAN</Link>
      </p>
    </div>
  );
}

export default App;
