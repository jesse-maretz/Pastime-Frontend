import { useState } from "react";


const ComishOffice = () => {
    const [bozo, setBozo] = useState(true)

    return (
        <div>
            <div className="comish container">
                <h1>Welcome to the Commisioner's Office, </h1>
            </div>
        </div>
    )
}

export default ComishOffice