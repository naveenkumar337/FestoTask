import React from 'react';
import { Pagination_records } from './PageNation';
export default function PageNationPage({ props,pageIndex,pageSize }) {
	var _pages = Pagination_records(props.TotalCount, props.currentPage,props.pageSize);
	return (
		<>
			<div 
				className={`d-flex table-pagination border-top w-100 justify-content-between ${_pages.pages.length > 0 ? '' : 'd-none'}`}
			>
				<div className="ml-5 mt-2 justify-content-start">
					<label>{`Showing ${_pages.startIndex + 1} to ${_pages.endIndex + 1} out of ${
						_pages.totalRecords
					} records`}</label>
				</div>
				<div className=" d-flex mt-2 float-end">
          <div className="page-size mr-2">
            <select name="" id="" className="form-control" onChange={e=>pageSize(e)}>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
					<ul className="pagination justify-content-end">
						<li className={`page-item ${_pages.currentPage === 1 ? 'disabled' : ''}`}>
							<a
								className="page-link"
								tabIndex="-1"
								onClick={(e) => pageIndex(_pages.currentPage - 1)}
							>
								Prev
							</a>
						</li>
						{_pages.pages.map((i) => (
							<li key={i} className={`page-item ${i === _pages.currentPage ? `active` : ''}`}>
								<a className="page-link" onClick={(e) => pageIndex(+e.target.text)}>
									{i}
								</a>
							</li>
						))}

						<li className={`page-item ${_pages.currentPage === _pages.totalPages ? 'disabled' : ''}`}>
							<a className="page-link" onClick={(e) => pageIndex(_pages.currentPage + 1)}>
								Next
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}