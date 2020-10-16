import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import ImageMapArea from './ImageMapArea';
import ImageMap from './ImageMap';
import ResponsiveImageMap from './ResponsiveImageMap';

import StreetScene from '../images/StreetScene.png';

/**
* This class is specific to the house layout and the actions it needs to take
*/
export default class ScrollableContainer extends PureComponent {

  constructor(props) {
    
    super(props);

    this.callbackFunction = props.callbackFunction;

    const HouseOneArea = new ImageMapArea('House1', 'house1', "945,490,1745,1476", 'rect', '');
    const HouseTwoArea = new ImageMapArea('House2', 'house2', "1759,1483,2579,497", 'rect', '');
    const HouseThreeArea = new ImageMapArea('House3', 'house3', "2621,497,3366,1483", 'rect', '');
    const HouseFourArea = new ImageMapArea('House4', 'house4', "3379,504,4117,1483", 'rect', '');
    const HouseFiveArea = new ImageMapArea('House5', 'house5', "4131,517,4917,1476", 'rect', '');
    const HouseSixArea = new ImageMapArea('House6', 'house6', "4966,511,5662,1483", 'rect', '');
    this.StreetSceneImageMap = new ImageMap('StreetScene-imageMap', [HouseOneArea, HouseTwoArea, HouseThreeArea, HouseFourArea, HouseFiveArea, HouseSixArea]);

    this.parentElementId = props.parentElementId;

    this.checkForOverflow = this.checkForOverflow.bind(this);
    this.checkForScrollPosition = this.checkForScrollPosition.bind(this);

    this.debounceCheckForOverflow = debounce(this.checkForOverflow, 1000);
    this.debounceCheckForScrollPosition = debounce(this.checkForScrollPosition, 200);

    this.container = null;
    this.childImageMap = null;

  }

  componentDidMount() {
    this.container.addEventListener('scroll', this.debounceCheckForScrollPosition);

    // This is to scroll the container to the middle but needs some final tweaks
    setTimeout(() => {
      const {clientWidth } = this.container
      this.scrollContainerBy(clientWidth / 2.0)
    }, 500);
  }


  componentWillUnmount() {
    this.container.removeEventListener('scroll', this.debounceCheckForScrollPosition);
    this.debounceCheckForOverflow.cancel();
  }

  componentDidUpdate(prevProps, prevState) {
      this.checkForScrollPosition();
  }

  checkForScrollPosition() {
    const { scrollLeft, scrollWidth, clientWidth } = this.container;
    this.setState({
      canScrollLeft: scrollLeft > 0,
      canScrollRight: scrollLeft !== scrollWidth - clientWidth
    });
  }

  checkForOverflow() {
    const { scrollWidth, clientWidth } = this.container;
    const hasOverflow = scrollWidth > clientWidth;
    this.setState({ hasOverflow });
  }

  scrollContainerBy(distance) {
    this.container.scrollBy({ left: distance, behavior: 'smooth' });
  }

  render() {

    return (
      <>
        <ul className="house-container" ref={node => { this.container = node}}>
          <li className="house-item" key={StreetScene} id={this.parentElementId}>
            <ResponsiveImageMap image={StreetScene} originalWidth='7807' originalHeight='1918'
              map={this.StreetSceneImageMap} className='StreetScene' parentElementId={this.parentElementId}
              ref={node => {this.childImageMap = node}} 
              imageId='StreetSceneImage'
              setRoomIndexFunction ={this.props.setRoomIndexFunction} toggleModalFunction={() => this.props.toggleModalFunction()}/>
          </li>
        </ul>
      </>
    )
  }
}
