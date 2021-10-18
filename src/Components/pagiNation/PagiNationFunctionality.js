export function PaginatinValuesGet(totalSize, currentPage, pageSize) {
	var totalRecords = totalSize;
	var totalPages = Math.ceil(totalRecords / pageSize);
	let startPage = 1,
		endPage = totalPages;
	let maxPages = 10;
	if (currentPage < 1) {
		currentPage = 1;
	} else if (currentPage > totalPages) {
		currentPage = totalPages;
	}
	if (totalPages <= maxPages) {
		startPage = 1;
		endPage = totalPages;
	} else {
		let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
		let maxPagesAfterCurrentpage = Math.ceil(maxPages / 2) - 1;
		if (currentPage <= maxPagesBeforeCurrentPage) {
			startPage = 1;
			endPage = maxPages;
		} else if (currentPage + maxPagesAfterCurrentpage >= totalPages) {
			startPage = totalPages - maxPages + 1;
			endPage = totalPages;
		} else {
			startPage = currentPage - maxPagesBeforeCurrentPage;
			endPage = currentPage + maxPagesAfterCurrentpage;
		}
	}
	let startIndex = (currentPage - 1) * pageSize;
	let endIndex = Math.min(startIndex + pageSize - 1, totalRecords - 1);
	let pages = Array.from(Array(endPage + 1 - startPage).keys()).map((i) => startPage + i);
	return {
		totalRecords,
		currentPage,
		pageSize: pageSize,
		totalPages,
		startPage,
		endPage,
		startIndex,
		endIndex,
		pages
	};
}
