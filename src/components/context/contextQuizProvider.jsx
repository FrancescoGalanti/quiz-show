import { createContext, useState } from "react";

export const ContextQuiz = createContext()

export default function ContextQuizProvider({ children }) {

    const [aswered, setAnswered] = useState([]);

    const [isVisible, setIsVisible] = useState(false);

    function showQuiz() {
        setIsVisible(true)
    }
    function hideQuiz() {
        setIsVisible(false);
    }

    function handleAnswer(answer) {
        setAnswered(prev => [...prev, answer])
    }
    function handleReset() {
        setAnswered([]);
        hideQuiz();
    }

    return (
        <ContextQuiz.Provider value={{ aswered, handleAnswer, handleReset, showQuiz, isVisible }}>
            {children}
        </ContextQuiz.Provider>

    )
}