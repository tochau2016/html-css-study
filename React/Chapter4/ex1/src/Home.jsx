import React, {useState} from 'react'

import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'

function Home () {
    const [isShowSidebar, setIsShowSidebar] = useState(true);
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