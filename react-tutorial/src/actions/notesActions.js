import { NOTES_TYPES } from "../actionTypes";

const addNote = data => dispatch =>{
    console.log("add action", data)
    dispatch({
        type:NOTES_TYPES.ADD_NOTE,
        payload:data
    })
}

const notesActions = {
    addNote
};

export default notesActions;