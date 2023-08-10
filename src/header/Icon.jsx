import CastOutlinedIcon from '@mui/icons-material/CastOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
//icon pojok kanan
const Icon = () => {
    return (
        <div className="flex gap-3">
            <CastOutlinedIcon className="mt-1" />
            <MoreVertOutlinedIcon className=" mt-1" />
            <div className="h-8 w-20 flex justify-center items-center rounded-full text-sm text-black font-semibold bg-white font-roboto" onClick={() => { }}>Sign in</div>
        </div>
    )
}

export default Icon