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
    let [currentIndex, setcurrentIndex] = useState(0);
    // Current answer state
    let [answer, setAnswer] = useState([]);
    // Current score state
    let [score, setScore] = useState(0);


    return (
        <div className="h-screen w-screen bg-gray-900 text-white flex flex-col items-center justify-center p-5">
            <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">Welcome To Quiz Game</h1>
            {/* Quiz area */}
            {currentIndex < questions.length ? (
                <div className="bg-gray-800 shadow-lg rounded-lg p-10 w-full max-w-xl text-center">
                    {/* Question */}
                    <h2 className="text-3xl font-semibold mb-6">{questions[currentIndex].question}</h2>
                    {/* Options */}
                    <Option question={questions[currentIndex]} answer={answer[currentIndex]} setAnswer={setAnswer} />

                    {/* Submit Button */}
                    <button
                        onClick={() => {
                            if (answer[currentIndex] === questions[currentIndex].answer) {
                                setScore(score + 1);
                            }
                            setcurrentIndex(currentIndex + 1);
                        }}
                        className={`mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out ${answer[currentIndex] ? "block" : "hidden"}`}>
                        Submit
                    </button>
                    <h3 className="text-lg font-semibold text-gray-300 bg-gray-800 px-4 py-2 mt-7 rounded-md shadow-md">
                        {currentIndex < 10 ? currentIndex + 1 : currentIndex} of {questions.length} Questions
                    </h3>
                </div>
            ) : (
                <div className="bg-gray-800 shadow-lg rounded-lg p-10 w-full max-w-xl text-center">
                    <h1 className="text-3xl font-bold text-green-400">Congratulations!</h1>
                    <h2 className="text-xl mt-4">Your final score is <span className="font-semibold text-yellow-400">{score}/{questions.length}</span></h2>
                    <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
                        {/* Restart button */}
                        <button
                            onClick={() => {
                                setcurrentIndex(0);
                                setScore(0);
                            }}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out"
                        >
                            Restart
                        </button>
                        {/* detail*/}
                        
                        
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
