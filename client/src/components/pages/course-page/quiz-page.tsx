import React, {useEffect ,useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";
// Define types for quiz data
interface Option {
    id: string;
    text: string;
    correct?: boolean;
}

interface Quiz {
    question: string;
    options: Option[];
}

const Quizzes: React.FC = () => {
    const [quizStarted, setQuizStarted] = useState<boolean>(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
    const [score, setScore] = useState<number>(0);
    const [previousAnswers, setPreviousAnswers] = useState<string[]>([]);

    // Dummy quiz data
    const quizzes: Quiz[] = [
        {
            question: "What is the difference between controlled and uncontrolled components in React?",
            options: [
                { id: "1", text: "Controlled components are managed by React.", correct: true },
                { id: "2", text: "Uncontrolled components are managed by the DOM." },
                { id: "3", text: "Both are the same." },
                { id: "4", text: "None of the above." }
            ]
        },
        {
            question: "Which of the following is a popular React framework?",
            options: [
                { id: "1", text: "Angular" },
                { id: "2", text: "Vue" },
                { id: "3", text: "Next.js", correct: true },
                { id: "4", text: "Django" }
            ]
        },
        {
            question: "What is the difference between controlled and uncontrolled components in React?",
            options: [
                { id: "1", text: "Controlled components are managed by React.", correct: true },
                { id: "2", text: "Uncontrolled components are managed by the DOM." },
                { id: "3", text: "Both are the same." },
                { id: "4", text: "None of the above." }
            ]
        },
        {
            question: "What is the difference between controlled and uncontrolled components in React?",
            options: [
                { id: "1", text: "Controlled components are managed by React.", correct: true },
                { id: "2", text: "Uncontrolled components are managed by the DOM." },
                { id: "3", text: "Both are the same." },
                { id: "4", text: "None of the above." }
            ]
        }
    ];
  useEffect(()=>{},[])
    const handleOptionSelect = (optionId: string) => {
        setSelectedOptionId(optionId);
    };
    
    const handleNextQuestion = () => {
        const selectedOption = quizzes[currentQuestionIndex].options.find(
            (option) => option.id === selectedOptionId
        );

        // Update score if the selected option is correct
        if (selectedOption && selectedOption.correct) {
            setScore((prevScore) => prevScore + 1);
        }

        setPreviousAnswers((prev) => [...prev, selectedOptionId!]);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedOptionId(null);
    };

    const handlePrevQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        setSelectedOptionId(previousAnswers[previousAnswers.length - 1] || null);
        setPreviousAnswers((prev) => prev.slice(0, -1)); // Remove the last answer
    };

    return (
        <div className="min-h-screen p-3 col-span-4 lg:col-span-3 flex items-start justify-left">
            <div className="bg-white w-full p-6 rounded-2xl shadow-xl">
                <div className="flex justify-left gap-1 font-bold items-center">
                    Web Development <FaChevronRight /> React
                </div>
                {!quizStarted ? (
                    // Show the Start Quiz button if quiz hasn't started
                    <div className="flex justify-center">
                        <Button
                            className=" bg-white text-black shadow-xl py-3 px-6 rounded-full hover:bg-opacity-80 transition duration-200"
                            onClick={() => setQuizStarted(true)}
                        >
                            Start Quiz
                        </Button>
                    </div>):(<> <h2
                    className={`text-base border pl-3 w-fit pr-3  rounded-full font-thin mb-4 ${currentQuestionIndex >= quizzes.length ? "border-green-500" : "border-[#EE645B]"}`
                    }
                >
                    {currentQuestionIndex >= quizzes.length
                        ? `Congrats! Your score is ${score}/${quizzes.length}`
                        : `Question ${currentQuestionIndex + 1}`}
                </h2>
                {currentQuestionIndex < quizzes.length ? (
                    <>
                        <p className="text-base mb-6">{quizzes[currentQuestionIndex].question}</p>
                        {/* Button layout for options */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                            { quizzes[currentQuestionIndex].options.slice(0, 2).map((option) => (
                                <div
                                    key={option.id}
                                    onClick={() => handleOptionSelect(option.id)}
                                    className={`cursor-pointer bg-opacity-70 p-4 rounded-3xl text-base
                                        ${selectedOptionId === option.id
                                            ? "bg-[#EE645B] text-white"
                                            : "bg-gray-200 hover:bg-gray-300"
                                        }`}
                                >
                                    {option.text}
                                </div>
                            ))}
                        </div>

                        {/* Next two options below */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {quizzes[currentQuestionIndex].options.slice(2).map((option) => (
                                <div
                                    key={option.id}
                                    onClick={() => handleOptionSelect(option.id)}
                                    className={`cursor-pointer bg-opacity-70 p-4 rounded-3xl text-base
                                        ${selectedOptionId === option.id
                                            ? "bg-[#EE645B] text-white"
                                            : "bg-gray-200 hover:bg-gray-300"
                                        }`}
                                >
                                    {option.text}
                                </div>
                            ))}
                        </div>
                        {selectedOptionId && (
                            <div className="flex justify-center gap-4 mt-4 items-center">{
                                currentQuestionIndex > 0 && <Button
                                onClick={handlePrevQuestion}
                                className="bg-[#EE645B] text-white py-2 h-11 rounded-l-full hover:bg-opacity-40 transition-colors duration-200"
                                disabled={currentQuestionIndex === 0} // Disable if on the first question
                            >
                                Prev
                            </Button>
                            }
                                <Button
                                    onClick={handleNextQuestion}
                                    className="bg-[#EE645B] text-white py-2 h-11 rounded-lg rounded-r-full hover:bg-opacity-40 transition-colors duration-200"
                                >
                                    Nextz
                                </Button>
                            </div>
                        )}
                    </>
                ):<p>Quiz completed! Your score is {score}/{quizzes.length}</p>}</>)}
            </div>
        </div>
    );
};

export default Quizzes;
