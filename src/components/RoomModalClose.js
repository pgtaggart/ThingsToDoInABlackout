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

  // Set the colour of the close button
  var colour = 'black';
  if(properties.roomIndex === 1) {
    colour = 'white';
  }

  return (
    <motion.button className="room-close-modal-button" onClick={() => onMouseClick()} whileHover={{ scale: 1.5 }}>
      <svg id="RoomExitSVG" width="512" height="512" viewBox="0 0 800 800"  xmlns="http://www.w3.org/2000/svg">
        <g>
            <path stroke={colour} strokeWidth="2" 
              d="m62.651 31.241-7-6c-.296-.256-.713-.312-1.069-.149-.354.163-.582.517-.582.908v2h-11v-23c0-.553-.448-1-1-1h-9v-2c0-.3-.134-.583-.366-.773-.231-.189-.537-.264-.83-.207l-30 6c-.468.093-.804.503-.804.98v47c0 .465.32.868.773.974l30 7c.075.017.151.026.227.026.224 0 .443-.075.622-.217.239-.189.378-.478.378-.783v-2h9c.552 0 1-.447 1-1v-23h11v2c0 .391.228.745.582.908.134.062.276.092.418.092.234 0 .466-.082.651-.241l7-6c.222-.19.349-.467.349-.759s-.127-.569-.349-.759zm-31.651 29.499-28-6.534v-45.387l28-5.6zm10-2.74h-8v-52h8v22h-5c-.552 0-1 .447-1 1v6c0 .553.448 1 1 1h5zm15-22.174v-.826c0-.553-.448-1-1-1h-18v-4h18c.552 0 1-.447 1-1v-.826l4.463 3.826z"/>
            <path stroke={colour} strokeWidth="1"
              d="m26 36c1.682 0 3-1.757 3-4s-1.318-4-3-4-3 1.757-3 4 1.318 4 3 4zm0-6c.408 0 1 .779 1 2s-.592 2-1 2-1-.779-1-2 .592-2 1-2z"/>
        </g>
      </svg>
    </motion.button>
  )

}

export default RoomModalClose;