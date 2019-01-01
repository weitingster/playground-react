import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    //The onClick allows us to click in the grey area to get rid of the modal
    <div
    onClick={props.onDismiss}
    className="ui dimmer modals visible active"
    >
      //Modal for delete stream with onClick event does not bubble up to the
      //action where you click the modal and it reacts like CANCEL button
      <div onClick={(e) => { e.stopPropagation()}} className="ui standard modal visible active">
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal') //rendered directly into index.html in body
  );
}

export default Modal;
