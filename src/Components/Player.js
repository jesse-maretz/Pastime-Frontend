import { useState, useEffect } from "react"
import "../Style/App.css"
const Player = (props) => {
    const [active, setActive] = useState(true)

    const checkActive = () => {
        if (props.player.Status == 'Active') {
            setActive(true)
        }
    }


    return (
        <div>
            {
                active ?
                <div key={props.player.PlayerID} className="active-player">
                    <img src={props.player.PhotoUrl} alt="Player Img" />
                    <h2>{`${props.player.FirstName}` + ' ' + `${props.player.LastName}`}</h2>
                    <p>{props.player.Jersey}</p>
                </div>
                : null
            }
        </div>
    )
}

export default Player