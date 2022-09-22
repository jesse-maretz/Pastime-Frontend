import { useState, useEffect } from "react"
import Roster from "../components/Roster"

const axios = require('axios')

const TeamHome = () => {

/* ======================================= */
    /*  -- State Management -- */
/* ======================================= */
    const [players, setPlayers] = useState([])

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
    /* -- Pre-Load Full Roster (227 Ps) -- */
/* ========================================== */
    useEffect(() => {
        getFullRoster()
    },[])


    return (
        <div>
            <h1>Team Home Page</h1>
            <Roster players={players} />
        </div>
    )
}

export default TeamHome