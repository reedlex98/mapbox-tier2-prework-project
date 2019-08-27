import React from 'react'

const Filter = (props) => {
    return <div className="filter">
        <input placeholder="Search in Sao Vicente"name='search' type='text' value={props.search} onChange={props.handleChange} />
    </div>
}

export default Filter