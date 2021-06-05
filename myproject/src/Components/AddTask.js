import { useState } from "react"
import {addtask} from "../Actions"
import {useDispatch} from "react-redux"

function AddTask(){
    const [newTask,setNewTask] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = () =>{
        dispatch(addtask({newTask: newTask}))
    }
    return(
            <div className="form">
                <input type="text"placeholder="Add a new task..." onChange={(e)=>setNewTask(e.target.value)}/>
                <button className="add" onClick={handleSubmit}>Add</button>
            </div>
    )
}

export default AddTask