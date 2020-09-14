import React, { Component } from 'react';
import Search from './Search';
import axios from 'axios';
import Summary from './Summary';
import HospitalList from './HospitalList';
import './Hospital.css';
import './primary.css';

class Hospital extends Component {
    constructor(props) {
        super(props);
        this.state= {
            list: [],
            primary: {
                ruralHospitals: "404 NOT FOUND",
                ruralBeds: "404 NOT FOUND",
                urbanHospitals: "404 NOT FOUND",
                urbanBeds: "404 NOT FOUND",
                totalHospitals: "404 NOT FOUND",
                totalBeds: "404 NOT FOUND"
            }
        };
        this.updateList = this.updateList.bind(this);
    }

    componentDidMount() {
        axios.get("https://api.rootnet.in/covid19-in/hospitals/beds")
            .then((res) => {
                this.setState({
                    primary: res.data.data.summary,
                    list: res.data.data.regional
                });
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    primary: {
                        ruralHospitals: "404 NOT FOUND",
                        ruralBeds: "404 NOT FOUND",
                        urbanHospitals: "404 NOT FOUND",
                        urbanBeds: "404 NOT FOUND",
                        totalHospitals: "404 NOT FOUND",
                        totalBeds: "404 NOT FOUND"
                    }
                });
            });
    }

    updateList(patt) {
        axios.get("https://api.rootnet.in/covid19-in/hospitals/beds")
            .then((res) => {
                var re = new RegExp(patt,"g")
        
                var list= res.data.data.regional.filter(stat => re.test(stat.state, 'g'))
                this.setState({
                    primary: res.data.data.summary,
                    list: list
                });
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    primary: {
                        ruralHospitals: "404 NOT FOUND",
                        ruralBeds: "404 NOT FOUND",
                        urbanHospitals: "404 NOT FOUND",
                        urbanBeds: "404 NOT FOUND",
                        totalHospitals: "404 NOT FOUND",
                        totalBeds: "404 NOT FOUND"
                    }
                });
            });
        }

    render() {
        return (
            <div class="container">
                <Summary primary={this.state.primary} />
                <div className="title">STATE HOSPITALS DETAILS</div>
                <Search update={this.updateList}/>
                <HospitalList list={this.state.list} />
            </div>
        );
    }
}

export default Hospital;