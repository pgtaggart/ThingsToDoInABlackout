import React, { PureComponent } from 'react';
import { motion } from 'framer-motion';
import debounce from 'lodash.debounce';
import ImageMapArea from './ImageMapArea';
import ImageMap from './ImageMap';
import ResponsiveImageMap from './ResponsiveImageMap';
import StreetScene from '../images/StreetScene.jpg';

/*
* This class is specific to the house layout and the actions it needs to take
*/
export default class ScrollableContainer extends PureComponent {

  constructor(props) {
    
    super(props);

    this.callbackFunction = props.callbackFunction;

    const HouseOneArea = new ImageMapArea('House1', 'house1', "555,252,1026,840", 'rect', 'House One', '');
    const HouseTwoArea = new ImageMapArea('House2', 'house2', "1034,268,1496,840", 'rect', 'House Two', '');
    const HouseThreeArea = new ImageMapArea('House3', 'house3', "1520,272,1974,840", 'rect', 'House Three', '');
    const HouseFourArea = new ImageMapArea('House4', 'house4', "1986,268,2420,840", 'rect', 'House Four', '');
    const HouseFiveArea = new ImageMapArea('House5', 'house5', "2436,260,2890,840", 'rect', 'House Five', '');
    const HouseSixArea = new ImageMapArea('House6', 'house6', "2903,264,3421,840", 'rect', 'House Six', '');
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

    window.addEventListener('keydown', this.handleKeyDown);

    // This is to scroll the container to the middle but needs some final tweaks
    setTimeout(() => {
      const {clientWidth } = this.container
      this.scrollContainerBy(clientWidth / 2.0)
    }, 500);
  }

  // TODO : try to move this to the main app.js key binding
  handleKeyDown = (event) => {
    switch( event.keyCode ) {
        case 37:
          this.autoScrollContainer(-1);
          break;
        case 39:
          this.autoScrollContainer(1);
          break;
        default: 
            break;
    }
  }

  componentWillUnmount() {
    this.container.removeEventListener('scroll', this.debounceCheckForScrollPosition);
    this.debounceCheckForOverflow.cancel();
    window.removeEventListener('keydown', this.handleKeyDown);
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

  autoScrollContainer(multiplier) {
    const { clientWidth } = this.container;
    const scrollDistance = clientWidth / 2 * multiplier;
    this.scrollContainerBy(scrollDistance)

  }

  render() {

    return (
      <>
        <ul className="house-container" ref={node => { this.container = node}} id="StreetImageContainerOuter">
          <li className="house-item" key={StreetScene} id={this.parentElementId}>
            <ResponsiveImageMap image={StreetScene} originalWidth='4589' originalHeight='1080'
              map={this.StreetSceneImageMap} className='StreetScene' parentElementId={this.parentElementId}
              ref={node => {this.childImageMap = node}} 
              imageId='StreetSceneImage' useViewHeight='true'
              setRoomIndexFunction ={this.props.setRoomIndexFunction} toggleModalFunction={() => this.props.toggleModalFunction()}/>
          </li>
        </ul>
        <motion.button 
          id="mainLeftScrollButton"
          className="leftScrollButton aButton"
          aria-label="Scroll Street left"
          onClick={() => this.autoScrollContainer(-1)} 
          whileHover={{ opacity: 0.9, scale: 1.3 }} 
          whileTap={{ scale: 0.95 }}>
            <i className='glyphicon glyphicon-backward'/>
        </motion.button>
        <motion.button
          id="mainRightScrollButton" 
          className="rightScrollButton aButton"
          aria-label="Scroll Street right"
          onClick={() => this.autoScrollContainer(1)} 
          whileHover={{ opacity: 0.9, scale: 1.3 }} 
          whileTap={{ scale: 0.95 }}>
            <i className='glyphicon glyphicon-forward'/>
        </motion.button>
      </>
    )
  }
}
