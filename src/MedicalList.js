import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


class HospitalList extends Component {
    render() {
        const table = <Table striped bordered hover variant="dark">
                        <tr>
                            <td>State</td>
                            <td>City</td>
                            <td>Name</td>
                            <td>Ownership</td>
                            <td>Admission Capacity</td>
                            <td>Hospital Beds</td>
                        </tr>
                        {this.props.list.map((st) => <tr>
                            <td>{st.state}</td>
                            <td>{st.city}</td>
                            <td>{st.name}</td>
                            <td>{st.ownership}</td>
                            <td>{st.admissionCapacity}</td>
                            <td>{st.hospitalBeds}</td>
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