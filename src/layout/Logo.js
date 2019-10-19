import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {redirect: false};
  }

  clickHandler = () => {
    this.setState({redirect: true});
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/"/>
    }

    return <div
      style={{cursor: "pointer"}}
      onClick={this.clickHandler}>{this.props.children}</div>
  }
}

export default Logo;
