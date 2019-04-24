import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <h1>Colorado River Health</h1>
      <p>An overview of current watershed data.</p>
      <div className="row">
        <div className="col-md-4">
          <div className="box">
            <h2 className="box__title">South Platte</h2>
            <div className="box__channel">
              DSP - 162cfs
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
  );
}

export default App;
