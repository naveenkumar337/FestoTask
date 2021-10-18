import React from 'react'
import CardImage from './CardImage';
export default function CourseCard({props,toggleHandling}) {
    return (
        <>
            <div key={props.id} className="card m-3 border-1" style={{width:"15rem"}}>
                <div className="card-header d-felx border-bottom-0 p-0 text-center">
                   <CardImage props={props.images}/>
                </div>
                <div className="card-body p-2 border-bottom-0">
                    <b>{props.name}</b>
                </div>
                <div className="card-footer bg-white border-top-0 text-right">   
                    <button className="btn btn-link" onClick={(e)=>toggleHandling(e,props.id)}>See More...</button>
                </div>
            </div>
        </>
    )
}
