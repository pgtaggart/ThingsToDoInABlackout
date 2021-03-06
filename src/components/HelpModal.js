import React, { PureComponent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StreetScene from '../images/StreetScene.jpg';
import houseExample from '../images/ExampleRoom.jpg'

export default class HelpModal extends PureComponent {

    constructor(props) {
        super(props);
        this.container = null;
        this.state = { count: 0, scroll: 50 };

    }

    componentDidMount() {
        this.makeTimer();
    }

    makeTimer() {

        setInterval(() => {

            // This is to scroll the street help screen only when it is open
            if (this.props.isHelpModalStreetOpen) {

                // Incrememnt the count of the number of seconds that have passed
                this.setState({ count: this.state.count + 1 });

                if (this.state.count % 5 === 0) {
                    var scrollBack = this.state.scroll * -1;
                    this.setState({ scroll: scrollBack });
                }

                this.container.scrollBy({ left: this.state.scroll, behavior: 'smooth' });

            } else {

                // reset it for the next time this is active
                if (this.state.count !== 0) {
                    this.setState({ count: 0 });
                    this.setState({ scroll: 50 });
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
                                exit={{ y: '50%', x: -3000}}
                                transition={{ delay: 0.1, duration: 1 }}>

                                <motion.button className="close-help-modal-button aButton" id="closeHelpModalButton"
                                    onClick={() => this.figureOutCloseClick()}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="Close Help Popup">
                                    <i className='glyphicon glyphicon-remove' />
                                </motion.button>

                                <motion.div className="rightScrollButtonHelp"
                                    onClick={() => { this.props.toggleHelpModalInitialOpen(); this.props.toggleHelpModalStreetOpen(); }}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.95 }}
                                ><i className='glyphicon glyphicon-arrow-right' /></motion.div>

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
                                initial={{ y: '50%', x: 5000 }}
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

                                <motion.div className="rightScrollButtonHelp"
                                    onClick={() => { this.props.toggleHelpModalStreetOpen(); this.props.toggleHelpModalRoomOpen(); }}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.95 }}
                                ><i className='glyphicon glyphicon-arrow-right' /></motion.div>

                                <motion.div className="helpModalText"
                                    initial={{ y: 1000 }}
                                    animate={{ y: 0 }}
                                    exit={{ y: 1000 }}
                                    transition={{ delay: 1, duration: 1 }}>
                                    <p><br />Scroll through the street. Click on a house to learn more about it’s residents.</p>
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
                                    <p><i className="glyphicon glyphicon-headphones" /> - Introduces you to the person</p>
                                    <p><i className="glyphicon glyphicon-pencil" /> - Gives you snippets of their story</p>
                                    
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </>
        )
    }

}