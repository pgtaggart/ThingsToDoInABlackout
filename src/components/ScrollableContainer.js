import React, { PureComponent } from 'react'
import debounce from 'lodash.debounce'
import { motion } from 'framer-motion'

import house1 from '../images/house1.svg';
import house2 from '../images/house2.svg';
import house3 from '../images/house3.svg';
import house4 from '../images/house4.svg';
import house5 from '../images/house5.svg';
import house6 from '../images/house6.svg';


export default class ScrollableContainer extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      items: [house1, house2, house3, house4, house5, house6],
      hasOverflow: false,
      canScrollLeft: false,
      canScrollRight: false
    }

    this.checkForOverflow = this.checkForOverflow.bind(this);
    this.checkForScrollPosition = this.checkForScrollPosition.bind(this);

    this.debounceCheckForOverflow = debounce(this.checkForOverflow, 1000);
    this.debounceCheckForScrollPosition = debounce(this.checkForScrollPosition, 200);

    this.container = null;
  }

  componentDidMount() {
    this.checkForOverflow();
    this.checkForScrollPosition();

    this.container.addEventListener('scroll', this.debounceCheckForScrollPosition);

    // This is to scroll the container to the middle but needs some final tweaks
    setTimeout(() => {
      const {clientWidth } = this.container
      this.scrollContainerBy(clientWidth / 5.0)
    }, 500)

  }

  componentWillUnmount() {
    this.container.removeEventListener('scroll', this.debounceCheckForScrollPosition);
    this.debounceCheckForOverflow.cancel();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items.length !== this.state.items.length) {
      this.checkForOverflow();
      this.checkForScrollPosition();
    }
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


  buildItems() {
    return this.state.items.map((item, index) => {
      return (
        <li className="house-item" key={item}>
          <motion.div animate={{ scale: [0, 1] }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <img src={item} className="house-image" alt="logo" 
              onClick={() => { this.props.setRoomIndexFunction({roomIndex: index}); this.props.toggleModalFunction(); } } />
          </motion.div>
        </li>
      );
    });
  }

  render() {
    return (
      <>
        <ul className="house-container" ref={node => { this.container = node}}>
          {this.buildItems()}
        </ul>
      </>
    )
  }
}
