import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';


const Sidebar = ({ open, tru, main }) => {
    return (
        <main className={`w-full flex flex-row transition-all duration-200`}>
            <div className={`w-1/5 relative sidebar h-auto ${!open ? "w-1/6 border-r" : "w-16"} ${tru ? "border-r" : ""}`}>
                <div className={`mt-16 fixed h-screen ${!open ? "w-[14rem]" : "w-16"}`}>
                    <div className='p-2'>
                        <Link to="/" className={`flex rounded-lg p-3 hover:bg-zinc-900`}>
                            <Menu icon={<HomeRoundedIcon />} label={`${!open ? "Home" : ""}`} />
                        </Link>
                        <Link to="/explore" className='flex rounded-lg p-3 hover:bg-zinc-900'>
                            <Menu icon={<ExploreOutlinedIcon />} label={`${!open ? "Explore" : ""}`} />
                        </Link>
                        <Link to="/library" className='flex rounded-lg p-3 hover:bg-zinc-900'>
                            <Menu icon={<LibraryMusicOutlinedIcon />} label={`${!open ? "Library" : ""}`} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-5/6 px-28">
                {main}
            </div>
        </main>
    );
}

export default Sidebar;
