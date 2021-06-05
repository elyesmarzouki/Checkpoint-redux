import { useState } from "react"
import {useSelector} from "react-redux"
import Task from "./Task"

function ListTask(){
    const tasks = useSelector(state => state.tasksReducer.tasks)
    const [status,setStatus] = useState("all")
    return(
        <div id="two">
            <div id="filter">
                <div><button id="isdone" onClick={()=>{setStatus("done")}}>Show tasks who are done</button></div>
                <div><button id="isnotdone" onClick={()=>{setStatus("not done")}}>Show tasks who are not done</button></div>
                <div><button id="all" onClick={()=>{setStatus("all")}}>All the tasks</button></div>
            </div>
            <div id="thelist">
            {status == "done" ? 
            tasks.filter((element) => element.isDone == true)
            .map((element) => <Task task={element}/>)
            : status == "not done"? 
            tasks.filter((element) => element.isDone == false)
            .map((element) => <Task task={element}/>)
            :
            tasks.map((element) => <Task task={element}/>)}
            </div>
        </div>
    )
}

export default ListTask