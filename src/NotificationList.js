import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NotificationList.css';

class NotificationList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const table = <Table striped bordered hover variant="dark">
                        {this.props.list.map((st) => <tr>
                            <td><a href={st.link} className="aa">{st.title}</a></td>
                        </tr>)}
                    </Table>
        return (
            <div className="container">
                {table}
            </div>
        );
    }
}

export default NotificationList;