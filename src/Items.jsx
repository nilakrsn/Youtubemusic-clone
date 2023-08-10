import React from 'react';


function Items() {
  return (
    <>
      <ItemsMenu title="Relax" />
      <ItemsMenu title="Energize" />
      <ItemsMenu title="Workout" />
      <ItemsMenu title="Commute" />
      <ItemsMenu title="Focus" />
    </>
  )
}

function ItemsMenu(props) {
  return (
    <div className="py-10">
      <div className="py-2 px-4 flex justify-center items-center rounded-md text-sm text-white font-roboto bg-zinc-900 hover:bg-zinc-800" onClick={()=>{}}>
        {props.title}
      </div>
    </div>
  )
}

export default Items;
