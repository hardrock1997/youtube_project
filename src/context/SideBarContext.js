import { createContext,useState } from "react";

export const SideBarContext = createContext();

export default function SideBarContextProvider({children}) {
    const [toggleSideBar, setToggleSideBar] = useState(true);
    const [watchPageToggleSideBar, setWatchPageToggleSideBar] = useState(true);

    const SideBarCtxObj = {
        toggleSideBar,
        setToggleSideBar,
        setWatchPageToggleSideBar,
        watchPageToggleSideBar
    }

    return (
        <SideBarContext.Provider value={SideBarCtxObj}>
            {children}
        </SideBarContext.Provider>
    )
}

