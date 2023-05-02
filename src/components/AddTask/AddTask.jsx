import React from "react";
import { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";
import { Button } from "../Button/Button";
import "./styles.css";


export const AddTask = () => {
    const {list, setList, item, setItem} = useContext(TaskContext)

    const addItem = (form) => {
        form.preventDefault();
        if(!item) {
            return;
        }
        setList([...list, {text: item, isCompleted: false}]);
        setItem("");
        document.getElementById("input-focus").focus()
    }

    return (
        <div className="new-task">
            <form onSubmit={addItem} className="task-form">
                <input
                    id="input-focus" 
                    className="input-text" 
                    type="text" 
                    value={item} 
                    placeholder="new task" 
                    onChange={(e)=>{setItem(e.target.value)}}/>
                <Button src={"./src/images/plus.svg"} alt="plus-symbol"/>
            </form>
        </div>
    )
};