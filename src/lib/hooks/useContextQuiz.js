import { useContext } from "react"
import { ContextQuiz } from "../../components/context/contextQuizProvider"

export default function useContextQuiz() {
    const context = useContext(ContextQuiz)
    if (!context) {
        throw new Error(`you are using the context outside the contextQuizProvider`)
    }
    return context
}