import React, { useState } from 'react';
import Typist from 'react-typist';
import { motion, useCycle, AnimatePresence } from 'framer-motion';
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
import nationalArchivesLogo from './images/NationalArchivesLogo.png';
import heritageFund from './images/HeritageFund.png';
import ResearchTimeLine from './components/ResearchTimeLine';
import textLoader from './components/TextLoader.js';
import useEventListener from './components/UseEventListener.js'
import ResourcesModalContentLoader from './components/ResourcesModalContentLoader';

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
  const [isHelpModalStreetOpen, toggleHelpModalStreetOpen] = useCycle(false, true);
  const [isHelpModalRoomOpen, toggleHelpModalRoomOpen] = useCycle(false, true);
  const [isResearchModalOpen, toggleResearchModalOpen] = useCycle(false, true);
  const [isAudioContentModalOpen, toggleAudioContentModalOpen] = useCycle(false, true);
  const [isImageContentModalOpen, toggleImageContentModalOpen] = useCycle(false, true);
  const [isTextContentModalOpen, toggleTextContentModalOpen] = useCycle(false, true);
  const [roomIndex, setRoomIndex] = useState(0);
  const [mapAreaTitle, setMapAreaTitle] = useState('unknown');
  const [mapAreaType, setMapAreaType] = useState('unknown');
  const [resourcesType, setResourcesType] = useState('unknown');

  /**
   * This section is to control the whole shebang with the keyboard for accessibility 
   */
  const [tabControlActivated, toggleTabControl] = useCycle(false, true);
  const [mainScreenTabIndex, setMainScreenTabIndex] = useState(0);
  const [navScreenTabIndex, setNavScreenTabIndex] = useState(0);
  const [resourcesScreenTabIndex, setResourcesScreenTabIndex] = useState(0);
  const [roomOneScreenTabIndex, setRoomOneScreenTabIndex] = useState(0);
  const [roomTwoScreenTabIndex, setRoomTwoScreenTabIndex] = useState(0);
  const [roomThreeScreenTabIndex, setRoomThreeScreenTabIndex] = useState(0);
  const [roomFourScreenTabIndex, setRoomFourScreenTabIndex] = useState(0);
  const [roomFiveScreenTabIndex, setRoomFiveScreenTabIndex] = useState(0);
  const [roomSixScreenTabIndex, setRoomSixScreenTabIndex] = useState(0);

  const [roomModalButtonFocus, toggleRoomModalButtonFocus] = useCycle(false, true);

  const TAB_KEY = ['9', 'Tab'];
  const ESCAPE_KEYS = ['27', 'Escape'];
  const ARROW_DOWN = ['40', 'ArrowDown'];
  const ARROW_UP = ['38', 'ArrowUp'];

  var researchContainer = null;
  var aboutContainer = null;
  var resourcesContainer = null;

  const mainScreenOriginalWidth = 4589;
  const mainScreenImageMapOffsets = [0, 0, 555, 1034, 1520, 1986, 2436, 2903]; // These are the original x starting co-ords of the image maps of the street, first two are zero to keep this array indexed the same as the id's 
  const mainScreenTabOrder = ['mainMenuButton', 'mainHelpButton', 'StreetSceneImage_map0', 'StreetSceneImage_map1', 'StreetSceneImage_map2', 'StreetSceneImage_map3', 'StreetSceneImage_map4', 'StreetSceneImage_map5'];
  const navScreenTabOrder = ['navAboutButton', 'navResearchButton', 'navResourcesButton', 'mainMenuButton'];
  const resourcesScreenTabOrder = ['HeritageMagazine_1', 'HeritageMagazine_2', 'HeritageMagazine_3', 'HeritageMagazine_4',
    'HeritageMagazine_5', 'HeritageMagazine_6', 'HeritageMagazine_7', 'HeritageMagazine_8', 'HeritageMagazine_9',
    'RadioPlay_1', 'RadioPlay_2', 'RadioPlay_3', 'RadioPlay_4', 'RadioPlay_5', 'RadioPlay_6'];

  const roomOneScreenTabOrder = ['RoomImage1_map0', 'RoomImage1_map1', 'RoomImage1_map2', 'RoomImage1_map3', 'RoomImage1_map4', 'RoomImage1_map5', 'RoomImage1_map6', 'RoomImage1_map7'];
  const roomTwoScreenTabOrder = ['RoomImage2_map0', 'RoomImage2_map1', 'RoomImage2_map2', 'RoomImage2_map3', 'RoomImage2_map4'];
  const roomThreeScreenTabOrder = ['RoomImage3_map0', 'RoomImage3_map1', 'RoomImage3_map2', 'RoomImage3_map3', 'RoomImage3_map4'];
  const roomFourScreenTabOrder = ['RoomImage4_map0','RoomImage4_map1','RoomImage4_map2','RoomImage4_map3'];
  const roomFiveScreenTabOrder = ['RoomImage5_map0', 'RoomImage5_map1', 'RoomImage5_map2', 'RoomImage5_map3', 'RoomImage5_map4'];
  const roomSixScreenTabOrder = ['RoomImage6_map0', 'RoomImage6_map1', 'RoomImage6_map2', 'RoomImage6_map3', 'RoomImage6_map4', 'RoomImage6_map5', 
    'RoomImage6_map6', 'RoomImage6_map7', 'RoomImage6_map8', 'RoomImage6_map9', 'RoomImage6_map10', 'RoomImage6_map11', 'RoomImage6_map12', 'RoomImage6_map13'];

  // This is the function that will handle keyup's for the accessibility
  function upHandler({ key }) {

    if (TAB_KEY.includes(String(key))) {

      // check the tab control flag, if this is the first time
      // we hit the tab key then we will activate the outlines
      if (!tabControlActivated) {

        toggleTabControl();

        // activate the focus outlines on the main page
        document.getElementById('mainMenuButton').classList.remove('aButton');
        document.getElementById('mainHelpButton').classList.remove('aButton');
        document.getElementById('mainLeftScrollButton').classList.remove('aButton');
        document.getElementById('mainRightScrollButton').classList.remove('aButton');
        document.getElementById('navAboutButton').classList.remove('aButton');
        document.getElementById('navResearchButton').classList.remove('aButton');
        document.getElementById('navResourcesButton').classList.remove('aButton');
        document.getElementById('StreetSceneImage_map0').classList.remove('aMap');
        document.getElementById('StreetSceneImage_map1').classList.remove('aMap');
        document.getElementById('StreetSceneImage_map2').classList.remove('aMap');
        document.getElementById('StreetSceneImage_map3').classList.remove('aMap');
        document.getElementById('StreetSceneImage_map4').classList.remove('aMap');
        document.getElementById('StreetSceneImage_map5').classList.remove('aMap');

      }

      // If the room modal is open then cycle the hidden elements with the tab key
      if (isModalOpen) {

        // unless one of the inner modals is open, then just focus the close modal
        if (isAudioContentModalOpen || isImageContentModalOpen || isTextContentModalOpen) {

          if (roomModalButtonFocus) {
            document.getElementById('CloseRoomContentButton').focus();
            toggleRoomModalButtonFocus();
          } else {
            document.getElementById('CloseRoomModalButton').focus();
            toggleRoomModalButtonFocus();
          }

          return;
        }

        switch (roomIndex) {

          case 0: {

            for (var i1 = 0; i1 < roomOneScreenTabOrder.length; i1++) {
              document.getElementById(roomOneScreenTabOrder[i1]).classList.remove('aMap');
            }

            if (roomOneScreenTabIndex + 1 === roomOneScreenTabOrder.length) {
              setRoomOneScreenTabIndex(0);
            } else {
              setRoomOneScreenTabIndex(roomOneScreenTabIndex + 1);
            }

            document.getElementById(roomOneScreenTabOrder[roomOneScreenTabIndex]).focus();

            return;
          }

          case 1: {

            for (var i2 = 0; i2 < roomTwoScreenTabOrder.length; i2++) {
              document.getElementById(roomTwoScreenTabOrder[i2]).classList.remove('aMap');
            }

            if (roomTwoScreenTabIndex + 1 === roomTwoScreenTabOrder.length) {
              setRoomTwoScreenTabIndex(0);
            } else {
              setRoomTwoScreenTabIndex(roomTwoScreenTabIndex + 1);
            }

            document.getElementById(roomTwoScreenTabOrder[roomTwoScreenTabIndex]).focus();

            return;
          }

          case 2: {

            for (var i3 = 0; i3 < roomThreeScreenTabOrder.length; i3++) {
              document.getElementById(roomThreeScreenTabOrder[i3]).classList.remove('aMap');
            }

            if (roomThreeScreenTabIndex + 1 === roomThreeScreenTabOrder.length) {
              setRoomThreeScreenTabIndex(0);
            } else {
              setRoomThreeScreenTabIndex(roomThreeScreenTabIndex + 1);
            }

            document.getElementById(roomThreeScreenTabOrder[roomThreeScreenTabIndex]).focus();

            return;
          }

          case 3: {

            for (var i4 = 0; i4 < roomFourScreenTabOrder.length; i4++) {
              document.getElementById(roomFourScreenTabOrder[i4]).classList.remove('aMap');
            }

            if (roomFourScreenTabIndex + 1 === roomFourScreenTabOrder.length) {
              setRoomFourScreenTabIndex(0);
            } else {
              setRoomFourScreenTabIndex(roomFourScreenTabIndex + 1);
            }

            document.getElementById(roomFourScreenTabOrder[roomFourScreenTabIndex]).focus();

            return;
          }

          case 4: {

            for (var i5 = 0; i5 < roomFiveScreenTabOrder.length; i5++) {
              document.getElementById(roomFiveScreenTabOrder[i5]).classList.remove('aMap');
            }

            if (roomFiveScreenTabIndex + 1 === roomFiveScreenTabOrder.length) {
              setRoomFiveScreenTabIndex(0);
            } else {
              setRoomFiveScreenTabIndex(roomFiveScreenTabIndex + 1);
            }

            document.getElementById(roomFiveScreenTabOrder[roomFiveScreenTabIndex]).focus();

            return;
          }

          case 5: {

            for (var i6 = 0; i6 < roomSixScreenTabOrder.length; i6++) {
              document.getElementById(roomSixScreenTabOrder[i6]).classList.remove('aMap');
            }

            if (roomSixScreenTabIndex + 1 === roomSixScreenTabOrder.length) {
              setRoomSixScreenTabIndex(0);
            } else {
              setRoomSixScreenTabIndex(roomSixScreenTabIndex + 1);
            }

            document.getElementById(roomSixScreenTabOrder[roomSixScreenTabIndex]).focus();

            return;
          }

          default: {
            document.getElementById('CloseRoomModalButton').focus();
            return;
          }

        } // end switch

      }


      // If the nav is open then scrool through those
      if (isNavOpen) {

        // set the index back to zero if we are going to cycle beyond the length
        if (navScreenTabIndex + 1 === navScreenTabOrder.length) {
          setNavScreenTabIndex(0);
        } else {
          setNavScreenTabIndex(navScreenTabIndex + 1);
        }

        // set the focus to the indexed element
        document.getElementById(navScreenTabOrder[navScreenTabIndex]).focus();

        // exit the function here and don't set anything else
        return;
      }

      // The about modal does not have any tab indexes, just up/down to scroll container and escape to close
      if (isAboutModalOpen) {
        document.getElementById('closeAboutModalButton').classList.remove('aButton');
        document.getElementById('closeAboutModalButton').focus();
        return;
      }

      // if the help modal is open then ignore the tab indexing
      if (isHelpModalBackgroundOpen) {
        document.getElementById('closeHelpModalButton').classList.remove('aButton');
        document.getElementById('closeHelpModalButton').focus();
        return;
      }

      // if the research modal is open then ignore the tabs, up/down scroll and escape exits
      if (isResearchModalOpen) {
        document.getElementById('closeResearchModalButton').classList.remove('aButton');
        document.getElementById('closeResearchModalButton').focus();
        return;
      }

      // if the resources modal is opne then cycle the resources with the tab
      if (isResourcesModalOpen) {

        if (resourcesScreenTabIndex + 1 === resourcesScreenTabOrder.length) {
          setResourcesScreenTabIndex(0);
        } else {
          setResourcesScreenTabIndex(resourcesScreenTabIndex + 1);
        }

        document.getElementById(resourcesScreenTabOrder[resourcesScreenTabIndex]).focus();

        return;
      }

      /* only the main screen is open so tab through these */

      // set the index back to zero if we are going to cycle beyond the length
      if (mainScreenTabIndex + 1 === mainScreenTabOrder.length) {
        setMainScreenTabIndex(0);
      } else {
        setMainScreenTabIndex(mainScreenTabIndex + 1);
      }

      var streetContainerOuter = document.getElementById('StreetImageContainerOuter');
      var screenWidth = streetContainerOuter.offsetWidth; // this is the width of the actual browser screen
      var streetImageWidth = document.getElementById('StreetImageContainer').offsetWidth;; // this is the width of the image (scaled, not the original width)

      var widthRatio = streetImageWidth / mainScreenOriginalWidth; // this is the percentage of the priginal width that we have scaled to, not the screen width

      // skip over the first two elements of the array
      if (mainScreenTabIndex > 1) {
        streetContainerOuter.scrollTo({ top: 0, left: (mainScreenImageMapOffsets[mainScreenTabIndex] * widthRatio) - (screenWidth / 3), behavior: 'smooth' });
      }

      // set the focus to the indexed element
      document.getElementById(mainScreenTabOrder[mainScreenTabIndex]).focus();

    }// end tab key check
  }

  // This is the handler for the keys we will bind in the app
  function downHandler({ key }) {

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
        researchContainer.scrollBy({ top: 100, behavior: 'smooth' });
      }

      if (isAboutModalOpen) {
        aboutContainer.scrollBy({ top: 100, behavior: 'smooth' });
      }

      if (isResourcesModalOpen) {
        resourcesContainer.scrollBy({ top: 100, behavior: 'smooth' });
      }

    }

    if (ARROW_UP.includes(String(key))) {

      if (isResearchModalOpen) {
        researchContainer.scrollBy({ top: -100, behavior: 'smooth' });
      }

      if (isAboutModalOpen) {
        aboutContainer.scrollBy({ top: -100, behavior: 'smooth' });
      }

      if (isResourcesModalOpen) {
        resourcesContainer.scrollBy({ top: -100, behavior: 'smooth' });
      }

    }

  }

  // Add the key press handler to the app
  useEventListener('keydown', downHandler);
  useEventListener('keyup', upHandler);

  /**
   * This is the main section that will actually render the website
   */
  return (
    <>

      <div className="displayWarning" >
        <h2 className="displayWarningHeader">For the best experience please use this website in landscape mode on a device supporting at least an 800x600 resolution.</h2>
      </div>

      <motion.nav initial={false} animate={isNavOpen ? "open" : "closed"}>
        <motion.div className="nav-background" variants={sidebar}>
          <Navigation toggleAboutModalOpen={toggleAboutModalOpen}
            toggleResourcesModalOpen={toggleResourcesModalOpen}
            toggleResearchModalOpen={toggleResearchModalOpen}
            toggleNavOpen={toggleNavOpen}
            setResourcesType={setResourcesType}
            resourcesContainer={resourcesContainer} />
          <MenuToggle toggle={() => toggleNavOpen()} />
        </motion.div>
      </motion.nav>

      <div className="logo">
        <Typist cursor={{ show: false }} startDelay={1000}>
          <h1 id="main_page_title">Things to do in a Blackout</h1>
        </Typist>
      </div>

      <motion.button id="mainHelpButton"
        className="helpHome aButton"
        aria-label="Website Help"
        onClick={() => { toggleHelpModalBackgroundOpen(); toggleHelpModalInitialOpen() }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}>
        <p>?</p>
      </motion.button>

      <ScrollableContainer toggleModalFunction={() => toggleModalOpen()}
        setRoomIndexFunction={(index) => setRoomIndex(index)}
        toggleHelpFunction={() => { toggleHelpModalBackgroundOpen(); toggleHelpModalInitialOpen() }}
        parentElementId='StreetImageContainer' />

      <HelpModal
        toggleHelpModalBackgroundOpen={toggleHelpModalBackgroundOpen} isHelpModalBackgroundOpen={isHelpModalBackgroundOpen}
        toggleHelpModalInitialOpen={toggleHelpModalInitialOpen} isHelpModalInitialOpen={isHelpModalInitialOpen}
        toggleHelpModalStreetOpen={toggleHelpModalStreetOpen} isHelpModalStreetOpen={isHelpModalStreetOpen}
        toggleHelpModalRoomOpen={toggleHelpModalRoomOpen} isHelpModalRoomOpen={isHelpModalRoomOpen} />

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
                ref={node => { aboutContainer = node }}
                className="aboutModalInfo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 2 }}>
                {textLoader.loadText('About-Project')}
              </motion.div>
              <motion.button className="close-about-modal-button aButton" id="closeAboutModalButton"
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

              <motion.button className="close-resources-modal-button" id="closeResourcesModalButton"
                onClick={() => { toggleResourcesModalOpen(); document.getElementById('mainMenu').style.opacity = '1'; }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close resources popup">
                <i className='glyphicon glyphicon-remove' />
              </motion.button>
                {ResourcesModalContentLoader.loadContent(resourcesType)}   
            </motion.div>
          </div>)}
      </AnimatePresence>

      <AnimatePresence>
        {isResearchModalOpen && (
          <motion.div
            ref={node => { researchContainer = node }}
            key="researchModal"
            className="researchModal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1, duration: 1 }}>
            <ResearchTimeLine />
            <motion.button className="close-research-modal-button aButton" id="closeResearchModalButton"
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
        <motion.button id="HeritageFundLogo"
          className="HeritageFund"
          whileHover={{ scale: 1.1 }}>
          <a href="https://www.heritagefund.org.uk" tabIndex='-1' target="_blank" rel="noopener noreferrer">
            <img src={heritageFund} alt="The Heritage Lottery Fund" width="108px" height="40px" />
          </a>
        </motion.button>
        <div className="social-icons">
          <motion.div className="abounceLogoLink"
            whileHover={{ scale: 1.2 }}>
            <a href="https://www.bouncetheatre.com" target="_blank" rel="noopener noreferrer">
              <img src={bounceLogo} alt="Bounce Theatre dot com" width="50px" height="50px" />
            </a>
          </motion.div>
          <motion.div className="nationalArchivesLogoLink"
            whileHover={{ scale: 1.2 }}>
            <a href="https://www.nationalarchives.gov.uk" target="_blank" rel="noopener noreferrer">
              <img src={nationalArchivesLogo} alt="The National Archives" width="30px" height="30px" />
            </a>
          </motion.div>
          
        </div>
      </div>

    </>
  );

};

export default App;
