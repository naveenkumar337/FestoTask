import React, { useContext, useEffect, useState } from 'react';
import CourseCard from './cardComponents/CourseCard';
import { GlobalContext } from '../globalContext/GlobalState';
import PageNationPage from '../pagiNation/PagiNationPage';
import FilterSection from './cardComponents/FilterOptions';
import { getCoursesService, getFilterCoursesService } from '../../services/GetInfo';
import CardModal from './cardComponents/CardModal';
import '../../card.css';
import * as _ from 'lodash';
export default function Index() {
	const context = useContext(GlobalContext);
	console.log(context.courses);
	const totalCount = context.courses ? context.courses.count : 0;

	const initialState = {
		recordsCount: totalCount,
		currentPage: 1,
		pageSize: 20,
		SortOrder: 1,
		isfilterEnabled: false,
		isdetailsPageRequired: false,
		termMessage: '',
		detailsId: 0
	};

	const [filterState, setfilterState] = useState(initialState);

	const [isloading, setIsloading] = useState(false);

	useEffect(() => {
		setIsloading({
			isloading: true
		});
		if (!filterState.isfilterEnabled) {
			getCoursesService()
				.then((e) => {
					context.getAllCourses(e.data);
					setIsloading({
						isloading: false
					});
				})
				.catch((e) => {
					setIsloading({
						isloading: false
					});
				});
		} else {
			getFilterCoursesService(
				filterState.termMessage,
				filterState.currentPage,
				filterState.pageSize,
				filterState.SortOrder
			)
				.then((e) => {
					context.getCourses(e.data);
					setIsloading({
						isloading: false
					});
				})
				.catch((e) => {
					setIsloading({
						isloading: false
					});
				});
		}
	}, [filterState]);

	const ModalHandling = (e, courseId = 0) => {
		e.preventDefault();
		setfilterState({
			...filterState,
			isdetailsPageRequired: !filterState.isdetailsPageRequired,
			detailsId: courseId
		});
	};
	const pageSizeHandle = (e) => {
		setfilterState({
			...filterState,
			isfilterEnabled: true,
			pageSize: +e.target.value
		});
	};
	const pageNumberChange = (pageNumber) => {
		setfilterState({
			...filterState,
			isfilterEnabled: true,
			currentPage: +pageNumber
		});
	};
	const sortOrderHandler = (e) => {
		e.preventDefault();
		setfilterState({
			...filterState,
			isfilterEnabled: true,
			SortOrder: +e.target.value
		});
	};

	const termHandler = (e) => {
		e.preventDefault();
		_.debounce(function () {
			console.log(e.target.value);
			setfilterState({
				...filterState,
				termMessage: e.target.value
			});
		}, 1000)();
	};

	var courseRecords = context.courses.publicLearningPathResults;
	var singleCourse = filterState.detailsId > 0 ? courseRecords.find((e) => e.id === filterState.detailsId) : null;
	return (
		<>
			{filterState.isdetailsPageRequired && (
				<CardModal
					show={filterState.isdetailsPageRequired}
					props={singleCourse}
					toggleHandler={ModalHandling}
				/>
			)}

			<div className="container-fulid m-3">
				<FilterSection termHandler={termHandler} sortHandler={sortOrderHandler} />
				{courseRecords && courseRecords.length > 0 && (
					<div className="row d-flex justify-content-center">
						{courseRecords.map((data) => (
							<CourseCard course={data} toggleHandler={ModalHandling} />
						))}
						<PageNationPage
							props={{
								recordsCount: totalCount,
								currentPage: filterState.currentPage,
								pageSize: filterState.pageSize
							}}
							pageIndex={pageNumberChange}
							pageSize={pageSizeHandle}
						/>
					</div>
				)}
				{!courseRecords && isloading && <h2 className="text-center m-5">Loading....</h2>}
				{!isloading && courseRecords && courseRecords.length === 0 && (
					<h2 className="text-center m-5">No Data Found</h2>
				)}
			</div>
		</>
	);
}
