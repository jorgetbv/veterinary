import React from 'react'
import ProtoTypes from 'prop-types';

const Date = ({date, deleteDate}) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{date.pet}</h3>
            <p className="card-text"><span>Owner: </span> {date.owner}</p>
            <p className="card-text"><span>Date: </span> {date.date}</p>
            <p className="card-text"><span>Time: </span> {date.time}</p>
            <p className="card-text"><span>Symptom: </span> {date.symptom}</p>
            <button className="btn btn-danger" onClick={() => deleteDate(date.id)}>&times;</button>
        </div>
    </div>
);

Date.propTypes = {
    date: ProtoTypes.object.isRequired,
    deleteDate: ProtoTypes.func.isRequired
}
 
export default Date;
