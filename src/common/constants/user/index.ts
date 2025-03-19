import { createMirror, createMirrorLower } from 'src/common/helpers/data';

export const USER_ACTIONS = createMirror([
  'SIGN_IN',
  'SIGN_OUT'
] as const);

export const USER_TYPES = createMirrorLower([
  'STUDENT', 'LIBRARIAN', 'ADMINISTRATOR'
] as const);

export const USER_ERRORS = createMirror([
  'EMAIL_PASSWORD_INCORRECT',
  'EMAIL_INVALID',
  'PASSWORD_INVALID'
] as const);
