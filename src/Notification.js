import React, { Component } from 'react';
import Search from './Search';
import axios from 'axios';
import NotificationList from './NotificationList';
import './Notification.css';
import './primary.css';

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notification: []
        };

        this.updateList = this.updateList.bind(this);
    }

    componentDidMount() {
        axios.get("https://api.rootnet.in/covid19-in/notifications")
            .then((res) => {
                this.setState({
                    notification: res.data.data.notifications
                });
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    notification : []
                });
            });
    }

    updateList(patt) {
        axios.get("https://api.rootnet.in/covid19-in/notifications")
            .then((res) => {
                var re = new RegExp(patt,"g")
        
                var list= res.data.data.notifications.filter(stat => re.test(stat.title))
                this.setState({
                    notification: list
                });
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    notification: []
                });
            });
    }


    render() {
        return (
            <div className="container">
                <div class="title">NOTIFICATIONS BY GOVERNMENT</div>
                <Search update={this.updateList}/>
                <NotificationList list={this.state.notification}/>
            </div>
        );
    }
}

export default Notification;