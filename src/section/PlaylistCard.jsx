import { useState } from "react"

//card playlist
const PlaylistCard = (props) => {
  const [togglePlay, setTogglePlay] = useState(false)
  return (
    <div onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)} >
      <div className={`${togglePlay ? "bg-zinc-800" : "bg-transparent"} rounded-md mb-2`} >
        <img src={props.item.image} alt="" />
      </div>
      <span className="font-roboto font-semibold">{props.item.title}</span>
      <p className="font-semibold font-roboto capitalize" style={{ color: '#AAAAAA' }}>{props.item.desc}</p>
      <p className="font-semibold font-roboto" style={{ color: '#AAAAAA' }}> {props.item.view}</p>
    </div>
  )
}

export default PlaylistCard