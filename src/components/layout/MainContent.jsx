

import QuizQuestions from "../quiz/QuizQuestions";
import SplashScreen from "./SplashScreen";
import useContextQuiz from "../../lib/hooks/useContextQuiz";


export default function MainContent() {
    const { visibility } = useContextQuiz()

    console.log(visibility)

    return (
        <main className="grow">
            {
                visibility === false ? <SplashScreen /> :
                    <QuizQuestions />
            }

        </main>
    )
}
