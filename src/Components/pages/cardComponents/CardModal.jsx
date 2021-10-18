import React from 'react';
import CourseDetails from './CourseDetails';
export default function CardModal({ show, props, toggleHandler }) {
	return (
		<div>
			<div class={`modal modal-responsive ${show ? 'd-block' : 'd-none'}`} id="myModal">
				<div class="modal-dialog m-dialog">
					<div class="modal-content">
						<div class="modal-header m-header">
							<h4 class="modal-title">{props.name}</h4>
							<button type="button" class="close" onClick={(e) => toggleHandler(e)}>
								&times;
							</button>
						</div>
						<div class="modal-body m-body">
							<CourseDetails course={props} />
							<button
								type="button"
								class="btn btn-danger mt-2 float-right"
								onClick={(e) => toggleHandler(e)}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
