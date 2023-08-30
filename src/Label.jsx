import IconButtonSlide from "./IconButtonSlide"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Label = (props) => {
    return (
        <div>
            <div className="text-lg font-roboto uppercase" style={{ color: '#AAAAAA' }}>{props.label}</div>
            <div className="flex justify-between">
                <div className="text-3xl font-roboto font-bold">{props.title}</div>
                <div className="flex items-center">
                    <div className="text-white flex gap-4">
                        <div className=" text-sm font-bold rounded-full border m-1 px-3 flex items-center hover:bg-zinc-900" style={{ borderColor: '#454545' }} onClick={() => { }}>
                            {props.text}
                        </div>
                        <IconButtonSlide icon={<KeyboardArrowLeftIcon />} />
                        <IconButtonSlide icon={<KeyboardArrowRightIcon />} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Label