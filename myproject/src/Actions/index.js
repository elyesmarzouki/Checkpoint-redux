import {ADD_TASK} from "../constants/actionstypes"
import {EDIT_TASK} from "../constants/actionstypes"

export function addtask(payload){
    return{
        type: ADD_TASK,
        payload: payload
    }
}
export function edittask(id,newDescription){
    return{
        type: EDIT_TASK,
        payload: {id, newDescription}
    }
}