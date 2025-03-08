export const signin = async (email: string, password: string): Promise<void> => {
  // const { prom, res, rej } = 
  const result = await fetch('/account/signin', {
    credentials: 'include',
    body: JSON.stringify({ email, password })
  }).then((res) => res.json());
};
