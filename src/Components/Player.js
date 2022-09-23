import { useState, useEffect } from "react"

import "../style/App.css"

const Player = (props) => {
    const [injured, setInjured] = useState(false)

    const healthCheck = () => {
        setInjured(false)
        if (props.player.Status !== "Active") {
            setInjured(true)
        }
        console.log(props.player)
    }


    useEffect = (()=>{
        healthCheck()
    }, [])

    return (
    <>
        <div className="player">
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
    </>
    )
}

export default Player