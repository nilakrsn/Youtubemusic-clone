const TrendingItems = (props) => {
    return (
        <div className="flex mt-3 gap-2">
            <div className="w-1/6 flex justify-center items-center">
                <img src={props.image} alt="" />
            </div>
            <div className="w-1/6 flex justify-center items-center font-semibold ">
                <span>{props.number}</span>
            </div>
            <div className="w-4/6">
                <span className="font-roboto font-semibold">{props.title}</span>
                <p className="font-semibold font-roboto capitalize" style={{ color: '#AAAAAA' }}>{props.subtitle}</p>
            </div>
        </div>
    )
}

export default TrendingItems