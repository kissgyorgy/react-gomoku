import React from 'react';


function Navigation(props) {
  let nextButton;
  if (props.stepNumber < props.historyLength - 1) {
      nextButton = (
        <button className="pull-xs-right"
                onClick={() => props.onClick(props.stepNumber + 1)}>
          Next ⇥
        </button>
      );
  } else {
      nextButton = (
        <button disabled="disabled" className="pull-xs-right"
                onClick={() => props.onClick(props.stepNumber + 1)}>
          Next ⇥
        </button>
      );
  }

  let prevButton;
  if (props.stepNumber !== 0) {
    prevButton = (
      <button className="pull-xs-right"
              onClick={() => props.onClick(props.stepNumber - 1)}>
        ⇤ Prev
      </button>
    );
  } else {
    prevButton = (
      <button disabled="disabled" className="pull-xs-right"
              onClick={() => props.onClick(props.stepNumber - 1)}>
        ⇤ Prev
      </button>
    );
  }

  return <div> {nextButton} {prevButton} </div>;
}

export default Navigation;
