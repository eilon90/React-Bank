import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Operations extends Component {
    constructor() {
        super();
        this.state = {
            newAmount: 0,
            newVendor: '',
            newCategory: ''
        }
    }

    updateAmount = (e) => this.setState({newAmount: parseInt(e.target.value)});  
    updateVendor = (e) => this.setState({newVendor: e.target.value});
    updateCategory = (e) => this.setState({newCategory: e.target.value});

    deposit = () => {
        this.props.addTransac('dep', this.state);
        this.setState({newAmount: 0, newVendor: '', newCategory: ''});
    };

    Withdraw = () => {
        this.props.addTransac('wit', this.state);
        this.setState({newAmount: 0, newVendor: '', newCategory: ''});
    }

    render() {
        return (
            <div>
                <h3 id = "section-title">New Operation</h3>
                <label htmlFor = "amount">Amount:</label>
                <input type = "number" min = "0" id = "amount" onChange = {this.updateAmount}/>
                <label htmlFor = "vendor">Vendor:</label>
                <input type = "text" id = "vendor" value = {this.state.newVendor} onChange = {this.updateVendor}/>
                <label htmlFor = "category">Category:</label>
                <input type = "text" id = "category" value = {this.state.newCategory} onChange = {this.updateCategory}/>
                <div id = "back-links">
                <Link className = "back-to-main" to = "/"><button onClick = {this.deposit}>Deposit</button></Link>
                <Link className = "back-to-main" to = "/"><button onClick = {this.Withdraw}>Withdraw</button></Link>
                </div>
            </div>
        )
    }
}

export default Operations