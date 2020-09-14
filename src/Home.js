import React, { Component } from 'react';
import axios from 'axios';
import HomePrimary from './HomePrimary';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state= {
            primary: {
                NewConfirmed: "404 NOT FOUND",
                TotalConfirmed: "404 NOT FOUND",
                NewDeaths: "404 NOT FOUND",
                TotalDeaths: "404 NOT FOUND",
                NewRecovered: "404 NOT FOUND",
                TotalRecovered: "404 NOT FOUND"
            },
            india: {
                NewConfirmed: "404 NOT FOUND",
                TotalConfirmed: "404 NOT FOUND",
                NewDeaths: "404 NOT FOUND",
                TotalDeaths: "404 NOT FOUND",
                NewRecovered: "404 NOT FOUND",
                TotalRecovered: "404 NOT FOUND"
            }
        }
    }

    componentDidMount() {
        axios.get("https://api.covid19api.com/summary")
            .then((res) => {
                this.setState({
                    primary: res.data.Global,
                    india: res.data.Countries[76]
                });
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    primary: {
                        NewConfirmed: "404 NOT FOUND",
                        TotalConfirmed: "404 NOT FOUND",
                        NewDeaths: "404 NOT FOUND",
                        TotalDeaths: "404 NOT FOUND",
                        NewRecovered: "404 NOT FOUND",
                        TotalRecovered: "404 NOT FOUND"
                    },
                    india: {
                        NewConfirmed: "404 NOT FOUND",
                        TotalConfirmed: "404 NOT FOUND",
                        NewDeaths: "404 NOT FOUND",
                        TotalDeaths: "404 NOT FOUND",
                        NewRecovered: "404 NOT FOUND",
                        TotalRecovered: "404 NOT FOUND"
                    }
                });
            });
    }

    render() {
        return (
            <div className="container">
                <HomePrimary primary={this.state.primary} name="Global"/>
                <HomePrimary primary={this.state.india} name="India"/>

            </div>
        );
    }
}

export default Home;
