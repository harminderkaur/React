import { NOTES_TYPES } from "../actionTypes";

const initialState = {
    loading:true,
    notes:[],
    error: null
}


const noteReducer = (state = initialState, action) =>  {
 // eslint-disable-next-line default-case
 switch(action.type){
    case NOTES_TYPES.ADD_NOTE:
        console.log("reducer", action)
        return {
            ...state,
            notes:[...state.notes, {...action.payload, id:state.notes.length + 1}],
            loading:false,
            error: null
        };
    case NOTES_TYPES.NOTE_ERROR:
        return {
            ...state,
            notes: [],
            error: action.payload,
            loading: false
        };
    
    default:
        return state
 }

}

export default noteReducer;