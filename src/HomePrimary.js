import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './primary.css';

class HomePrimary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="table-container">
                <div className="title">{this.props.name} Covid-19 Stats</div>
                <div className='primary'>
                    <Table striped bordered hover variant="dark">
                        <tr>
                            <td>New Confirmed</td>
                            <td>{this.props.primary.NewConfirmed}</td>
                        </tr>
                        <tr>
                            <td>Total Confirmed</td>
                            <td>{this.props.primary.TotalConfirmed}</td>
                        </tr>
                        <tr>
                            <td>New Deaths</td>
                            <td>{this.props.primary.NewDeaths}</td>
                        </tr>
                        <tr>
                            <td>Total Deaths</td>
                            <td>{this.props.primary.TotalDeaths}</td>
                        </tr>
                        <tr>
                            <td>New Recovered</td>
                            <td>{this.props.primary.NewRecovered}</td>
                        </tr>
                        <tr>
                            <td>Total Recovered</td>
                            <td>{this.props.primary.TotalRecovered}</td>
                        </tr>  
                    </Table>
                </div>
            </div>
        );
    }
}

export default HomePrimary;