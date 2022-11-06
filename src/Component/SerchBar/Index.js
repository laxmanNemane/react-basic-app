import React from 'react'
import "./style.css"
import Divider from "../Divider/Index"

const Index = () => {
    return (
        <div className="serch-bar">
            <div className="serch-icon"> 😃</div>
            <Divider />
            <div className="serch-input">
                <input type="text" />
            </div>
        </div>
    )
}

export default Index