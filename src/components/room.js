import React, { PureComponent } from 'react';

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

    chooseRoom(className) {
      return (
              <>
                <div className={className} />
              </>
      );
    }

    render() {
      return (
          <>
            <div id="viewport">
              <div className="room">
                {this.props.roomIndex === 0 && this.chooseRoom('roomOne')}
                {this.props.roomIndex === 1 && this.chooseRoom('roomTwo')}
                {this.props.roomIndex === 2 && this.chooseRoom('roomThree')}
                {this.props.roomIndex === 3 && this.chooseRoom('roomFour')}
                {this.props.roomIndex === 4 && this.chooseRoom('roomFive')}
                {this.props.roomIndex === 5 && this.chooseRoom('roomSix')}
              </div>
            </div>
          </>
        );
    }
}