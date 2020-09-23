import * as React from "react";
import { motion } from "framer-motion";
import bounceLogo from '../images/bounce-logo-purple.svg'

const variants = {
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

//const images = [bounceLogo];
//const descriptions = ['Bounce Theatre'];
//const links = ['https://www.bouncetheatre.com'];

export const MenuItem = ({ i }) => {
  return (
    <motion.li className="li-menu"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>
      <div className="icon-placeholder" >
        <img src={bounceLogo} alt="Bounce Theatre dot com"/>
      </div>
      <div className="text-placeholder" >
        <a href='https://www.bouncetheatre.com'>Bounce Theatre</a>
      </div>
    </motion.li>
  );
};
