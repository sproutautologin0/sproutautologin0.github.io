import {client} from '../client/client';

export const getUserDetails = async (token: string) => {
  const user = await client.get('/me', {
    headers: {
      Authorization: token
    }
  });

  return user.data;
};
