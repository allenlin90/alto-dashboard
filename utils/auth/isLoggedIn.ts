import type { Cookies } from 'types';

export const isLoggedIn = async (
  cookies: Partial<Cookies>
): Promise<boolean> => {
  // check cookie if is authed
  // mock logged in
  if (cookies.isLoggedIn) return true;

  return false;
};
