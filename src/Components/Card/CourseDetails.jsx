import React,{useEffect,useContext, useState} from 'react'
import { useParams } from 'react-router';
import {GlobalContext} from '../GlobalContext/GlobalState'
import './card.css'
export default function CourseDetails({props}) { 
    const Course=props
    return (
        Course ?
        <div className="container">             
            {/* <div className="header card-details d-flex m-3 justify-content-center border-bottom">
                <p className=""><strong>{Course.name}</strong></p>
            </div> */}
            <div className="body">
                <div className="row">
                    <div className="col-md-2">Description</div>
                    <div className="col">{Course.description}</div>
                </div>
                <div className="row">
                    <div className="col-md-2">Language</div>
                    <div className="col">{Course.language}</div>
                </div>
                <div className="row">
                    <div className="col-md-2">CreatedDate</div>
                    <div className="col">{Course.creationDate}</div>
                </div>
                <div className="row">
                    <div className="col-md-2">LastModified</div>
                    <div className="col">{Course.modificationDate}</div>
                </div>
                <div className="">
                    <fieldset>
                        <legend>User</legend>
                            <div className="row">
                                <div className="col-md-2">First Name</div>
                                <div className="col">{Course.user.firstName}</div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">Last Name</div>
                                <div className="col">{Course.user.lastName}</div>
                            </div>
                    </fieldset>
                </div>
                <div className="row">
                    <div className="col-md-2">License</div>
                    <div className="col">{Course.licence}</div>
                </div>
                <div className="images">
                    <div className="images-header"><strong>Images</strong></div>
                    <div>
                        { Course.images?
                        <img src={Course.images.thumbnail} className="img-thumbnail" alt="Not Found" style={{height:"332px !important"}}></img>
                        : <p>No Images</p>
                        }
                    </div>
                </div>
            </div>
           
        </div> :""
    )
}
