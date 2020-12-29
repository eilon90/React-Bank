import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Transaction from './Transaction';

class Transactions extends Component {

    render() {
        return (
        <div>
            <h2 className = "balancd-title">Total Balance: <span id = {this.props.sum > 500 ? "high-balance" : "low-balance" }>{this.props.sum}</span></h2>
            <h3 id = "section-title">Transactions</h3>
            <table>
                <tr id = "title-tr">
                    <th><h2 className = "trans-title">Amount</h2></th>
                    <th><h2 className = "trans-title">Vendor</h2></th>
                    <th><h2 className = "trans-title">Category</h2></th>
                </tr>
                {this.props.data.map(d => <Transaction key = {d._id} data = {d} deleteTransac = {this.props.deleteTransac}/>)}
            </table>
        </div>
        )
    }
}

export default Transactions