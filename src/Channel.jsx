import React from 'react';

function Channel(props) {
  return (
    <div className="channel">
      <span className="channel__display">{props.display}</span> 
      <span className="channel__value good">{props.value ? `${props.value.amount} cfs` : '-'}</span>
    </div>
  );
}

export default Channel;