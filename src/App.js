import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import Breakdown from './components/Breakdown';
const axios = require ('axios');


class App extends Component {
  constructor() {
    super() 
    this.state = {
      transactions: []      
    }
  }

  async getTransac() {
    return axios.get('http://localhost:4000/transactions');
  }

  async componentDidMount() {
    const response = await this.getTransac();
    this.setState({ transactions: response.data })
  }

  addTransac = async (operation, transac) => {
    if (transac.newAmount <= 0) {
      alert('invalid amount');
      return;
    }
    const data = [...this.state.transactions];
    const newTransac = {
      amount: operation === 'dep' ? 0 - transac.newAmount : transac.newAmount,
      vendor: transac.newVendor || 'unknown vendor',
      category: transac.newCategory || 'no category'
    }
    await axios.post('http://localhost:4000/transaction', newTransac);
    const response = await this.getTransac();
    this.setState({ transactions: response.data })
  }

  deleteTransac = async id => {
    console.log(id);
    const data = [...this.state.transactions].filter(d => d._id !== id);
    await axios.delete(`http://localhost:4000/transaction/${id}`);
    this.setState({transactions: data});
  }


  render() {
    let sum = 0;
    this.state.transactions.forEach(d => sum += d.amount);
    return (
      <div id = "container">
        <Router>
          <div id = "nav">
            <h1 id = "title">Bank-App</h1>
            <Link to = "/">Transactions</Link>
            <Link to = "/operations">Operations</Link>
            <Link to = "/breakdown">Breakdown</Link>
          </div>
          <hr></hr>
          <Route path = "/" exact render = {() => <Transactions data = {this.state.transactions} deleteTransac = {this.deleteTransac} sum = {sum}/>}/>
          <Route path = "/operations" exact render = {() =>  <Operations addTransac = {this.addTransac}/>}/>
          <Route path = "/breakdown" exact render = {() => <Breakdown transactions = {this.state.transactions}/>}/>
        </Router>
      </div>
    )
  }
}

export default App;