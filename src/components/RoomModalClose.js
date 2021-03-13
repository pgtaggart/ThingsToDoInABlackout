import * as React from "react";
import { motion } from 'framer-motion';
import { PureComponent } from "react";

export default class RoomModalClose extends PureComponent {

  onMouseClick = (event) => {

    // We are closing the room, so we need to close any open modals
    if (this.props.isAudioContentModalOpen) {
      this.props.toggleAudioContentModalOpen();
    }

    if (this.props.isImageContentModalOpen) {
      this.props.toggleImageContentModalOpen();
    }

    if (this.props.isTextContentModalOpen) {
      this.props.toggleTextContentModalOpen();
    }

    // Close the room modal
    this.props.toggle();
  }

  render() {

    return (
      <motion.button className="room-close-modal-button" 
        id="CloseRoomModalButton"
        onClick={() => this.onMouseClick()}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Close Room">
        <i className='glyphicon glyphicon-remove' />
      </motion.button>
    )
  }
}