
import Button from "../UI/Button";
import quizQuestions from "../../data/quiz-questions";
import ShowReview from "./ShowReview";
import useContextQuiz from "../../lib/hooks/useContextQuiz";



export default function QuizSummary() {
    const { items, dispatch } = useContextQuiz()


    const rightAnswer = items.filter((answer, index) => answer === quizQuestions[index].answers[0]).length
    const correctAnswersPercentage = Math.round(rightAnswer * 100 / quizQuestions.length);
    console.log(correctAnswersPercentage)
    const wrongAnsersPercentage = 100 - correctAnswersPercentage;



    return (
        <div className="flex flex-col items-center justify-center w-full ">
            <p className="text-white" >
                {
                    correctAnswersPercentage > 70
                        ? "you pass the test 😀"
                        : "😂 You did not pass the quiz."
                }
            </p>
            <div className="flex mt-8 gap-32">
                <div className="flex flex-col items-center" >
                    <span className="font-bold text-white w-20 h-20 rounded-full bg-correct flex justify-center items-center ring-2 ring-white ">{correctAnswersPercentage}%</span>
                    <p className="text-white font-bold mt-3">Correct Answers</p>
                </div>
                <div className="flex flex-col  items-center">
                    <span className="font-bold text-white w-20 h-20 rounded-full bg-incorrect flex justify-center items-center ring-2 ring-white">{wrongAnsersPercentage}%</span>
                    <p className="text-white font-bold mt-3">wrong Answers</p>
                </div>

            </div>
            <Button onClick={() => dispatch({ type: "HANDLE_RESET" })} className="mt-16">Restart Quiz</Button>
            <div className="mt-16 bg-white/80 px-3 py-4 w-96">
                <ShowReview aswered={items} />
            </div>
        </div >
    )
}
