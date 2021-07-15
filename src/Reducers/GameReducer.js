import {DISMISS_DIALOG, SELECT_CARD, SELECT_TYPE} from '../Actions/Types';
import {GameCards} from '../Components/Game/CardItemComponent';

export const gameReducer = (
  state = {
    cards: [
      GameCards.spadeAce,
      GameCards.heartAce,
      GameCards.diamondAce,
      GameCards.clubAce,
    ],
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
      state.isWin = isWin;
      state.showDialog = true;
      state.selectCard = action.selected;
      isWin ? state.win++ : state.lose++;
      return {...state};
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
      state.cards = shuffle(state.cards);
      return {...state};
    default:
      return {...state};
  }
};

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
