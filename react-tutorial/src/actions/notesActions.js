import { NOTES_TYPES } from "../actionTypes";

const addNote = data => dispatch =>{
    console.log("add action", data)
    dispatch({
        type:NOTES_TYPES.ADD_NOTE,
        payload:data
    })
}

const updateNote = data => dispatch => {
    console.log("update action", data)
    dispatch({
        type:NOTES_TYPES.UPDATE_NOTE,
        payload:data
    })
}

const deleteNote = data => dispatch =>{
    console.log("delete action", data)
    dispatch({
        type:NOTES_TYPES.DELETE_NOTE,
        payload:data
    })
}


const notesActions = {
    addNote,
    updateNote,
    deleteNote
};

export default notesActions;