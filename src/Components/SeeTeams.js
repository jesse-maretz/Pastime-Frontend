import React, { useState } from "react";

import LeagueCards from "./LeagueCards";

import "../style/App.css"

const SeeTeams = () => {
    const [seen, setSeen] = useState(false)

    return (
    <>
        <div className="see-teams">
            {
                seen ?
                <LeagueCards />
                : null
            }
        </div>
    </>
    )
}

export default SeeTeams