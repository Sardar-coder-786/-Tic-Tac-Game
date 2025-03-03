"use client";
import data from "@/app/data/quizdata.json"; // Import quiz data
import { useState } from "react";
import FbLink from "../component/fblink"; // Import Facebook link component
import Option from "../component/option"; // Import option selection component
import HomeLink from "../component/homelink"; // Import home link component
import History from "../component/history"; // Import history component


function Quiz() {
    // Load questions from the imported data
    let questions = data.questions;

    // State variables for tracking quiz progress
    let [currentIndex, setcurrentIndex] = useState(0); // Index of the current question
    let [answer, setAnswer] = useState([]); // Stores user's answers
    let [score, setScore] = useState(0); // Stores user's score
    let [history, setHistory] = useState(false); // state for viewing history

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center p-5">
            {/* Quiz Title */}
            <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
                Welcome To Quiz Game
            </h1>

            {/* Check if quiz is still ongoing */}
            {currentIndex < questions.length ? (
                <div className="bg-gray-800 shadow-2xl rounded-xl p-10 w-full max-w-2xl text-center border border-gray-700">
                    {/* Display current question */}
                    <h2 className="text-3xl font-semibold mb-6 text-yellow-400">{questions[currentIndex].question}</h2>

                    {/* answer options */}
                    <Option question={questions[currentIndex]} answer={answer[currentIndex]} setAnswer={setAnswer} />

                    {/* Submit answer and move to next question */}
                    <button
                        onClick={() => {
                            if (answer[currentIndex] === questions[currentIndex].answer) {
                                setScore(score + 1);
                            }
                            setcurrentIndex(currentIndex + 1);
                        }}
                        className={`mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out ${answer[currentIndex] ? "block" : "hidden"}`}>
                        Submit
                    </button>

                    {/* Display current question number */}
                    <h3 className="text-lg font-semibold text-gray-300 bg-gray-700 px-5 py-3 mt-7 rounded-lg shadow-md border border-gray-600">
                        {currentIndex + 1} of {questions.length} Questions
                    </h3>
                </div>

            ) : (

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
            )}

            {/* Facebook link component */}
            <FbLink />
        </div>
    );
}

export default Quiz;
