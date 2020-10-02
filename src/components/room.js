import React, { PureComponent } from 'react';

export default class Room extends PureComponent {

    componentDidMount() {      
        
    }
    
    componentWillUnmount() {
       
    }
    
    componentDidUpdate(prevProps, prevState) {
        
    }
  

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