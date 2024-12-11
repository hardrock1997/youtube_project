import menu from "../assets/hamburger-menu.png"
import logo from "../assets/youtubeLogo.png"
import userIcon from "../assets/userIcon.png"
import Search from "./Search"
import { SideBarContext } from "../context/SideBarContext"
import { useContext } from "react"
 export default function Header() {
    const {toggleSideBar, setToggleSideBar, setWatchPageToggleSideBar, watchPageToggleSideBar} = useContext(SideBarContext)

    function handleToggleSideBar() {
        setToggleSideBar(!toggleSideBar)
        setWatchPageToggleSideBar(true)
    }
    return <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <section className="flex col-span-1">
            <img src={menu} alt="menu" className="h-8 cursor-pointer" onClick={handleToggleSideBar}/>
            <a href="/"><img src={logo} alt="logo"  className="h-8 mx-2 cursor-pointer"  /></a>
        </section> 
        <section className="col-span-10 text-center">
            <Search/>
        </section>
        <section className="col-span-1">
            <img src={userIcon} alt="userIcon" className="h-8"/>
        </section>
    </div>
}
