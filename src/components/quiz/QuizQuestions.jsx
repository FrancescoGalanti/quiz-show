
import quizQuestions from "../../data/quiz-questions"
import QuizList from "./QuizList"
import QuizSummary from "./QuizSummary";
import useContextQuiz from "../../lib/hooks/useContextQuiz";
export default function QuizQuestions() {

    const { items } = useContextQuiz()

    const activeIndex = items.length;
    console.log(activeIndex);
    const isQuizCompleted = activeIndex === quizQuestions.length;



    if (isQuizCompleted) {
        return <QuizSummary />
    }

    const randomAnswers = quizQuestions[activeIndex].answers;
    randomAnswers.sort(() => Math.random() - 0.5);


    return (

        <div className="flex items-center justify-center gap-1 flex-col max-w-xl mx-auto">
            <h1 className="mb-3 text-white font-semibold">{activeIndex + 1}. {quizQuestions[activeIndex].text}</h1>
            <ul>
                {randomAnswers.map((answer, i) => (
                    <QuizList key={i + quizQuestions[activeIndex].id} answer={answer} />
                ))}
            </ul>
        </div>

    )
}
