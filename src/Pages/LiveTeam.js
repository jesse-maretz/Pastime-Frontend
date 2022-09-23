import { useState, useEffect } from "react"
import Roster from "../components/Roster"
const axios = require('axios')

const LiveTeam = () => {
    const [roster, setRoster] = useState([])
    const [standings, setStandings] = useState([])
    const [sched, setSched] = useState()
    const [news, setNews] = useState()


const getStandings = () => {
    axios.get('https://api.sportsdata.io/v3/mlb/scores/json/Standings/2022?key=47523e6bcc8f4041be7c999dc613d23b')
    .then((res)=>{
        console.log(res.data)
    })
}

const sortStandings = () => {
    console.log('sorting...please hold')

}

useEffect(()=>{
    getStandings()
})

    return (
        <div className="page live-team">
            <h1>Live Team</h1>

{/* ==== American League Standings ==== */}
            <div className="container leagues">
                <div className="container american-league">
                    <div className="card live-standings">
                        <h3>AL East</h3>
                        <h4>1. {}</h4>
                        <h4>2. {}</h4>
                        <h4>3. {}</h4>
                        <h4>4. {}</h4>
                        <h4>5. {}</h4>
                    </div>
                    <div className="card live-standings">
                        <h3>AL Central</h3>
                        <h4>1. {}</h4>
                        <h4>2. {}</h4>
                        <h4>3. {}</h4>
                        <h4>4. {}</h4>
                        <h4>5. {}</h4>
                    </div>
                    <div className="card live-standings">
                        <h3>AL West</h3>
                        <h4>1. {}</h4>
                        <h4>2. {}</h4>
                        <h4>3. {}</h4>
                        <h4>4. {}</h4>
                        <h4>5. {}</h4>
                    </div>
                </div>
{/* ==== National League Standings ==== */}
                <div className="container national-league">
                    
                    <div className="card live-standings">
                        <h3>NL East</h3>
                        <h4>1. {}</h4>
                        <h4>2. {}</h4>
                        <h4>3. {}</h4>
                        <h4>4. {}</h4>
                        <h4>5. {}</h4>
                    </div>

                    <div className="card live-standings">
                        <h3>NL Central</h3>
                        <h4>1. {}</h4>
                        <h4>2. {}</h4>
                        <h4>3. {}</h4>
                        <h4>4. {}</h4>
                        <h4>5. {}</h4>
                    </div>

                    <div className="card live-standings">
                        <h3>NL West</h3>
                        <h4>1. {}</h4>
                        <h4>2. {}</h4>
                        <h4>3. {}</h4>
                        <h4>4. {}</h4>
                        <h4>5. {}</h4>
                    </div>
                </div> 
            </div>

            {/* <Roster players={players} /> */}

        </div>
    )
}

export default LiveTeam