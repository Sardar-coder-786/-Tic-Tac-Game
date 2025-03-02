"use client";
import data from "@/app/data/quizdata.json";
import { useState } from "react";
import FbLink from "../component/fblink";
import Option from "../component/option";
import HomeLink from "../component/homelink";

function Quiz() {
    // Get the quiz data from the JSON file
    let questions = data.questions;
    // Current question index and answer state
    let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // Current answer state
    let [answer, setAnswer] = useState("");
    // Current score state
    let [score, setScore] = useState(0);

    return (
        <div className="h-screen w-screen bg-gray-900 text-white flex flex-col items-center justify-center p-5">
            <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">Welcome To Quiz Game</h1>
            {/* Quiz area */}
            {currentQuestionIndex < questions.length ? (
                <div className="bg-gray-800 shadow-lg rounded-lg p-10 w-full max-w-xl text-center">
                    {/* Question */}
                    <h2 className="text-3xl font-semibold mb-6">{questions[currentQuestionIndex].question}</h2>
                    {/* Options */}
                    <Option question={questions[currentQuestionIndex]} answer={answer} setAnswer={setAnswer} />

                    {/* Submit Button */}
                    <button
                        onClick={() => {
                            if (answer === questions[currentQuestionIndex].answer) {
                                setScore(score + 1);
                            }
                            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
                            setAnswer("");
                        }}
                        className={`mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out ${answer ? "block" : "hidden"}`}>
                        Submit
                    </button>
                </div>
            ) : (
                <div className="bg-gray-800 shadow-lg rounded-lg p-10 w-full max-w-xl text-center">
                    <h1 className="text-3xl font-bold text-green-400">Congratulations!</h1>
                    <h2 className="text-xl mt-4">Your final score is <span className="font-semibold text-yellow-400">{score}/{questions.length}</span></h2>
                    <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
                        {/* Restart button */}
                        <button
                            onClick={() => {
                                setCurrentQuestionIndex(0);
                                setScore(0);
                                setAnswer("");
                            }}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out"
                        >
                            Restart
                        </button>
                        {/* home link */}
                        <HomeLink />
                    </div>
                </div>
            )}
            <FbLink />
        </div>
    );
}

export default Quiz;
