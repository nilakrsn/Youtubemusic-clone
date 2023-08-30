import { useState, useEffect } from 'react'
import InputWithIcon from '../InputWithIcon';
import Icon from './Icon';
import { Dehaze } from '@mui/icons-material';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
//navbar

const Nav = ({ data }) => {
    const [isSticky, setIsSticky] = useState(false);
    const [open, setOpen] = useState(false);

    const handleScroll = () => {
        setIsSticky(window.scrollY >= 100)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`navbar ${isSticky ? 'sticky top-0' : ''}`} style={{ zIndex: 100 }}>
                <div className='flex justify-between items-center'>
                    <div className='flex w-1/6 bg-grey-900 py-5 px-7 cursor-pointer' onClick={() => setOpen(!open)}>
                        <Dehaze className="text-white mr-5 " />
                        <div>
                            <img
                                src="https://music.youtube.com/img/on_platform_logo_dark.svg"
                                alt="Icon.jpg"
                            />
                        </div>
                    </div>
                    <div className={`${!open ? 'w-3/6' : 'w-4/6'}`}>
                        <InputWithIcon />
                    </div>
                    <Link to="/signUp" className='w-1/6'>
                        <Icon/>
                    </Link>
                </div>
            </div>
            <Sidebar open={open} setOpen={setOpen} tru={isSticky} main={data} />
        </>
    )
}

export default Nav