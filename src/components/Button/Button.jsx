import React from "react";
import "./styles.css"

export const Button = (props) => {
    return (
        <button className="new-button" type="submit">{props.content}<img src={props.src} alt={props.alt} /></button>
    )
};