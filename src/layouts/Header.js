import { connect } from 'react-redux';
import '../css/app.css';
import CircleLoad from './CircleLoad';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Link to={'/'}>
      <div>
        <h2 className="header">
          Podcaster
          <CircleLoad />
        </h2>
      </div>
      <div className="line" />
    </Link>
  );
}
const mapStateToProps = state => ({
  isLoading: state.load,
});

export default connect(mapStateToProps)(Header);
