"use client";
import data from "@/app/data/quizdata.json"; // Import quiz data
import { useState } from "react";
import FbLink from "../component/fblink"; // Import Facebook link component
import Before from "../component/before";
import After from "../component/after";


function Quiz() {
    // Load questions from the imported data
    let questions = data.questions;
    // State variables for tracking quiz progress
    let [currentIndex, setcurrentIndex] = useState(0); // Index of the current question
    let [answer, setAnswer] = useState([]); // Stores user's answers
    let [score, setScore] = useState(0); // Stores user's score

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center p-5">
            {/* Quiz Title */}
            <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
                Welcome To Quiz Game
            </h1>

            {/* Check if quiz is still ongoing */}
            {currentIndex < questions.length ? (

                <Before questions={questions} answer={answer} setAnswer={setAnswer} currentIndex={currentIndex} setcurrentIndex ={setcurrentIndex} score={score} setScore={setScore} />

            ) : (

                <After questions={questions} answer={answer} setAnswer={setAnswer} currentIndex={currentIndex} setcurrentIndex={setcurrentIndex} score={score} setScore={setScore} />
                
            )}

            {/* Facebook link component */}
            <FbLink />
        </div>
    );
}

export default Quiz;
