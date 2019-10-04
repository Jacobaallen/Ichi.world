import React, { useContext } from 'react'
import '../styles/forex.css';
import ReactDOM from 'react-dom'


class ForexList extends React.Component{
        state = {
          base:   'USD',
          rates:  {},
          amount: 1
        }

        fetchRates = base => {
          fetch(`https://api.exchangeratesapi.io/latest?base=${base}`)
            .then(response => response.json())
            .then(data => {
              const defaultRate = { EUR: 1.00 }
              const rates = {...defaultRate, ...data.rates}
              this.setState({ rates , base })
            })
        }

        componentDidMount(){
          const { base } = this.state
          this.fetchRates(base)
        }

        handleSelect = event => {
          const base = event.target.value
          this.fetchRates(base)
        }

        handleAmountChange = event => {
          const amount = event.target.value
          this.setState({ amount })
        }

        render(){
          const { amount, rates, base } = this.state
          return(
            <React.Fragment>
              <div>
                <h4>Foreign Currency Exchange Rates</h4>
                <input
                  type="number"
                  min={1}
                  value={amount}
                  onChange={this.handleAmountChange}
                />
                <select onChange={this.handleSelect} value={base}>
                  {
                    Object.keys(rates).sort().map(currency => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))
                  }
                </select>
              </div>
              <div className="listing-forex">
                  {
                    Object.keys(rates).sort().map(currency => (
                      <li key={currency}>
                        {currency} {(amount * rates[currency]).toFixed(2)}
                      </li>
                    ))
                  }
              </div>
            </React.Fragment>
          )
        }
      }




      export default ForexList;
