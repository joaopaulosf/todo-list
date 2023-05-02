import { createContext, useState, useEffect } from "react";

export const TaskContext =  createContext()

export const TaskProvider = ({children}) => {
    const storageList = localStorage.getItem("list");
    const [list, setList] = useState(storageList ? JSON.parse(storageList) : []);
    const [item, setItem] = useState("")

    useEffect(()=>{
        localStorage.setItem("list", JSON.stringify(list));
    },[list]);

    return (
        <TaskContext.Provider value={{list, setList, item, setItem}}>
            {children}
        </TaskContext.Provider>
    )
}