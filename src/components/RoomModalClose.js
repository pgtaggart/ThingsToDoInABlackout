import * as React from "react";
import { motion } from 'framer-motion';

const RoomModalClose = (properties) => {

  const onMouseClick = (event) => {
    
    // We are closing the room, so we need to close any open modals
    if(properties.isAudioContentModalOpen) {
      properties.toggleAudioContentModalOpen();
    }

    if(properties.isImageContentModalOpen) {
      properties.toggleImageContentModalOpen();
    }

    if(properties.isTextContentModalOpen) {
      properties.toggleTextContentModalOpen();
    }

    // Close the room modal
    properties.toggle();
  }

  return (
    <motion.button className="room-close-modal-button" onClick={() => onMouseClick()} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }}>
      <i className='glyphicon glyphicon-home'/>
    </motion.button>
  )

}

export default RoomModalClose;