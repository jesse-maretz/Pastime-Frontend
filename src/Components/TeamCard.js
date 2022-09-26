import React, { useState } from "react";

import { Link } from "react-router-dom";

import LiveTeam from "../pages/LiveTeam";
import "../style/App.css"

const TeamCard = (props) => {

    const handleClick = (e) => {
        console.log(e.target)
    }
    const handleHover = () => {
        console.log('Hovering...')
    }

    const handleLeave = () => {
        console.log('Leaving...')
    }

    return (
        <Link
        element={<LiveTeam />}
        path={`/teams/${props.key}`}
        className="route team-card">

            <div
            key={props.team.TeamID}
            onClick={handleClick}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}>
                <img className="team-logo"
                src={props.team.WikipediaLogoUrl} alt="Logo Not Found" />
                <h3 id="team-name">{props.team.City} {props.team.Name}</h3>
            </div>
            
        </Link>
    )
}
export default TeamCard