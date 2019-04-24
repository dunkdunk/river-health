import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      waterData: null,
      loading: true
    };
  }

  componentDidMount() {
    let that = this;

    axios.get('https://data.colorado.gov/resource/a97x-8zfv.json', {
      data: {
        "$limit" : 5000,
        "$app_token" : "apMkTWDqzTnHxh2Kh84rGKL8Y"
      }
    })
    .then(function (response) {
      console.log(response);
      that.setState({
        waterData: response.data,
        loading: false
      });
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  getChannel(name) {
    return this.state.waterData.find((site) => {
      return site.dwr_abbrev === name;
    });
  }

  render() {
    return (
      <React.Fragment>
        {!this.state.loading && (
          <div>
            <h1>River Health</h1>
            <p>An overview of current watershed data in Colorado.</p>
            <div className="row">
              <div className="col-md-4">
                <div className="box">
                  <h2 className="box__title">South Platte</h2>
                  <div className="box__channel">
                    Above Spinney - {this.getChannel('PLASPICO').amount}cfs
                  </div>
                  <div className="box__channel">
                    Dream Stream - {this.getChannel('PLAHARCO').amount}cfs
                  </div>
                  <div className="box__channel">
                    11 Mile Canyon - {this.getChannel('PLAGEOCO').amount}cfs
                  </div>
                  <div className="box__channel">
                    Cheesman Canyon - {this.getChannel('PLACHECO').amount}cfs
                  </div>
                  <div className="box__channel">
                    North Fork Convergence - {this.getChannel('PLASPLCO').amount}cfs
                  </div>
                  <div className="box__channel">
                    Waterton Canyon - {this.getChannel('PLASTRCO').amount}cfs
                  </div>
                  <div className="box__channel">
                    Above Chatfield - {this.getChannel('PLAWATCO').amount}cfs
                  </div>
                  <div className="box__channel">
                    Below Chatfield - {this.getChannel('PLACHACO').amount}cfs
                  </div>
                  <div className="box__channel">
                    DSP - {this.getChannel('PLADENCO').amount}cfs
                  </div>
                  <div>• • •</div>
                  <div className="box__channel">
                    Clear Creek - {this.getChannel('CLEGOLCO').amount}cfs
                  </div>
                  <div className="box__channel">
                    North Fork - {this.getChannel('PLABAICO').amount}cfs
                  </div>
                  <div className="box__channel">
                    Bear Creek - {this.getChannel('BCRMORCO').amount}cfs
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <h2 className="box__title">Colorado</h2>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <h2 className="box__title">Gunnison</h2>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
