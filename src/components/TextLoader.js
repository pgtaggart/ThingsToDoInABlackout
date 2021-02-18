import React from 'react';
import Typist from 'react-typist';

class TextLoader {

    loadText(name) {

        switch (name) {
            case 'RoomOne-WallPicture' :
                return (<Typist className="TypeWriterTextHeader" cursor={{ show: false }} startDelay={1000}>
                    <p>By Maia Wootton</p>
                    <Typist.Delay ms={1000} />
                    <br />
                    <p>The radio crackled on, alerting me of the coming air raid but I could not leave - not without finishing this appointment. No-one will die again under my watch. Not since I couldn’t save poor, poor Natalia.</p> 
                    <Typist.Delay ms={500} />
                    <br />
                    <Typist.Delay ms={500} />
                    <p>A Nazi plane soars past my window the sound startles me. I trudge across to my bag, discarded in the corner. I open it to reveal six trays laden with test tubes, medicine bottles and surgical equipment. I retrieve a small grey and blue bottle, its label worn down with age. I also get a pack of disposable syringes. I turn round to a prescription receipt on my desk. “Once a day for three months then come see me if there is any change.” No reply. 
                    “Come on Nathan, it will help you… you… recover.” I turn around. Nathan was nowhere to be seen! Frantically I search through everything. Then I realise that Nathan’s wheelchair was left strewn across the office to the far wall.</p> 
                    <Typist.Delay ms={500} />
                    <br />
                    <Typist.Delay ms={500} />
                    <p>23-year-old Nathan was walking down the corridor. Nathan was in a dramatic car accident when he was 12. He has been in a wheelchair since. Then Nathan turned towards me. I could not bear to look at him. His features were as grey and ashy as a thunder cloud. His eyes were white orbs, as smooth as marble. His nails were as long and jagged as knives. Nathan stumbled towards me. The once young face of the patient I was treating stared back at me for half a second. My vision turned black and a stabbing pain in my shoulders made me want to scream my life away...</p>
                    </Typist>);
            
            case 'RoomOne-Diary' :
                return (<Typist className="TypeWriterTextHeader" cursor={{ show: false }} startDelay={1000}>
                        <p>This is whatever you like in here</p>
                        </Typist>);

            default :
                return (<Typist className="TypeWriterTextHeader" cursor={{ hideWhenDone: true }} startDelay={300}>No Text defined for this modal</Typist>);
        }
    }
}

const textLoader = new TextLoader();

export default textLoader;