import React, { Component } from 'react';
import {LineChart} from 'react-chartkick';
import 'chart.js';

class Graph extends Component {
    render() {
        
        return (
            <div className="container">
                <LineChart data={this.props.data} 
                            xtitle="date" ytitle="case" 
                            download={true} 
                            download={{backgroundColor: "#000000"}}
                            library={{backgroundColor: "#eee"}}
                            colors={["#fff", "#000"]}
                            curve={false}/>
            </div>
        );
    }
}

export default Graph;