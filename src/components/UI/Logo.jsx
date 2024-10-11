
import AcademicCap from './icons/AcademicCap'

// Stili
// size: default, large, small
const logoTitleSize = {
    default: 'text-base',
    large: 'text-4xl',
    small: 'text-sm',
}

const logoIconSize = {
    default: 'size-6',
    large: 'size-10',
    small: 'size-4',
}

const logoTheme = {
    white: 'text-white',
    black: 'text-black',
}
export default function Logo({ className, size = 'default', theme = "white" }) {
    return (
        <div className={`inline-flex items-center gap-1 ${className ?? ""}`}>
            <AcademicCap className={`${logoTheme[theme]} ${logoIconSize[size]}`} />
            <h1 className={`${logoTheme[theme]} ${logoTitleSize[size]}`}>React<span className='font-bold'>Quiz</span></h1>
        </div>
    )
}
