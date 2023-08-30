
const SectionVideos = (props) => {
    return (
        <div>
            <img className="rounded-sm" src={props.image} alt="" />
            <div className="mt-3">
                <span className="font-roboto font-semibold text-sm ">{props.title}</span>
                <p className="font-semibold font-roboto capitalize text-sm" style={{ color: '#AAAAAA' }}>{props.subtitle}</p>
            </div>
        </div>
    )
}

export default SectionVideos