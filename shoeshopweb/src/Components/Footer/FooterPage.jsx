import React from 'react'
import { Layout } from 'antd';
import './Footer.css'

function FooterPage() {
    const { Footer } = Layout;
    return (
        <div>
            {/* style={{ textAlign: 'center', flexShrink: 0, }} */}
            <Footer className="footer">Ant Design ©2018 Created by Ant UED</Footer>
        </div>
    )
}

export default FooterPage
