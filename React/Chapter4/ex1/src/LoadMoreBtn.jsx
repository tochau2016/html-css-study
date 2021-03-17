import React, { useState } from 'react'
import Main from './Main'

function LoadMoreBtn(props) {
    const groupListMore = [

        {
            name: "Group D",
            description: "Des D",
            members: ["A", "B", "C"],
        },
        {
            name: "Group E",
            description: "Des E",
            members: ["A", "B", "C"],
        },
        {
            name: "Group F",
            description: "Des F",
            members: ["A", "B", "C"],
        },
        {
            name: "Group F",
            description: "Des F ",
            members: ["A", "B", "C"],
        },
    ]
    const [isShowMoreItem, setIsShowMoreItem] = useState(groupListMore);
    console.log("🚀 ~ file: LoadMoreBtn.jsx ~ line 29 ~ LoadMoreBtn ~ isShowMoreItem", isShowMoreItem)
    return (
        <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-primary"
                onClick={() => { 
                    
                }}
            >Load More</button>
        </div>
    )
}
export default LoadMoreBtn