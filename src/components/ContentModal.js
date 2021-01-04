import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ModalClose } from './ModalClose';
import ImageGallery from 'react-image-gallery';
import PlayAudio from 'react-simple-audio-player';
import chroma from 'chroma-js';
import imageLoader from './ImageLoader.js'

import RationBookAudio from '../media/room-one/RationBook/Rationing.mp3';
import EvacuatedAudio from '../media/room-one/Suitcase/EvacuatedAudio.mp3';
import BlackoutCurtainsAudio from '../media/room-one/Window/BlackoutCurtainsAudio.mp3';
import SweetRationingAudio from '../media/room-one/Sweets/SweetRationing.mp3';

const roomOneAudioColourScale = chroma.scale(['#C1AF26','#ffffff',]).mode('lch').colors(5);

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

        switch(properties.roomIndex) {

            case 0 :
            {
                switch(properties.mapAreaTitle) {
                    
                    case 'RoomOne-GasMask' :
                    case 'RoomOne-Poster' :
                        return ( <ImageGallery items={imageLoader.galleryLoader(properties.mapAreaTitle)} 
                                        showFullscreenButton={false} 
                                        showPlayButton={false}
                                        showThumbnails={false}
                                        showNav={true}
                                        autoPlay={false}
                                        disableSwipe={true}/>);
                    
                    case 'RoomOne-RationBook' :
                        switch(properties.className) {
                            case 'audio-content-modal' :
                                return(<PlayAudio url={RationBookAudio} colorScale={roomOneAudioColourScale}/>);
                            case 'image-content-modal' :
                                return ( <ImageGallery items={imageLoader.galleryLoader(properties.mapAreaTitle)} 
                                        showFullscreenButton={false} 
                                        showPlayButton={false}
                                        showThumbnails={false}
                                        showNav={true}
                                        autoPlay={false}
                                        disableSwipe={true}/>);
                            default :
                                return;
                        }
                        
                    case 'RoomOne-Suitcase' :
                        switch(properties.className) {
                            case 'audio-content-modal' :
                                return(<PlayAudio url={EvacuatedAudio} colorScale={roomOneAudioColourScale}/>);
                            case 'image-content-modal' :
                                return ( <ImageGallery items={imageLoader.galleryLoader(properties.mapAreaTitle)} 
                                        showFullscreenButton={false} 
                                        showPlayButton={false}
                                        showThumbnails={false}
                                        showNav={true}
                                        autoPlay={false}
                                        disableSwipe={true}/>);
                            default :
                                return;
                        }
                     
                        
                    case 'RoomOne-Sweets' :
                        switch(properties.className) {
                            case 'audio-content-modal' :
                                return(<PlayAudio url={SweetRationingAudio} colorScale={roomOneAudioColourScale}/>);
                            case 'image-content-modal' :
                                return ( <ImageGallery items={imageLoader.galleryLoader(properties.mapAreaTitle)} 
                                        showFullscreenButton={false} 
                                        showPlayButton={false}
                                        showThumbnails={false}
                                        showNav={true}
                                        autoPlay={false}
                                        disableSwipe={true}/>);
                            default :
                                return;
                        }
                                

                    case 'RoomOne-Window' :
                        switch(properties.className) {
                            case 'audio-content-modal' :
                                return(<PlayAudio url={BlackoutCurtainsAudio} colorScale={roomOneAudioColourScale}/>);
                            case 'image-content-modal' :
                                return ( <ImageGallery items={imageLoader.galleryLoader(properties.mapAreaTitle)} 
                                        showFullscreenButton={false} 
                                        showPlayButton={false}
                                        showThumbnails={false}
                                        showNav={true}
                                        autoPlay={false}
                                        disableSwipe={true}/>);
                            default :
                                return;
                        }
                                
                    case 'text-content-modal' :
                    {
                        return (<div className={properties.childClassName}></div>);
                    }

                    default :
                        return (<div className={properties.childClassName}></div>);
                }
            }
            default :
                return (<div className={properties.childClassName}><p>Romm not Implemented</p></div>);
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
                return (<ModalClose toggle={closeModalContent} icon='glyphicon glyphicon-remove-sign' className='close-audio-modal-button'/>);
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


    
         
    
