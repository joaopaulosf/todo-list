import React from "react";
import { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";
import "./styles.css";

export const ButtonDell = (props) => {
    const {list, setList} = useContext(TaskContext);

    const deleteItem = (taskName) => {
       setList(list.filter((task) => task !== taskName));
    }

    return (
        <button onClick={()=> deleteItem(props.task)} className="new-button" type="submit">{props.content}<img src={props.src} alt={props.alt} /></button>
    )
};