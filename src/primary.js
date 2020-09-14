import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './primary.css';

class Primary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="title">PRIMARY HELP-LINE</div>
                <div className='container'>
                    <Table striped bordered hover variant="dark">
                        <tr>
                            <td>Number</td>
                            <td>{this.props.primary.number}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{this.props.primary.email}</td>
                        </tr>
                        <tr>
                            <td>Twitter</td>
                            <td><a href={this.props.primary.twitter} className="aa">Twitter Link</a></td>
                        </tr>
                        <tr>
                            <td>Facebook</td>
                            <td><a href={this.props.primary.facebook} className="aa">Facebook Link</a></td>
                        </tr>
                        <tr>
                            <td>Media</td>
                            <td><a href={this.props.primary.media[0]} className="aa">Media Link</a></td>
                        </tr>  
                    </Table>
                </div>
            </div>
        );
    }
}

export default Primary;