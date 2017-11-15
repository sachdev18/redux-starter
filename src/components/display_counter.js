import React, { Component } from 'react';

 class Display_counter extends Component {

    render() {

      return (
        <div>
          {this.props.counter}
        </div>
    );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,

    }
}

export default Display_counter;
