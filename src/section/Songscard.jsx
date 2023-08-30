import { useState } from "react"

//card songs
const SongsCard = (props) => {
    const [tooglePlay, setTooglePlay] = useState(false)
    return (
        <div className={`flex gap-3 items-center ${tooglePlay ? "bg-zinc-800" : "bg-transparent"}`} onMouseOver={() => setTooglePlay(true)} onMouseOut={() => setTooglePlay(false)} >
            <div>
                <img className="h-12 " src={props.item.image} alt="" />
            </div>
            <div>
                <div className="font-semibold font-roboto">{props.item.title}</div>
                <div className="font-semibold font-roboto capitalize " style={{ color: '#AAAAAA' }}>{props.item.desc}•{props.item.title}</div>
            </div>
        </div>
    )
}

export default SongsCard
