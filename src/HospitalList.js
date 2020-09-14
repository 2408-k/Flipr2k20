import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


class HospitalList extends Component {
    render() {
        const table = <Table striped bordered hover variant="dark">
                        <tr>
                            <td>State</td>
                            <td>Rural Hospitals</td>
                            <td>Rural Beds</td>
                            <td>Urban Hospitals</td>
                            <td>Urban Beds</td>
                            <td>Total Hospitals</td>
                            <td>Total Beds</td>
                        </tr>
                        {this.props.list.map((st) => <tr>
                            <td>{st.state}</td>
                            <td>{st.ruralHospitals}</td>
                            <td>{st.ruralBeds}</td>
                            <td>{st.urbanHospitals}</td>
                            <td>{st.urbanBeds}</td>
                            <td>{st.totalHospitals}</td>
                            <td>{st.totalBeds}</td>
                        </tr>)}
                    </Table>
        return (
            <div className="container">
                {table}
            </div>
        );
    }
}

export default HospitalList;