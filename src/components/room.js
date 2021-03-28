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
    
        var roomOneAreaDiary = new ImageMapArea('RoomOne-Diary', 'RoomOne', '17,883,271,1060', 'rect', 'A Diary', 'Text');
        var roomOneAreaGasMask = new ImageMapArea('RoomOne-GasMask', 'RoomOne', '1688,305,1832,559', 'rect', 'A Gas Mask', 'Text');
        var roomOneCurtains = new ImageMapArea('RoomOne-Curtains', 'RoomOne', '446,185,740,446', 'rect', 'Curtains in the room', 'Text');
        var roomOneBed = new ImageMapArea('RoomOne-Bed', 'RoomOne', '760,541,1026,792', 'rect', 'A Bed', 'Audio');
        var roomOneAreaSuitcase = new ImageMapArea('RoomOne-Suitcase', 'RoomOne', '195,556,402,754', 'rect', 'a Suitcase', 'Text');
        var roomOneAreaPhoto = new ImageMapArea('RoomOne-Photo', 'RoomOne', '1467,200,1605,297', 'rect', 'A photograph', 'Text');
        var roomOneAreaBookcase = new ImageMapArea('RoomOne-Bookcase', 'RoomOne', '1445,620,1629,775', 'rect', 'A Bookcase', 'Text');
        var roomOneAreaRationBook = new ImageMapArea('RoomOne-RationBook', 'RoomOne', '1155,931,1394,1078', 'rect', 'A Ration Book', 'Text');

        imageMap = new ImageMap('RoomOne-imageMap', [roomOneAreaDiary, roomOneAreaGasMask, roomOneCurtains, roomOneBed, roomOneAreaSuitcase, roomOneAreaPhoto, roomOneAreaBookcase, roomOneAreaRationBook]);
        backgroundColor = 'rgb(173, 151, 93)';
    
      } else if (this.props.roomIndex === 1 ) {
        
        roomImage = roomTwo;
        roomImageId = 'RoomImage2';
        parentElementId = 'RoomTwo';
        imageWidth = '1920';
        imageHeight= '1080';

        var roomTwoAreaDiary = new ImageMapArea('RoomTwo-Diary', 'RoomTwo', '334,890,619,1038', 'rect', 'A Diary', 'Text');
        var roomTwoAreaWindow = new ImageMapArea('RoomTwo-Window', 'RoomTwo', '168,142,434,502', 'rect', 'A Window', 'Text');
        var roomTwoAreaRope = new ImageMapArea('RoomTwo-Rope', 'RoomTwo', '834,956,1024,1055', 'rect', 'A piece of rope', 'Text');
        var roomTwoAreaBookcase = new ImageMapArea('RoomTwo-Bookcase', 'RoomTwo', '1328,588,1433,793', 'rect', 'A Bookcase', 'Text');
        var roomTwoAreaNewspaper = new ImageMapArea('RoomTwo-Newspaper', 'RoomTwo', '1426,476,1255,273', 'rect', 'A newspaper', 'Audio');
        
        imageMap = new ImageMap('RoomTwo-imageMap', [roomTwoAreaDiary, roomTwoAreaWindow, roomTwoAreaRope, roomTwoAreaBookcase, roomTwoAreaNewspaper]);
        backgroundColor = 'rgb(33, 32, 27)';
        
       } else if (this.props.roomIndex === 2 ) {
        
        roomImage = roomThree;
        roomImageId = 'RoomImage3';
        parentElementId = 'RoomThree';
        imageWidth = '1920';
        imageHeight= '1080'; 
        
        var roomThreeAreaLetter = new ImageMapArea('RoomThree-Letter', 'RoomThree', '272,682,476,925', 'rect', 'A Letter', 'Text');
        var roomThreeAreaScarf = new ImageMapArea('RoomThree-Scarf', 'RoomThree', '1656,168,1833,431', 'rect', 'A Scarf', 'Text');
        var roomThreeAreaTrunk = new ImageMapArea('RoomThree-Trunk', 'RoomThree', '1515,639,1875,993', 'rect', 'A Suitcase', 'Text');
        var roomThreeAreaSandwiches = new ImageMapArea('RoomThree-Sandwiches', 'RoomThree', '1166,809,980,671', 'rect', 'Sanwiches', 'Text');
        var roomThreeAreaShelf = new ImageMapArea('RoomThree-Shelf', 'RoomThree', '150,320,340,483', 'rect', 'A Shelf', 'Text');

        imageMap = new ImageMap('RoomThree-imageMap', [roomThreeAreaLetter, roomThreeAreaScarf, roomThreeAreaTrunk, roomThreeAreaSandwiches, roomThreeAreaShelf]);
        backgroundColor = 'rgb(80, 84, 70)';

      } else if (this.props.roomIndex === 3 ) {
        
        roomImage = roomFour;
        roomImageId = 'RoomImage4';
        parentElementId = 'RoomFour';
        imageWidth = '1920';
        imageHeight= '1080';

        var roomFourAreaChair = new ImageMapArea('RoomFour-Chair', 'RoomFour', '795,509,1018,843', 'rect', 'A Chair', 'Audio');
        var roomFourAreaRadio = new ImageMapArea('RoomFour-Radio', 'RoomFour', '184,637,377,751', 'rect', 'A Radio', 'Text');
        var roomFourAreaPatientChair = new ImageMapArea('RoomFour-PatientChair', 'RoomFour', '552,697,661,924', 'rect', 'A Chair', 'Text');
        var roomFourAreaWheelChair = new ImageMapArea('RoomFour-WheelChair', 'RoomFour', '1387,568,1614,997', 'rect', 'A Wheelchair', 'Text');

        imageMap = new ImageMap('RoomFour-imageMap', [roomFourAreaChair, roomFourAreaRadio, roomFourAreaPatientChair, roomFourAreaWheelChair]);
        backgroundColor = 'rgb(80, 63, 37)';

      } else if (this.props.roomIndex === 4 ) {
        
        roomImage = roomFive;
        roomImageId = 'RoomImage5';
        parentElementId = 'RoomFive';
        imageWidth = '1920';
        imageHeight= '1080';

        var roomFiveAreaArmchair = new ImageMapArea('RoomFive-Armchair', 'RoomFive', '1303,646,1585,838', 'rect', 'An Armchair', 'Text');
        var roomFiveAreaBooks = new ImageMapArea('RoomFive-Books', 'RoomFive', '696,894,917,1010', 'rect', 'Some Books', 'Text');
        var roomFiveAreaTable = new ImageMapArea('RoomFive-Table', 'RoomFive', '1069,878,1312,1000', 'rect', 'A small table', 'Text');
        var roomFiveAreaBookcase = new ImageMapArea('RoomFive-Bookcase', 'RoomFive', '3,593,182,1014', 'rect', 'A bookcase', 'Text');
        var roomFiveAreaFireplace = new ImageMapArea('RoomFive-Fireplace', 'RoomFive', '740,354,1176,517', 'rect', 'A fireplace', 'Text');

        imageMap = new ImageMap('RoomFive-imageMap', [roomFiveAreaArmchair, roomFiveAreaBooks, roomFiveAreaTable, roomFiveAreaBookcase, roomFiveAreaFireplace]);
        backgroundColor = 'rgb(190, 180, 169)';

      } else if (this.props.roomIndex === 5 ) {
        
        roomImage = roomSix;
        roomImageId = 'RoomImage6';
        parentElementId = 'RoomSix';
        imageWidth = '1920';
        imageHeight= '1080';

        var roomSixAreaDoor = new ImageMapArea('RoomSix-Door', 'RoomSix', '1215,249,1314,606', 'rect', 'A Door', 'Text');
        var roomSixAreaRationBook = new ImageMapArea('RoomSix-RationBook', 'RoomSix', '863,878,993,979', 'rect', 'A Ration Book', 'Text');
        var roomSixAreaScale = new ImageMapArea('RoomSix-Scale', 'RoomSix', '1559,573,1720,773', 'rect', 'A Weighing Scale', 'Text');
        var roomSixAreaChair = new ImageMapArea('RoomSix-Chair', 'RoomSix', '431,690,630,1045', 'rect', 'A Chair', 'Audio');
        var roomSixAreaWindow = new ImageMapArea('RoomSix-Window', 'RoomSix', '538,235,754,425', 'rect', 'A Window', 'Text');
        var roomSixAreaWindow2 = new ImageMapArea('RoomSix-Window2', 'RoomSix', '927,254,1119,415', 'rect', 'A Window', 'Text');
        var roomSixAreaPhoto = new ImageMapArea('RoomSix-Photo', 'RoomSix', '790,263,868,344', 'rect', 'A Photograph', 'Text');
        var roomSixAreaSink = new ImageMapArea('RoomSix-Sink', 'RoomSix', '203,629,382,763', 'rect', 'A Sink', 'Text');
        var roomSixAreaCooker = new ImageMapArea('RoomSix-Cooker', 'RoomSix', '713,439,932,624', 'rect', 'A Cooker', 'Text');
        var roomSixAreaChair2 = new ImageMapArea('RoomSix-Chair2', 'RoomSix', '1108,726,1287,839', 'rect', 'A Chair', 'Text');
        var roomSixAreaFridge = new ImageMapArea('RoomSix-Fridge', 'RoomSix', '260,324,459,524', 'rect', 'A Fridge', 'Text');
        var roomSixAreaSugar = new ImageMapArea('RoomSix-Sugar', 'RoomSix', '1349,616,1495,705', 'rect', 'A packet of Sugar', 'Text');
        var roomSixAreaCupboard = new ImageMapArea('RoomSix-Cupboard', 'RoomSix', '1549,181,1797,329', 'rect', 'A Cupboard', 'Text');
        var roomSixAreaLetter = new ImageMapArea('RoomSix-Letter', 'RoomSix', '120,824,289,902', 'rect', 'A Letter', 'Text');

        imageMap = new ImageMap('RoomSix-imageMap', [roomSixAreaDoor, roomSixAreaRationBook, roomSixAreaScale, roomSixAreaChair, roomSixAreaWindow, roomSixAreaWindow2, 
          roomSixAreaPhoto, roomSixAreaSink, roomSixAreaCooker, roomSixAreaChair2, roomSixAreaFridge, roomSixAreaSugar, roomSixAreaCupboard, roomSixAreaLetter]);
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
                  top='10%' left='25%' width='50vw' height='50vh'
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