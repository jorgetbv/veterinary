import React, { Component } from 'react'
import ProtoTypes from 'prop-types';

import uuid from 'uuid';

const initialState = {
    date: {
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptom: ''
    },
    error: false
}

class NewDate extends Component {
    state = {...initialState}

    
    handleChange = e => {
        this.setState({
            date: {
                ...this.state.date,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        const {pet, owner, date, time, symptom} = this.state.date;

        if (pet === '' || owner === '' || date === '' || time === '' || symptom === '') {
            this.setState({
                error: true
            })

            return;
        }

        const newDate = {...this.state.date};
        newDate.id = uuid();

        this.props.createNewDate(newDate);

        this.setState({
            ...initialState
        })
    }

    render() { 
        const {error} = this.state;

        return ( 
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Fill the form fro new date
                    </h2>

                    { error
                        ? <div className="alert alert-danger mt-2 mb-5 text-center">All field are required</div> 
                        : null 
                    }

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Pet´s Name
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Pets Name"
                                    name="pet"
                                    onChange={this.handleChange}
                                    value={this.state.date.pet}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Pet´s Owner
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Pets Owner"
                                    name="owner"
                                    onChange={this.handleChange}
                                    value={this.state.date.owner}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Date
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date"
                                    className="form-control"
                                    name="date"
                                    onChange={this.handleChange}
                                    value={this.state.date.date}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Time
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    name="time"
                                    onChange={this.handleChange}
                                    value={this.state.date.time}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Symptom
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <textarea
                                    className="form-control"
                                    name="symptom"
                                    placeholder="Describe symptom"
                                    onChange={this.handleChange}
                                    value={this.state.date.symptom}
                                ></textarea>
                            </div>
                        </div>
                       <button type="submit" className="py-3 mt-2 btn btn-success btn-block">Save</button>
                    </form>
                </div>
            </div>
         );
    }
}

NewDate.propTypes = {
    createNewDate: ProtoTypes.func.isRequired
}
 
export default NewDate;
