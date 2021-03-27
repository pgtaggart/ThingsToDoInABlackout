import React from 'react';
import PlayAudio from 'react-simple-audio-player';
import chroma from 'chroma-js';

import RoomOneAudio from '../audio/RoomOneAudio.mp3';

const roomOneAudioColourScale = chroma.scale(['#C1AF26','#ffffff',]).mode('lch').colors(5);

class AudioLoader {

    loadAudio(name) {

        switch (name) {
                 
            case 'RoomOne-Bed':
                return(<PlayAudio url={RoomOneAudio} colorScale={roomOneAudioColourScale}/>);  
            default :
                return(<PlayAudio url={''} colorScale={roomOneAudioColourScale}/>); 

        }
    }
}

const audioLoader = new AudioLoader();

export default audioLoader;