import React from "react"
import { NavLink } from "react-router-dom";
import pro1 from "../assets/bank.png";
import Workcard from "./WorkCard"
import WorkCardData from "./WorkCardData"
import "./workStyles.css"
const Work=()=>{
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {WorkCardData.map((val,ind)=>{
                    return(
                        <Workcard key={ind} imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                        source={val.source}/>
                    )
                })}
            </div>
        </div>
    )
}
export default Work;