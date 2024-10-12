
import Button from "../UI/Button";
import useContextQuiz from "../../lib/hooks/useContextQuiz";


export default function QuizList({ answer }) {

    const { dispatch } = useContextQuiz()
    return (

        <li className="text-black m-3" >
            <Button onClick={() => dispatch({ type: "HANDLE_ANSWER", payload: answer })} className="w-full pointer">{answer}</Button>
        </li>
    )
}
