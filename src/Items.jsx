
const ItemsMenu = (props) =>{
  return (
    <div>
      <div className="py-2 px-4 flex justify-center items-center rounded-md text-sm text-white font-roboto bg-zinc-900 hover:bg-zinc-800" onClick={() => { }}>
        {props.title}
      </div>
    </div>
  )
}

export default ItemsMenu;
