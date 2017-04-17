import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { isLoggedIn } from '../utils/AuthService';
import { getCityData } from '../utils/api';

class CityList extends Component {

  constructor() {

    super();
    this.state = { cities: [] };

  }

  getCityList() {
    getCityData().then((cities) => {
      this.setState({cities})
    });
  }

  componentDidMount() {
    this.getCityList();
  }

  render() {

    const { cities } = this.state;

    console.log(cities);

    return (

    <div>
        <Nav />
        <h3 className="text-center">City List</h3>
        <hr/>

        { cities.map((city, index) => (
              <div className="col-sm-6" key={index}>
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title"> <span className="btn">#{ city.id }</span></h3>
                  </div>
                  <div className="panel-body">
                    <p> { city.city } </p>
                  </div>
                </div>
              </div>
          ))}

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <h2>Get Access to City List By Logging In</h2>
          </div>
        </div>
      </div>

    );


  }

}

export default CityList;
