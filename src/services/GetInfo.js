import axios from 'axios';
export function getCoursesService() {
	return axios.get('https://lx.festo.com/SearchService/api/search/learning-paths/public');
}

export function getFilterCoursesService(term, page, size, sortOrder) {
	return axios.get(
		`https://lx.festo.com/SearchService/api/search/learning-paths/public?term=${term}&page=${page}&size=${size}&sortOrder=${sortOrder}`
	);
}
