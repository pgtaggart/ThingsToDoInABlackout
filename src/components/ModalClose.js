import * as React from "react";
import { motion } from "framer-motion";

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const ModalClose = ({ toggle }) => (
  <button className="close-modal-button" onClick={toggle}>
    <svg width="30" height="30" viewBox="0 0 30 30">
      <Path d= "M 3 16.5 L 17 2.5"/>
      <Path d= "M 3 2.5 L 17 16.5"/>
    </svg>
  </button>
);
