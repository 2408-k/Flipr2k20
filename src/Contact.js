import React, { Component } from 'react';
import Primary from './primary';
import Search from './Search';
import axios from 'axios';
import List from './List';
import './Contact.css';
import './primary.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state= {
            list: [],
            primary: {
                number: "404 NOT FOUND",
                email: "404 NOT FOUND",
                twitter: "404 NOT FOUND",
                facebook: "404 NOT FOUND",
                media: "404 NOT FOUND"
            }
        }
        this.updateList = this.updateList.bind(this);
    }

    componentDidMount() {
        axios.get("https://api.rootnet.in/covid19-in/contacts")
            .then((res) => {
                this.setState({
                    primary: res.data.data.contacts.primary,
                    list: res.data.data.contacts.regional
                });
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    primary: {
                        number: "404 NOT FOUND",
                        email: "404 NOT FOUND",
                        twitter: "404 NOT FOUND",
                        facebook: "404 NOT FOUND",
                        media: "404 NOT FOUND"
                    }
                });
            });
    }

    updateList(patt) {
        axios.get("https://api.rootnet.in/covid19-in/contacts")
            .then((res) => {
                var re = new RegExp(patt,"g")
        
                var list= res.data.data.contacts.regional.filter(stat => re.test(stat.loc, 'g', 'i'))
                this.setState({
                    primary: res.data.data.contacts.primary,
                    list: list
                });
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    primary: {
                        number: "404 NOT FOUND",
                        email: "404 NOT FOUND",
                        twitter: "404 NOT FOUND",
                        facebook: "404 NOT FOUND",
                        media: "404 NOT FOUND"
                    }
                });
            });
            
        
        
        
    }
    render() {
        return (
            <div className='container'>
                <Primary primary={this.state.primary}/>
                <div className="title">STATE HELPLINE</div>
                <Search update={this.updateList} className="Search" placeholder="Search State"/>
                <List list={this.state.list}/>
            </div>
        );
    }
}

export default Contact;