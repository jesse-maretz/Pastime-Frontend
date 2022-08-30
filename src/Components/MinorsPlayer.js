const MinorLeaguer = () => {

    return (
        <div>
            <div className="minors-list">
                {
                    props.player.Status == "Minors" ?
                    <div key={props.player.PlayerID} className="active-player">
                        <img src={props.player.PhotoUrl} alt="Player Img" />
                        <h2>{`${props.player.FirstName}` + ' ' + `${props.player.LastName}`}</h2>
                        <p>{props.player.Jersey}</p>
                    </div>
                    : null
                }
            </div>
        </div>
    )





}

export default MinorLeaguer