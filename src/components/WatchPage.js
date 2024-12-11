import { SideBarContext } from "../context/SideBarContext"
import { useContext,useEffect } from "react"
import { useSearchParams } from "react-router-dom"

export default function WatchPage() {
    const {setWatchPageToggleSideBar} = useContext(SideBarContext)
    
    const [searchParams] = useSearchParams()
    const videoId = searchParams.get("v")

    useEffect(()=>{
        setWatchPageToggleSideBar(false)
    },[])

    return (
        <div className="px-5">
        <iframe 
        width="1200" 
        height="700" 
        src={"https://www.youtube.com/embed/"+ videoId}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen></iframe>
        </div>
    )
}