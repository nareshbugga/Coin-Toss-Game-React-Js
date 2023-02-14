/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {Total: 0, Heads: 0, Tails: 0, coin: 0}

  tossResult = () => {
    const {Total, Heads, Tails, coin} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({Heads: prevState.Heads + 1}))
      this.setState(prevState => ({Total: prevState.Total + 1}))
    } else {
      this.setState(prevState => ({Tails: prevState.Tails + 1}))
      this.setState(prevState => ({Total: prevState.Total + 1}))
    }
    this.setState({coin: tossResult})
  }

  render() {
    const {Total, Heads, Tails, coin} = this.state
    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          {coin === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="toss-image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="toss-image"
            />
          )}

          <button
            type="button"
            className="toss-button"
            onClick={this.tossResult}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p>Total: {Total}</p>
            <p>Heads: {Heads}</p>
            <p>Tails: {Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
