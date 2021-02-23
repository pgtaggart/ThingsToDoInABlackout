import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Image gallery using Framer Motion Animate presence
 * This expects an images array of objects like {image: img1, text: '', link: ''}
 *  
 * @param {*} properties 
 */
const ImageGallery = (properties) => {

    const wrap = (min, max, v) => {
        const rangeSize = max - min;
        return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
    };

    const variants = {
        enter: (direction) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    };

    const swipeConfidenceThreshold = 10000;
    
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const [[page, direction], setPage] = useState([0, 0]);
            
    const imageIndex = wrap(0, properties.images.length, page);
            
    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <>
            <AnimatePresence>
                <motion.img
                    key={page}
                    src={properties.images[imageIndex].image}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="resourceImage"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        swipe < -swipeConfidenceThreshold ? paginate(1) : paginate(-1);}}
                />
            </AnimatePresence>
            <div className="nextResource" onClick={() => paginate(1)}>{"‣"}</div>
            <div className="prevResource" onClick={() => paginate(-1)}>{"‣"}</div>
            <div className="resourceExplain"><span className="resourceExplainText">{properties.images[imageIndex].text}</span></div>
        </>
    )

}

export default ImageGallery;
