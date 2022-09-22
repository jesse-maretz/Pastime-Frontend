import { useState, useEffect } from "react"
import "../style/App.css"
import FilterCard from "../components/FilterCard"
import Player from "./Player"


const Roster = (props) => {

/* ======================================= */
    /*  -- State Management -- */
/* ======================================= */
    const [roster, setRoster] = useState([])
    const [visible, setVisible] = useState(false)

/* ========================================== */
    /*  -- Different Roster Views -- */
/* ========================================== */
    const handleRosterExpand = () => {
        console.log("Expanded")
    }

    const handleShow = () => {
        console.log("Major leaguers")
    }

    const handleFarm = () => {
        console.log("Minor leaguers")
    }


/* ========================================== */
    /* -- Filter Active MLB Roster -- */
/* ========================================== */
    const showactive = () => {
        setVisible(true)
    }


    useEffect(()=>{
        console.log(props.players)
    })


    return (
        <div>

            <div
            className="roster container vis-aid">

                <h2>Team Roster</h2>
                <button onClick={handleRosterExpand}>Expand Roster</button>


                <div className="league-filters">
                    <div className="league filter-the-show">
                        <FilterCard league={"The Show"} />
                        <button onClick={handleShow}>Filter MLB</button>
                    </div>

                    <div className="league filter-the-farm">
                        <FilterCard league={"The Farm"} />
                        <button onClick={handleFarm}>Filter MiLB</button>
                    </div>
                </div>

                {
                    visible ?
                    <div className="active-roster">
                        {roster.map((player)=>{
                            return (
                                <Player key={player.PlayerID} player={player} />
                            )
                        })}
                    </div>
                    : <p>Filter rosters by clicking on the league buttons</p>
                }
            </div>
        </div>
    )
}

export default Roster;