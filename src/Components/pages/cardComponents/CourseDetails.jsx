import React from 'react';

export default function CourseDetails({ course }) {
	return course ? (
		<div className="container">
			<div className="body">
				<div className="row">
					<div className="col-md-2">Description</div>
					<div className="col">{course.description}</div>
				</div>
				<div className="row">
					<div className="col-md-2">Language</div>
					<div className="col">{course.language}</div>
				</div>
				<div className="row">
					<div className="col-md-2">CreatedDate</div>
					<div className="col">{course.creationDate}</div>
				</div>
				<div className="row">
					<div className="col-md-2">LastModified</div>
					<div className="col">{course.modificationDate}</div>
				</div>
				<div className="">
					<fieldset className="userFieldSet">
						<legend>User</legend>
						<div className="row">
							<div className="col-md-2">First Name</div>
							<div className="col">{course.user.firstName}</div>
						</div>
						<div className="row">
							<div className="col-md-2">Last Name</div>
							<div className="col">{course.user.lastName}</div>
						</div>
					</fieldset>
				</div>
				<div className="row">
					<div className="col-md-2">License</div>
					<div className="col">{course.licence}</div>
				</div>
				<div className="images">
					<div className="images-header">
						<strong>Images</strong>
					</div>
					<div>
						{course.images ? (
							<img
								src={course.images.thumbnail}
								className="img-thumbnail"
								alt="Not Found"
								style={{ height: '332px !important' }}
							></img>
						) : (
							<p>No Images</p>
						)}
					</div>
				</div>
			</div>
		</div>
	) : (
		''
	);
}
