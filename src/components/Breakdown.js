import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Breakdown extends Component {

    sortCategories() {
        let categories = this.props.transactions.reduce((red, transac) => {
            red[transac.category] = [...red[transac.category] || [], transac];
            return red;
        }, {});
        const sums = [];
        Object.keys(categories).forEach(c => {
            let sum = 0;
            categories[c].forEach(ca => sum += ca.amount);
            sums.push({category: c, sum: sum});
        })
        return sums;
    }
    
    
    render() {
        const sums = this.sortCategories();
        return (
            <div>
                <h3 id = "section-title">Breakdown</h3>
                <ul>
                    {sums.map(s =>
                        <li key = {sums.indexOf(s)}><span className = "li-title">{s.category}:</span> {s.sum}</li>
                    )}
                </ul>

            </div>
        )
    }
}

export default Breakdown;