import React, { useState, useEffect } from "react";

import axios from "axios";

// import getAllTeams from '../helpers/getAllTeams'

const AllTeams = () => {
    const [allTeams, setAllTeams] = useState([])
    const [american, setAmerican] = useState([])
    const [national, setNational] = useState([])


    const getAllTeams = () => {
        axios.get('https://api.sportsdata.io/v3/mlb/scores/json/TeamSeasonStats/2022?key=47523e6bcc8f4041be7c999dc613d23b')
        .then((res)=>{
            console.log(res.data)
            setAllTeams(res.data)
        })
    }

    const sortLeagues = () => {

    }


    useEffect(()=>{
        getAllTeams()
    },[])

    return(
    <>
        <div className="teams">
            <h1>All Teams</h1>

            <div
            className="container all-teams">
                {allTeams.map((team)=>{
                    return (
                        <div key={team.TeamID}>
                            <h3>{team.Name}</h3>
                            <p>( {team.Wins} - {team.Losses} )</p>
                        </div>
                    )
                })}
            </div>

        </div>
    </>
    )
}

export default AllTeams