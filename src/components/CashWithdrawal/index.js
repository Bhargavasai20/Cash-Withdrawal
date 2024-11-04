// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawl extends Component {
  state = {amt: 2000}

  cashBtn = value => this.setState(prevState => ({amt: prevState.amt - value}))

  render() {
    const {amt} = this.state
    const {denominationsList} = this.props
    return (
      <div className="container">
        <div className="card">
          <div className="heading-container">
            <div className="heading">
              <p className="head">S</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <p className="amt">
              {amt} <br />
              <span className="rup">In rupees</span>
            </p>
          </div>
          <p className="with">Withdraw</p>
          <p className="chs">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                cash={eachDenomination}
                cashBtn={this.cashBtn}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawl
