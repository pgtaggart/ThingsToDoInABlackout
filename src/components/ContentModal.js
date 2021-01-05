import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ModalClose } from './ModalClose';
import ImageGallery from 'react-image-gallery';
import imageLoader from './ImageLoader.js';
import textLoader from './TextLoader.js';
import audioLoader from './AudioLoader.js';

const ContentModal = (properties) => {
    
    const ref = useRef();
  
    // Monitor changes to the ref, this will effecively fire when this mounts
    useEffect(() => {
        ref.current.style.top=properties.top;
        ref.current.style.left=properties.left;
        ref.current.style.width=properties.width;
        ref.current.style.height=properties.height;

    });

    // Choose the innder div type based on the type of modal we are creating
    const renderModalType = () => {

        console.log('Modal Title: ' + properties.mapAreaTitle);
        console.log('Modal Type: ' + properties.className);
        console.log('Map Area type: ' + properties.mapAreaType);

        switch(properties.mapAreaType) {
            
            // These are the image gallery types
            case 'Image' :
                return (<ImageGallery items={imageLoader.galleryLoader(properties.mapAreaTitle)} 
                                showFullscreenButton={false} 
                                showPlayButton={false}
                                showThumbnails={false}
                                showNav={true}
                                autoPlay={false}
                                disableSwipe={true}/>);
            
            case 'AudioImage' :
                switch(properties.className) {
                    case 'audio-content-modal' :
                        return audioLoader.loadAudio(properties.mapAreaTitle);
                    case 'image-content-modal' :
                        return (<ImageGallery items={imageLoader.galleryLoader(properties.mapAreaTitle)} 
                                showFullscreenButton={false} 
                                showPlayButton={false}
                                showThumbnails={false}
                                showNav={true}
                                autoPlay={false}
                                disableSwipe={true}/>);
                    default :
                        return;
                }
            case 'Text' : // These are the text types so use the selector
                return (<div className="TypeWriterTextBlock">{textLoader.loadText(properties.mapAreaTitle)}</div>);
            default :
                return (<div className={properties.childClassName}></div>);
        }
    }
           

    const closeModalContent = () => {

        // hide the lightbox
        document.getElementById('lightBoxDiv').style.display = "none";

        // return the roomImage to full opacity
        document.getElementById('RoomImage' + (properties.roomIndex + 1)).style.opacity = '1';

        // If any of the modals are open then close them
        if(properties.isAudioContentModalOpen) properties.toggleAudioContentModalFunction();
        if(properties.isImageContentModalOpen) properties.toggleImageContentModalFunction();
        if(properties.isTextContentModalOpen) properties.toggleTextContentModalFunction();
    }

    // choose the icon for the close modal
    const closeModalIcon = () => {
        switch(properties.className) {
            case 'image-content-modal' :
                return (<ModalClose toggle={closeModalContent} icon='glyphicon glyphicon-remove-sign' className='close-modal-button'/>);
            case 'audio-content-modal' :
                // disable button for audio as we will always show an image gallery with this control, looks cleaner
                //return (<ModalClose toggle={closeModalContent} icon='glyphicon glyphicon-remove-sign' className='close-audio-modal-button'/>);
                return;
            default :
                return (<ModalClose toggle={closeModalContent} icon='glyphicon glyphicon-remove' className='close-modal-button'/> );
        }
    }

    return (
        <motion.div
            ref={ref}
            id={properties.modalId}
            className={properties.className}
            whileHover={properties.className === 'audio-content-modal' ? { scale: 1.2 } : {}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{delay: 0.0, duration: 0.7}}>
        {closeModalIcon()}
        {renderModalType()}
        </motion.div> 
    )
  }
  
  export default ContentModal;


    
         
    
