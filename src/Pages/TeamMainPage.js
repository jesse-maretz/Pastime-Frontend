import { useState, useEffect } from "react"
import MajorLeaguer from "../Components/MajorLeaguer"
import "../Style/App.css"

const axios = require('axios')

const TeamMainPage = () => {

/* ======================================= */
    /*  -- State Management -- */
/* ======================================= */
    const [players, setPlayers] = useState([])
    const [showPlayers, setShowPlayers] = useState(false)

/* ========================================== */
    /*  -- Sort Roster into States -- */
/* ========================================== */


/* ========================================== */
    /*  -- GET Full Yankees Roster -- */
/* ========================================== */
    const getFullRoster = () => {
        axios.get(`https://api.sportsdata.io/v3/mlb/scores/json/Players/NYY?key=47523e6bcc8f4041be7c999dc613d23b`)
        .then((res)=>{
            setPlayers(res.data)
        })
    }

/* ========================================== */
    /* -- Show 25-Man Active Roster -- */
/* ========================================== */
    const showActive = () => {
        setShowPlayers(true)
    }

/* ========================================== */
    /* -- useEffect(); Pre-Load Full Roster -- */
/* ========================================== */
    useEffect(() => {
        getFullRoster()
    },[])


    return (
        <div>
            <h2>Team Overview</h2>


        {/* --- GET Request Buttons --- */}
            <div className="btns">
                <button onClick={showActive}>Active Roster</button>
                <button onClick={showInjured}>Injured List</button>
                <button onClick={showMinors}>Minor Leaguers</button>
            </div>
        {/* --------------------------- */}
        

        {/* --- Conditional Rendering; Active Roster (25-man) --- */}
            {
                showPlayers ?
                <div className="active-roster">
                    {players.map((player)=>{
                        return (
                            <MajorLeaguer key={player.PlayerID} player={player} />
                        )
                    })}
                </div>
                : <div><h1>Welcome to the home of the NYY!</h1></div>
            }

            {
                showPlayers 
            }
        {/* -------------------------------------------- */}
        </div>
    )
}

export default TeamMainPage;