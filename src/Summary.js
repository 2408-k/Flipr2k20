import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Summary.css'
class Summary extends Component {
    render() {
        return (
            <div className="table-container">
                <div class="title">SUMMARY</div>
                <div className='container'>
                    <Table striped bordered hover variant="dark">
                        <tr>
                            <td>Rural Hospital</td>
                            <td>{this.props.primary.ruralHospitals}</td>
                        </tr>
                        <tr>
                            <td>Rural Bed</td>
                            <td>{this.props.primary.ruralBeds}</td>
                        </tr>
                        <tr>
                            <td>Urban Hospital</td>
                            <td>{this.props.primary.urbanHospitals}</td>
                        </tr>
                        <tr>
                            <td>Urban Bed</td>
                            <td>{this.props.primary.urbanBeds}</td>
                        </tr>
                        <tr>
                            <td>Total Hospital</td>
                            <td>{this.props.primary.totalHospitals}</td>
                        </tr>
                        <tr>
                            <td>Total Bed</td>
                            <td>{this.props.primary.totalBeds}</td>
                        </tr>    
                    </Table>
                </div>
            </div>
        );
    }
}

export default Summary;