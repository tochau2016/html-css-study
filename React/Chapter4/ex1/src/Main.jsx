import GroupCard from "./GroupCard"
import React, { useState } from 'react'
function Main(props) {
    const groupList = [
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
        // {
        //     name: "Group F",
        //     description: "Des F ",
        //     members: ["A", "B", "C"],
        // },

    ]
    const [isShowMoreItem, setIsShowMoreItem] = useState([{
        name: "Group A",
        description: "Des A",
        members: ["ABC", "B", "C", "D", "E"],
    },
    {
        name: "Group B",
        description: "Des B",
        members: ["A", "B", "C", "F"],
    },
    {
        name: "Group C",
        description: "Des C",
        members: ["A", "B"],
    },]);



    function renderGroupList() {
        return isShowMoreItem.map((item, i) => {
            return <GroupCard key={i} name={item.name} description={item.description} members={item.members} />


        });
    }
    function loadMore() {
        setIsShowMoreItem(isShowMoreItem.concat(groupList))

        console.log("🚀 ~ file: Main.jsx ~ line 49 ~ loadMore ~ isShowMoreItem", isShowMoreItem)

    }
    return (
        <div style={{ width: props.isShowSidebar ? "100%-300px" : "100%", height: "1000px", backgroundColor: "white" }}>
            <div className="main-container p-3">
                <div className="row">
                    {renderGroupList()}
                </div>
                <button className="btn btn-primary"
                    onClick={() => loadMore()}
                >Load More</button>
            </div>
        </div>
    );
}
export default Main;