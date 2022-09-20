import { useState, useEffect } from "react"
import "../style/App.css"
import Majors from "./Majors"
import Minors from "./Minors"


const Roster = (props) => {

/* ======================================= */
    /*  -- State Management -- */
/* ======================================= */
    const [players, setPlayers] = useState([])
    const [showPlayers, setShowPlayers] = useState(false)

/* ========================================== */
    /*  -- Different Roster Views -- */
/* ========================================== */
    const handleRosterExpand = () => {
        console.log("Expanded")
    }

    const handleMajors = () => {
        console.log("Major leaguers")
    }

    const handleMinors = () => {
        console.log("Minor leaguers")
    }


/* ========================================== */
    /* -- Filter 25-Man Active Roster -- */
/* ========================================== */
    const showActive = () => {
        setShowPlayers(true)
    }


    useEffect(()=>{
        console.log(props.players)
    })


    return (
        <div>

            <div
            className="roster container vis-aid">

            </div>


            <h2>Team Roster</h2>
            <button onClick={handleRosterExpand}>Expand Roster</button>
            <button onClick={handleMajors}>Filter MLB</button>
            <button onClick={handleMinors}>Filter MiLB</button>


            {
                showPlayers ?
                <div className="active-roster">
                    {players.map((player)=>{
                        return (
                            <Majors key={player.PlayerID} player={player} />
                        )
                    })}
                </div>
                : <div><h1>Welcome to the home of the NYY!</h1></div>
            }

            {
                
            }

        </div>
    )
}

export default Roster;