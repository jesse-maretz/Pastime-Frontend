import React, { useState, useEffect } from "react";

import axios from "axios";

const Standings = () => {

    const getStandings = () => {
        axios.get('https://api.sportsdata.io/v3/mlb/scores/json/Standings/2022?key=47523e6bcc8f4041be7c999dc613d23b')
        .then((res)=>{
            console.log(res.data)
        })
    }

    return(
    <>




{/* 

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
        </div> */}
    </>
    )
}
export default Standings