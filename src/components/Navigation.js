import * as React from "react";
import { motion } from "framer-motion";

const ul_variants = {
  open: {
    zIndex: 1001,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    zIndex: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const li_variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const Navigation = (properties) => (
  <motion.ul id="mainMenu" className="ul-menu" variants={ul_variants}>
    <motion.li className="li-menu"
      variants={li_variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>
      <div className="icon-placeholder" >
        <i className="glyphicon glyphicon-info-sign"/>
      </div>
      <div className="text-placeholder">
          <button className="aboutButton" onClick={() => {properties.toggleAboutModalOpen(); properties.toggleNavOpen(); document.getElementById('mainMenu').style.opacity='0'; }}>About</button>
      </div>
    </motion.li>
    <motion.li className="li-menu"
      variants={li_variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>
      <div className="icon-placeholder" >
        <i className="glyphicon glyphicon-book"/>
      </div>
      <div className="text-placeholder" >
        <button className="aboutButton">Research</button>
      </div>
    </motion.li>
    <motion.li className="li-menu"
      variants={li_variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>
      <div className="icon-placeholder" >
        <i className="glyphicon glyphicon-folder-open"/>
      </div>
      <div className="text-placeholder" >
      <button className="aboutButton" onClick={() => {properties.toggleResourcesModalOpen(); properties.toggleNavOpen(); document.getElementById('mainMenu').style.opacity='0'; }}>Resources</button>
      </div>
    </motion.li>
  </motion.ul>
);

