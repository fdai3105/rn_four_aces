import {
  DISMISS_DIALOG,
  RESET,
  SELECT_CARD,
  SELECT_TYPE,
} from '../Actions/Types';
import {GameCards} from '../Components/Game/CardItemComponent';
import {LogBox} from 'react-native';

export const gameReducer = (
  state = {
    selectType: [],
    selectCard: GameCards.none,
    isWin: false,
    showDialog: false,
    win: 0,
    lose: 0,
  },
  action,
) => {
  switch (action.type) {
    case SELECT_CARD:
      if (state.selectType.length === 0) {
        return {...state};
      }
      const isWin = state.selectType.includes(action.selected);
      if (isWin) {
        state.win++;
        state.isWin = isWin;
        state.showDialog = true;
        state.selectCard = action.selected;
        return {...state};
      } else {
        state.lose++;
        state.isWin = isWin;
        state.showDialog = true;
        state.selectCard = action.selected;
        return {...state};
      }
    case SELECT_TYPE:
      if (state.selectType.includes(action.selected)) {
        state.selectType = state.selectType.filter(
          item => item !== action.selected,
        );
        return {...state};
      }
      if (state.selectType.length > 2) {
        state.selectType = [...state.selectType.slice(1), action.selected];
        return {...state};
      }
      state.selectType = [...state.selectType, action.selected];
      return {...state};
    case DISMISS_DIALOG:
      state.showDialog = false;
      state.selectType = [];
      state.selectCard = GameCards.none;
      return {...state};
    default:
      return {...state};
  }
};
