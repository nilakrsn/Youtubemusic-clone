const Filter = (props) => {
    return (
        <div className=" w-full h-14 rounded-md flex items-center hover:bg-neutral-900 bg-neutral-800"  >
            <div className="flex items-center gap-3 ml-6">
                <div>
                    {props.icon}
                </div>
                <div>
                    <h3 className="font-bold text-2xl">{props.label}</h3>
                </div>
            </div>
        </div>
    )
}

export default Filter

