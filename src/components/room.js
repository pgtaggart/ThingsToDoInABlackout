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
      var className = '';

      if (this.props.roomIndex === 0 ) {
        
        roomImage = roomOne;
        parentElementId = 'RoomOne';
        imageWidth = '1080';
        imageHeight= '714';    
        var roomOneArea = new ImageMapArea('RoomOne', 'RoomOne', "100,100,200,200", 'rect', '');
        imageMap = new ImageMap('RoomOne-imageMap', [roomOneArea]);
        className = 'roomOne';
    
      } else if (this.props.roomIndex === 1 ) {
        
        roomImage = roomTwo;
        parentElementId = 'RoomTwo';
        imageWidth = '1920';
        imageHeight= '1080';
        var roomTwoArea = new ImageMapArea('RoomTwo', 'RoomTwo', "100,100,200,200", 'rect', '');
        imageMap = new ImageMap('RoomTwo-imageMap', [roomTwoArea]);
        className = 'roomTwo';

       } else if (this.props.roomIndex === 2 ) {
        
        roomImage = roomThree;
        parentElementId = 'RoomThree';
        imageWidth = '3194';
        imageHeight= '2269';
        var roomThreeArea = new ImageMapArea('RoomThree', 'RoomThree', "100,100,200,200", 'rect', '');
        imageMap = new ImageMap('RoomThree-imageMap', [roomThreeArea]);
        className = 'roomThree';

      } else if (this.props.roomIndex === 3 ) {
        
        roomImage = roomFour;
        parentElementId = 'RoomFour';
        imageWidth = '4832';
        imageHeight= '2718';
        var roomFourArea = new ImageMapArea('RoomFour', 'RoomFour', "100,100,200,200", 'rect', '');
        imageMap = new ImageMap('RoomFour-imageMap', [roomFourArea]);
        className = 'roomFour';

      } else if (this.props.roomIndex === 4 ) {
        
        roomImage = roomFive;
        parentElementId = 'RoomFive';
        imageWidth = '1024';
        imageHeight= '700';
        var roomFiveArea = new ImageMapArea('RoomFive', 'RoomFive', "100,100,200,200", 'rect', '');
        imageMap = new ImageMap('RoomFive-imageMap', [roomFiveArea]);
        className = 'roomFive';

      } else if (this.props.roomIndex === 5 ) {
        
        roomImage = roomSix;
        parentElementId = 'RoomSix';
        imageWidth = '1920';
        imageHeight= '1080';
        var roomSixArea = new ImageMapArea('RoomSix', 'RoomSix', "100,100,200,200", 'rect', '');
        imageMap = new ImageMap('RoomSix-imageMap', [roomSixArea]);
        className = 'roomSix';

      }

      return (
        <>
          <div className={className} />
        </>
      )

    }
}