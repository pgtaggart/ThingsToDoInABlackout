import React, { PureComponent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typist from 'react-typist';
import StreetScene from '../images/StreetScene.jpg';
import houseExample from '../images/RoomTwo.jpg'

export default class HelpModal extends PureComponent {


    constructor(props) {
        super(props);
        this.container = null;
        this.state = { count: 0 , scroll: 200};
        
    }

    componentDidMount() {
        this.makeTimer();
    
    }

    makeTimer() { 
        
        setInterval(() => { 
            
            if(this.props.isHelpModalBackgroundOpen) {
                
                // Incrememnt the count of the number of seconds that have passed
                var countInc = this.state.count + 1;
                this.setState({count: countInc});
                
                // Wait 3 seconds before we do anything
                if(this.state.count < 3) return;

                // This is to scroll the initila help screen only when it is open
                if(this.props.isHelpModalInitialOpen) {
                    
                    if(this.state.count % 10 === 0) {
                        var scrollBack = this.state.scroll * -1;
                        this.setState({scroll: scrollBack});
                    }
    
                    this.container.scrollBy({ left: this.state.scroll, behavior: 'smooth' });
                    
                    if(this.state.count === 14) {
                        this.props.toggleHelpModalInitialOpen();
                        this.props.toggleHelpModalRoomOpen();
                    }
                }

                // after a while we will close the whole lot
                if(this.state.count === 25) {
                    this.figureOutCloseClick();
                }
            
            } else {

                // reset it for the next time this is active
                if(this.state.count !== 0) {
                    this.setState({count: 0});
                    this.setState({scroll: 200}); 
                }
                
            }
            
        }, 1000); 
    
    }

    figureOutCloseClick() {

        console.log('Figure out help close click called');

        if(this.props.isHelpModalBackgroundOpen) {
            this.props.toggleHelpModalBackgroundOpen();
        }

        if(this.props.isHelpModalInitialOpen) {
            this.props.toggleHelpModalInitialOpen();
        }

        if(this.props.isHelpModalRoomOpen) {
            this.props.toggleHelpModalRoomOpen();
        }
    }

    render() {

        return (
            <>

            <AnimatePresence>
                {this.props.isHelpModalBackgroundOpen && (
                    <motion.div className="helpModalBackground"
                        initial={{ x: -2000 }}
                        animate={{ x: 0 }}
                        exit={{ x: -2000 }}
                        transition={{delay: 0.1, duration: 0.5}}>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>     
                {this.props.isHelpModalInitialOpen && (
                    <div className="helpDivContainer">
                        <motion.div
                            key="helpModal"
                            className="helpModal"
                            initial={{ y: 1000, x: -350 }}
                            animate={{ y: -250, x: -350}}
                            exit={{ opacity: 0}}
                            transition={{delay: 0, duration: 1}}>
                        
                                <motion.button className="close-help-modal-button" onClick={() => this.figureOutCloseClick()} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                                    <i className='glyphicon glyphicon-remove'/>
                                </motion.button>

                                <motion.div className="helpModalContent" 
                                            ref={node => { this.container = node}}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{delay: 1, duration: 0.5}}>
                                                <img src={StreetScene} className="helpModalImage" alt="Home screen help"/>
                                </motion.div>
                                
                                <motion.div className="leftScrollButtonHelp"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{delay: 1.5, duration: 1}}><i className='glyphicon glyphicon-backward'/></motion.div>
                                
                                <motion.div className="rightScrollButtonHelp"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{delay: 1.5, duration: 1}}><i className='glyphicon glyphicon-forward'/></motion.div>
                                
                                <motion.div className="helpModalText"
                                            initial={{ y: 1000}}
                                            animate={{ y: 0}}
                                            exit={{ y: 1000}}
                                            transition={{delay: 1, duration: 1}}>
                                                <Typist className="helpModalTextParagraph" cursor={{ show: false }} startDelay={1000} avgTypingDelay={50} >
                                                    <p>Use the scroll buttons or your trackpad to scroll along the street.</p>
                                                    <Typist.Backspace count={67} delay={1000} />
                                                    <p>Click on any one of the six houses to enter a room in the house.</p>
                                                </Typist>
                                                
                                </motion.div>
                            </motion.div>
                     </div>    
                )}      
            </AnimatePresence>

            <AnimatePresence>     
                {this.props.isHelpModalRoomOpen && (
                    <div className="helpDivContainer">
                        <motion.div
                            key="helpModal"
                            className="helpModal"
                            initial={{ y: -250, x: -350, scale: 0 }}
                            animate={{ scale: 1}}
                            exit={{ opacity: 0}}
                            transition={{delay: 0, duration: 1}}>
                        
                                <motion.button className="close-help-modal-button" onClick={() => this.figureOutCloseClick()} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                                    <i className='glyphicon glyphicon-remove'/>
                                </motion.button>

                                <motion.div className="helpModalContent" 
                                            ref={node => { this.container = node}}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{delay: 1, duration: 0.5}}>
                                                <img src={houseExample} className="helpModalImageRoom" alt="Home screen help"/>
                                </motion.div>
                                
                                <motion.div className="helpModalText"
                                            initial={{ y: 1000}}
                                            animate={{ y: 0}}
                                            exit={{ y: 1000}}
                                            transition={{delay: 1, duration: 1}}>
                                                <Typist className="helpModalTextParagraph" cursor={{ show: false }} startDelay={1000} avgTypingDelay={50} >
                                                    <p>Look around the room to discover the secrets of the room</p>
                                                </Typist>
                                                
                                </motion.div>
                            </motion.div>
                     </div>    
                )}      
            </AnimatePresence>
            </>
        )
    }

}