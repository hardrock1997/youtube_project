import Button from "./Button"
import { useContext } from "react"
import { ApiContext } from "../context/ApiResultsProvider"
import { useState } from "react"

export default function ButtonsList() {

  const {videoCategories} = useContext(ApiContext)

  const [visibleRange, setVisibleRange] = useState([0, 5]); // Show buttons from index 0 to 5

  // Show the next set of buttons (5 more items)
  const showNextSet = () => {
    setVisibleRange((prevRange) => {
      const newStart = prevRange[1];
      const newEnd = newStart + 5;
      return [newStart, newEnd];
    });
  };

  const showPreviousSet = () => {
    setVisibleRange((prevRange) => {
      const newStart = Math.max(prevRange[0] - 5, 0); // Prevent going below 0
      const newEnd = newStart + 5;
      return [newStart, newEnd];
    });
  };

  const visibleCategories = videoCategories?.slice(visibleRange[0], visibleRange[1]);

    return <div className="flex flex-wrap items-center">
        
            {visibleRange[0] > 0 && (
            <button
                onClick={showPreviousSet}
                className="px-5 py-2 m-2 bg-gray-500 text-white rounded-full"
            >
                &lt;
            </button>
            )}


    {visibleCategories?.map((category) => (
        <Button
          key={category.id}
          title={category.snippet.title}
          categoryId={category.id}
        />
      ))}

      {visibleCategories?.length > 0 && visibleCategories.length === 5 && (
        <button
          onClick={showNextSet}
          className="px-5 py-2 m-2 bg-blue-500 text-white rounded-full"
        >
          &gt;
        </button>
      )}



    
    </div>
}