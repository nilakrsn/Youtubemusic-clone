import ItemsMenu from "../Items";
import PushPinIcon from '@mui/icons-material/PushPin';

function LibraryPages() {
    return (
        <div className="h-screen">
            <div className="flex mt-24 gap-3 items-center">
                <ItemsMenu title="Playlist" />
                <ItemsMenu title="Songs" />
                <ItemsMenu title="Album" />
                <ItemsMenu title="Artist" />
                <div className="flex justify-end w-5/6">
                    <div className="h-10 w-40 border border-neutral-700 flex justify-center items-center rounded-full text-sm text-white font-semibold bg-neutral-800 font-roboto" onClick={() => { }}>Recent activity</div>
                </div>

            </div>
            <div>
                <div className="mt-10">
                    <div className="flex">
                        <div>
                            <img className="h-28 rounded-sm" src="https://www.gstatic.com/youtube/media/ytm/images/pbg/liked-music-@576.png" alt="" />
                            <span className="font-roboto font-semibold text-sm">Your Favorite</span>
                            <div className="flex">
                                <div style={{ color: '#AAAAAA' }}>
                                    <PushPinIcon className="h-5" />
                                </div>
                                <div className="w-5/6">
                                    <span className="font-semibold font-roboto capitalize text-sm" style={{ color: '#AAAAAA' }}>automatic playlists</span>
                                </div>
                            </div>
                        </div>
                        <div >
                            <img className="h-28 rounded-sm" src="https://lh3.googleusercontent.com/n1-pqG9jYCHqxiSSq7DORgk10PCS7vyMX5VX0o0HoPwEEIZM5pamJAFIDOHqo7Hl27hJ9YvqTahya3Fg=w544-h544-l90-rj" alt="" />
                            <span className="font-roboto font-semibold text-sm ">BE</span>
                            <div className="flex">
                                <div className="w-5/6">
                                    <span className="font-semibold font-roboto capitalize text-sm" style={{ color: '#AAAAAA' }}>Album • BTS • 2020</span>
                                </div>
                            </div>
                        </div>
                        <div className="ml-5">
                            <img className="h-24" src="https://lh3.googleusercontent.com/_1IhAFH2jqQe---I32QgKBkZWr_9YVitqtWF49aDQzk2uPBXNfAV-bn-PRAz7qnMlDtdB5_M7BSkxdDn=w1440-h600-p-l90-rj" alt="" />
                            <span className="font-roboto font-semibold text-sm ">BTS</span>
                            <div className="flex">
                                <div className="w-5/6">
                                    <span className="font-semibold font-roboto capitalize text-sm" style={{ color: '#AAAAAA' }}>Artis • 76,2 jt subscriber</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LibraryPages