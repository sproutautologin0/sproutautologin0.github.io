import {client} from '../client/client';

export const deleteInterrupt = async (id: string) => {
  const token = sessionStorage.getItem('access_token');

  if (!token) {
    throw new Error('Unable to fetch token');
  }

  const user = await client.delete(`/interrupts/${id}`, {
    headers: {
      Authorization: token
    }
  });

  return user.data;
};
