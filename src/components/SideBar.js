import { SideBarContext } from "../context/SideBarContext"
import { useContext } from "react"
import { Link, useLocation } from "react-router-dom"

export default function SideBar() {
    const {toggleSideBar, watchPageToggleSideBar} = useContext(SideBarContext)
    const location = useLocation()


    if(!toggleSideBar) return null
    if(!watchPageToggleSideBar && location.pathname==="/watch") return null

    
    return (

        <div className="p-5 shadow-lg w-48">
           <ul className="px-2">
            <Link to="/"><li>Home</li></Link>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>
        <h1 className="font-bold pt-5 px-2">Subscriptions</h1>
        <ul className="px-2">
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className="font-bold pt-5 px-2">Watch Later</h1>
        <ul className="px-2">
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
    </div>
    )
}