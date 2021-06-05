import {useState} from "react"
import {edittask} from "../Actions"
import {useDispatch} from "react-redux"

function Task ({task}){
    const [show, setShow] = useState(false);
    const handleShow = () =>{setShow(true)}
    const handleClose = () => {setShow(false)};
    const dispatch = useDispatch();

    const [newDescription, setNewDescription] = useState(task.description)
    const handleEdit = () => {
        dispatch(edittask(task.id, newDescription));
        handleClose();
    };
    return(
        <>
        <div id="task">
        <hr></hr>
        <div id="three">
            <p>{task.description}</p>
            <button className="btn" id="edit" onClick={handleShow}>Edit</button>
        </div>
        <hr></hr>
        </div>
        { show ? 
        <div id="modal-bg">
            <div id="modal">
                <h1>Edit task</h1>
                <hr id="modalhr"></hr>
                <div id="form">
                    <input onChange={(e) => setNewDescription(e.target.value)}></input>
                    <button className="add" onClick={handleEdit}>Save changes</button>
                </div>
            </div>
        </div> 
        :null }
        </>
    )
}

export default Task