import ButtonSlide from "./ButtonSlide"
import SongsCard from "./Songscard"

//section songs
const SectionSongs = (props) => {
    return (
        <div className="">
            <div className="text-lg font-roboto uppercase" style={{ color: '#AAAAAA' }}>{props.title}</div>
            <div className="flex justify-between">
                <div className="text-4xl font-roboto font-bold">{props.header}</div>
                <div className="flex items-center">
                    <div className="text-white flex gap-4">
                        <ButtonSlide />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 grid-rows-4 mt-3">
                {
                    props.data?.map((item, key) => {
                        return (
                            <SongsCard key={key} item={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default SectionSongs
