import {createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
import {Data} from '../../tempdata'
import {Get_Course} from '../WebServices/GetInfo' 
const InitialState={
    Courses:{}
};

export const GlobalContext=createContext(InitialState);
export const GlobalProvider=({children})=>{ debugger;
const [state, dispatch] = useReducer(AppReducer, InitialState);
function getInfo(data){
    dispatch({
        type:"GetInfo",
        payload:data
    });    
}
function getCardInfo(id){
    dispatch({
        type:'GetCardInfo',
        payload:id
    })
}
function getCourse(id){
  console.log(state.Courses);
return state.Courses ? state.Courses.publicLearningPathResults.find(e=>e.id===id):null;
}
return (
    <GlobalContext.Provider
      value={{
        Courses: state.Courses,
        getInfo,
        getCardInfo,
        getCourse
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}