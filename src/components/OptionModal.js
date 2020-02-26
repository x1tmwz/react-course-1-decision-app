import React from 'react';
import Modal from 'react-modal';

const OptionMoadl = (props)=>(
    <Modal 
    isOpen={!!props.selectOption}
    onRequestClose={props.handleRestartPick}
    contentLabel ="select option"
    closeTimeoutMS={200}
    className="modal"
    >
    <h3 className="modal__title">select Option</h3>
    {props.selectOption && <p className="modal__body">{props.selectOption}</p>}
    <button className="button" onClick={props.handleRestartPick}>Ok</button>
    </Modal>
);
export default OptionMoadl;