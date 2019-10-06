import React, {Component } from 'react';
import './bootstrap.min.css'

import Header from './Header';
import NewDate from './NewDate';
import DateList from './DateList';


class App extends Component {
  state = {
    dates: []
  }

  componentDidMount(){
    const datesLS = localStorage.getItem('dates');
    if (datesLS){
      this.setState({
        dates: JSON.parse(datesLS)
      })
    }
  }

  componentDidUpdate(){
    localStorage.setItem('dates', JSON.stringify(this.state.dates));
  }

  createNewDate = data => {
    const dates = [...this.state.dates, data];
    this.setState({
      dates
    })
  }

  deleteDate = id => {
    const currentDates = [...this.state.dates];

    const dates = currentDates.filter(date => date.id !== id);

    this.setState({
      dates
    })

  }

  render(){
    return (
      <div className="container">
        <Header title="Administrador Pacientes Veterinaria"></Header>
        <div className="row">
        <div className="col-md-10 mx-auto">
          <NewDate createNewDate={this.createNewDate}></NewDate>
        </div>
       <div className="mt-5 col-md-10 mx-auto">
          <DateList 
              dates={this.state.dates}
              daleteDates={this.deleteDate}>
          </DateList>
       </div>
      </div>
      </div>
    );
  }
}

export default App;
