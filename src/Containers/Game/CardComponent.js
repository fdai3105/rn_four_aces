import {connect} from 'react-redux';
import {CardComponent} from '../../Components';
import {dismissDialog, reset, selectCard} from '../../Actions';
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
    onDismiss: () => {
      dispatch(dismissDialog());
    },
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(CardComponent);
