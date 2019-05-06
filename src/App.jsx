import React, { Component } from 'react';
import axios from 'axios';

import Channel from './Channel';
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
            <h1><i class="fas fa-water"></i></h1>
            <p>An overview of current watershed data in Colorado.</p>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="box">
                  <h2 className="box__title">South Platte</h2>
                  <Channel display={'Above Spinney'} value={this.getChannel('PLASPICO')} />
                  <Channel display={'Dream Stream'} value={this.getChannel('PLAHARCO')} />
                  <Channel display={'11 Mile Canyon'} value={this.getChannel('PLAGEOCO')} />
                  <Channel display={'Cheesman Canyon'} value={this.getChannel('PLACHECO')} />
                  <Channel display={'North Fork Convergence'} value={this.getChannel('PLASPLCO')} />
                  <Channel display={'Waterton Canyon'} value={this.getChannel('PLASTRCO')} />
                  <Channel display={'Above Chatfield'} value={this.getChannel('PLAWATCO')} />
                  <Channel display={'Below Chatfield'} value={this.getChannel('PLACHACO')} />
                  <Channel display={'DSP'} value={this.getChannel('PLADENCO')} />
                  <div className="box__divider">• • •</div>
                  <Channel display={'Clear Creek'} value={this.getChannel('CLEGOLCO')} />
                  <Channel display={'North Fork'} value={this.getChannel('PLABAICO')} />
                  <Channel display={'Bear Creek'} value={this.getChannel('BCRMORCO')} />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="box">
                  <h2 className="box__title">Colorado</h2>
                  <p>Coming soon</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="box">
                  <h2 className="box__title">Gunnison</h2>
                  <p>Coming soon</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="box">
                  <h2 className="box__title">Arkansas</h2>
                  <p>Coming soon</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="box">
                  <h2 className="box__title">San Juan</h2>
                  <p>Coming soon</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="box">
                  <h2 className="box__title">Yampa/White</h2>
                  <p>Coming soon</p>
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
