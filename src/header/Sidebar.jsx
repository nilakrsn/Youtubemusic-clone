import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import Nav from './Nav';
import Menu from './Menu';

//isi sidebar
const Sidebar  = () => {
    return (
        <div className="border-r" style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            width: '16.666667%',
            overflowY: 'auto',
            borderColor: '#454545'
        }}>
            <div className="fixed w-full">
                <Nav/>
            </div>
            <div className='mt-[72px] mx-1'>
                <Menu icon={<HomeRoundedIcon />} label="Home" onClick={() => { }} />
                <Menu icon={<ExploreOutlinedIcon />} label="Explore" onClick={() => { }} />
                <Menu icon={<LibraryMusicOutlinedIcon />} label="Library" onClick={() => { }} />
            </div>
            <hr className="border-1 mt-5 mx-5" style={{ borderColor: '#454545' }} />
            <div className="h-9 mx-5 mt-6 flex justify-center items-center bg-zinc-900 hover:bg-zinc-800 rounded-full text-sm font-semibold font-roboto" onClick={() => { }} >Sign In</div>
            <div className="mx-6 mt-2">
                <span className="text-[11px] font-roboto" style={{ color: '#B4B4B4' }}>Sign in to create & share playlists, get personalized recommendations, and more.</span>
            </div>
        </div>
    )
}

export default Sidebar
