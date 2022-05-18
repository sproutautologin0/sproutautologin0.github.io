import dayjs from 'dayjs';
import customFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customFormat);

type Interrupt =  {
  date: number;
  type: string;
}

export const map = (data: Interrupt[]) => {
  if (!data) {
    return [];
  }

  return data.map((item) => {
    const { date } = item;
    const [year, month, day] = dayjs(date.toString(), 'YYYYMMDD').format('YYYY-MMMM-DD').split('-');

    return {
      id: item.date,
      month,
      day,
      year
    };
  });
};
