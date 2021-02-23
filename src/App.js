import React, {useState} from 'react';
import Typist from 'react-typist';
import { motion, useCycle, AnimatePresence } from 'framer-motion';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import { MenuToggle } from "./components/MenuToggle";
import { Navigation } from "./components/Navigation";
import RoomModalClose from './components/RoomModalClose';
import ScrollableContainer from './components/ScrollableContainer';
import HelpModal from './components/HelpModal';
import Room from './components/room';
import './App.css';
import './imageGallery.scss';
import bounceLogo from './images/bounce-logo-purple.svg';
import heritageFund from './images/HeritageFund.png';
import ImageGallery from './components/ImageGallery';
import imageLoader from './components/ImageLoader.js';
import textLoader from './components/TextLoader.js';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 27px 40px)`,
    zIndex: 1000,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(22px at 27px 40px)",
    zIndex:0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

function App() {

  const [isNavOpen, toggleNavOpen] = useCycle(false, true); 
  const [isModalOpen, toggleModalOpen] = useCycle(false, true);
  const [isAboutModalOpen, toggleAboutModalOpen] = useCycle(false, true);
  const [isResourcesModalOpen, toggleResourcesModalOpen] = useCycle(false, true);
  const [isHelpModalBackgroundOpen, toggleHelpModalBackgroundOpen] = useCycle(false, true);
  const [isHelpModalInitialOpen, toggleHelpModalInitialOpen] = useCycle(false, true);
  const [isHelpModalRoomOpen, toggleHelpModalRoomOpen] = useCycle(false, true);
  const [isResearchModalOpen, toggleResearchModalOpen] = useCycle(false, true);
  const [isAudioContentModalOpen, toggleAudioContentModalOpen] = useCycle(false, true);
  const [isImageContentModalOpen, toggleImageContentModalOpen] = useCycle(false, true);
  const [isTextContentModalOpen, toggleTextContentModalOpen] = useCycle(false, true);
  const [roomIndex, setRoomIndex] = useState(0);
  const [mapAreaTitle, setMapAreaTitle] = useState('unknown');
  const [mapAreaType, setMapAreaType] = useState('unknown');
  
  return (
    <>
      <div className="logo">
        <Typist cursor={{ show: false }} startDelay={1000}>
          <p>Things to do in a Blackout</p>
        </Typist>
      </div>

      <motion.div className="helpHome" whileHover={{ opacity: 0.9, scale: 1.2 }}>
        <i className='glyphicon glyphicon-question-sign' style={{ fontSize: '30px'}} onClick={() => {toggleHelpModalBackgroundOpen(); toggleHelpModalInitialOpen()}}/>
      </motion.div>

      <ScrollableContainer toggleModalFunction={() => toggleModalOpen()} 
                           setRoomIndexFunction={(index) => setRoomIndex(index)}
                           parentElementId = 'StreetImageContainer'/>

      <motion.nav initial={false} animate={isNavOpen ? "open" : "closed"}>
        <motion.div className="nav-background" variants={sidebar}>
          <Navigation toggleAboutModalOpen={toggleAboutModalOpen}
                      toggleResourcesModalOpen={toggleResourcesModalOpen}
                      toggleResearchModalOpen={toggleResearchModalOpen} 
                      toggleNavOpen={toggleNavOpen}/>
          <MenuToggle toggle={() => toggleNavOpen()}/>
        </motion.div>
      </motion.nav>

      <HelpModal 
        toggleHelpModalBackgroundOpen={toggleHelpModalBackgroundOpen} isHelpModalBackgroundOpen={isHelpModalBackgroundOpen}
        toggleHelpModalInitialOpen={toggleHelpModalInitialOpen} isHelpModalInitialOpen={isHelpModalInitialOpen}
        toggleHelpModalRoomOpen={toggleHelpModalRoomOpen} isHelpModalRoomOpen={isHelpModalRoomOpen}
      />

      <AnimatePresence>     
        {isModalOpen &&(
          <motion.div
            key="modal"
            className="modal-background"
            initial={{ x: 0, scale:0, opacity: 0 }}
            animate={{ x: 0, scale: 1, opacity: 1 }}
            exit={{ x: 0, scale: 0, opacity: 0 }}
            transition={{delay: 0.1, duration: 0.5}}>
            <Room roomIndex={roomIndex} mapAreaTitle={mapAreaTitle} mapAreaType={mapAreaType}
                isAudioContentModalOpen={isAudioContentModalOpen} toggleAudioContentModalOpen={toggleAudioContentModalOpen}
                isImageContentModalOpen={isImageContentModalOpen} toggleImageContentModalOpen={toggleImageContentModalOpen}
                isTextContentModalOpen={isTextContentModalOpen} toggleTextContentModalOpen={toggleTextContentModalOpen}
                setMapAreaTitleFunction={(modalTitle) => setMapAreaTitle(modalTitle)}
                setMapAreaTypeFunction={(mapAreaType) => setMapAreaType(mapAreaType)}
            />
            <RoomModalClose toggle={() => toggleModalOpen()} roomIndex={roomIndex}
              isAudioContentModalOpen={isAudioContentModalOpen} toggleAudioContentModalOpen={toggleAudioContentModalOpen}
              isImageContentModalOpen={isImageContentModalOpen} toggleImageContentModalOpen={toggleImageContentModalOpen}
              isTextContentModalOpen={isTextContentModalOpen}   toggleTextContentModalOpen={toggleTextContentModalOpen}
            />
          </motion.div>  
        )}      
      </AnimatePresence>

      <AnimatePresence>     
        {isAboutModalOpen &&(
          <div className="aboutDivContainer">
            <motion.div className="aboutModalBackgroundLeft"
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                exit={{ x: -1000 }}
                transition={{delay: 0.1, duration: 1}}>
            </motion.div>
            <motion.div className="aboutModalBackgroundRight"
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                exit={{ x: 1000 }}
                transition={{delay: 0.1, duration: 1}}>
            </motion.div>
            <motion.div
                key="aboutModal"
                className="aboutModal"
                initial={{ y: 1000, x: -350 }}
                animate={{ y: -250, x: -350}}
                exit={{ y: 1000, x:  -350}}
                transition={{delay: 0.1, duration: 1}}>
                <Typist className="aboutModalTextHeader" cursor={{ show: false }} startDelay={1000} avgTypingDelay={50} >
                  <p>About 'Things to do in a Blackout'</p> 
                </Typist>
                <motion.div
                  className="aboutModalInfo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{delay: 3, duration: 2}}>
                    {textLoader.loadText('About-Project')}
                </motion.div> 
              <motion.button className="close-about-modal-button" onClick={() => {toggleAboutModalOpen(); document.getElementById('mainMenu').style.opacity='1';}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                <i className='glyphicon glyphicon-remove'/>
              </motion.button>
            </motion.div>
        </div>      
      )}      
      </AnimatePresence>
      
      <AnimatePresence>     
        {isResourcesModalOpen &&(
          <div className="resourcesDivContainer">
            <motion.div className="resourcesModalBackground"
                initial={{ x: 3000 }}
                animate={{ x: 0 }}
                exit={{ x: 3000 }}
                transition={{delay: 0.1, duration: 1}}>
            </motion.div>
            <motion.div
                key="resourcesModal"
                className="resourcesModal"
                initial={{ y: 1000, x: -350 }}
                animate={{ y: -250, x: -350}}
                exit={{ y: 1000, x:  -350}}
                transition={{delay: 0.1, duration: 1}}>
                  <ImageGallery images={imageLoader.galleryLoader('Resource-Images')}/>
                  <motion.button className="close-resources-modal-button" onClick={() => {toggleResourcesModalOpen(); document.getElementById('mainMenu').style.opacity='1';}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                    <i className='glyphicon glyphicon-remove'/>
                  </motion.button>
            </motion.div>
          </div>)}
      </AnimatePresence>

      <AnimatePresence>     
        {isResearchModalOpen &&(
          <div className="researchDivContainer">
            <motion.div className="researchModalBackground"
                initial={{ x: 3000 }}
                animate={{ x: 0 }}
                exit={{ x: 3000 }}
                transition={{delay: 0.1, duration: 1}}>
            </motion.div>
            <motion.div
                key="researchModal"
                className="researchModal"
                initial={{ y: 1000, x: -350 }}
                animate={{ y: -250, x: -350}}
                exit={{ y: 1000, x:  -350}}
                transition={{delay: 0.1, duration: 1}}>
                  

                  <motion.button className="close-research-modal-button" onClick={() => {toggleResearchModalOpen(); document.getElementById('mainMenu').style.opacity='1';}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                    <i className='glyphicon glyphicon-remove'/>
                  </motion.button>
            </motion.div>
          </div>)}
      </AnimatePresence>

      <div className="footer">
        <motion.div className="HeritageFund" whileHover={{ scale: 1.1 }}>
          <a href="https://www.heritagefund.org.uk"><img src={heritageFund} alt="The Heritage Lottery Fund" width="108px" height="40px" /></a>
        </motion.div>
        <Typist cursor={{ hideWhenDone: true }} startDelay={3000}>
          Copyright &#169; 2021 Bounce Theatre&#8482; 
          <Typist.Delay ms={1250} />
          <Typist.Backspace count={34} delay={1000} />
          <Typist.Delay ms={1250} />
          Follow us on social media
          <Typist.Backspace count={12} delay={1000} />
          Facebook
          <Typist.Delay ms={1250} />
          , Instagram, Twitter
        </Typist>
        <div className="social-icons">
          <motion.div className="abounceLogoLink"
                whileHover={{ scale: 1.2 }}>
                  <a href="https://www.bouncetheatre.com">
                    <img src={bounceLogo} alt="Bounce Theatre dot com" width="50px" height="50px"/>
                  </a>
          </motion.div>
          <motion.div className="social-icon" whileHover={{ scale: 1.2 }}>
            <SocialMediaIconsReact 
                icon="twitter" iconSize="8" url="https://twitter.com/bouncetheatre" iconColor="#000"
                size="20" backgroundColor="" borderColor="#000" borderWidth="1" />
          </motion.div>
          <motion.div className="social-icon" whileHover={{ scale: 1.2 }}>
            <SocialMediaIconsReact 
                icon="facebook" iconSize="8" url="https://facebook.com/bouncetheatre" iconColor="#000"
                size="20" backgroundColor="" borderColor="#000" borderWidth="1" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <SocialMediaIconsReact 
                icon="instagram" iconSize="8" url="https://instagram.com/bouncetheatre" iconColor="#000"
                size="20" backgroundColor="" borderColor="#000" borderWidth="1"/>
          </motion.div>
        </div>
      </div>

    </>
  );
     
};

export default App;
