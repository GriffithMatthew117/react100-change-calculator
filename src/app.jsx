
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      due: 0,
      received: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      change: 0,
      alertSuccess: "alert alert-success text-center hidden",
      alertFail: "alert alert-danger text-center hidden"
    }

    this.due = this.due.bind(this);
    this.received = this.received.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
  }



  // ---------------------------------------------calculation function--------------------------------

  calculateChange() {
    var change = {
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      total: this.state.received - this.state.due
    };
    var remainder = (this.state.received * 100) - (this.state.due * 100);
    console.log(remainder);
    if (remainder >= 2000) {
      change.twenties = Math.floor(remainder / 2000);
      remainder = remainder % 2000;
    }
    if (remainder >= 1000) {
      change.tens = Math.floor(remainder / 1000);
      remainder = remainder % 1000;
    }
    if (remainder >= 100) {
      change.fives = Math.floor(remainder / 500);
      remainder = remainder % 500;
    }
    if (remainder >= 100) {
      change.ones = Math.floor(remainder / 100);
      remainder = remainder % 100;
    }
    if (remainder >= 25) {
      change.quarters = Math.floor(remainder / 25);
      remainder = remainder % 25;
    }
    if (remainder >= 10) {
      change.dimes = Math.floor(remainder / 10);
      remainder = remainder % 10;
    }
    if (remainder >= 5) {
      change.nickels = Math.floor(remainder / 5);
      remainder = remainder % 5;
    }
    if (remainder >= 1) {
      change.pennies = Math.round(remainder);
      remainder = remainder % 1;
    }
  const alertSuccess = "alert alert-success text-center";
  const alertFail = "alert alert-danger text-center";
  
  if (this.state.due > this.state.received) {
    this.setState({alertFail, alertSuccess: null})
  } else {
    this.setState({
      alertFail: null,
      twenties: change.twenties,
      tens: change.tens,
      fives: change.fives,
      ones: change.ones,
      quarters: change.quarters,
      dimes: change.dimes,
      nickels: change.nickels,
      pennies: change.pennies,
      change: change.total,
      alertSuccess,
  
    })
  }
  }
  

  due(event) {
    this.setState({due: event.target.value}, function() {
      console.log(this.state.due)
    });

  }
  received(event) {
    this.setState({received: event.target.value}, function() {
      console.log(this.state.received);

    });

  }

// -------------------------------------------------------------------------rendering--------------------------------------------


  render() {

    const whiteText = {
      color: "white"
    }
    const whiteBorder = {
      borderColor: "white"
    }
    const showSuccess = {
      display: this.state.alertSuccess
        ? 'block'
        : 'none'
    }
    const showFail = {
      display: this.state.alertFail
        ? 'block': 'none'
    }

// -----------------------------------------------------------return-----------------------------------------------------


    return (
      <div className="container">
        <div className="page-header">
          <h1 className="left-align text-light" style={whiteText}>
            Change Calculator
          </h1>
            <hr/>
        </div>
        <div className="row">
          <div id="input-area" className="col-lg-4">
            <div className="panel panel-default bg-faded">
              <div className="panel-heading bg-primary">Enter Information</div>
              <div
                className="panel-body"
                style={{
                padding: 0
              }}>
                <div id="amountDue" style={{
                  padding: 1 + "em"
                }}>
                  <h4>
                    <strong>Ammmount due</strong>
                  </h4>
                  <input
                    name = "amountDue"
                    onChange={this.due}
                    className="form-control"
                    type="number"
                    step="0.01"
                    placeholder="$0.00"/>
                </div>
                <div
                  id="amountReceived"
                  style={{
                  padding: 1 + "em",
                  paddingTop: 0
                }}>
                  <h4>
                    <strong>Received</strong>
                  </h4>
                  <input
                    name = "amountReceived" 
                    onChange={this.received}
                    className = "form-control"
                    type="number"
                    step="0.01"
                    placeholder="$0.00"/>
                </div>
                <div className='panel-footer'>
                  <button onClick={this.calculateChange} type='button' className='btn btn-primary btn-block'> Calculate </button>
                </div>
              </div>
            </div>
          </div>

          <div id="display" className="col-lg-8">
            <div className="panel panel-default bg-faded">
              <div
                className="panel-body"
                style={{
                paddingBottom: 0
              }}>
                <div className={this.state.alertSuccess} style={showSuccess} role="alert">
                  The total change due is ${this.state.change}
                </div>
                <div className={this.state.alertFail} style={showFail} role="alert">
                  Money owed
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="well well-lg text-center">
                      <h4>
                        <strong>Twenties</strong>
                      </h4>
                      <p className="lead">{this.state.twenties}</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="well well-lg text-center">
                      <h4>
                        <strong>Tens</strong>
                      </h4>
                      <p className="lead">{this.state.tens}</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="well well-lg text-center">
                      <h4>
                        <strong>Fives</strong>
                      </h4>
                      <p className="lead">{this.state.fives}</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="well well-lg text-center">
                      <h4>
                        <strong>ones</strong>
                      </h4>
                      <p className="lead">{this.state.ones}</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3">
                    <div className="well well-lg text-center">
                      <h4>
                        <strong>Quarters</strong>
                      </h4>
                      <p className="lead">{this.state.quarters}</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="well well-lg text-center">
                      <h4>
                        <strong>Dimes</strong>
                      </h4>
                      <p className="lead">{this.state.dimes}</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="well well-lg text-center">
                      <h4>
                        <strong>Nickels</strong>
                      </h4>
                      <p className="lead">{this.state.nickels}</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="well well-lg text-center">
                      <h4>
                        <strong>Pennies</strong>
                      </h4>
                      <p className="lead">{this.state.pennies}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;