
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './Form.css'
import axios from 'axios';

class form extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            state:"Andhra Pradesh",
            to:"",
            from:"",
            gender:"male",
            age:"10-19"
        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(evt) {
        evt.preventDefault();
        axios.post("http://localhost:4300", this.state)
            .then((res) => {
                let i;
                let d = {};
                for(i=0; i<res.data.length; i++){
                    d[res.data[i].date] = res.data[i].count;
                }
                this.props.onChange(d);
            })
            .catch((err) => {console.log(err)});
    }

    onChange(evt) {
        this.setState({
            [evt.target.name] :evt.target.value
        });
    }

    render() {
        
        return (
            <div className="container">
                <Form>

                <Form.Row>

                <Col>
                
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="labelClass">State</Form.Label>
                    <Form.Control as="select" defaultValue="Andhra Pradesh" name="state" onChange={this.onChange}>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Andaman and Nicobar Island">Andaman and Nicobar Island</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                    <option value="Daman & Diu">Daman & Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    </Form.Control>
                    </Form.Group>
                
                </Col>
                
                <Col>
                
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="labelClass">Age Group</Form.Label>
                    <Form.Control as="select" defaultValue="0-9" name="age" onChange={this.onChange}>
                    <option value="0-9">0-9</option>
                    <option value="10-19">10-19</option>
                    <option value="20-29">20-29</option>
                    <option value="30-39">30-39</option>
                    <option value="40-49">40-49</option>
                    <option value="50-59">50-59</option>
                    <option value="60-69">60-69</option>
                    <option value="70">70</option>
                    </Form.Control>
                    </Form.Group>
                    
                </Col>
                
                <Col>
                
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="labelClass">Gender</Form.Label>
                    <Form.Control as="select" defaultValue="Male" name="gender" onChange={this.onChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    </Form.Control>
                    </Form.Group>
                    
                </Col>
                
                </Form.Row>

                <Form.Row>

                <Col>
                
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label className="labelClass">From</Form.Label>
                    <Form.Control type="date" placeholder="Last name" name="from" onChange={this.onChange}/>
                </Form.Group>
                
                </Col>
                
                <Col>
                
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label className="labelClass">To</Form.Label>
                    <Form.Control type="date" placeholder="Last name" name="to" onChange={this.onChange}/>
                </Form.Group>
                
                </Col>
                
                </Form.Row>

                

                <Col>
                
                    <Button variant="primary" type="submit" onClick={this.onSubmit}>
                        Submit
                    </Button>
                    
                </Col>
                
                

                </Form>
            </div>
        );
    }
}

export default form;