import React, { Component } from 'react';
import Search from './Search';
import axios from 'axios';
import MedicalList from './MedicalList';
import './Medical.css';
import './primary.css';

class Medical extends Component {
    constructor(props) {
        super(props);
        this.state= {
            list: []
        };
        this.updateList = this.updateList.bind(this);
    }

    componentDidMount() {
        axios.get("https://api.rootnet.in/covid19-in/hospitals/medical-colleges")
            .then((res) => {
                this.setState({
                    list: res.data.data.medicalColleges
                });
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    list: []
                });
            });
    }

    updateList(patt) {
        axios.get("https://api.rootnet.in/covid19-in/hospitals/medical-colleges")
            .then((res) => {
                var re = new RegExp(patt,"g")
        
                var list= res.data.data.medicalColleges.filter(stat => re.test(stat.state, 'g'))
                this.setState({
                    list: list
                });
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    list: []
                });
            });
        }

    render() {
        return (
            <div className="container">
                <div className="title">STATE MEDICAL COLLEGE DETAILS</div>
                <Search update={this.updateList}/>
                <MedicalList list={this.state.list} />
            </div>
        );
    }
}

export default Medical;