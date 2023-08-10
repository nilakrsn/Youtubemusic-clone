import Items from './Items';
import SectionPlaylist from './SectionPlaylist';
import SectionSongs from './SectionSongs';
import Sidebar from './header/Sidebar';


function App() {
  return (
    <>
      <div className="w-screen h-screen overflow-y-scroll">
        <div className="flex flex-row">
          <div className="w-1/6">
            <div>
              <Sidebar />
            </div>
          </div>
          <div className="w-5/6 flex justify-center">
            <div className="w-5/6 mt-12">
              <Main />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}





//content
function Main() {
  return (
    <div className=" mt-2">
      <div className="flex gap-3"><Items /></div>
      
    </div>
  )
}


export default App
