/* Reusable component for rendering the players in the style of a baseball card -- will have option for cards to be grid-view on team roster page */

export const PlayerCard = () => {






    return (
        <div className="player-card">
    {/* 
    Some of these details will only be in an expanded show page, but including them here for now
    Player details:
    -- Name
    -- Age
    -- Position
    -- Team
    -- Hits/Throws 
    -- Contract status
    -- WAR
    -- OPS/OPS+/wRC+
    -- More detailed sabremetrics
    -- Player's agent
    -- Height
    -- Weight
    -- Hometown
    -- Expanded career stats

    Card will have two views: front & back
    */}

            {/* This is the front side */}
            <div className="card-front">
                <img src="#" alt="Player Img" />
                <h2>PLAYER NAME</h2>
                <div className="card-front-info">
                    <h4>Age: {"~PROPS~"}</h4>
                    <h4>Position: {"~PROPS~"}</h4>
                    {/* Will need to note fWAR vs bWAR
                        perhaps use both: bWAR/fWAR */}
                    <h4>2022 WAR: {"~PROPS~"}</h4>
                    <h4>2022 OPS/OPS+{"~PROPS~"}</h4>
                </div>
            </div>

            {/* This is the back side */}
            <div className="card-back">
                <div className="card-back-bio">
                    <p>Ht./Wt.: {"~PROPS~"}</p>
                    <p>Bats/Throws: {"~PROPS~"}</p>
                    <p>2022 BA/RBI/HR: {"~PROPS~"}</p>
                </div>
                <div className="card-back-expanded-stats">
                {/*
                    Would like to come up with a better way for displaying player stats relying on modern analytics without sacrificing familiar stats
                    Perhaps the way to do that is grouping them in better slash lines
                    STAT GROUPS:
                    Old School 
                    - BA
                    - RBI
                    - HR
                    - OBP
                    - SLG
                    - BB

                    Modern
                    - WAR (bWAR/fWAR)
                    - OPS/OPS+
                    - wRC+
                    - rOBA

                    Durability &{/*
                    Would like to come up with a better way for displaying player stats relying on modern analytics
                    STAT GROUPS:
                    Old School 
                    - BA
                    - RBI
                    - HR
                    - OBP
                    - SLG
                    - BB

                    Modern
                    - WAR (bWAR/fWAR)
                    - OPS/OPS+
                    - wRC+
                    - rOBA

                    Durability & Efficiency
                    - G
                    - OBP
                    - SO%
                    - SB
                    - BAbip
                */}
                </div>
            </div>

        </div>
    )
}