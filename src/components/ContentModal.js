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
        
        switch(properties.mapAreaType) {
            
            case 'Image' : // These are the image gallery only types
        
                return (<ImageGallery items={imageLoader.galleryLoader(properties.mapAreaTitle)} 
                                showFullscreenButton={false} 
                                showPlayButton={false}
                                showThumbnails={false}
                                showNav={true}
                                autoPlay={false}
                                disableSwipe={true}/>);
            
            case 'Audio' :

                return audioLoader.loadAudio(properties.mapAreaTitle);

            case 'AudioImage' : // These types are image and audio
    
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

            case 'AudioText' : // type for text and audio

                switch(properties.className) {
                    case 'audio-content-modal' :
                        return audioLoader.loadAudio(properties.mapAreaTitle);
                    case 'text-content-modal' :
                        return textLoader.loadText(properties.mapAreaTitle);
                    default :
                        return;
                }
            
            case 'Text' : // These are the text types so use the selector
                return (textLoader.loadText(properties.mapAreaTitle));
            
            default :
                return (<div className={properties.childClassName}></div>);
        }
    }
           

    const closeModalContent = () => {

        // return the roomImage to full opacity
        document.getElementById('RoomImage' + (properties.roomIndex + 1)).style.opacity = '1';
        document.getElementById('RoomImage' + (properties.roomIndex + 1)).classList.remove("fade-out");
        document.getElementById('RoomImage' + (properties.roomIndex + 1)).classList.add("fade-in");
            
        // If any of the modals are open then close them
        if(properties.isAudioContentModalOpen) properties.toggleAudioContentModalFunction();
        if(properties.isImageContentModalOpen) properties.toggleImageContentModalFunction();
        if(properties.isTextContentModalOpen) properties.toggleTextContentModalFunction();
    }

    // choose the icon for the close modal
    const closeModalIcon = () => {
        switch(properties.className) {
            default :
                return (<ModalClose toggle={closeModalContent} icon='glyphicon glyphicon-remove' className='close-modal-button'/> );
        }
    }


    const chooseInitial = () => {
        
        switch(properties.className) {
            case 'audio-content-modal' :
                return {scale: 0};
            case 'image-content-modal' :
                return {opacity: 0};
            case 'text-content-modal' :
                return {y: -1000};
            default :
                return {};
        }

    }

    const chooseAnimate = () => {

        switch(properties.className) {
            case 'audio-content-modal' :
                return {scale: 1};
            case 'image-content-modal' :
                return {opacity: 1};
            case 'text-content-modal' :
                return {y: 0};
            default :
                return {};
        }

    }

    const chooseExit = () => {

        switch(properties.className) {
            case 'audio-content-modal' :
                return {scale: 0};
            case 'image-content-modal' :
                return {opacity: 0};
            case 'text-content-modal' :
                return {y: -1000};
            default :
                return {};
        }

    }

    return (
        <motion.div
            ref={ref}
            id={properties.modalId}
            className={properties.className}
            initial={chooseInitial()}
            animate={chooseAnimate()}
            exit={chooseExit()}
            transition={{delay: 0.0, duration: 1}}>
            {closeModalIcon()}
            {renderModalType()}
        </motion.div> 
    )
  }
  
  export default ContentModal;


    
         
    
