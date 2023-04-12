import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  clickButton = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="mainContainer">
        <h1 className="heading">
          The Button has been clicked
          <spam className="countElement"> {count}</spam> Times
        </h1>

        <p className="para">Click the button to increase the count!</p>
        <div>
          <button
            type="button"
            className="moreButton"
            onClick={this.clickButton}
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
