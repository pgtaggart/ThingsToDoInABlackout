import React, {useState} from 'react';
import Typist from 'react-typist';
import { motion, useCycle, AnimatePresence } from 'framer-motion';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import { MenuToggle } from "./components/MenuToggle";
import { Navigation } from "./components/Navigation";
import { ModalClose } from './components/ModalClose';
import ScrollableContainer from './components/ScrollableContainer';
import Room from './components/room';
import './App.css';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    zIndex: 1000,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    zIndex:0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};


function App(){

  const [isNavOpen, toggleNavOpen] = useCycle(false, true); 
  const [isModalOpen, toggleModalOpen] = useCycle(false, true);
  const [roomIndex, setRoomIndex] = useState(0);

  return (
    <>
      <div className="logo">
        <Typist cursor={{ hideWhenDone: true }} startDelay={1000}>Things to do in a Blackout</Typist>
      </div>
      
      <motion.nav initial={false} animate={isNavOpen ? "open" : "closed"}>
        <motion.div className="nav-background" variants={sidebar}>
          <Navigation />
          <MenuToggle toggle={() => toggleNavOpen()} />
        </motion.div>
      </motion.nav>

      <ScrollableContainer toggleModalFunction={() => toggleModalOpen()} 
                           setRoomIndexFunction={(index) => setRoomIndex(index)}
                           parentElementId = 'StreetImageContainer'/>

      <AnimatePresence>     
        {isModalOpen &&(
          <motion.div
            key="modal"
            className="modal-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <ModalClose toggle={() => toggleModalOpen()} />
            <Room roomIndex={roomIndex}/>
          </motion.div>  
        )}      
      </AnimatePresence>

      <div className="footer">
        <Typist cursor={{ hideWhenDone: true }} startDelay={3000}>
          (c) Copyright Bounce Theatre 2020
          <Typist.Delay ms={1250} />
          <Typist.Backspace count={33} delay={1000} />
          <Typist.Delay ms={1250} />
          Follow us on social media
          <Typist.Backspace count={12} delay={1000} />
          Facebook
          <Typist.Delay ms={1250} />
          , Instagram, Twitter
        </Typist>
        <div className="social-icons">
          <motion.div className="social-icon" whileHover={{ scale: 1.2 }}>
            <SocialMediaIconsReact 
                icon="twitter" iconSize="8" url="https://twitter.com/your-twitter-handle" iconColor="#000"
                size="20" backgroundColor="" borderColor="#000" borderWidth="1" />
          </motion.div>
          <motion.div className="social-icon" whileHover={{ scale: 1.2 }}>
            <SocialMediaIconsReact 
                icon="facebook" iconSize="8" url="https://twitter.com/your-twitter-handle" iconColor="#000"
                size="20" backgroundColor="" borderColor="#000" borderWidth="1" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <SocialMediaIconsReact 
                icon="instagram" iconSize="8" url="https://twitter.com/your-twitter-handle" iconColor="#000"
                size="20" backgroundColor="" borderColor="#000" borderWidth="1"/>
          </motion.div>
        </div>
      </div>

    </>
  );
     
};

export default App;
