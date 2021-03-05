import React, { useState } from 'react';
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
import './VerticalTimeline.css'
import bounceLogo from './images/bounce-logo-purple.svg';
import heritageFund from './images/HeritageFund.png';
import ResearchTimeLine from './components/ResearchTimeLine';
import textLoader from './components/TextLoader.js';
import useEventListener from './components/UseEventListener.js'

import hfh1 from './images/resources/HFH_1.jpg'
import hfh2 from './images/resources/HFH_2.jpg'
import hfh3 from './images/resources/HFH_3.jpg'
import hfh4 from './images/resources/HFH_4.jpg'
import hfh5 from './images/resources/HFH_5.jpg'
import hfh6 from './images/resources/HFH_6.jpg'
import hfh7 from './images/resources/HFH_7.jpg'
import hfh8 from './images/resources/HFH_8.jpg'
import hfh9 from './images/resources/HFH_9.jpg'

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
    zIndex: 0,
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
  const ESCAPE_KEYS = ['27', 'Escape'];
  const ARROW_DOWN = ['40', 'ArrowDown'];
  const ARROW_UP = ['38', 'ArrowUp'];
  var container = null;


  // This is the handler for the keys we will bind in the app
  function handler({ key }) {

    if (ESCAPE_KEYS.includes(String(key))) {

      if (isNavOpen) {
        toggleNavOpen();
      }

      var closingNav = false;

      if (isAudioContentModalOpen) {
        toggleAudioContentModalOpen();
        closingNav = true;
      }

      if (isImageContentModalOpen) {
        toggleImageContentModalOpen();
        closingNav = true;
      }

      if (isTextContentModalOpen) {
        toggleTextContentModalOpen();
        closingNav = true;
      }

      if (closingNav) {
        // return the roomImage to full opacity
        document.getElementById('RoomImage' + (roomIndex + 1)).style.opacity = '1';
        document.getElementById('RoomImage' + (roomIndex + 1)).classList.remove("fade-out");
        document.getElementById('RoomImage' + (roomIndex + 1)).classList.add("fade-in");
      }

      if (isModalOpen) {
        if (!closingNav)
          toggleModalOpen();
      }

      if (isAboutModalOpen) {
        document.getElementById('mainMenu').style.opacity = '1';
        toggleAboutModalOpen();
      }

      if (isResourcesModalOpen) {
        document.getElementById('mainMenu').style.opacity = '1';
        toggleResourcesModalOpen();
      }

      if (isHelpModalBackgroundOpen) {
        toggleHelpModalBackgroundOpen();
      }

      if (isHelpModalInitialOpen) {
        toggleHelpModalInitialOpen();
      }

      if (isHelpModalRoomOpen) {
        toggleHelpModalRoomOpen();
      }

      if (isResearchModalOpen) {
        document.getElementById('mainMenu').style.opacity = '1';
        toggleResearchModalOpen();
      }

    }

    if (ARROW_DOWN.includes(String(key))) {

      if (isResearchModalOpen) {
        container.scrollBy({ top: 100, behavior: 'smooth' });
      }
    }

    if (ARROW_UP.includes(String(key))) {

      if (isResearchModalOpen) {
        container.scrollBy({ top: -100, behavior: 'smooth' });
      }
    }

  }

  // Add the key press handler to the app
  useEventListener('keydown', handler);

  return (
    <>
      <div className="logo">
        <Typist cursor={{ show: false }} startDelay={1000}>
          <h1 id="main_page_title">Things to do in a Blackout</h1>
        </Typist>
      </div>

      <motion.div className="helpHome" whileHover={{ opacity: 0.9, scale: 1.2 }}>
        <i className='glyphicon glyphicon-question-sign' style={{ fontSize: '30px' }} onClick={() => { toggleHelpModalBackgroundOpen(); toggleHelpModalInitialOpen() }} />
      </motion.div>

      <ScrollableContainer toggleModalFunction={() => toggleModalOpen()}
        setRoomIndexFunction={(index) => setRoomIndex(index)}
        parentElementId='StreetImageContainer' />

      <motion.nav initial={false} animate={isNavOpen ? "open" : "closed"}>
        <motion.div className="nav-background" variants={sidebar}>
          <Navigation toggleAboutModalOpen={toggleAboutModalOpen}
            toggleResourcesModalOpen={toggleResourcesModalOpen}
            toggleResearchModalOpen={toggleResearchModalOpen}
            toggleNavOpen={toggleNavOpen} />
          <MenuToggle toggle={() => toggleNavOpen()} />
        </motion.div>
      </motion.nav>

      <HelpModal
        toggleHelpModalBackgroundOpen={toggleHelpModalBackgroundOpen} isHelpModalBackgroundOpen={isHelpModalBackgroundOpen}
        toggleHelpModalInitialOpen={toggleHelpModalInitialOpen} isHelpModalInitialOpen={isHelpModalInitialOpen}
        toggleHelpModalRoomOpen={toggleHelpModalRoomOpen} isHelpModalRoomOpen={isHelpModalRoomOpen}
      />

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            key="modal"
            className="modal-background"
            initial={{ x: 0, scale: 0, opacity: 0 }}
            animate={{ x: 0, scale: 1, opacity: 1 }}
            exit={{ x: 0, scale: 0, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}>
            <Room roomIndex={roomIndex} mapAreaTitle={mapAreaTitle} mapAreaType={mapAreaType}
              isAudioContentModalOpen={isAudioContentModalOpen} toggleAudioContentModalOpen={toggleAudioContentModalOpen}
              isImageContentModalOpen={isImageContentModalOpen} toggleImageContentModalOpen={toggleImageContentModalOpen}
              isTextContentModalOpen={isTextContentModalOpen} toggleTextContentModalOpen={toggleTextContentModalOpen}
              setMapAreaTitleFunction={(modalTitle) => setMapAreaTitle(modalTitle)}
              setMapAreaTypeFunction={(mapAreaType) => setMapAreaType(mapAreaType)} />
            <RoomModalClose toggle={() => toggleModalOpen()} roomIndex={roomIndex}
              isAudioContentModalOpen={isAudioContentModalOpen} toggleAudioContentModalOpen={toggleAudioContentModalOpen}
              isImageContentModalOpen={isImageContentModalOpen} toggleImageContentModalOpen={toggleImageContentModalOpen}
              isTextContentModalOpen={isTextContentModalOpen} toggleTextContentModalOpen={toggleTextContentModalOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isAboutModalOpen && (
          <div className="aboutDivContainer">
            <motion.div className="aboutModalBackgroundLeft"
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              exit={{ x: -1000 }}
              transition={{ delay: 0.1, duration: 1 }}>
            </motion.div>
            <motion.div className="aboutModalBackgroundRight"
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              exit={{ x: 1000 }}
              transition={{ delay: 0.1, duration: 1 }}>
            </motion.div>
            <motion.div
              key="aboutModal"
              className="aboutModal"
              initial={{ y: -2000, x: '50%' }}
              animate={{ y: '50%', x: '50%' }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 1 }}>
              <Typist className="aboutModalTextHeader" cursor={{ show: false }} startDelay={1000} avgTypingDelay={50} >
                <p>About 'Things to do in a Blackout'</p>
              </Typist>
              <motion.div
                className="aboutModalInfo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 2 }}>
                {textLoader.loadText('About-Project')}
              </motion.div>
              <motion.button className="close-about-modal-button"
                onClick={() => { toggleAboutModalOpen(); document.getElementById('mainMenu').style.opacity = '1'; }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close About Popup">
                <i className='glyphicon glyphicon-remove' />
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isResourcesModalOpen && (
          <div className="resourcesDivContainer">
            <motion.div className="resourcesModalBackground"
              initial={{ x: 3000 }}
              animate={{ x: 0 }}
              exit={{ x: 3000 }}
              transition={{ delay: 0.1, duration: 1 }}>
            </motion.div>
            <motion.div
              key="resourcesModal"
              className="resourcesModal"
              initial={{ y: '50%', x: -3000 }}
              animate={{ y: '50%', x: '50%' }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 1 }}>

              <motion.button className="close-resources-modal-button"
                onClick={() => { toggleResourcesModalOpen(); document.getElementById('mainMenu').style.opacity = '1'; }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close resources popup">
                <i className='glyphicon glyphicon-remove' />
              </motion.button>

              <div className="resourcesModalContent">

                <div className="resourcesModalContentSection">
                  <h3 className="resourcesHeader">Heritage From Home Magazine</h3>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <a href="#" >
                          <motion.img alt="Heritage from Home Issue 1" src={hfh1} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                        </a>
                        <h5 className="resourcesImageExplain">#1</h5>
                      </div>
                      <div className="col-md-4">
                        <a href="#" >
                          <motion.img alt="Heritage from Home Issue 2" src={hfh2} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                        </a>
                        <h5 className="resourcesImageExplain">#2</h5>
                      </div>
                      <div className="col-md-4">
                        <a href="#" >
                          <motion.img alt="Heritage from Home Issue 3" src={hfh3} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                        </a>
                        <h5 className="resourcesImageExplain">#3</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <a href="#" >
                          <motion.img alt="Heritage from Home Issue 4" src={hfh4} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                        </a>
                        <h5 className="resourcesImageExplain">#4</h5>
                      </div>
                      <div className="col-md-4">
                        <a href="#" >
                          <motion.img alt="Heritage from Home Issue 5" src={hfh5} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                        </a>
                        <h5 className="resourcesImageExplain">#5</h5>
                      </div>
                      <div className="col-md-4">
                        <a href="#" >
                          <motion.img alt="Heritage from Home Issue 6" src={hfh6} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                        </a>
                        <h5 className="resourcesImageExplain">#6</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <a href="#" >
                          <motion.img alt="Heritage from Home Issue 7" src={hfh7} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                        </a>
                        <h5 className="resourcesImageExplain">#7</h5>
                      </div>
                      <div className="col-md-4">
                        <a href="#" >
                          <motion.img alt="Heritage from Home Issue 8" src={hfh8} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                        </a>
                        <h5 className="resourcesImageExplain">#8</h5>
                      </div>
                      <div className="col-md-4">
                        <a href="#" >
                          <motion.img alt="Heritage from Home Issue 9" src={hfh9} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                        </a>
                        <h5 className="resourcesImageExplain">#9</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="resourcesModalContentSection">
                  <h3 className="resourcesHeader">Stories from the Blackout Radio Plays</h3>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <a href="#" >
                          <motion.img alt="Heritage from Home Issue 1" src={hfh1} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                        </a>
                        <h5 className="resourcesImageExplain">#1</h5>
                      </div>
                      <div className="col-md-4">
                        <a href="#" >
                          <motion.img alt="Heritage from Home Issue 2" src={hfh2} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                        </a>
                        <h5 className="resourcesImageExplain">#2</h5>
                      </div>
                      <div className="col-md-4">
                        <a href="#" >
                          <motion.img alt="Heritage from Home Issue 3" src={hfh3} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                        </a>
                        <h5 className="resourcesImageExplain">#3</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <a href="#" >
                          <motion.img alt="Heritage from Home Issue 4" src={hfh4} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                        </a>
                        <h5 className="resourcesImageExplain">#4</h5>
                      </div>
                      <div className="col-md-4">
                        <a href="#" >
                          <motion.img alt="Heritage from Home Issue 5" src={hfh5} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                        </a>
                        <h5 className="resourcesImageExplain">#5</h5>
                      </div>
                      <div className="col-md-4">
                        <a href="#" >
                          <motion.img alt="Heritage from Home Issue 6" src={hfh6} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                        </a>
                        <h5 className="resourcesImageExplain">#6</h5>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>)}
      </AnimatePresence>

      <AnimatePresence>
        {isResearchModalOpen && (
          <motion.div
            ref={node => { container = node }}
            key="researchModal"
            className="researchModal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1, duration: 1 }}>
            <ResearchTimeLine />
            <motion.button className="close-research-modal-button"
              onClick={() => { toggleResearchModalOpen(); document.getElementById('mainMenu').style.opacity = '1'; }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close Research Popup">
              <i className='glyphicon glyphicon-remove' />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="footer">
        <motion.div className="HeritageFund" whileHover={{ scale: 1.1 }}>
          <a href="https://www.heritagefund.org.uk"><img src={heritageFund} alt="The Heritage Lottery Fund" width="108px" height="40px" /></a>
        </motion.div>
        <div className="social-icons">
          <motion.div className="abounceLogoLink"
            whileHover={{ scale: 1.2 }}>
            <a href="https://www.bouncetheatre.com">
              <img src={bounceLogo} alt="Bounce Theatre dot com" width="50px" height="50px" />
            </a>
          </motion.div>
          <motion.div className="social-icon" whileHover={{ scale: 1.2 }} aria-label="Twitter Link">
            <SocialMediaIconsReact
              icon="twitter" iconSize="8" url="https://twitter.com/bouncetheatre" iconColor="#000"
              size="20" backgroundColor="" borderColor="#000" borderWidth="1" id="twitterLink" />
          </motion.div>
          <motion.div className="social-icon" whileHover={{ scale: 1.2 }} aria-label="Facebook Link">
            <SocialMediaIconsReact
              icon="facebook" iconSize="8" url="https://facebook.com/bouncetheatre" iconColor="#000"
              size="20" backgroundColor="" borderColor="#000" borderWidth="1" id="facebookLink" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} aria-label="Instagram Link">
            <SocialMediaIconsReact
              icon="instagram" iconSize="8" url="https://instagram.com/bouncetheatre" iconColor="#000"
              size="20" backgroundColor="" borderColor="#000" borderWidth="1" id="instagramLink" />
          </motion.div>
        </div>
      </div>

    </>
  );

};

export default App;
