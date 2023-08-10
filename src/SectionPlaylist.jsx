import ButtonSlide from "./ButtonSlide"
import PlaylistCard from "./PlaylistCard"

//section playlist
const SectionPlaylist = (props) => {
    return (
      <div className="mt-24">
        <div className="text-lg font-roboto uppercase" style={{ color: '#AAAAAA' }}>{props.title}</div>
        <div className="flex justify-between">
          <div className="text-4xl font-roboto font-bold">{props.header}</div>
          <div className="flex items-center">
            <div className="text-white flex gap-4">
            <ButtonSlide/>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-6 mt-4">
          {
            props.data?.map((item, key) => {
              return (
                <PlaylistCard key={key} item={item} />
              )
            })
          }
        </div>
  
      </div>
    )
  }

  export default SectionPlaylist