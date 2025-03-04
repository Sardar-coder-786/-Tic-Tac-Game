"use client"
import { useState } from "react";
import History from "../component/history"; // Import history component
import HomeLink from "../component/homelink"; // Import home link component

function After({ questions, score, answer, setAnswer, setScore,  setcurrentIndex}) {
    // state for viewing history
    let [history, setHistory] = useState(false);

    return ( 
        <>
        {/* Quiz completion section */}
        <div className="bg-gray-800 shadow-2xl rounded-xl p-10 w-full max-w-2xl text-center border border-gray-700">

            {/* Display final score */}
            <h1 className="text-4xl font-bold text-green-400">Congratulations!</h1>
            <h2 className="text-2xl mt-4">Your final score is <span className="font-semibold text-yellow-400">{score}/{questions.length}</span></h2>

            {/* Buttons for restart, history, and home navigation */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
                <button
                    onClick={() => {
                        // Reset quiz state
                        setcurrentIndex(0);
                        setScore(0);
                        setAnswer([]);
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out">
                    Restart
                </button>
                <button
                    onClick={() => setHistory(!history)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out">
                    See History
                </button>
                <HomeLink />
            </div>
        </div>

        {/* Display quiz history if enabled */}
        <History question={questions} answer={answer} history={history} />
    </>
     );
}

export default After;