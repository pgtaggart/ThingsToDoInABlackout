import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ModalClose } from './ModalClose';
import ImageGallery from 'react-image-gallery';

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

    // Try to set the stack order of the modals and bring this one on top
    const checkFocusModal = (event) => {
         
        var thisModal = document.getElementById(properties.modalId);
        thisModal.style.zIndex = '10001';
       
        for(var i = 0; i < properties.otherModals.length; i++) {
            var otherModal = document.getElementById(properties.otherModals[i]);
            if(otherModal) {
                otherModal.style.zIndex = '1000';
            }
            
        }
    }
  
    const renderModalType = () => {

        switch(properties.className) {

            case 'image-content-modal' :
                return (
                        <ImageGallery items={images} 
                                    showFullscreenButton={false} 
                                    showPlayButton={false}
                                    disableSwipe={true} />
                );

            default :
                return (<div className={properties.childClassName}></div>);
        }
    }

    return (
        <motion.div
            ref={ref}
            id={properties.modalId}
            className={properties.className}
            onMouseMove={ properties.canMove ? onMouseMove : null }
            onMouseDown={ () => setPressed(true)  }
            onMouseUp={   () => setPressed(false) }
            onMouseOut={  () => setPressed(false) }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{delay: 0.1, duration: 0.5}}>
        <ModalClose toggle={() => properties.toggleModalFunction()}/>
        {renderModalType()}
        </motion.div> 
    )
  }
  
  export default ContentModal;


    
         
    
