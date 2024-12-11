
import { useNavigate } from "react-router-dom"
export default function VideoCard({info}) {
    const {snippet, statistics,id} = info
    const {channelTitle,title,thumbnails} = snippet
    const navigate = useNavigate()

    function handleClick() {
        navigate({
            pathname:"/watch",
            search:`?v=${id}`
        })
    }

    return <div className="p-2 m-2 w-80 shadow-lg cursor-pointer" onClick={handleClick}>
        <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg"/>
        <ul>
            <li className="font-bold py-2">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics?.viewCount} views</li>
        </ul>
    </div>

}