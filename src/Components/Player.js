import { useState } from "react"
import "../style/App.css"

const Player = () => {
    const [status, setStatus] = useState('')

    return (
        <>
            <div
            className="player card vis-aid">
                <h2>Player Card</h2>
            </div>
        </>
    )
}

export default Player