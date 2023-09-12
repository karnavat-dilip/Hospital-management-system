import { Component } from "react";
import  PropTypes from "prop-types";

class Start extends Component {
  componentDidMount() {
    if (this.props.startTour) {
      this.props.startTour.start()
    }
  }

  render() {
    return null;
  }
}

Start.propTypes = {
  startTour: PropTypes.func,
}


export default Start;
