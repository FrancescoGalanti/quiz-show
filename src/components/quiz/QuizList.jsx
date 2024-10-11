
import Button from "../UI/Button";


export default function QuizList({ answer, handleAnswer }) {


    return (

        <li className="text-black m-3" >
            <Button onClick={() => handleAnswer(answer)} className="w-full pointer">{answer}</Button>
        </li>
    )
}
