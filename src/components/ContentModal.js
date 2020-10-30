import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ModalClose } from './ModalClose';
import ImageGallery from 'react-image-gallery';
import PlayAudio from 'react-simple-audio-player';
import chroma from 'chroma-js';

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

const colourScale = chroma.scale(['#0199CB','#ffffff',]).mode('lch').colors(5);

const ContentModal = (properties) => {
    
    const [pressed, setPressed] = useState(false);
    const [position, setPosition] = useState({x: 0, y: 0});
    const ref = useRef();

    // Monitor changes to position state and update DOM
    useEffect(() => {
        if (ref.current) {
            ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
        }
    }, [position]);
  
    // Monitor changes to the ref, this will effecively fire when this mounts
    useEffect(() => {
        ref.current.style.top=properties.top;
        ref.current.style.left=properties.left;
        ref.current.style.width=properties.width;
        ref.current.style.height=properties.height;

    });

    // Update the current position if mouse is down
    const onMouseMove = (event) => {
      if (pressed) {
        setPosition({
          x: position.x + event.movementX,
          y: position.y + event.movementY
        });
      }
    }

    // Choose the innder div type based on the type of modal we are creating
    const renderModalType = () => {

        console.log('Setting modal type ' + properties.className + ' for room index ' + properties.roomIndex);

        switch(properties.className) {
            case 'image-content-modal' :
                return (
                        <ImageGallery items={images} 
                                      showFullscreenButton={false} 
                                      showPlayButton={false}
                                      disableSwipe={true}
                                      />);
            case 'audio-content-modal' :
                return(<PlayAudio url={'http://www.noiseaddicts.com/samples_1w72b820/4186.mp3'} colorScale={colourScale}/>);
            default :
                return (<div className={properties.childClassName}></div>);
        }
    }

    // choose the icon for the close modal
    const closeModalIcon = () => {
        switch(properties.className) {
            case 'image-content-modal' :
                return (<ModalClose toggle={() => properties.toggleModalFunction()} icon='glyphicon glyphicon-remove-sign' className='close-modal-button'/>);
            case 'audio-content-modal' :
                return (<ModalClose toggle={() => properties.toggleModalFunction()} icon='glyphicon glyphicon-remove-sign' className='close-audio-modal-button'/>);
            default :
                return (<ModalClose toggle={() => properties.toggleModalFunction()} icon='glyphicon glyphicon-remove' className='close-modal-button'/> );
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


    
         
    
