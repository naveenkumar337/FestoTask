import React from 'react'
import CourseDetails from './CourseDetails'
export default function CardModal( {show,props,toggleHandling}) {
    return (
        <div>
            <div class={`modal ${show?'d-block':'d-none'}`} id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">{props.name}</h4>
        <button type="button" class="close" data-dismiss="modal" onClick={(e)=>toggleHandling(e)}>&times;</button>
      </div>
      <div class="modal-body">
      <CourseDetails props={props}/>  
      <button type="button" class="btn btn-danger mt-2 float-right" data-dismiss="modal" onClick={(e)=>toggleHandling(e)}>Close</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
