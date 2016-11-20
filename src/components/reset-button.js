import React from 'react';


function ResetButton(props) {
  if (!props.confirmReset)
    return <button onClick={() => props.setConfirm(true)}>Reset</button>;

  return (
    <div>
      <button>Reset?</button>
      <br />
      <button onClick={() => props.onReset()}>Yes</button>
      <button onClick={() => props.setConfirm(false)}>No</button>
    </div>
  );
}

export default ResetButton;
