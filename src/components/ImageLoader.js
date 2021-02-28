import hfh1 from '../images/resources/HFH_1.jpg';
import hfh2 from '../images/resources/HFH_2.jpg';
import hfh3 from '../images/resources/HFH_3.jpg';
import hfh4 from '../images/resources/HFH_4.jpg';
import hfh5 from '../images/resources/HFH_5.jpg';
import hfh6 from '../images/resources/HFH_6.jpg';
import hfh7 from '../images/resources/HFH_7.jpg';
import hfh8 from '../images/resources/HFH_8.jpg';
import hfh9 from '../images/resources/HFH_9.jpg';

class ImageLoader {

    galleryLoader(name) {

        switch (name) {
            
            case 'Resource-Images' :
                return [{ image: hfh1, text:'Click here to read Heritage From Home Issue 1'}, 
                        { image: hfh2, text:'Click here to read Heritage From Home Issue 2'},
                        { image: hfh3, text:'Click here to read Heritage From Home Issue 3'},
                        { image: hfh4, text:'Click here to read Heritage From Home Issue 4'},
                        { image: hfh5, text:'Click here to read Heritage From Home Issue 5'},
                        { image: hfh6, text:'Click here to read Heritage From Home Issue 6'},
                        { image: hfh7, text:'Click here to read Heritage From Home Issue 7'},
                        { image: hfh8, text:'Click here to read Heritage From Home Issue 8'},
                        { image: hfh9, text:'Click here to read Heritage From Home Issue 9'}];
            default :
                return [];
    
        }
    
    }

}

const imageLoader = new ImageLoader();

export default imageLoader;