import SongsCard from "./Songscard"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import IconButtonSlide from "../IconButtonSlide";

//section songs
const SectionSongs = (props) => {
    return (
        <div className="grid grid-cols-3 grid-rows-4">
            {
                props.data?.map((item, key) => {
                    return (
                        <SongsCard key={key} item={item} />
                    )
                })
            }
        </div>
    )
}
export default SectionSongs
