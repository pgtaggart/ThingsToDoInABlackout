import React from 'react';
import PlayAudio from 'react-simple-audio-player';
import chroma from 'chroma-js';

const roomOneAudioColourScale = chroma.scale(['#C1AF26','#ffffff',]).mode('lch').colors(5);

class AudioLoader {

    loadAudio(name) {

        switch (name) {
                             
            default :
                return(<PlayAudio url={''} colorScale={roomOneAudioColourScale}/>); 
        }
    }
}

const audioLoader = new AudioLoader();

export default audioLoader;