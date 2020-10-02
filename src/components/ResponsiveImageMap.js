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
        
        this.state = {
            imageWidth: props.originalWidth,
            imageHeight: props.originalHeight
        }

    }

    resize() {

        const parentElement = document.getElementById(this.parentElementId);
        const newWidth = parentElement.offsetWidth;
        var newHeight = parentElement.offsetHeight;

        var ratioWidth = newWidth / this.originalWidth;
        var ratioHeight = newHeight / this.originalHeight;
        
        var body = document.body;
        var html = document.documentElement;
    
        var viewHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

        if(viewHeight !== newHeight) {
            const streetImage = document.getElementById(this.imageId);
            streetImage.height = viewHeight;
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

        this.setState({ imageWidth: newWidth, imageHeight: newHeight});
        
        return true;
    };

    componentDidMount() {
        window.addEventListener('resize', e => this.resize(e));
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', e => this.resize(e));
    }

    componentDidUpdate(prevProps, prevState) {
        this.resize();
    }

    buildAreaItems() {
        return this.map.areas.map((item, index) => {
            return (
                <area key={index} target={item.target} alt="" title="" href="#" 
                coords={item.newCoords} shape={item.shape} 
                onClick={(e) => {e.preventDefault(); console.log('Room ' + index + ' clicked'); this.props.setRoomIndexFunction(index); this.props.toggleModalFunction() }}/>
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