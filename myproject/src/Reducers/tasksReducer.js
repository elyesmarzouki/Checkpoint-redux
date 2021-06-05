import { ADD_TASK } from "../constants/actionstypes"
import { EDIT_TASK } from "../constants/actionstypes"

const initialState = {
    tasks:[
        {
            id: Math.random(),
            description: "Préparer son dossier de candidature",
            isDone: true,
        },
        {
            id: Math.random(),
            description: "Présenter sa candidature",
            isDone: true,
        },
        {
            id: Math.random(),
            description: "Attendre la phase d'admission",
            isDone: false,
        },
        {
            id: Math.random(),
            description: "S'inscrire dans une université",
            isDone: false,
        },
    ]
}

function tasksReducer(state= initialState, action){
    const {type, payload} = action
    switch(type){
        case ADD_TASK: {
            return{
                tasks: [...state.tasks,
                {
                    id: Math.random(),
                    description: payload.newTask,
                    isDone: false,
                }]
            };
        };
        case EDIT_TASK:
            return {
                tasks: state.tasks.map((el) => el.id == payload.id ? { ...el, description: payload.newDescription } : el)
            };
        default:
            return state;
    }
}

export default tasksReducer