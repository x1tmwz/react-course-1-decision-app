import React from 'react';

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count +1}.{props.optionText}</p>
        <button
            onClick={(event) => { props.handleDeletOneOption(props.optionText) }}
            className="button button--link"
        >
            remove
            </button>
    </div>
);

export default Option