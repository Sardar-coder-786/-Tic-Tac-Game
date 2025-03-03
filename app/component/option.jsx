function Option({ question, setAnswer, answer }) {
    return (
        <div className="grid grid-cols-2 gap-4">
            {/* Render options */}
            {question.options.map((option, index) => {
                // Check if answer is correct, selected, or neither
                const isCorrect = option === question.answer;
                const isSelected = answer === option;

                return (
                    <button onClick={() => setAnswer((prev) => [...prev, option])}
                        key={index}
                        disabled={answer}
                        className={`border-2 p-3 rounded-md transition duration-300 ease-in-out text-lg font-medium
                                    ${answer ? (isCorrect ? "bg-green-500 hover:bg-green-600" : isSelected ? "bg-red-500 hover:bg-red-600" : "bg-gray-700") : "bg-gray-700 hover:bg-gray-600"}
                                    ${answer ? "cursor-not-allowed" : ''}`}>
                        {option}
                    </button>
                );
            })}
        </div>
    );
}

export default Option;