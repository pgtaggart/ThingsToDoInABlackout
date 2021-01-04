import RoomOneGasMask1 from '../media/room-one/GasMask/AdultMask1.jpg';
import RoomOneGasMask2 from '../media/room-one/GasMask/AdultMask2.jpg';
import RoomOneGasMask3 from '../media/room-one/GasMask/ChildMask1.jpg';
import RoomOneGasMask4 from '../media/room-one/GasMask/Poster.jpg';

import RoomOnePoster1 from '../media/room-one/Picture/AirRaidWarning.jpg';
import RoomOnePoster2 from '../media/room-one/Picture/CowAndKids.jpg';
import RoomOnePoster3 from '../media/room-one/Picture/CowPainted.jpg';
import RoomOnePoster4 from '../media/room-one/Picture/Poster1.jpg';
import RoomOnePoster5 from '../media/room-one/Picture/Poster2.jpg';

import RoomOneRationBook1 from '../media/room-one/RationBook/Queue.jpg';
import RoomOneRationBook2 from '../media/room-one/RationBook/Rations.jpg';

import RoomOneSuitcase1 from '../media/room-one/Suitcase/BlitzKids.jpg';
import RoomOneSuitcase2 from '../media/room-one/Suitcase/BoyBombedOut.jpg';
import RoomOneSuitcase3 from '../media/room-one/Suitcase/ChildrenatTrainStation.jpg';
import RoomOneSuitcase4 from '../media/room-one/Suitcase/CountryGirls.jpg';
import RoomOneSuitcase5 from '../media/room-one/Suitcase/EvacuationChild.jpg';
import RoomOneSuitcase6 from '../media/room-one/Suitcase/EvacuationChildrenShoes.jpg';
import RoomOneSuitcase7 from '../media/room-one/Suitcase/EvacuationStation.jpg';
import RoomOneSuitcase8 from '../media/room-one/Suitcase/GirlBombedOut.jpg';
import RoomOneSuitcase9 from '../media/room-one/Suitcase/TrainStationEvacs.jpg';

import RoomOneSweets1 from '../media/room-one/Sweets/Humbug.jpg';

import RoomOneWindow1 from '../media/room-one/Window/BlackoutCurtains.jpg';
import RoomOneWindow2 from '../media/room-one/Window/LondonBlitz.jpg';
import RoomOneWindow3 from '../media/room-one/Window/StPaulsBlitz.jpg';

class ImageLoader {

    galleryLoader(name) {

        switch (name) {
    
            case 'RoomOne-GasMask' :
                return [{original: RoomOneGasMask1, Description:'BOB' },{original: RoomOneGasMask2},{original: RoomOneGasMask3},{original: RoomOneGasMask4}];
            case 'RoomOne-Poster' :
                return [{original: RoomOnePoster1},{original: RoomOnePoster2},{original: RoomOnePoster3},{original: RoomOnePoster4},{original: RoomOnePoster5}];
            case 'RoomOne-RationBook' :
                return [{original: RoomOneRationBook1},{original: RoomOneRationBook2}];
            case 'RoomOne-Suitcase' :
                return [{original: RoomOneSuitcase1},{original: RoomOneSuitcase2},{original: RoomOneSuitcase3},
                        {original: RoomOneSuitcase4},{original: RoomOneSuitcase5},{original: RoomOneSuitcase6},
                        {original: RoomOneSuitcase7},{original: RoomOneSuitcase8},{original: RoomOneSuitcase9}];
            case 'RoomOne-Sweets' :
                return [{original: RoomOneSweets1}];
            case 'RoomOne-Window' :
                return [{original: RoomOneWindow1},{original: RoomOneWindow2},{original: RoomOneWindow3}];
            default :
                return [];
    
        }
    
    }

}

const imageLoader = new ImageLoader();

export default imageLoader;