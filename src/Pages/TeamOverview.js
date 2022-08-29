import { useState, useEffect } from "react"
import Player from "../Components/Player"
import "../Style/App.css"


const axios = require('axios')


const TeamOverview = () => {
    const [roster, setRoster] = useState([])
    const [showPlayers, setShowPlayers] = useState(false)



/* ========================================== */
    /*  -- GET Full Yankees Roster -- */
/* ========================================== */
    const getFullRoster = () => {
        axios.get(`https://api.sportsdata.io/v3/mlb/scores/json/Players/BOS?key=47523e6bcc8f4041be7c999dc613d23b`)
        .then((res)=>{
            console.log(res.data)
            setRoster(res.data)
        })
    }

/* ========================================== */
    /* -- Show 25-Man Active Roster -- */
/* ========================================== */

    const showActive = () => {
        // for (let i = 0; i < 220; i++) {
        //     if (roster[i].Status == 'Active') {
        //         acpush(roster[i])
        //     }
        // }
    setShowPlayers(true)
    }

/* ========================================== */
    /* -- Pre-load & sort roster data -- */
/* ========================================== */
    useEffect(() => {
        getFullRoster()
    }, [])





    return (
        <div>
            <h2>Team Overview</h2>


        {/* --- GET Request Buttons --- */}
            <div className="btns">
                <button onClick={showActive}>Active Roster</button>
            </div>
        {/* --------------------------- */}
        

        {/* --- Conditional Rendering; 40-Man Roster --- */}
            {
                showPlayers ?
                <div className="active-roster">
                    {roster.map((player)=>{
                        return (
                            <Player key={player.PlayerID} player={player} />
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