import PropTypes from 'prop-types'

export class User {
	id=  PropTypes.number;
	firstName=  PropTypes.string;
	lastName=  PropTypes.string;
}

export class CourseImages {
	thumbnail=  PropTypes.string;
	overview=  PropTypes.string;
}

export class CourseSearchResult {
	id= PropTypes.number;
	name= PropTypes.string;
	description=  PropTypes.string;
	language=  PropTypes.string;
	creationDate=  PropTypes.string;
	modificationDate=  PropTypes.string;
	user= User;
	images= CourseImages;
}

export default class CourseSearchResultList {
	publicLearningPathResults=PropTypes.array(CourseSearchResult); // learning path = course
	count= PropTypes.number;
};



