import axios from 'axios';
import axio from 'axios';

import { CourseSearchResultList } from '../WebServices/Modal';
export function Get_Course() {
	return axio.get('https://lx.festo.com/SearchService/api/search/learning-paths/public')
		.then(function (response) {
			var response_data = response.data;
			return response_data;
		})
		.catch(function (error) {
			console.log(error);
		});
}

export function Get_FilterCourses(term,page,size,sortOrder) {
	return axios
		.get(`https://lx.festo.com/SearchService/api/search/learning-paths/public?term=${term}&page=${page}&size=${size}&sortOrder=${sortOrder}`)
		.then((res) => {return res.data})
		.catch((e) => {});
}
