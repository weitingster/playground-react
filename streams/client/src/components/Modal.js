import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
  return ReactDOM.createPortal(
    //The onClick allows us to click in the grey area to get rid of the modal
    <div
    onClick={() => history.push('/')}
    className="ui dimmer modals visible active"
    >
      //Modal for delete stream with onClick event does not bubble up to the
      //action where you click the modal and it reacts like CANCEL button
      <div onClick={(e) => { e.stopPropagation()}} className="ui standard modal visible active">
        <div className="header">Delete Stream</div>
        <div className="content">Are you sure you want to delete this stream?</div>
        <div className="actions">
          <button className="ui primary button">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal') //rendered directly into index.html in body
  );
}

export default Modal;
