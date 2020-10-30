import * as React from "react";

export const ModalClose = ({ toggle, icon, className }) => (
  <button className={className} onClick={toggle}>
    <i className={icon}/>
  </button>
);
