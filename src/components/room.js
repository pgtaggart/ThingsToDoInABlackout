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
    
        var roomOneAreaDiary = new ImageMapArea('RoomOne-Diary', 'RoomOne', '20,890,269,1058', 'rect', '', 'Text');
        var roomOneAreaGasMask = new ImageMapArea('RoomOne-GasMask', 'RoomOne', '1694,302,1829,554', 'rect', '', 'Text');
        var roomOneAreaRationBook = new ImageMapArea('RoomOne-RationBook', 'RoomOne', '1166,939,1398,1075', 'rect', '', 'Text');
        var roomOneAreaSuitcase = new ImageMapArea('RoomOne-Suitcase', 'RoomOne', '194,575,403,741', 'rect', '', 'AudioText');
        var roomOneAreaWindow = new ImageMapArea('RoomOne-Window', 'RoomOne', '423,134,751,439', 'rect', '', 'Text');

        imageMap = new ImageMap('RoomOne-imageMap', [roomOneAreaDiary, roomOneAreaGasMask, roomOneAreaRationBook, roomOneAreaSuitcase, roomOneAreaWindow]);
        backgroundColor = 'rgb(173, 151, 93)';
    
      } else if (this.props.roomIndex === 1 ) {
        
        roomImage = roomTwo;
        roomImageId = 'RoomImage2';
        parentElementId = 'RoomTwo';
        imageWidth = '1920';
        imageHeight= '1080';
        var roomTwoAreaNewspaper = new ImageMapArea('RoomTwo-Newspaper', 'RoomTwo', '1244,270,1434,476', 'rect', '', 'AudioText');
        var roomTwoAreaBedroll = new ImageMapArea('RoomTwo-Bedroll', 'RoomTwo', '637,1022,25,797', 'rect', '', 'Text');

        imageMap = new ImageMap('RoomTwo-imageMap', [roomTwoAreaNewspaper, roomTwoAreaBedroll]);
        backgroundColor = 'rgb(33, 32, 27)';
        
       } else if (this.props.roomIndex === 2 ) {
        
        roomImage = roomThree;
        roomImageId = 'RoomImage3';
        parentElementId = 'RoomThree';
        imageWidth = '1920';
        imageHeight= '1080'; 
        var roomThreeAreaBox = new ImageMapArea('RoomThree-Box', 'RoomThree', '883,671,1237,948', 'rect', '', 'Text');
        var roomThreeAreaTrunk = new ImageMapArea('RoomThree-Trunk', 'RoomThree', '1490,626,1878,1034', 'rect', '', 'Text');
        var roomThreeAreaNecklace = new ImageMapArea('RoomThree-Necklace', 'RoomThree', '221,619,371,775', 'rect', '', 'Text');
        var roomThreeAreaBrokenRadio = new ImageMapArea('RoomThree-BrokenRadio', 'RoomThree', '155,324,335,480', 'rect', '', 'Text');
        imageMap = new ImageMap('RoomThree-imageMap', [roomThreeAreaBox, roomThreeAreaTrunk, roomThreeAreaNecklace, roomThreeAreaBrokenRadio]);
        backgroundColor = 'rgb(80, 84, 70)';

      } else if (this.props.roomIndex === 3 ) {
        
        roomImage = roomFour;
        roomImageId = 'RoomImage4';
        parentElementId = 'RoomFour';
        imageWidth = '1920';
        imageHeight= '1080'; 
        var roomFourArea = new ImageMapArea('RoomFour', 'RoomFour', '100,100,200,200', 'rect', '');
        imageMap = new ImageMap('RoomFour-imageMap', [roomFourArea]);
        backgroundColor = 'rgb(80, 63, 37)';

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
                toggleTextContentModalFunction={() => this.props.toggleTextContentModalOpen()}
                isAudioContentModalOpen={this.props.isAudioContentModalOpen}
                isImageContentModalOpen={this.props.isImageContentModalOpen}
                isTextContentModalOpen={this.props.isTextContentModalOpen}
                setMapAreaTitleFunction={this.props.setMapAreaTitleFunction}
                setMapAreaTypeFunction={this.props.setMapAreaTypeFunction}/>

            <AnimatePresence>     
              {this.props.isAudioContentModalOpen &&(
                <ContentModal 
                  modalId='audio-content-modal-id'
                  className='audio-content-modal' 
                  childClassName='audio-content-modal-body'
                  otherModals = {['image-content-modal-id','text-content-modal-id']}
                  top='1%' left='1%'
                  toggleAudioContentModalFunction={() => this.props.toggleAudioContentModalOpen()}
                  toggleImageContentModalFunction={() => this.props.toggleImageContentModalOpen()}
                  toggleTextContentModalFunction={() => this.props.toggleTextContentModalOpen()}
                  isAudioContentModalOpen={this.props.isAudioContentModalOpen}
                  isImageContentModalOpen={this.props.isImageContentModalOpen}
                  isTextContentModalOpen={this.props.isTextContentModalOpen}
                  roomIndex={this.props.roomIndex}
                  mapAreaTitle={this.props.mapAreaTitle}
                  mapAreaType={this.props.mapAreaType}/>
              )}      
            </AnimatePresence>

            <AnimatePresence>     
              {this.props.isImageContentModalOpen &&(
                <ContentModal
                  modalId='image-content-modal-id' 
                  className='image-content-modal' 
                  childClassName='image-content-modal-body'
                  otherModals = {['audio-content-modal-id','text-content-modal-id']}
                  top='5%' left='15%' width='70vw' height='70vh'
                  toggleAudioContentModalFunction={() => this.props.toggleAudioContentModalOpen()}
                  toggleImageContentModalFunction={() => this.props.toggleImageContentModalOpen()}
                  toggleTextContentModalFunction={() => this.props.toggleTextContentModalOpen()}
                  isAudioContentModalOpen={this.props.isAudioContentModalOpen}
                  isImageContentModalOpen={this.props.isImageContentModalOpen}
                  isTextContentModalOpen={this.props.isTextContentModalOpen} 
                  roomIndex={this.props.roomIndex}
                  mapAreaTitle={this.props.mapAreaTitle}
                  mapAreaType={this.props.mapAreaType}/>
              )}      
            </AnimatePresence>

            <AnimatePresence>     
              {this.props.isTextContentModalOpen &&(
                <ContentModal
                  modalId='text-content-modal-id' 
                  className='text-content-modal' 
                  childClassName='text-content-modal-body'
                  otherModals = {['audio-content-modal-id','image-content-modal-id']}
                  top='5%' left='25%' width='50vw' height='80vh'
                  toggleAudioContentModalFunction={() => this.props.toggleAudioContentModalOpen()}
                  toggleImageContentModalFunction={() => this.props.toggleImageContentModalOpen()}
                  toggleTextContentModalFunction={() => this.props.toggleTextContentModalOpen()}
                  isAudioContentModalOpen={this.props.isAudioContentModalOpen}
                  isImageContentModalOpen={this.props.isImageContentModalOpen}
                  isTextContentModalOpen={this.props.isTextContentModalOpen}
                  roomIndex={this.props.roomIndex}
                  mapAreaTitle={this.props.mapAreaTitle}
                  mapAreaType={this.props.mapAreaType}/>
              )}      
            </AnimatePresence>

           </div>
        </>
      )

    }
}