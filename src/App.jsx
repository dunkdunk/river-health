import React, { Component } from 'react';
import axios from 'axios';

import loader from './assets/loader.svg';

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
        {this.state.loading && (
          <div className="loader">
            <img src={loader} alt="Loading watershed data" />
          </div>
        )}
        {!this.state.loading && (
          <div>
            <h1>River Health</h1>
            <p>An overview of current watershed data in Colorado.</p>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="box">
                  <h2 className="box__title">South Platte</h2>
                  <div className="box__channel">
                    <span className="box__display">Above Spinney</span> <span className="box__value">{this.getChannel('PLASPICO').amount}cfs</span>
                  </div>
                  <div className="box__channel">
                    <span className="box__display">Dream Stream</span> <span className="box__value">{this.getChannel('PLAHARCO').amount}cfs</span>
                  </div>
                  <div className="box__channel">
                    <span className="box__display">11 Mile Canyon</span> <span className="box__value">{this.getChannel('PLAGEOCO').amount}cfs</span>
                  </div>
                  <div className="box__channel">
                    <span className="box__display">Cheesman Canyon</span> <span className="box__value">{this.getChannel('PLACHECO').amount}cfs</span>
                  </div>
                  <div className="box__channel">
                    <span className="box__display">North Fork Convergence</span> <span className="box__value">{this.getChannel('PLASPLCO').amount}cfs</span>
                  </div>
                  <div className="box__channel">
                    <span className="box__display">Waterton Canyon</span> <span className="box__value">{this.getChannel('PLASTRCO').amount}cfs</span>
                  </div>
                  <div className="box__channel">
                    <span className="box__display">Above Chatfield</span> <span className="box__value">{this.getChannel('PLAWATCO').amount}cfs</span>
                  </div>
                  <div className="box__channel">
                    <span className="box__display">Below Chatfield</span> <span className="box__value">{this.getChannel('PLACHACO').amount}cfs</span>
                  </div>
                  <div className="box__channel">
                    <span className="box__display">DSP</span> <span className="box__value">{this.getChannel('PLADENCO').amount}cfs</span>
                  </div>
                  <div className="box__divider">• • •</div>
                  <div className="box__channel">
                    <span className="box__display">Clear Creek</span> <span className="box__value">{this.getChannel('CLEGOLCO').amount}cfs</span>
                  </div>
                  <div className="box__channel">
                    <span className="box__display">North Fork</span> <span className="box__value">{this.getChannel('PLABAICO').amount}cfs</span>
                  </div>
                  <div className="box__channel">
                    <span className="box__display">Bear Creek</span> <span className="box__value">{this.getChannel('BCRMORCO').amount}cfs</span>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="box">
                  <h2 className="box__title">Colorado</h2>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
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
