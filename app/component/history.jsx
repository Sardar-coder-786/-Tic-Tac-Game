function History({ question, answer, history}) {
    return (
        <div className={`mt-6 ${history ? "block" : "hidden"}`}>
            <table className="text-sm text-left border border-gray-700 rounded-lg">
                <thead className="text-xs uppercase bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    <tr>
                        <th className="px-4 py-3 border-b border-gray-500">Question</th>
                        <th className="px-4 py-3 border-b border-gray-500">Opt #1</th>
                        <th className="px-4 py-3 border-b border-gray-500">Opt #2</th>
                        <th className="px-4 py-3 border-b border-gray-500">Opt #3</th>
                        <th className="px-4 py-3 border-b border-gray-500">Opt #4</th>
                        <th className="px-4 py-3 border-b border-gray-500">Correct</th>
                        <th className="px-4 py-3 border-b border-gray-500">Your Answer</th>
                        <th className="px-4 py-3 border-b border-gray-500">Result</th>
                    </tr>
                </thead>
                <tbody>
                    {question.map((question, index) => (
                        <tr key={index} className="border-b border-gray-600 hover:bg-gray-800 transition duration-300">
                            <td className="px-4 py-3 text-white">{question.question}</td>
                            <td className="px-4 py-3 text-yellow-300">{question.options[0]}</td>
                            <td className="px-4 py-3 text-blue-300">{question.options[1]}</td>
                            <td className="px-4 py-3 text-green-300">{question.options[2]}</td>
                            <td className="px-4 py-3 text-pink-300">{question.options[3]}</td>
                            <td className="px-4 py-3 font-bold text-green-400">{question.answer}</td>
                            <td className="px-4 py-3 font-bold text-yellow-400">{answer[index]}</td>
                            <td className={`px-4 py-3 font-bold ${answer[index] === question.answer ? "text-green-400" : "text-red-400"}`}>
                                {answer[index] === question.answer ? "✔ Correct" : "✘ Incorrect"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default History;