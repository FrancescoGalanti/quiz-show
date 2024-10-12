import { InitialAsweredVisibility } from "../constants/quizConstants"





export default function AsweredVisibilityReduce(state, action) {


    switch (action.type) {
        case ('HANDLE_ANSWER'):
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case ('SHOW_QUIZ'):
            return {
                ...state,
                visibility: true
            }
        case ('HIDE_QUIZ'):
            return {
                ...state,
                visibility: false
            }
        case ('HANDLE_RESET'):
            return {
                ...InitialAsweredVisibility,
            }

        default:
            console.log(`invalid action ${action.type} for AsweredVisibilityReduce`)
            return state;
    }
}