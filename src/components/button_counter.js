import React, { Component } from 'react';
import  { incriment, decriment } from '../actions/click_action'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';

class Button_counter extends Component {
    incriment1() {
        debugger;
        this.props.incriment();
        
    }
    render(){
        return(
          <div>
              <button className="plus" onClick={() => this.incriment1()}>+</button>
              <button className="minus" onClick={this.props.decriment}>-</button>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        clickReducer : state.clickReducer
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ incriment, decriment }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Button_counter);