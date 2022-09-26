import React from "react"

import Roster from "../components/Roster"

const LiveTeam = (props) => {
    return (
    <>
        <div className="page live-team">
            <h2>LiveTeam</h2>
        </div>
        <Roster team={props.team}/>

    </>
    )
}

export default LiveTeam