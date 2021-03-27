import React, { useState } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';
function Main() {
    const [state, setState] = useState({
        current: 'mail',
        visible: false
    })
    const showDrawer = () => {
        setState({
            visible: true,
        });
    };
    const onClose = () => {
        setState({
            visible: false,
        });
    };
    return (
        <nav className="menuBar">
            <div className="logo">
                <a href="">logo</a>
            </div>
            <div className="menuCon">
                <div className="leftMenu">
                    <LeftMenu />
                </div>
                <div className="rightMenu">
                    <RightMenu />
                </div>
                <Button className="barsMenu" type="primary" onClick={showDrawer}>
                    <span className="barsBtn"></span>
                </Button>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    closable={true}
                    onClose={onClose}
                    visible={state.visible}
                >
                    <LeftMenu />
                    <RightMenu />
                </Drawer>
            </div>
        </nav>
    );
}
export default Main;