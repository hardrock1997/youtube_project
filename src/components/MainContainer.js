import ButtonsList from "./ButtonsList"
import VideoContainer from "./VideoContainer"
import ApiResultsProvider from "../context/ApiResultsProvider"
import WatchPage from "./WatchPage"
export default function MainContainer() {
    return <div className="col-span-11">
        <ApiResultsProvider>
        <ButtonsList/>
        <VideoContainer/>
        <WatchPage/>
        </ApiResultsProvider>
    </div>
}