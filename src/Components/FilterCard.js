import { useState } from 'react'
import '../style/App.css'

const FilterCard = (props) => {
    const [filter, setFilter] = useState('')


    const filterMLB = () => {

    }

    return (
        <div>
            <h2>{props.league}</h2>
            <button>Minors</button>
        </div>
    )
}

export default FilterCard