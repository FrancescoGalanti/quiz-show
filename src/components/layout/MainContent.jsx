
import { useContext } from "react";
import QuizQuestions from "../quiz/QuizQuestions";
import SplashScreen from "./SplashScreen";
import { ContextQuiz } from "../context/contextQuizProvider";


export default function MainContent() {
    const { isVisible, showQuiz } = useContext(ContextQuiz)

    return (
        <main className="grow">
            {
                !isVisible ? <SplashScreen showQuiz={showQuiz} /> :
                    <QuizQuestions />
            }

        </main>
    )
}
