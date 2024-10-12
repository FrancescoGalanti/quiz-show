import { createContext, useReducer } from "react";
import AsweredVisibilityReduce from "../../lib/reduce/AsweredVisibilityReduce";
import { InitialAsweredVisibility } from "../../lib/constants/quizConstants";

export const ContextQuiz = createContext()





export default function ContextQuizProvider({ children }) {

    const [state, dispatch] = useReducer(AsweredVisibilityReduce, InitialAsweredVisibility)



    return (
        <ContextQuiz.Provider value={{ items: state.items, visibility: state.visibility, dispatch }}>
            {children}
        </ContextQuiz.Provider >

    )
}