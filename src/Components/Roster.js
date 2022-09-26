import { useState, useEffect } from "react"

import axios from "axios"

import Player from "./Player"
import "../style/App.css"



const Roster = (props) => {
    const [roster, setRoster] = useState([])
    const [visible, setVisible] = useState(false)

    const getRoster = () => {
        axios.get(`https://api.sportsdata.io/v3/mlb/scores/json/Players/NYY?key=47523e6bcc8f4041be7c999dc613d23b`)
        .then((res)=>{
            console.log(res.data)
            setRoster(res.data)
        })
    }
    const seeRoster = () => {
        setVisible(true)
    }

    useEffect(()=>{
        getRoster()
    },[])

    return (
        <div>

            <div
            className="container roster">
                <button onClick={seeRoster}>See Roster</button>
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