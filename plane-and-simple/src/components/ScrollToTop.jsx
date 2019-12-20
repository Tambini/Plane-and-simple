// React
import { Component } from 'react'
// React Router

//given to me by an instructor
import {
  withRouter,
} from 'react-router-dom'
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}
export default withRouter(ScrollToTop);