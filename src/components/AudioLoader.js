import React from 'react';
import ReactPlayer from 'react-player';

class AudioLoader {

    loadAudio(name) {

        switch (name) {
            case 'RoomOne-Bed':
                return(<ReactPlayer url='https://soundcloud.com/bouncetheatre/things-to-do-in-a-blackout-clip' width='100%' height='100%'/>);  
            default :
                return(<ReactPlayer url='https://soundcloud.com/bouncetheatre/things-to-do-in-a-blackout-clip'/>); 
        }
    }
}

const audioLoader = new AudioLoader();

export default audioLoader;