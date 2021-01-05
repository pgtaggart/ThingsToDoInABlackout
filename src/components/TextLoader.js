import React from 'react';
import Typist from 'react-typist';

class TextLoader {

    loadText(name) {

        switch (name) {
            case 'RoomOne-WallPicture' :
                return (<Typist className="TypeWriterTextHeader" cursor={{ hideWhenDone: true }} startDelay={1000}>Here is some example text</Typist>);
                    
            default :
                return (<Typist className="TypeWriterTextHeader" cursor={{ hideWhenDone: true }} startDelay={300}>No Text defined for this modal</Typist>);
        }
    }
}

const textLoader = new TextLoader();

export default textLoader;