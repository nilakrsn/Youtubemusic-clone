//menu isi di sidebar
const Menu = (props) => {
    return (
        <div className="flex items-center px-6 py-3 m-1 gap-4 bg-black hover:bg-zinc-800 rounded-lg">
            {props.icon}
            <span className="font-medium font-roboto" style={{ fontSize: 16 }}>{props.label}</span>
        </div>
    )
}

export default Menu
