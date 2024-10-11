

export default function Button({ className, children, ...props }) {
    return (
        <button className={`text-white bg-primary hover:bg-tertiary transition-all rounded-3xl px-8 py-1 min-w-40 ${className ?? ""} `}  {...props}>
            {children}
        </button>
    )
}
