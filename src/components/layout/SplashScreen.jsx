

import image from '../../assets/image-splash.svg'
import Button from '../UI/Button'
import useContextQuiz from '../../lib/hooks/useContextQuiz'

export default function SplashScreen() {

    const { dispatch } = useContextQuiz()

    return (
        <div className='text-center'>
            <img className="inline-block size-96" src={image} alt="" />
            <h1 className='text-white font-bold text-4xl pb-4'>Test your knowledge of React.</h1>
            <p className='text-white'>this is a quiz about the basic concepts of react.</p>
            <p className=' text-white mb-4'>To pass it, you need to answer  at least 70% of the questions correctly.</p>
            <Button onClick={() => dispatch({ type: "SHOW_QUIZ" })}>Let&apos;s go</Button>
        </div >
    )
}