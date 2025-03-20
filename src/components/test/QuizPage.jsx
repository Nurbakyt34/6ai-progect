


import { useState } from "react";
import Logo from "../../assets/logo.png"

const questions = [
  {
    question: "I ______ bus on Mondays.",
    options: [
      "'m going to work with",
      "'m going to work by",
      "go to work with",
      "go to work by",
    ],
    correct: 3,
  },
  {
    question: "Sorry, but this chair is ______.",
    options: ["me", "mine", "my", "our"],
    correct: 1,
  },
  {
    question: "Where ____yesterday?",
    options: ["was you", "were you", "did", "did you be", "I don't know"],
    correct: 2,
  },
  {
    question: "I ____ a student.",
    options: ["is", "are", "am", "be"],
    correct: 3,
  },
  {
    question: "She ______ coffee every morning.",
    options: ["drink", "drinks", "drinking", "drank"],
    correct: 2,
  },
  {
    question: "We ______ to school yesterday.",
    options: ["go", "going", "went", "gone"],
    correct: 3,
  },
  {
    question: "He ______ playing football now.",
    options: ["is", "are", "am", "be"],
    correct: 1,
  },
  {
    question: "I ______ to the cinema last night.",
    options: ["go", "going", "gone", "went"],
    correct: 4,
  },


];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswerClick = (index) => {
    setSelectedAnswers([...selectedAnswers, index]);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const correctAnswers = selectedAnswers.filter(
    (answer, index) => answer === questions[index].correct
  ).length;

  return (
    <div className="flex flex-col items-center p-6 text-gray-800">
      {!isCompleted ? (
        <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-xl">
          <h2 className="text-lg font-semibold mb-4">
            Page {currentQuestion + 1} of {questions.length}
          </h2>
          <p className="text-lg font-medium mb-4">
            {questions[currentQuestion].question}
          </p>
          <div className="flex flex-col gap-2">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="border rounded-lg p-2 hover:bg-gray-200 transition"
                onClick={() => handleAnswerClick(index)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-xl text-center">
          <h2 className="text-xl font-bold">You have completed this test.</h2>
          <p className="text-lg mt-4">Correct answers: {correctAnswers}/{questions.length}.</p>
          <p className="text-lg">Your score is {((correctAnswers / questions.length) * 100).toFixed(0)}%.</p>
          <div className="mt-6 text-center">
            <h3 className="text-lg font-semibold">A1 User</h3>
            <img className="w-24 mx-auto mt-2" src={Logo} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}
