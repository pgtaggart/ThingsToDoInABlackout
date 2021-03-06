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
        this.type = props.type;

        this.state = {
            imageWidth: props.originalWidth,
            imageHeight: props.originalHeight
        }

        this.resize = this.resize.bind(this);

    }

    resize() {

        const parentElement = document.getElementById(this.parentElementId);
        const imageElement = document.getElementById(this.imageId);

        if (!parentElement) {
            console.log('WARNING: resize called for unmounted image: ' + this.image);
            return;
        }

        const newWidth = parentElement.offsetWidth;
        var newHeight = parentElement.offsetHeight;

        var ratioWidth = newWidth / this.originalWidth;
        var ratioHeight = newHeight / this.originalHeight;

        // this is for the main street view, the important bit here is setting the image height so that it scales correctly on resize
        if (this.useViewHeight === 'true') {

            var body = document.body;
            var html = document.documentElement;

            var viewHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

            if (viewHeight !== newHeight) {
                imageElement.height = viewHeight;
                newHeight = viewHeight;
                ratioHeight = viewHeight / this.originalHeight;
            }

        } else {

            // The CSS media query regarding the ratio prevents the image from being bigger than the parent element
            if(newWidth === imageElement.offsetWidth && newHeight === imageElement.offsetHeight) {

                // if the parent element matches the image then we are in a landscape mode and the 
                // parent element is being scaled with the image, i.e. they are both 100% width and 
                // are scaling the height together and the background / browser client height is not the same.
                // ideally this should vertically align to the middle of the page but that doesn't work atm.

            } else {

                // the height ratio will be correct as the parent element height will always equal the image height
                ratioWidth = imageElement.offsetWidth / this.originalWidth;
            }

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

        this.setState({ imageWidth: newWidth, imageHeight: newHeight });

        return true;
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize, false);
    }

    componentDidUpdate(prevProps, prevState) {
        this.resize();
    }

    mouseOverArea(coords, mapType) {

        // Don't show these if the modal is active
         // If any of the modals are open then don't allow the click
         if (this.props.isAudioContentModalOpen || this.props.isImageContentModalOpen || this.props.isTextContentModalOpen) {
            return;
        }

        const coordsArr = coords.split(',');
        const parentElement = document.getElementById(this.parentElementId);
        const imageElement = document.getElementById(this.imageId);

        // Create the div and set it's location
        const newElement = document.createElement('div');
        newElement.setAttribute('id', 'infoDiv');
        newElement.setAttribute('class', 'infoDiv');

        // Create the icon that will be used
        const infoIcon = document.createElement('button');

        // Set the icon, size and colour based on what type of area we have
        switch (mapType) {

            case 'Audio':
            case 'AudioText':
                infoIcon.setAttribute("class", "modalButton glyphicon glyphicon-headphones");
                break;

            case 'Image':
            case 'AudioImage':
                infoIcon.setAttribute("class", "modalButton glyphicon glyphicon-picture");
                break;

            case 'Text':
                infoIcon.setAttribute("class", "modalButton glyphicon glyphicon-pencil");
                break;

            default:
                infoIcon.setAttribute("class", "modalButton glyphicon glyphicon-question-sign");
                break;
        }

        // Calculate the offsets so the icon is in the middle of the map
        var xOffset = 0;

        if(imageElement.offsetWidth !== parentElement.offsetWidth) {
            xOffset = (parseInt(coordsArr[0]) + parseInt((coordsArr[2] - coordsArr[0]) / 2.0) - 17.5) + ((parentElement.offsetWidth - imageElement.offsetWidth) / 2.0);
        } else {
            xOffset = parseInt(coordsArr[0]) + parseInt((coordsArr[2] - coordsArr[0]) / 2.0) - 17.5;
        }
        // the magic numbers here are to do with font sizes for the glyphicons
        const yOffset = parseInt(coordsArr[1]) + parseInt((coordsArr[3] - coordsArr[1]) / 2.0) - 19.5;

        // Set the location of the Div that will contain the icon
        newElement.style.top = yOffset + "px";
        newElement.style.left = xOffset + "px";

        // Add the icon to the div and the div to the parent
        newElement.appendChild(infoIcon);
        parentElement.appendChild(newElement);
    }

    mouseOutArea() {
        const parentElement = document.getElementById(this.parentElementId);
        const infoDiv = document.getElementById('infoDiv');
        if (infoDiv) {
            parentElement.removeChild(infoDiv);
        }

    }

    selectContentModalToOpen(type, title) {

        // If any of the modals are open then don't allow the click
        if (this.props.isAudioContentModalOpen || this.props.isImageContentModalOpen || this.props.isTextContentModalOpen) {
            return;
        }

        // Set the title of the map area that was clicked
        this.props.setMapAreaTitleFunction(title);

        // Set the type of the map area that was clicked
        this.props.setMapAreaTypeFunction(type);

        // Hide the room image
        document.getElementById(this.props.imageId).style.opacity = '0.1';
        document.getElementById(this.props.imageId).classList.remove("fade-in");
        document.getElementById(this.props.imageId).classList.add("fade-out");

        // Now trigger the new open of the modal
        switch (type) {
            case 'Audio':
                this.props.toggleAudioContentModalFunction();
                break;
            case 'Image':
                this.props.toggleImageContentModalFunction();
                break;
            case 'Text':
                this.props.toggleTextContentModalFunction();
                break;
            case 'AudioImage':
                this.props.toggleAudioContentModalFunction();
                this.props.toggleImageContentModalFunction();
                break;
            case 'AudioText':
                this.props.toggleAudioContentModalFunction();
                this.props.toggleTextContentModalFunction();
                break;

            default:
                // don't do anything if we don't know what type this is
                break;
        }
    }

    buildAreaItemsForStreet() {
        return this.map.areas.map((item, index) => {
            return (
                <area key={index} target={item.target} alt={item.alt} title="" href="#" id={this.imageId + '_map' + index}
                    coords={item.newCoords} shape={item.shape} className="aMap"
                    onClick={(e) => { e.preventDefault(); this.props.setRoomIndexFunction(index); this.props.toggleModalFunction() }} />
            );
        });
    }

    buildAreaItems() {
        return this.map.areas.map((item, index) => {
            return (
                <area key={index} target={item.target} alt={item.alt} title="" href="#" id={this.imageId + '_map' + index}
                    coords={item.newCoords} shape={item.shape} className="aMap"
                    onMouseOver={() => this.mouseOverArea(item.newCoords, item.type)}
                    onMouseOut={() => this.mouseOutArea()}
                    onClick={(e) => { e.preventDefault(); this.selectContentModalToOpen(item.type, item.title) }} />
            );
        });
    }

    render() {
        return (
            <>
                <img src={this.image} useMap={'#' + this.map.name} className={this.className} alt='' hidefocus="false" id={this.imageId} onLoad={this.resize}/>
                <map name={this.map.name}>
                    {this.useViewHeight === 'true' ? this.buildAreaItemsForStreet() : this.buildAreaItems()}
                </map>
            </>
        );
    }

}