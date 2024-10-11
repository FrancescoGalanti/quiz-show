import Logo from "../UI/Logo";


export default function Footer() {
    return (
        <footer className="bg-black text-white p-1 flex items-center justify-center gap-1 mt-8">
            {new Date().getFullYear()} &copy;<Logo size="small" /> by Francesco Galanti

        </footer>
    )
}
