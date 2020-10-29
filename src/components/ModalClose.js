import * as React from "react";

export const ModalClose = ({ toggle }) => (
  <button className="close-modal-button" onClick={toggle}>
    <i className='glyphicon glyphicon-remove'/>
  </button>
);
