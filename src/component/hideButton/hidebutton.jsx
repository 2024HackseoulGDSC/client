import { useEffect } from 'react'
import styles from './hidebutton.module.css'

const HideButton = () => {
    const [isClicked, setIsClicked] = useState(false)
    const [text, setText] = useState("공개")

    const handleClick=()=>{
        setIsClicked(prevState=>!prevState)
    }

    useEffect(()=>{
        if (isClicked) setText("비공개")
        else setText("공개")
    },[text,isClicked])

    return(
        <button onClick={handleClick}>{text}</button>
    )
}

export default HideButton