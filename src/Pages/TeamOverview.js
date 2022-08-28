import { useState } from "react"
import "../Style/App.css"
const axios = require('axios')


const TeamOverview = () => {
    const [teams, setTeams] = useState([])
    const [roster, setRoster] = useState([])
    const [active, setActive] = useState([])
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
            console.log(res.data)
            const activePlayers = []
            for (let i = 0; i < 220; i++) {
                if (res.data[i].Status == 'Active') {
                    activePlayers.push(res.data[i])
                }
            }
            console.log(activePlayers)
            setActive(activePlayers)
        })
        setShowPlayers(true)
    }
/* ========================================== */


    return (
        <div>
            <h2>Team Overview</h2>


        {/* --- GET Request Buttons --- */}
            <div className="btns">
                <button onClick={getActiveRoster}>Get Yanks 40 Man Active Roster</button>
                <button onClick={getTeams}>Get All 30 MLB Teams</button>
            </div>
        {/* --------------------------- */}
        

        {/* --- Conditional Rendering; 40-Man Roster --- */}
            {
                active ?
                <div className="active-roster">
                    {active.map((player)=>{
                        return (
                            <div
                            key={player.PlayerID}
                            className="player">
                                <h2>{`${player.FirstName}` + ' ' + `${player.LastName}`}</h2>
                                <img src={player.PhotoUrl} alt="No pic" />
                                <p>{player.Jersey}</p>
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