import React from 'react'

const FilteredList = props => {
    const completedList = props.locations.map( (value,index) => <li key={index}>{value.properties.title}</li>)
    const mountedFilteredList = props.filteredList.map( (value,index) => <li key={index}>{value}</li>)
    if(props.search){
        return <div className="filter filter-list">
            <ul>
                {mountedFilteredList.length > 0 ? mountedFilteredList : <li>Nothing found, please try other name</li>}
            </ul>
        </div>
    }   else{
        return <div className="filter filter-list"> 
            <div className="tip">
                Use the input field to search a location
            </div>
            <ul>
               {completedList}
            </ul>   
        </div>
    }
}

export default FilteredList