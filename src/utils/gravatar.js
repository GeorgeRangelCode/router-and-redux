import md5 from 'md5';

export const gravatar = email => {
  const base = `https://gravatar.com/avatar/`;
  const formattEmail = email.trim().toLowerCase();
  const hash = md5(formattEmail, { encoding: 'binary' });

  return `${base}${hash}`;
};
