import React from "react";
import { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";
import todolist from "../../images/todolist.png"
import deleteCircle from "../../images/delete-circle.svg"
import { ButtonDell } from "../ButtonDell/ButtonDell";
import "./styles.css"

export const TaskItem =  () => {
    const {list, setList} = useContext(TaskContext);

    const clickItem = (index) => {
        const auxList = [...list];
        auxList[index].isComplited = !auxList[index].isComplited;
        setList(auxList);
    }

    return (
        <>
            {
                list.length < 1 ? <img className="todo-image" src={todolist}/>
                : 
                list.map((task, index)=>(
                    <div className={task.isComplited? "task-item -completed" : "task-item"} key={index}>
                        <span onClick={()=> clickItem(index)} className="task-content">{task.text}</span>
                        <ButtonDell task={task} src={deleteCircle} alt="delete-icon"/>
                    </div>
                ))
            }
            {
                
                list.length > 0 && <button className="delete-all" onClick={()=>setList([])}>Delete all</button>
            }
        </>
    )
};