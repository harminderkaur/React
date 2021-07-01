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
        console.log("ADD reducer", action)
        return {
            ...state,
            notes:[...state.notes, {...action.payload, id:state.notes.length + 1}],
            loading:false,
            error: null
        };
    case NOTES_TYPES.UPDATE_NOTE:
       console.log ("UPDATE reducer", action)
       return {
            ...state,
            notes: state.notes.map(item => {
               return item.id === action.payload.id ?  {...action.payload} : {...item}
            }),
            loading:false,
            error:null
        };
    case NOTES_TYPES.DELETE_NOTE:
        console.log("Delete reducer", action)
        return {
            ...state,
            notes: state.notes.filter(item => {
                return item.id !== action.payload.id
            }),
            loading:false,
            error:null
        }

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