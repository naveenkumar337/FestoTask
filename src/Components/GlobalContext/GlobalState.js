import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
const InitialState = {
	courses: {}
};

export const GlobalContext = createContext(InitialState);
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, InitialState);
	function getAllCourses(data) {
		dispatch({
			type: 'GetInfo',
			payload: data
		});
	}
	function getCourse(id) {
		return state.courses ? state.courses.publicLearningPathResults.find((e) => e.id === id) : null;
	}
	return (
		<GlobalContext.Provider
			value={{
				courses: state.courses,
				getAllCourses,
				getCourse
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
