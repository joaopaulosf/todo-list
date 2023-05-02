import React from "react";
import "./styles.css"
import { TaskItem } from "../../components/TaskItem/TaskItem";

export const TaskList = () => {
    return (
        <div className="task-list">
            <TaskItem />
        </div>
    )
};