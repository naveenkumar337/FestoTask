import React, { useContext, useEffect, useState } from 'react';
import CourseCard from '../Card/CourseCard';
import { GlobalContext } from '../GlobalContext/GlobalState';
import PageNationPage from '../PageNation/PageNationPage';
import FilterSection from './FilterSection';
import { Get_Course, Get_FilterCourses } from '../WebServices/GetInfo';
import CardModal from './CardModal';
import './card.css'
export default function Index() {

	const context = useContext(GlobalContext);
    const totalCount=context.Courses? context.Courses.count : 0;
    const initialState={
        TotalCount:totalCount ,
		currentPage: 1,
		pageSize: 20,
		SortOrder: 1,
		isfilterEnabled: false,
        isdetailsPageRequired:false,
		termMessage:'',
        detailsId:0,
    }
	var termText='';
    const ModalHandling=(e,id=0)=>{
        e.preventDefault();
        setState({
            ...state,
            isdetailsPageRequired:!state.isdetailsPageRequired,
            detailsId: id
        })
    }
	const [state, setState] = useState(initialState);
	useEffect(() => {
		if (!state.isfilterEnabled) {
			Get_Course().then((e) => context.getInfo(e));
		} else {
			Get_FilterCourses(state.termMessage, state.currentPage, state.pageSize, state.SortOrder).then((e) => context.getInfo(e));
		}
	}, [state]);

	const pageSizeHandle = (e) => {
		setState({
			...state,
			isfilterEnabled: true,
			pageSize: +e.target.value
		});
	};
	const pageNumberChange = (e) => {
		setState({
			...state,
			isfilterEnabled: true,
			currentPage: +e
		});
	};
	const sortingHandler = (e) => {
		e.preventDefault();
		setState({
			...state,
			isfilterEnabled: true,
			SortOrder: +e.target.value
		});
	};
	const termHandler = (e) => {
		console.log("working")
		e.preventDefault();
		setState({
			...state,
			termMessage:e.target.value
		})
	};

	var _resultSet = context.Courses.publicLearningPathResults;
	var CourseDetails=state.detailsId>0?_resultSet.find(e=>e.id===state.detailsId):null;
	return (
        <>
        { state.isdetailsPageRequired ?
        <CardModal show={state.isdetailsPageRequired} props={CourseDetails} toggleHandling={ModalHandling}/>
        :null
        }

		<div className="container-fulid m-3">
			<FilterSection termHandler={termHandler} sortHandler={sortingHandler} />
			{_resultSet ? (
				<div className="row d-flex justify-content-center">
					{_resultSet.map((data) => (
						<CourseCard props={data} toggleHandling={ModalHandling}/>
					))}
					<PageNationPage props={{TotalCount:totalCount,currentPage:state.currentPage,pageSize:state.pageSize}} pageIndex={pageNumberChange} pageSize={pageSizeHandle} />
				</div>
			) : (
				<p>No Data Found</p>
			)}
		</div>
        </>
	);
}
