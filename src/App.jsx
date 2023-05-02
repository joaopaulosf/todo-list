import React from 'react'
import {TaskProvider} from "./Context/TaskContext"
import ReactDOM from 'react-dom/client'
import "./styles/settings/colors.css"
import "./styles/generic/reset.css"
import "./styles/elements/base.css"
import { TodoList } from './objects/TodoList/TodoList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskProvider>
      <TodoList />
    </TaskProvider>
  </React.StrictMode>,
)
