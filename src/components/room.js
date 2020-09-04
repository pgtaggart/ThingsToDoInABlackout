import React, { PureComponent } from 'react';
import frame from '../images/Frame.svg';
import { motion } from 'framer-motion';

export default class Room extends PureComponent {

    constructor(props) {
        super(props);
        this.winH = 0; 
        this.winW = 0;
        this.viewport = null; 
        this.pers = 700;
        this.backwall = null;
    }

    componentDidMount() {
        this.viewport = document.getElementById("viewport");
        this.backwall = document.getElementById("backwall");
        this.winH = window.innerHeight;
        this.winW = window.innerWidth;
        if(this.backwall) {
          this.repositionBackface();
        }
        
        window.addEventListener("resize", this.onResize.bind(this));
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize.bind(this));
    }
    
    componentDidUpdate(prevProps, prevState) {
        this.winH = window.innerHeight;
        this.winW = window.innerWidth;
        this.repositionBackface();
    }
    
    repositionBackface() {
        var x = 0;
        
        if(this.winW < this.winH) {
          x = this.winW;
        } else {
          x = this.winH;
        }

        if(this.backwall) {
          this.backwall.style.transform = "translateZ(-" + (x - 1) + "px)";
          this.backwall.style.webkitTransform = "translateZ(-" + (x - 1) + "px)";
        }
    }
      
    updatePerspective(originX, originY) {
        this.viewport.style.perspectiveOrigin = originX.toFixed(4) + "% " + originY.toFixed(4) + "%";
        this.viewport.style.webkitPerspectiveOrigin = originX.toFixed(4) + "% " + originY.toFixed(4) + "%";
    }
      
    normalizeResults(start,end,input) {
        return (input-start)/(end-start);
    }

    onResize() {
        this.winH = window.innerHeight;
        this.winW = window.innerWidth;
        this.repositionBackface();
    };

    onImageClick(text) {
      console.log(text);
    }

    roomOne() {
      return (
              <>
                <div className="wall" />
                <div className="wall" />
                <div className="wall" />
                <div className="wall" />
                <div className="wall" id="backwall">
                  <motion.div className="picture-frame" animate={{ scale: [0, 1] }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}> 
                    <img src={frame} alt="pictureFrame" onClick={() => this.onImageClick(this.props.greeting)}/>
                  </motion.div>
                </div>
              </>
      );
    }

    roomTwo() {
      return (
              <>
                <div className="wall" />
                <div className="wall" />
                <div className="wall" />
                <div className="wall" />
                <div className="wall" id="backwall">
                  <motion.div className="picture-frame" animate={{ scale: [0, 1] }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}> 
                    <img src={frame} alt="pictureFrame" onClick={() => this.onImageClick(this.props.greeting)}/>
                  </motion.div>
                </div>
              </>
      );
    }

    roomThree() {
      return (
              <>
                <div className="testRoom" />
              </>
      );
    }

    roomDefault() {
      return (
              <>
                <div className="wall" />
                <div className="wall" />
                <div className="wall" />
                <div className="wall" />
                <div className="wall" id="backwall">
                  <motion.div className="picture-frame" animate={{ scale: [0, 1] }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}> 
                    <img src={frame} alt="pictureFrame" onClick={() => this.onImageClick(this.props.greeting)}/>
                  </motion.div>
                </div>
            </>
      );
    }

    render() {
      return (
          <>
            <div id="viewport">
              <div className="room">
                {this.props.roomIndex.roomIndex === 0 && this.roomOne()}
                {this.props.roomIndex.roomIndex === 1 && this.roomTwo()}
                {this.props.roomIndex.roomIndex === 2 && this.roomThree()}
                {this.props.roomIndex.roomIndex === 3 && this.roomDefault()}
                {this.props.roomIndex.roomIndex === 4 && this.roomDefault()}
                {this.props.roomIndex.roomIndex === 5 && this.roomDefault()}
              </div>
            </div>
          </>
        );
    }
}