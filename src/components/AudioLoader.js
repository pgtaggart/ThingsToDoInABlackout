import React from 'react';
import PlayAudio from 'react-simple-audio-player';
import chroma from 'chroma-js';

import RationBookAudio from '../media/room-one/RationBook/Rationing.mp3';
import EvacuatedAudio from '../media/room-one/Suitcase/EvacuatedAudio.mp3';
import BlackoutCurtainsAudio from '../media/room-one/Window/BlackoutCurtainsAudio.mp3';
import SweetRationingAudio from '../media/room-one/Sweets/SweetRationing.mp3';

const roomOneAudioColourScale = chroma.scale(['#C1AF26','#ffffff',]).mode('lch').colors(5);

class AudioLoader {

    loadAudio(name) {

        switch (name) {
            case 'RoomOne-RationBook' :
                return(<PlayAudio url={RationBookAudio} colorScale={roomOneAudioColourScale}/>);    
            case 'RoomOne-Window' :
                return(<PlayAudio url={BlackoutCurtainsAudio} colorScale={roomOneAudioColourScale}/>);
            case 'RoomOne-Sweets' :
                return(<PlayAudio url={SweetRationingAudio} colorScale={roomOneAudioColourScale}/>);
            case 'RoomOne-Suitcase' :
                return(<PlayAudio url={EvacuatedAudio} colorScale={roomOneAudioColourScale}/>);                
            default :
                return;
        }
    }
}

const audioLoader = new AudioLoader();

export default audioLoader;