import * as React from "react";
import { motion } from 'framer-motion';

export const ModalClose = ({ toggle, icon, className }) => (
  <motion.button className={className} onClick={toggle} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }}>
    <i className={icon}/>
  </motion.button>
);
