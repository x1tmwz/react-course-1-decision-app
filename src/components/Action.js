import React from 'react';

const Action = (props) => (
    <div>
        <button className="big-button" disabled={props.options.length === 0} onClick={props.handlePick}>what Shuold i DO??</button>
    </div>
);

export default Action;