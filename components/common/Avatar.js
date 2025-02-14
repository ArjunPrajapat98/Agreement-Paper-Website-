import Image from 'next/image'
import img from "../../public/image/aggrement_onLgt_logo.png"

function Avatar() {   
    return <Image src={`${img.src}`} alt="Agreementpaper" width="5" height="5" />
}

export default Avatar