import React, { PureComponent } from 'react';

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

    componentDidMount() {
    }
    
    componentWillUnmount() {
    }
    
    componentDidUpdate(prevProps, prevState) {
    }

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
        var roomOneArea = new ImageMapArea('RoomOne', 'RoomOne', "801,210,1004,437", 'rect', '');
        imageMap = new ImageMap('RoomOne-imageMap', [roomOneArea]);
        backgroundColor = 'red';
    
      } else if (this.props.roomIndex === 1 ) {
        
        roomImage = roomTwo;
        roomImageId = 'RoomImage2';
        parentElementId = 'RoomTwo';
        imageWidth = '1920';
        imageHeight= '1080';
        var roomTwoArea = new ImageMapArea('RoomTwo', 'RoomTwo', "100,100,200,200", 'rect', '');
        imageMap = new ImageMap('RoomTwo-imageMap', [roomTwoArea]);
        backgroundColor = 'black';

       } else if (this.props.roomIndex === 2 ) {
        
        roomImage = roomThree;
        roomImageId = 'RoomImage3';
        parentElementId = 'RoomThree';
        imageWidth = '1920';
        imageHeight= '1080'; 
        var roomThreeArea = new ImageMapArea('RoomThree', 'RoomThree', "100,100,200,200", 'rect', '');
        imageMap = new ImageMap('RoomThree-imageMap', [roomThreeArea]);
        backgroundColor = 'grey';

      } else if (this.props.roomIndex === 3 ) {
        
        roomImage = roomFour;
        roomImageId = 'RoomImage4';
        parentElementId = 'RoomFour';
        imageWidth = '1920';
        imageHeight= '1080'; 
        var roomFourArea = new ImageMapArea('RoomFour', 'RoomFour', "100,100,200,200", 'rect', '');
        imageMap = new ImageMap('RoomFour-imageMap', [roomFourArea]);
        backgroundColor = 'blue';

      } else if (this.props.roomIndex === 4 ) {
        
        roomImage = roomFive;
        roomImageId = 'RoomImage5';
        parentElementId = 'RoomFive';
        imageWidth = '1920';
        imageHeight= '1080'; 
        var roomFiveArea = new ImageMapArea('RoomFive', 'RoomFive', "100,100,200,200", 'rect', '');
        imageMap = new ImageMap('RoomFive-imageMap', [roomFiveArea]);
        backgroundColor = 'white';

      } else if (this.props.roomIndex === 5 ) {
        
        roomImage = roomSix;
        roomImageId = 'RoomImage6';
        parentElementId = 'RoomSix';
        imageWidth = '1920';
        imageHeight= '1080';
        var roomSixArea = new ImageMapArea('RoomSix', 'RoomSix', "100,100,200,200", 'rect', '');
        imageMap = new ImageMap('RoomSix-imageMap', [roomSixArea]);
        backgroundColor = 'yellow';
      }

      return (
        <>
          <div className='modal-foreground' id={parentElementId}>
            <ResponsiveImageMap image={roomImage} originalWidth={imageWidth} originalHeight={imageHeight}
                map={imageMap} className='RoomImage' parentElementId={parentElementId} 
                imageId={roomImageId} backgroundColor = {backgroundColor}
                setRoomIndexFunction ={this.props.setRoomIndexFunction} toggleModalFunction={() => this.props.toggleModalFunction()}/>
           </div>
        </>
      )

    }
}