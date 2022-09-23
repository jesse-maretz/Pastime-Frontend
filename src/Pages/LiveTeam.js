import React, { useState, useEffect } from "react"

import AllTeams from "../components/AllTeams"
import Roster from "../components/Roster"
import Standings from "../components/Standings"

const LiveTeam = () => {
    // const [roster, setRoster] = useState([])
    // const [standings, setStandings] = useState([])
    // const [sched, setSched] = useState()
    // const [news, setNews] = useState()

    return (
    <>
        <div className="page live-team">
            <AllTeams />
        </div>
    </>
    )
}

export default LiveTeam