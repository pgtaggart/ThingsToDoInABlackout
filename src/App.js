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
  const [isHelpModalBackgroundOpen, toggleHelpModalBackgroundOpen] = useCycle(false, true);
  const [isHelpModalInitialOpen, toggleHelpModalInitialOpen] = useCycle(false, true);
  const [isHelpModalRoomOpen, toggleHelpModalRoomOpen] = useCycle(false, true);
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
          <Navigation toggleAboutModalOpen={toggleAboutModalOpen} toggleNavOpen={toggleNavOpen}/>
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
              <div className="aboutModalInfo">
                <Typist className="aboutModalTextParagraph" cursor={{ show: false }} startDelay={1000} avgTypingDelay={50} >
                  <p>About Things to do in a Blackout</p> 
                  <br />
                  <p>During WW2 crime rose by a reported 57%. Fraud, gang culture, looting, and robbery impacted on people’s everyday life. Along with poverty, hunger, illness, and exceptional pressure – what was home really like during the war? Behind closed doors, every house has a story. Dive into our digital art project, which interprets the stories and research we were given access to by individuals, the National Archives and The Imperial War Museum.</p>
                  <br />
                  <p>Things to do in a Blackout was a pre-pandemic idea. In early 2020, Bounce Theatre had engaged over 300 young people in Kingston to explore the rise in crime during WW2 and the contemporary parallels – petty crime, food poverty, and our relationship with Europe were some of the topics of conversation. All of the young people were to be invited to take over the National Archives in an evening of mixed art entertainment in May 2020.</p> 
                  <br />
                  <p>By March 2020, we were in afterschool clubs, devising split scenes between a WW2 black market and the lack of toilet roll in Tesco. The project took a surreal new parallel. As we went into lockdown, we lost the chance to continue the work with those young people. Over the last year, we have selected elements of the research they were working on and captured some of their responses to turn all the ideas into a digital art piece. We established a digital writing project for young people and have woven their words into each room. Along with this, we have an open invitation to schools to create content for each room and see it uploaded onto the website until May 2021.</p> 
                  <br />
                  <p>Our thanks go to The National Lottery Heritage Fund for awarding us a grant and their support in adapting to the impact of Covid.</p>
                  <br />
                  <p>Bounce Theatre &#8482;, Copyright &#169; 2021</p> 
                  <br />
                  <br />
                  <p>Acknowledgements</p>
                  <br />
                  <p>Made possible thanks to The National Lottery Heritage Fund(Logo)</p>
                  <br />
                  <p>Heritage Partners</p>  
                  <p>The National Archives and The Imperial War Museum</p>
                  <br />
                  <p>Pre-Lockdown Collaborators
                  <p>Anstee Bridge, Chessington School, Coombe Boys School, The Kingston Academy,  Kingston Keep 
                  <br />
                  <p>Credits</p>
                  <br />
                  <p>Young Writers</p>
                  <br />
                  <p>Script Writer</p>
                  <p>Sharon Kanolik</p>
                  <br />
                  </p>Artist Acknowledgements</p>
                  <br />
                  <p>Street Scene by Eliza Willmott. Web:  https://elizawillmott.wixsite.com/portfolio/art-installation Instagram: @nellwillmott_art</p> 
                  <p>Room No. 1 by Charmaine Chaudry. Web: charmainechaudrydesigns.com Instagram: @charmainechaudrydesigns</p>
                  <p>Room No. 2 by Erin Tsw. Web:  www.erintse.com Instagram: @wingmanerintse and @mycareerisfine</p>
                  <p>Room No. 3 by Ruth Stewart. Web: ruthdrawsthings.co.uk Instagram: @ruthdrawsthings</p>
                  <p>Room No. 4 by Eve Martin. Web: evemartindesign.com Instagram: @eve_roisin</p>
                  <p>Room No. 5 by Luke W. Robson. Web: lukewrobson.com</p>
                  <p>Room No. 6 by Grace Evans. Web: Instagram: @graces_starlight</p>
                  <br />
                  <p>Resource Contributors</p>
                  <p>Katie Halliday Turner</p>
                  <p>Stewart Melton</p>
                  <p>Henry Mendoza</p> 
                  <br />
                  <p>Project Management</p>
                  <p>Louise Pendry and Lauren Purser</p>
                </Typist>
              </div>
              <motion.button className="close-about-modal-button" onClick={() => {toggleAboutModalOpen(); document.getElementById('mainMenu').style.opacity='1';}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                <i className='glyphicon glyphicon-remove'/>
              </motion.button>
            </motion.div>
            <motion.div className="aboutModalLogo"
                initial={{ y: 1000 }}
                animate={{ y: -10 }}
                exit={{ y: 1000 }}
                transition={{delay: 0.1, duration: 2}}>
                  <img src={bounceLogo} alt="Bounce Theatre dot com" width="100px" height="100px"/>
            </motion.div>
        </div>      
      )}      
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
