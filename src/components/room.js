import React, { PureComponent } from 'react';
import { AnimatePresence } from 'framer-motion';
import ContentModal from './ContentModal';

import ResponsiveImageMap from './ResponsiveImageMap';
import ImageMapArea from './ImageMapArea';
import ImageMap from './ImageMap';
import roomOne from '../images/RoomOne.jpg';
import roomTwo from '../images/RoomTwo.jpg';
import roomThree from '../images/RoomThree.jpg';
import roomFour from '../images/RoomFour.jpg';
import roomFive from '../images/RoomFive.jpg';
import roomSix from '../images/RoomSix.jpg';

export default class Room extends PureComponent {

    render() {

      var roomImage = null;
      var imageMap = null;
      var parentElementId = '';
      var imageWidth = '';
      var imageHeight= '';
      var roomImageId = '';
      var backgroundColor = '';
     
      if (this.props.roomIndex === 0 ) {
        
        roomImage = roomOne;
        roomImageId = 'RoomImage1';
        parentElementId = 'RoomOne';
        imageWidth = '1920';
        imageHeight= '1080';    
        var roomOneAreaOne = new ImageMapArea('RoomOne', 'RoomOne', '801,210,1004,437', 'rect', '', 'Audio');
        var roomOneAreaTwo = new ImageMapArea('RoomOne', 'RoomOne', '1681,297,1835,566', 'rect', '', 'Image');
        var roomOneAreaThree = new ImageMapArea('RoomOne', 'RoomOne', '20,877,271,1063', 'rect', '', 'Text');
        imageMap = new ImageMap('RoomOne-imageMap', [roomOneAreaOne, roomOneAreaTwo, roomOneAreaThree]);
        backgroundColor = 'rgb(210, 201, 140)';
    
      } else if (this.props.roomIndex === 1 ) {
        
        roomImage = roomTwo;
        roomImageId = 'RoomImage2';
        parentElementId = 'RoomTwo';
        imageWidth = '1920';
        imageHeight= '1080';
        var roomTwoArea = new ImageMapArea('RoomTwo', 'RoomTwo', '100,100,200,200', 'rect', '');
        imageMap = new ImageMap('RoomTwo-imageMap', [roomTwoArea]);
        backgroundColor = 'rgb(33, 32, 27)';
        
       } else if (this.props.roomIndex === 2 ) {
        
        roomImage = roomThree;
        roomImageId = 'RoomImage3';
        parentElementId = 'RoomThree';
        imageWidth = '1920';
        imageHeight= '1080'; 
        var roomThreeArea = new ImageMapArea('RoomThree', 'RoomThree', '100,100,200,200', 'rect', '');
        imageMap = new ImageMap('RoomThree-imageMap', [roomThreeArea]);
        backgroundColor = 'rgb(209, 211, 196)';

      } else if (this.props.roomIndex === 3 ) {
        
        roomImage = roomFour;
        roomImageId = 'RoomImage4';
        parentElementId = 'RoomFour';
        imageWidth = '1920';
        imageHeight= '1080'; 
        var roomFourArea = new ImageMapArea('RoomFour', 'RoomFour', '100,100,200,200', 'rect', '');
        imageMap = new ImageMap('RoomFour-imageMap', [roomFourArea]);
        backgroundColor = 'rgb(205, 205, 203)';

      } else if (this.props.roomIndex === 4 ) {
        
        roomImage = roomFive;
        roomImageId = 'RoomImage5';
        parentElementId = 'RoomFive';
        imageWidth = '1920';
        imageHeight= '1080'; 
        var roomFiveArea = new ImageMapArea('RoomFive', 'RoomFive', '100,100,200,200', 'rect', '');
        imageMap = new ImageMap('RoomFive-imageMap', [roomFiveArea]);
        backgroundColor = 'rgb(190, 180, 169)';

      } else if (this.props.roomIndex === 5 ) {
        
        roomImage = roomSix;
        roomImageId = 'RoomImage6';
        parentElementId = 'RoomSix';
        imageWidth = '1920';
        imageHeight= '1080';
        var roomSixArea = new ImageMapArea('RoomSix', 'RoomSix', '100,100,200,200', 'rect', '');
        imageMap = new ImageMap('RoomSix-imageMap', [roomSixArea]);
        backgroundColor = 'rgb(215, 205, 185)';
      }

      return (
        <>
          <div className='modal-foreground' id={parentElementId}>
            
            <ResponsiveImageMap image={roomImage} originalWidth={imageWidth} originalHeight={imageHeight}
                map={imageMap} className='RoomImage' parentElementId={parentElementId} 
                imageId={roomImageId} backgroundColor={backgroundColor} useViewHeight='false'
                toggleAudioContentModalFunction={() => this.props.toggleAudioContentModalOpen()}
                toggleImageContentModalFunction={() => this.props.toggleImageContentModalOpen()}
                toggleTextContentModalFunction={() => this.props.toggleTextContentModalOpen()} />

            <AnimatePresence>     
              {this.props.isAudioContentModalOpen &&(
                <ContentModal 
                  modalId='audio-content-modal-id'
                  className='audio-content-modal' 
                  childClassName='audio-content-modal-body'
                  otherModals = {['image-content-modal-id','text-content-modal-id']}
                  top='1%' left='1%'
                  toggleModalFunction={() => this.props.toggleAudioContentModalOpen()}
                  canMove={true}
                  roomIndex={this.props.roomIndex}/>
              )}      
            </AnimatePresence>

            <AnimatePresence>     
              {this.props.isImageContentModalOpen &&(
                <ContentModal
                  modalId='image-content-modal-id' 
                  className='image-content-modal' 
                  childClassName='image-content-modal-body'
                  otherModals = {['audio-content-modal-id','text-content-modal-id']}
                  top='15%' left='15%' width='70vw' height='70vh'
                  toggleModalFunction={() => this.props.toggleImageContentModalOpen()} 
                  canMove={false}
                  roomIndex={this.props.roomIndex}/>
              )}      
            </AnimatePresence>

            <AnimatePresence>     
              {this.props.isTextContentModalOpen &&(
                <ContentModal
                  modalId='text-content-modal-id' 
                  className='text-content-modal' 
                  childClassName='text-content-modal-body'
                  otherModals = {['audio-content-modal-id','image-content-modal-id']}
                  top='1%' left='25%' width='50vw' height='80vh'
                  toggleModalFunction={() => this.props.toggleTextContentModalOpen()}
                  canMove={true}
                  roomIndex={this.props.roomIndex}/>
              )}      
            </AnimatePresence>

           </div>
        </>
      )

    }
}