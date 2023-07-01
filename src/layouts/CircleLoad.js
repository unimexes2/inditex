import { connect } from 'react-redux';
import '../css/app.css';

function CircleLoad({ isLoading }) {
  return isLoading ? <div className="circleload" /> : null;
}
const mapStateToProps = state => ({
  isLoading: state.load,
});

export default connect(mapStateToProps)(CircleLoad);
