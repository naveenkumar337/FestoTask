import React from 'react';

export default function FilterSection({ termHandler, sortHandler }) {
	return (
		<div className="d-flex justify-content-center">
			<div className="form-inline">
				<div className="form-inline">
					<label className="col-form-label mr-1">Term:</label>
					<input type="text" className="form-control" onKeyUp={(e) => termHandler(e)} />
				</div>
				<div className="form-inline ml-2 ">
					<label htmlFor="" className="col-form-label mr-1">
						Sort:{' '}
					</label>
					<select className="form-control" onChange={(e) => sortHandler(e)}>
						<option value="1">MostRelevent</option>
						<option value="2">Popularity</option>
						<option value="3">MostRecent</option>
						<option value="4">Oldest</option>
					</select>
				</div>
			</div>
		</div>
	);
}
