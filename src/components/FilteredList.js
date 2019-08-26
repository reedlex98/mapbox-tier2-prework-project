import React from 'react'

const FilteredList = props => {
    const completedList = props.locations.map( (value,index) => <li key={index}>{value.properties.title}</li>)
    const mountedFilteredList = props.filteredList.map( (value,index) => <li key={index}>{value}</li>)
    if(props.search){
        return <div className="filter filter-list">
            <ul>
                {mountedFilteredList ? mountedFilteredList : "Nothing found, please try other name"}
            </ul>
        </div>
    }   else{
        return <div className="filter filter-list"> Use the input field to search a location
            <ul>
               {completedList}
            </ul>   
        </div>
    }
}

export default FilteredList