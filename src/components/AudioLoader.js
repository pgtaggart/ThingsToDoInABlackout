import React from 'react';
import ReactPlayer from 'react-player';

class AudioLoader {

    loadAudio(name) {

        switch (name) {
            case 'RoomOne-Bed':
                return (<ReactPlayer url='https://soundcloud.com/bouncetheatre/things-to-do-in-a-blackout-clip' width='100%' height='100%' />);
            case 'RoomTwo-Newspaper':
                return (<ReactPlayer url='https://soundcloud.com/bouncetheatre/roomtwo-21032021-1630' width='100%' height='100%' />);
            case 'RoomFour-Chair':
                return (<ReactPlayer url='https://soundcloud.com/bouncetheatre/things-to-do-in-a-blackout-room-4' width='100%' height='100%' />);
            case 'RoomSix-Chair':
                return (<ReactPlayer url='https://soundcloud.com/bouncetheatre/things-to-do-in-a-blackout-room-6' width='100%' height='100%' />);
            default:
                return (<ReactPlayer url='https://soundcloud.com/bouncetheatre/things-to-do-in-a-blackout-clip' />);
        }
    }
}

const audioLoader = new AudioLoader();

export default audioLoader;