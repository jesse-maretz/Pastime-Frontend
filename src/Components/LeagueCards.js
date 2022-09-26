import React, { useState, useEffect } from "react";

import axios from "axios";

import TeamCard from "./TeamCard";
import "../style/App.css"

const LeagueCards = () => {
    const [allTeams, setAllTeams] = useState([])

    const getAllTeams = () => {
        axios.get('https://api.sportsdata.io/v3/mlb/scores/json/teams?key=47523e6bcc8f4041be7c999dc613d23b')
        .then((res)=>{
            console.log(res.data)
            setAllTeams(res.data)
        })
    }

    useEffect(()=>{
        getAllTeams()
    },[])

    return(
    <>
    <div className="container all-teams">
            {allTeams.map((team)=>{
                return (
                        <TeamCard
                        key={team.TeamID}
                        team={team}
                        />
                )
            })}
    </div>
    </>
    )
}

export default LeagueCards