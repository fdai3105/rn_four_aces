import {DISMISS_DIALOG, SELECT_CARD, SELECT_TYPE} from './Types';

export const selectType = value => ({
  type: SELECT_TYPE,
  selected: value,
});

export const selectCard = value => ({
  type: SELECT_CARD,
  selected: value,
});

export const reset = () => ({
  type: RESET,
});

export const dismissDialog = () => ({
  type: DISMISS_DIALOG,
});
