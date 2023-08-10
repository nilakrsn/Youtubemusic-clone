import { useState, useEffect } from 'react'
import InputWithIcon from '../InputWithIcon';
import { Dehaze } from '@mui/icons-material';
import Icon from './Icon';
//navbar
const Nav = () => {
    const [isSticky, setIsSticky] = useState(false);

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
        <div>
            <div className={`flex py-3 w-full justify-between navbar ${isSticky ? 'sticky' : ''} `}>
                <div className="flex px-7 w-1/6 items-center " style={{ borderColor: '#454545' }}>
                    <Dehaze className="text-white mr-5 cursor-pointer" />
                    <div >
                        <img src="https://music.youtube.com/img/on_platform_logo_dark.svg" alt="Icon.jpg" className="" />
                    </div>
                </div>
                <div className="flex justify-start w-3/6">
                    <InputWithIcon />
                </div>
                <div className="w-1/6">
                    <Icon />
                </div>
            </div>
        </div>
    )
}

export default Nav