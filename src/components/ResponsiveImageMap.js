import React, { PureComponent } from 'react';

export default class ResponsiveImageMap extends PureComponent {

    constructor(props) {
        super(props);
        this.image = props.image;
        this.className = props.className;
        this.parentElementId = props.parentElementId;
        this.originalWidth = props.originalWidth;
        this.originalHeight = props.originalHeight;
        this.map = props.map;

        this.state = {
            resize: false
        }

    }

    resize() {

        const parentElement = document.getElementById(this.parentElementId);
        const ratioWidth = parentElement.offsetWidth / this.originalWidth;

        for (const area of this.map.areas) {
            const newCoords = [];
            for (const originalCoord of area.originalCoords) {
                newCoords.push(Math.round(originalCoord * ratioWidth));
            }
            area.newCoords = newCoords.join(',');
        }

        this.setState({ resize : true});

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

    //{ this.props.setRoomIndexFunction({roomIndex: index}); this.props.toggleModalFunction(); }}

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
                <img src={this.image} useMap={'#' + this.map.name} className={this.className} alt='' hidefocus="true"/>
                <map name={this.map.name}>
                    {this.buildAreaItems()}
                </map>
            </>
        );
    }

}