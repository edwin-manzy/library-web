export interface SysError extends Error {
  message: string,
  userMessage: string,
  title: string,
  status: 'error' | 'success',
  inputName?: string,
}
