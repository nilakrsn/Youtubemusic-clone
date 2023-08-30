const GenresItems = (props) => {
    const borderColor = [
        "border-lime-500",
        "border-red-700",
        "border-blue-700",
        "border-orange-500",
        "border-amber-400",
        "border-green-500",
        "border-teal-500",
        "border-indigo-500",
        "border-fuchsia-500",
        "border-pink-500",
        "border-rose-400"
    ]

    const randomColor = borderColor[Math.floor(Math.random() * borderColor.length)]
    return (
        <div className={`flex h-12 rounded-md border-l-8 hover:bg-neutral-900 bg-neutral-800  ${randomColor}`}>
            <div className="flex items-center p-3 text-sm font-bold ">{props.title}</div>
        </div>
    )
}

export default GenresItems