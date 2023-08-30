import PlaylistCard from "./PlaylistCard"

//section playlist
const SectionPlaylist = (props) => {
  return (
      <div className="grid grid-cols-6 gap-6 mt-4 mb-10">
        {
          props.data?.map((item, key) => {
            return (
              <PlaylistCard key={key} item={item} />
            )
          })
        }
      </div>
  )
}

export default SectionPlaylist