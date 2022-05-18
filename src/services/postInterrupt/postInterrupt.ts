import {client} from '../client/client';

export const postInterrupt = async (value: number) => {
  const token = sessionStorage.getItem('access_token');

  if (!token) {
    throw new Error('Unable to fetch token');
  }

  const user = await client.post('/interrupts', { date: value }, {
    headers: {
      Authorization: token
    }
  });

  return user.data;
};
