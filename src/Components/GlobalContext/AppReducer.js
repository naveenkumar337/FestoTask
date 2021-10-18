import {Data} from '../../tempdata'

export default  (state,action)=>{ 
    console.log(state);
    switch (action.type) {
        case "GetInfo":
            return{
                ...state,
                Courses: action.payload
            }
            break;
        case "GetCardInfo":
            break;    
        default:
            return state;
            break;
    }
}