import { useState } from "react"
const axios = require('axios')

const TeamOverview = () => {
    const [teams, setTeams] = useState([])
    const [roster, setRoster] = useState([])
    const [showPlayers, setShowPlayers] = useState(false)


/* ========================================== */
    /*  -- GET Active MLB Teams -- */
/* ========================================== */
    const getTeams = () => {
        axios.get(`https://api.sportsdata.io/v3/mlb/scores/json/teams?key=47523e6bcc8f4041be7c999dc613d23b`)
        .then((res)=>{
            console.log(res)
        })
    }
/* ========================================== */

/* ========================================== */
    /*  -- GET Single Team -- */
/* ========================================== */
const getTeam = () => {
    axios.get(`https://api.sportsdata.io/v3/mlb/scores/json/teams?key=47523e6bcc8f4041be7c999dc613d23b`)
    .then((res)=>{
        console.log(res)
    })
}
/* ========================================== */

/* ========================================== */
    /*  -- GET 40-Man Active Roster -- */
/* ========================================== */
    const getActiveRoster = () => {
        axios.get(`https://api.sportsdata.io/v3/mlb/scores/json/Players/NYY?key=47523e6bcc8f4041be7c999dc613d23b`)
        .then((res)=>{
            console.log(res)
        })
        setRoster()
        setShowPlayers(true)
    }
/* ========================================== */


    return (
        <div>
            <h2>Team Overview</h2>


        {/* --- GET Request Buttons --- */}
            <div className="btns">
                <button onClick={getActiveRoster}>Get 40 Man Active Roster</button>
                <button onClick={getTeams}>Get All 30 MLB Teams</button>
            </div>
        {/* --------------------------- */}
        

        {/* --- Conditional Rendering; 40-Man Roster --- */}
            {
                roster ?
                <div className="active-roster">
                    {roster.map((player)=>{
                        return (
                            <div
                            key={player.id}
                            className="player">
                                <h2>{player.name}</h2>
                            </div>
                        )
                    })}
                </div>
                : null
            }
        {/* -------------------------------------------- */}


        </div>
    )
}

export default TeamOverview