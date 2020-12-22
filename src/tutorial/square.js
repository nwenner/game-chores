import React from 'react';

class Square extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
      }
    
    onSquareClick() {
        return this.setState({ value: 'X' });
    }

      render() {
        return (
          <button
            className="square"
            onClick={this.onSquareClick}
          >
            {this.state.value}
          </button>
        );
      }
  }

export default Square;