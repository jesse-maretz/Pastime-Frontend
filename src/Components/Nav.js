import React, { useState } from "react";

import { Link } from "react-router-dom";

import "../style/App.css"

const Nav = () => {
    
    const handleNavBtn = () => {
        console.log("Navigating...")
    }

    return (
        <div className="nav">
            <button><Link to={`/`}>Home</Link></button>
            <button><Link to={`/teams`}>Teams</Link></button>
        </div>
    )
}

export default Nav