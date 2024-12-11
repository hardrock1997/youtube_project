import { useContext } from "react"
import { ApiContext } from "../context/ApiResultsProvider"

export default function Button({title, categoryId}) {
    const {setCategoryId} = useContext(ApiContext)
    function handleCategoryId() {
        setCategoryId(categoryId)
    }
    return (
        <div>
            <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg inline-block min-w-[250px] text-center" onClick={handleCategoryId}>{title}</button>
        </div>
    )
}