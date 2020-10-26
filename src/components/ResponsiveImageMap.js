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
        
        this.state = {
            imageWidth: props.originalWidth,
            imageHeight: props.originalHeight
        }

        this.resize = this.resize.bind(this); //bind function once

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
    
        var viewHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

        if(viewHeight !== newHeight) {
            const imageElement = document.getElementById(this.imageId);
            imageElement.height = viewHeight;
            newHeight = viewHeight;
            ratioHeight = viewHeight / this.originalHeight;
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
    };

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

    buildAreaItems() {
        return this.map.areas.map((item, index) => {
            return (
                <area key={index} target={item.target} alt="" title="" href="#" 
                coords={item.newCoords} shape={item.shape} 
                onClick={(e) => {e.preventDefault(); this.props.setRoomIndexFunction(index); this.props.toggleModalFunction() }}/>
            );
        });
    }

    render() {
        return (
            <>
                <img src={this.image} useMap={'#' + this.map.name} className={this.className} alt='' hidefocus="true" id={this.imageId}/>
                <map name={this.map.name}>
                    {this.buildAreaItems()}
                </map>
            </>
        );
    }

}