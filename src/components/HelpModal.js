import React, { PureComponent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StreetScene from '../images/StreetScene.jpg';
import houseExample from '../images/ExampleRoom.jpg'

export default class HelpModal extends PureComponent {

    constructor(props) {
        super(props);
        this.container = null;
        this.state = { count: 0, scroll: 200 };

    }

    componentDidMount() {
        this.makeTimer();
    }

    makeTimer() {

        setInterval(() => {

            if (this.props.isHelpModalBackgroundOpen) {

                // Incrememnt the count of the number of seconds that have passed
                this.setState({ count: this.state.count + 1 });

                // Wait 3 seconds before we do anything
                if (this.state.count < 3) return;

                if (this.props.isHelpModalInitialOpen) {

                    if (this.state.count === 10) {
                        this.props.toggleHelpModalInitialOpen();
                        this.props.toggleHelpModalStreetOpen();
                    }
                }

                // This is to scroll the initial help screen only when it is open
                if (this.props.isHelpModalStreetOpen) {

                    if (this.state.count % 15 === 0) {
                        var scrollBack = this.state.scroll * -1;
                        this.setState({ scroll: scrollBack });
                    }

                    if(this.state.count > 11) {
                        this.container.scrollBy({ left: this.state.scroll, behavior: 'smooth' });
                    }
                    
                    if (this.state.count === 20) {
                        this.props.toggleHelpModalStreetOpen();
                        this.props.toggleHelpModalRoomOpen();
                    }
                }

                // after a while we will close the whole lot
                if (this.state.count === 32) {
                    this.figureOutCloseClick();
                }

            } else {

                // reset it for the next time this is active
                if (this.state.count !== 0) {
                    this.setState({ count: 0 });
                    this.setState({ scroll: 200 });
                }

            }

        }, 1000);

    }

    figureOutCloseClick() {

        if (this.props.isHelpModalBackgroundOpen) {
            this.props.toggleHelpModalBackgroundOpen();
        }

        if (this.props.isHelpModalInitialOpen) {
            this.props.toggleHelpModalInitialOpen();
        }

        if (this.props.isHelpModalStreetOpen) {
            this.props.toggleHelpModalStreetOpen();
        }

        if (this.props.isHelpModalRoomOpen) {
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
                            transition={{ delay: 0.1, duration: 0.5 }}>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {this.props.isHelpModalInitialOpen && (
                        <div className="helpDivContainer">
                            <motion.div
                                key="helpModalInitial"
                                className="helpModal"
                                initial={{ y: 2000, x: '50%' }}
                                animate={{ y: '50%', x: '50%' }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.1, duration: 1 }}>

                                <motion.button className="close-help-modal-button aButton" id="closeHelpModalButton"
                                    onClick={() => this.figureOutCloseClick()}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="Close Help Popup">
                                    <i className='glyphicon glyphicon-remove' />
                                </motion.button>

                                <motion.div className="helpModalText"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: 1, duration: 0.5 }}>
                                    <h2 className="helpModalWelcome">Welcome to <i>'Things to do in a Blackout'</i></h2>
                                    <p>Despite common misconceptions today, during the Second World War crime rose by a startling 57%. The blackouts provided a cloak for all sorts of wrongdoings, from looting to more serious crimes of passion.<br /><br />
                                           What was originally intended to be a live performance has been revised and reimagined as a digital art project. Enter onto a street in London during the war. Explore the stories of ordinary people and how crime seeped into their lives.</p>
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {this.props.isHelpModalStreetOpen && (
                        <div className="helpDivContainer">
                            <motion.div
                                key="helpModalStreet"
                                className="helpModal"
                                initial={{ y: 2000, x: '50%' }}
                                animate={{ y: '50%', x: '50%' }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.1, duration: 1 }}>

                                <motion.button className="close-help-modal-button aButton" id="closeHelpModalButton"
                                    onClick={() => this.figureOutCloseClick()}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="Close Help Popup">
                                    <i className='glyphicon glyphicon-remove' />
                                </motion.button>

                                <motion.div className="helpModalContent"
                                    ref={node => { this.container = node }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: 1, duration: 0.5 }}>
                                    <img src={StreetScene} className="helpModalImage" alt="Home screen help" />
                                </motion.div>

                                <motion.div className="leftScrollButtonHelp"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: 1.5, duration: 1 }}><i className='glyphicon glyphicon-backward' /></motion.div>

                                <motion.div className="rightScrollButtonHelp"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: 1.5, duration: 1 }}><i className='glyphicon glyphicon-forward' /></motion.div>

                                <motion.div className="helpModalText"
                                    initial={{ y: 1000 }}
                                    animate={{ y: 0 }}
                                    exit={{ y: 1000 }}
                                    transition={{ delay: 1, duration: 1 }}>
                                    <p><br/>Scroll through the street. Click on a house to learn more about it’s residents.</p>
                                    <p>Explore them in sequence to get a timeline of the increase in crime as the war went on.</p>
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {this.props.isHelpModalRoomOpen && (
                        <div className="helpDivContainer">
                            <motion.div
                                key="helpModalRoom"
                                className="helpModal"
                                initial={{ scale: 0, x: '50%', y: '50%' }}
                                animate={{ scale: 1, x: '50%', y: '50%' }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0, duration: 1 }}>

                                <motion.button
                                    className="close-help-modal-button aButton" id="closeHelpModalButton"
                                    onClick={() => this.figureOutCloseClick()}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="Close Help Popup">
                                    <i className='glyphicon glyphicon-remove' />
                                </motion.button>

                                <motion.div className="helpModalContent"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: 1, duration: 0.5 }}>
                                    <img src={houseExample} className="helpModalImageRoom" alt="Home screen help" />
                                </motion.div>

                                <motion.div className="helpModalText"
                                    initial={{ y: 1000 }}
                                    animate={{ y: 0 }}
                                    exit={{ y: 1000 }}
                                    transition={{ delay: 1, duration: 1 }}>
                                    <p>Inside each room you will see:</p>
                                    <p><i className="glyphicon glyphicon-headphones"/> - Introduces you to the person</p>
                                    <p><i className="glyphicon glyphicon-pencil"/> - Gives you snippets of their story</p>
                                    <p><i className="glyphicon glyphicon-picture"/> - Imagines what life might have looked like for them</p>
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </>
        )
    }

}