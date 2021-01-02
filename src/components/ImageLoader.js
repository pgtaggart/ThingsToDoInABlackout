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

class ImageLoader {

    galleryLoader(name) {

        switch (name) {
    
            case 'RoomOne-GasMask' :
                    return [{original: RoomOneGasMask1},{original: RoomOneGasMask2},{original: RoomOneGasMask3},{original: RoomOneGasMask4}];
            case 'RoomOne-Poster' :
                    return [{original: RoomOnePoster1},{original: RoomOnePoster2},{original: RoomOnePoster3},{original: RoomOnePoster4},{original: RoomOnePoster5}];
            case 'RoomOne-RationBook' :
                    return [{original: RoomOneRationBook1},{original: RoomOneRationBook2}];
            default :
                return [];
    
        }
    
    }

}

const imageLoader = new ImageLoader();

export default imageLoader;