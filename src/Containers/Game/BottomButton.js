import {connect} from 'react-redux';
import {BottomButtons} from '../../Components';
import {selectType} from '../../Actions';

const mapStateToProp = state => {
  return {
    selected: state.gameReducer ?? [],
  };
};

const mapDispatchToProp = dispatch => {
  return {
    onSelect: value => {
      dispatch(selectType(value));
    },
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(BottomButtons);
