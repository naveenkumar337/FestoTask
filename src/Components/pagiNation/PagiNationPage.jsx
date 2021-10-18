import React from 'react';
import { PaginatinValuesGet } from './PagiNationFunctionality';
export default function PageNationPage({ props, pageIndex, pageSize }) {
	var pageValues = PaginatinValuesGet(props.recordsCount, props.currentPage, props.pageSize);
	return (
		<>
			<div
				className={`d-flex table-pagination border-top w-100 justify-content-between ${
					pageValues.pages.length > 0 ? '' : 'd-none'
				}`}
			>
				<div className="ml-5 mt-2 justify-content-start">
					<label>{`Showing ${pageValues.startIndex + 1} to ${pageValues.endIndex + 1} out of ${
						pageValues.totalRecords
					} records`}</label>
				</div>
				<div className=" d-flex mt-2 float-end">
					<div className="page-size mr-2">
						<select name="" id="" className="form-control" onChange={(e) => pageSize(e)}>
							<option value="20">20</option>
							<option value="50">50</option>
							<option value="100">100</option>
						</select>
					</div>
					<ul className="pagination justify-content-end">
						<li className={`page-item ${pageValues.currentPage === 1 ? 'disabled' : ''}`}>
							<a
								className="page-link"
								tabIndex="-1"
								onClick={(e) => pageIndex(pageValues.currentPage - 1)}
							>
								Prev
							</a>
						</li>
						{pageValues.pages.map((i) => (
							<li key={i} className={`page-item ${i === pageValues.currentPage ? `active` : ''}`}>
								<a className="page-link" onClick={(e) => pageIndex(+e.target.text)}>
									{i}
								</a>
							</li>
						))}

						<li
							className={`page-item ${
								pageValues.currentPage === pageValues.totalPages ? 'disabled' : ''
							}`}
						>
							<a className="page-link" onClick={(e) => pageIndex(pageValues.currentPage + 1)}>
								Next
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
