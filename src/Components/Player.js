import { useState, useEffect } from "react"
import "../style/App.css"

const Player = (props) => {
/* ======================================= */
    /*  -- State Management -- */
/* ======================================= */
    // Tracking player health for placement on active v injured lists
    const [injured, setInjured] = useState(false)
    // Track major leaguer vs minor leaguer
    const [league, setLeague] = useState('')

    const healthCheck = () => {
        setInjured(false)
        if (props.player.Status !== "Active") {
            setInjured(true)
        }
        console.log(props.player)
    }

    // Checks injury status when Player gets mapped into roster
    useEffect = (()=>{
        healthCheck()
    }, [])

    return (
        <div>

            {/* Major Leaguer card */}
            <div className="major-leaguer">

                {
                    props.player.Status == "Active"
                    ?
                    <div key={props.player.PlayerID} className="active-player">
                        <img src={props.player.PhotoUrl} alt="Player Img" />
                        <h2>{`${props.player.FirstName}` + ' ' + `${props.player.LastName}`}</h2>
                        <p>{props.player.Jersey}</p>
                        {
                            injured
                            ?
                            <h4>Mans is in the shop</h4>
                            :
                            <h4>25 Man</h4>
                        }
                    </div>
                    : null
                }
            </div>

        </div>
    )
}

export default Player