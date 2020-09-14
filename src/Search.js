import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: ""
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(evt) {
        this.setState({
            state: evt.target.value
        });
        this.props.update(evt.target.value);
    }


    render() {
        return (
            <div className='Search'>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="Search" onChange={this.onChange}/>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        );
    }
}

export default Search;