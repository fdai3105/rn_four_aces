import {connect} from 'react-redux';
import {CardComponent} from '../../Components';
import {reset, selectCard} from '../../Actions';
import {GameCards} from '../../Components/Game/CardItemComponent';

const mapStateToProp = state => {
  return {
    selected: state.gameReducer ?? GameCards.none,
  };
};

const mapDispatchToProp = dispatch => {
  return {
    onSelect: value => {
      dispatch(selectCard(value));
    },
    onReset: () => {
      dispatch(reset());
    },
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(CardComponent);
