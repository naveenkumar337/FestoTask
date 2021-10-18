import React from 'react';
import CardImage from './CardImage';
export default function CourseCard({ course, toggleHandler }) {
	return (
		<>
			<div key={course.id} className="card m-3 border-1" style={{ width: '15rem' }}>
				<div className="card-header c-header d-felx border-bottom-0 p-0 text-center">
					<CardImage props={course.images} />
				</div>
				<div className="card-body c-body p-2 border-bottom-0">
					<b>{course.name}</b>
				</div>
				<div className="card-footer bg-white border-top-0 text-right">
					<button className="btn btn-link" onClick={(e) => toggleHandler(e, course.id)}>
						See More...
					</button>
				</div>
			</div>
		</>
	);
}
