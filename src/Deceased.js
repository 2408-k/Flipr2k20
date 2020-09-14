import React, { Component } from 'react';
import Form from './Form';
import './primary.css';
import Graph from './graph';
import './primary.css';
import axios from 'axios';

class Deceased extends Component {
    constructor(props){
        super(props);
        this.state= {
            data: {},
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(data) {
        this.setState({
            data
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="title">DECEASED PERSONS DETAILS</div>
                    <Form onChange = {this.onChange}/>
                    <div className="title" data={this.state}>Graph</div>
                    <Graph data={this.state.data}/>
                </div>
                
            </div>
        );
    }
}

export default Deceased;