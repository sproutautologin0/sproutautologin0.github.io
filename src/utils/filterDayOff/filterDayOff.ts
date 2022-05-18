import _ from 'lodash';
import {DayOff} from '../../types';

export const filterDayOff = (data: DayOff[], id: number) => {
  const filtered = _.remove([ ...data ], (item) => {
    return item.id !== id;
  });

  return filtered;
};
