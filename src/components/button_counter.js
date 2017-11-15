import React, { Component } from 'react';
import { incriment, decriment } from '../actions/click_action'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
// import Display_counter from './display_counter'

class Button_counter extends Component {
incriment() {
  console.log('incriment');
  this.props.incriment();
}
    render() {
        {console.log(this.props)}
        return (
            <div>
                <div>
                    <button className="plus" onClick={()=>this.incriment()}>+</button>
                    <button className="minus" onClick={() => this.props.decriment}>-</button>
                </div>
                // <Display_counter counter={this.props.counter}/>
                {this.props.counter}

                {/*<div>Counter : {this.props.clickReducer.counter}</div>*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ incriment, decriment }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Button_counter);
