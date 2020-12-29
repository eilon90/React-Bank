import React, {Component} from 'react';

class Transaction extends Component {

    deleteTransac = () => this.props.deleteTransac(this.props.data._id);

    render() {
        const data = this.props.data;
        return (
            <tr>
                <th>
                    <i className = "fas fa-minus-circle" onClick = {this.deleteTransac}></i>
                    <h3 className = {data.amount > 0 ? "positive-amount" : "negative-amount"}>{data.amount}</h3>
                </th>
                <th>
                    <h3 className = "transaction">{data.vendor}</h3>
                </th>
                <th>
                     <h3 className = "transaction">{data.category}</h3>
                </th>
            </tr>
        )
    }
}

export default Transaction