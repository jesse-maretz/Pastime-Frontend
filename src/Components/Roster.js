import { useState, useEffect } from "react"
import "../style/App.css"
import FilterCard from "../components/FilterCard"
import Player from "./Player"

import axios from "axios"

const Roster = (props) => {

/* ======================================= */
    /*  -- State Management -- */
/* ======================================= */
    const [roster, setRoster] = useState([])
    const [visible, setVisible] = useState(false)



/* ========================================== */
    /*  -- GET Full Yankees Roster -- */
/* ========================================== */
const getRoster = () => {
    axios.get(`https://api.sportsdata.io/v3/mlb/scores/json/Players/NYY?key=47523e6bcc8f4041be7c999dc613d23b`)
    .then((res)=>{
        setRoster(res.data)
    })
}

/* ========================================== */
    /*  -- Different Roster Views -- */
/* ========================================== */
    const handleShow = () => {
        console.log("Major leaguers")
    }

    const handleFarm = () => {
        console.log("Minor leaguers")
    }


/* ========================================== */
    /* -- Filter Active MLB Roster -- */
/* ========================================== */
    const filterActive = () => {
        
        setVisible(true)
        console.log()
    }


    useEffect(()=>{
        console.log(props.players)
    })


    return (
        <div>

            <div
            className="roster 
            container 
            vis-aid">

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