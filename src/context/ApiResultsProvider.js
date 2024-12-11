import { createContext,useState,useEffect} from "react";
import { POPULAR_VIDEOS_API_URL, VIDEO_CATEGORIES_API_URL, VIDEO_BY_CATEGORY_API_URL } from "../util/constants";

export const ApiContext = createContext();

export default function ApiResultsProvider({children}) {

    const [popularVideos, setPopularVideos] = useState([])
    const [videoCategories, setVideoCategories] = useState([])
    const [videos, setVideos] = useState({
        videos:''
    })
    const [categoryId, setCategoryId] = useState(null)
    const [loading, setLoading] = useState(false)



    useEffect(()=>{
        fetchPopularVideos()
        fetchVideoCategory()
    },[])

    useEffect(()=>{
        fetchVideoByCategory()
    },[categoryId])


    async function fetchVideoByCategory() {
        try{
            if(categoryId) {
                setLoading(true)
                const url = `${VIDEO_BY_CATEGORY_API_URL}${categoryId}`;
                const res = await fetch(url)
                const videoByCategory = await res.json()
                setVideos({...videos,videos:videoByCategory})
                setLoading(false)
            }
        }
        catch(e) {
            console.log(e)
        }
    }

    async function fetchPopularVideos() {
        try{
            const res = await fetch(POPULAR_VIDEOS_API_URL)
            const videos = await res.json()
            setPopularVideos(videos)
        }
        catch(e) {
            console.log(e)
        }
      
       
    }

    async function fetchVideoCategory() {
        try{
            const res = await fetch(VIDEO_CATEGORIES_API_URL)
            const categories = await res.json()
            setVideoCategories(categories?.items)
        }
        catch(e) {
            console.log(e)
        }
    }

    const ApiCtx = {
        popularVideos,
        videoCategories,
        videos,
        setCategoryId,
        loading
    }

    return (
        <ApiContext.Provider value={ApiCtx}>
            {children}
        </ApiContext.Provider>
    )
}
