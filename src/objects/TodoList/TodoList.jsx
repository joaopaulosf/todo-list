import React from "react";
import "./styles.css"
import { TitlePage } from "../TitlePage/TitlePage";
import { AddTask } from "../../components/AddTask/AddTask";
import { TaskList } from "../TaskList/TaskList";

export const TodoList = () => {
    return (
        <div className="todo-list">
            <TitlePage />
            <AddTask />
            <TaskList />
        </div>
    )
}