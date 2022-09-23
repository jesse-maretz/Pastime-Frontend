import { useState, useEffect } from "react"

import axios from "axios"

import Player from "./Player"
import "../style/App.css"


/*
=======
    -- ROSTER COMPONENT -- 
=======
*/
const Roster = (props) => {
/*
=======
    -- State Management -- 
=======
*/
    const [roster, setRoster] = useState([])
    const [visible, setVisible] = useState(false)



/*
=======
    -- API Calls -- 
=======
*/
const getRoster = () => {
    axios.get(`https://api.sportsdata.io/v3/mlb/scores/json/Players/NYY?key=47523e6bcc8f4041be7c999dc613d23b`)
    .then((res)=>{
        setRoster(res.data)
    })
}

/*
=======
    -- Event Funcs --
=======
*/
    const handleShow = () => {
        console.log("Major leaguers")
    }

    const handleFarm = () => {
        console.log("Minor leaguers")
    }

    const filterActive = () => {
        
        setVisible(true)
        console.log()
    }



/*
=======
    -- "componentDidMount" -- 
=======
*/
    useEffect(()=>{
        console.log(props.players)
    })


/*
=======
    -- Content -- 
=======
*/
    return (
        <div>

            <div
            className="container roster">
                {
                    visible ?
                    <div
                    className="active-roster">
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