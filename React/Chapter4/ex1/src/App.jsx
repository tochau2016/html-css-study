import React, {useState} from 'react'

import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'

function Home () {
    const [isShowSidebar, setIsShowSidebar] = useState(false);
    return (
        <div>
            <Header
            setIsShowSidebar={setIsShowSidebar}
            isShowSidebar={isShowSidebar}
            />
            <div style={{ display: 'flex' }}>
                <Sidebar isShowSidebar={isShowSidebar}/>
                <Main isShowSidebar={isShowSidebar}/>
            </div>
            
        </div>
    )
};
export default Home