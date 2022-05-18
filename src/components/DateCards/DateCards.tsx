import Box from '@mui/material/Box';
import {DateCard} from '../DateCard';
import {DayOff} from '../../types';

export interface DateCardsProps {
  dayoffs: DayOff[];
  cardButtonLabel: string;
  cardButtonOnClick: (id: number) => Promise<void> | void;
}

export const DateCards = ({dayoffs, cardButtonLabel, cardButtonOnClick}: DateCardsProps) => {
  return (
    <>
      {
        dayoffs.map(({id, ...rest}) => (
          <Box width="102px" m={1} key={id}>
            <DateCard
              buttonLabel={cardButtonLabel}
              onButtonClick={() => cardButtonOnClick(id)}
              {...rest}
            />
          </Box>
        ))
      }
    </>
  );
};
