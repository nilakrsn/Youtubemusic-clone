const Menu = (props) => {
    return (
        <>
            <div className="flex items-center px-1 gap-4">
                {props.icon}
                <span className="font-semibold font-roboto" style={{ fontSize: 16 }}>{props.label}</span>
            </div>
        </>
    )
}

export default Menu