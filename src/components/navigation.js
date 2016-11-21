import React from 'react';


function Navigation(props) {
  return (
    <div>
      <button className="btn btn-sm btn-primary pull-xs-right"
              disabled={props.stepNumber === props.historyLength - 1}
              onClick={() => props.onClick(props.stepNumber + 1)}>
        Next ⇥
      </button>
      <span className="pull-xs-right">&nbsp;</span>
      <button className="btn btn-sm btn-primary pull-xs-right"
              disabled={props.stepNumber === 0}
              onClick={() => props.onClick(props.stepNumber - 1)}>
        ⇤ Prev
      </button>
    </div>
  );
}

export default Navigation;
