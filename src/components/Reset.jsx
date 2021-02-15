import {React, Fragment} from "react";

const style = {
    background: "lightblue",
    border: "2px solid darkblue",
    padding: "10px",
    marginTop: "20px",
    borderRadius: "5px",
    cursor: "pointer",
};

const Reset = ( {handleReset} ) => (
    <Fragment>
        <h2>Game Over</h2>
        <button onClick={handleReset} style={style}>New Game?</button>
    </Fragment>
);

export default Reset;