import IconButtonSlide from "./IconButtonSlide"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
//slide
const ButtonSlide =() => {
    return (
      <>
        <IconButtonSlide icon={<KeyboardArrowLeftIcon />} />
        <IconButtonSlide icon={<KeyboardArrowRightIcon />} />
      </>
  
    )
}

export default ButtonSlide