import React from "react";
import "./styles.css";
import clipboard from "../../images/clipboard.svg"

export const TitlePage = () => {
    return (
        <div className="title-page">
            <h1 className="title">Tasks</h1>
            <img className="title-image" src={clipboard} alt="clipboard" />
        </div>
        
    )
};