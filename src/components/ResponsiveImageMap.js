import React, { PureComponent } from 'react';

export default class ResponsiveImageMap extends PureComponent {

    constructor(props) {
        super(props);
        this.image = props.image;
        this.imageId = props.imageId;
        this.className = props.className;
        this.parentElementId = props.parentElementId;
        this.originalWidth = props.originalWidth;
        this.originalHeight = props.originalHeight;
        this.map = props.map;
        this.backgroundColor = props.backgroundColor;
        this.useViewHeight = props.useViewHeight;
        
        this.state = {
            imageWidth: props.originalWidth,
            imageHeight: props.originalHeight
        }

        this.resize = this.resize.bind(this);

    }

    resize() {

        const parentElement = document.getElementById(this.parentElementId);

        if(!parentElement) {
            console.log('WARNING: resize called for unmounted image: ' + this.image);
            return;
        }

        const newWidth = parentElement.offsetWidth;
        var newHeight = parentElement.offsetHeight;

        var ratioWidth = newWidth / this.originalWidth;
        var ratioHeight = newHeight / this.originalHeight;
        
        var body = document.body;
        var html = document.documentElement;

        if(this.useViewHeight === 'true') {
            
            var viewHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

            if(viewHeight !== newHeight) {
                const imageElement = document.getElementById(this.imageId);
                imageElement.height = viewHeight;
                newHeight = viewHeight;
                ratioHeight = viewHeight / this.originalHeight;
            }

        } else {
             
            ratioHeight = ratioWidth;
        }

        for (const area of this.map.areas) {
            const newCoords = [];
            // Warning: This assumes a rectange for the image map area
            newCoords.push(Math.round(area.originalCoords[0] * ratioWidth));
            newCoords.push(Math.round(area.originalCoords[1] * ratioHeight));
            newCoords.push(Math.round(area.originalCoords[2] * ratioWidth));
            newCoords.push(Math.round(area.originalCoords[3] * ratioHeight));
            area.newCoords = newCoords.join(',');
        }

        // try to set the background for the overflow on the room image
        var modalBackground = document.getElementsByClassName('modal-background');

        // There should only be one of these
        for (var i = 0; i < modalBackground.length; i++) {
            modalBackground[i].style.backgroundColor = this.backgroundColor;
        }

        this.setState({ imageWidth: newWidth, imageHeight: newHeight});
        
        return true;
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize, false);
        this.resize();
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.resize, false);
    }

    componentDidUpdate(prevProps, prevState) {
        this.resize();
    }

    mouseOverArea(areaId, coords) {
        const coordsArr = coords.split(',');
        const parentElement = document.getElementById(this.parentElementId);
        
        const newElement = document.createElement("div");
        newElement.setAttribute("id", "infoDiv");
        newElement.classList.add('infoDiv');
        newElement.style.top = coordsArr[1] + "px";
        newElement.style.left = coordsArr[0] + "px";
        
        const infoImg = document.createElement("img");
        infoImg.setAttribute("src", "./images/info_icon.svg");
        infoImg.setAttribute("height", "10");
        infoImg.setAttribute("width", "10");
        infoImg.setAttribute("alt", "Info");

        newElement.appendChild(infoImg);        
        parentElement.appendChild(newElement);
    }

    mouseOutArea() {
        const parentElement = document.getElementById(this.parentElementId);
        const infoDiv = document.getElementById('infoDiv');
        parentElement.removeChild(infoDiv);
    }

    buildAreaItemsForStreet() {
        return this.map.areas.map((item, index) => {
            return (
                <area key={index} target={item.target} alt="" title="" href="#" id={this.imageId + '_map' + index}
                      coords={item.newCoords} shape={item.shape} 
                      onClick={(e) => {e.preventDefault(); this.props.setRoomIndexFunction(index); this.props.toggleModalFunction() }}/>
            );
        });
    }

    buildAreaItems() {
        return this.map.areas.map((item, index) => {
            return (
                <area key={index} target={item.target} alt="" title="" href="#" id={this.imageId + '_map' + index}
                      coords={item.newCoords} shape={item.shape} 
                      onMouseOver={()=>this.mouseOverArea(this.imageId + '_map' + index, item.newCoords)}
                      onMouseOut={()=>this.mouseOutArea()}/>
            );
        });
    }

    render() {
        return (
            <>
                <img src={this.image} useMap={'#' + this.map.name} className={this.className} alt='' hidefocus="true" id={this.imageId}/>
                <map name={this.map.name}>
                    { this.useViewHeight === 'true' ? this.buildAreaItemsForStreet() : this.buildAreaItems() }
                </map>
            </>
        );
    }

}