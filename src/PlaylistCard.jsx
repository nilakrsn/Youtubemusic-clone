//card playlist
const PlaylistCard = (props) => {
    return (
      <div>
        <img className="rounded-md mb-2" src={props.item.image} alt="" />
        <span className="font-roboto font-semibold">{props.item.title}</span>
        <p className="font-semibold font-roboto capitalize" style={{ color: '#AAAAAA' }}>{props.item.desc}</p>
        <p className="font-semibold font-roboto" style={{ color: '#AAAAAA' }}> {props.item.view}</p>
      </div>
    )
}

export default PlaylistCard