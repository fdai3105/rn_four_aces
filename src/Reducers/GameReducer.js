import {RESET, SELECT_CARD, SELECT_TYPE} from '../Actions/Types';
import {GameCards} from '../Components/Game/CardItemComponent';

export const gameReducer = (
  state = {
    selectType: [],
    selectCard: GameCards.none,
    isWin: false,
  },
  action,
) => {
  switch (action.type) {
    case SELECT_CARD:
      const isWin = state.selectType.includes(action.selected);
      return {
        selectType: state.selectType,
        selectCard: action.selected,
        isWin: isWin,
      };
    case SELECT_TYPE:
      if (state.selectType.includes(action.selected)) {
        return {
          selectType: state.selectType.filter(item => item !== action.selected),
          selectCard: state.selectType,
        };
      }
      if (state.selectType.length > 2) {
        return {
          selectType: [...state.selectType.slice(1), action.selected],
          selectCard: state.selectType,
        };
      }
      return {
        selectType: [...state.selectType, action.selected],
        selectCard: state.selectType,
      };
    case RESET:
      return {selectType: [], selectCard: GameCards.none};
    default:
      return state;
  }
};
