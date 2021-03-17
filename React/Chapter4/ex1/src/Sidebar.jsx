import { useState } from 'react';
function Sidebar(props) {
    const { isShowSidebar } = props;
    const [selectColor, setSelectColor] = useState("white");
    const colorList = ['red', 'blue', 'green', 'cyan', 'black']
    return (
        <>
            <div
                style={{
                    transition: "0.3s",
                    width: props.isShowSidebar ? "300px" : "0px",
                    height: "1000px",
                    backgroundColor: "yellow"
                }}>
                <div
                    style={{
                        backgroundColor: selectColor,
                        width: "100px",
                        height: "100px"
                    }}
                    className="mt-4 container"
                >
                </div>
                <div className="d-flex">
                    {colorList.map((item, i) => {
                        return <div
                            key={i}
                            style={{
                                backgroundColor: item,
                                width: "25px",
                                height: "25px",
                                cursor: "pointer"
                            }}
                            className="mt-4 container"
                            onClick={() => setSelectColor(item)}
                        >
                        </div>
                    })}
                </div>
            </div>


        </>
    );


}
export default Sidebar;