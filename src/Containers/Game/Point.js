import {connect} from 'react-redux';
import {Point} from '../../Components';

const mapStateToProp = state => {
  return {
    state: state.gameReducer,
  };
};

export default connect(mapStateToProp)(Point);
