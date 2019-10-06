import React from 'react'
import Date from './Date'

import ProtoTypes from 'prop-types';

const DateList = ({dates, deleteDate}) => {

    const msg = Object.keys(dates).length === 0 ? 'No dates': 'Admin Dates'

    return(
        <div className="card mt-2 py-5">
        <div className="card-body">
            <h2 className="card-title text-center">
                { msg }
            </h2>
            <div className="lista-citas">
                { dates.map(date => (
                    <Date 
                        key={date.id} 
                        date={date}
                        deleteDate={deleteDate}>
                    </Date>
                 ))
                }
            </div>
        </div>
    </div>
    )
}

DateList.propTypes = {
    dates: ProtoTypes.array.isRequired,
    deleteDate: ProtoTypes.func.isRequired
}
 
export default DateList;
