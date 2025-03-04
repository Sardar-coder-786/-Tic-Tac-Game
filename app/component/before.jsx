import Option from "../component/option"; // Import option selection component

function Before({questions, answer, setAnswer, currentIndex, setcurrentIndex, score, setScore}) {
    return ( 
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
     );
}

export default Before;