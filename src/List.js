import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './List.css'

class List extends Component {
    constructor(props){
        super(props);
    }


    render() {
        const table = <Table striped bordered hover variant="dark">
                        {this.props.list.map((st) => <tr>
                            <td>{st.loc}</td>
                            <td>{st.number}</td>
                        </tr>)}
                    </Table>
        return (
            <div className="container">
                {table}
            </div>
        );
    }
}

export default List;