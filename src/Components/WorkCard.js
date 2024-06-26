import React from "react"
import { NavLink } from "react-router-dom";
import pro1 from "../assets/bank.png";
import "./workStyles.css"

const WorkCard=(props)=>{
    return (
        <div className="project-card">
                    <img src={props.imgsrc} alt="image" />
                    <h2 className="project-title">{props.title}</h2>
                    <div className="pro-details">
                        <p>{props.text}</p>
                        <div className="pro-btns">
                            <NavLink to={props.view} className="btn">view</NavLink>
                            
                            <NavLink to={props.source} className="btn">Source</NavLink>
                        </div>
                    </div>

                </div>
    )
}
export default WorkCard;