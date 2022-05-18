import {client} from '../client/client';
import {map} from './map';

export const getInterrupts = async () => {
  const token = sessionStorage.getItem('access_token');

  if (!token) {
    throw new Error('Unable to fetch token');
  }

  const user = await client.get('/interrupts', {
    headers: {
      Authorization: token
    }
  });

  const interrupts = map(user.data?.interrupts);

  return interrupts;
};
