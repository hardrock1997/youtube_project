import { useContext } from "react"
import { ApiContext } from "../context/ApiResultsProvider"
import VideoCard from "./VideoCard"
export default function VideoContainer() {
    const {popularVideos,videos,loading} = useContext(ApiContext)

    if(videos?.videos?.items?.length===0 || popularVideos?.items?.length===0) return <h1 >No videos in this Category</h1>
    if(loading)return <h1>Loading</h1>

    console.log(videos,'videos',popularVideos)

    return <div className="flex flex-wrap">
        {
           videos.videos ?  videos?.videos?.items?.map(videoInfo=><VideoCard info={videoInfo} key={videoInfo.id}/>):popularVideos?.items?.map(videoInfo=><VideoCard info={videoInfo} key={videoInfo.id}/>)
        }
    </div>
}