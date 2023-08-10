const IconButtonSlide = (props) =>{
    return (
      <div className="rounded-full border px-2 py-2 bg-black hover:bg-zinc-900" style={{ borderColor: '#454545' }} onClick={() => { }}>
        {props.icon}
      </div>
    )
  
}

export default IconButtonSlide
  