import MinusIcons from "../icons/MinusIcons";
import quizQuestions from "../../data/quiz-questions";
import { useState } from "react";
import PlusIcons from "../icons/PlusIcons";


export default function ShowReview({ aswered }) {
    const [isShowResume, setIsShoeResume] = useState(false);
    function showResume() {
        setIsShoeResume(prev => !prev);
    }

    function checkAnswer(answer, index) {
        if (quizQuestions[index].answers[0] === answer) {
            return "text-green-500"
        } else {
            return "text-red-500"
        }
    }

    return (
        <div className=" text-secondary font-bold" >
            <div className="flex justify-between items-center">

                <span className="uppercase">{isShowResume ? "hide" : "show"} review</span>
                {
                    isShowResume ? <MinusIcons onClick={showResume} className="cursor-pointer size-6" /> :
                        <PlusIcons onClick={showResume} className="cursor-pointer size-6" />
                }



            </div>
            {
                isShowResume &&
                <ul className="flex flex-col">
                    {aswered.map((answer, index) => (
                        <li key={index}>
                            <h3 className="mb-2 mt-3">{index + 1}. {quizQuestions[index].text}</h3>
                            <p className={checkAnswer(answer, index)}>{answer}</p>
                        </li>

                    ))}
                </ul>
            }
            {/* {
                <ul className={`${isShowResume ? "flex flex-col" : "hidden"}`}>
                    list of question and answers
                </ul>
            } */}
        </div>
    )

    // let arrayQustionKeysValue = []


    // const arrayQuestionKeys = quizQuestions.map(element => (
    //     Object.keys(element)[1]
    // ));
    // console.log(arrayQuestionKeys);

    // const arrayQuestionValue = quizQuestions.map(element => element.text);

    // console.log(arrayQuestionValue);


    // for (let i = 0; i < Math.min(arrayQuestionKeys.length, arrayQuestionValue.length); i++) {
    //     let obj = {};
    //     obj[arrayQuestionKeys[i]] = arrayQuestionValue[i];
    //     arrayQustionKeysValue.push(obj);
    // }

    // console.log(arrayQustionKeysValue);


    // const setQuestion = aswered.map(element => {
    //     return {
    //         ...arrayQustionKeysValue,
    //         answer: element
    //     }
    // })

    // console.log(setQuestion);
}
