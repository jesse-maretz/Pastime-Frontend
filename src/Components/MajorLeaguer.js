import "../Style/App.css"

const MajorLeaguer = (props) => {


    return (
        <div>
            <div className="active-list">
                {
                    props.player.Status == "Active" ?
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

export default MajorLeaguer