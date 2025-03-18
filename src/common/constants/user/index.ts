import { createMirror } from 'src/common/helpers/data';

export const USER_ACTIONS = createMirror([
  'SIGN_IN',
  'SIGN_OUT'
] as const);

export const USER_TYPES = createMirror([
  'student', 'librarian',
] as const);

export const USER_ERRORS = createMirror([
  'EMAIL_PASSWORD_INCORRECT',
  'EMAIL_INVALID',
  'PASSWORD_INVALID'
] as const);
