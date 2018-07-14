import { PAGEID_INCREASE, PAGEID_DECREASE } from './constants';

export const pageIdInc = () => ({
  type: PAGEID_INCREASE
});

export const pageIdDec = () => ({
  type: PAGEID_DECREASE
});
