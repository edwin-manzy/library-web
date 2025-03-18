export interface SysError extends Error {
  message: string,
  title: string,
  status: 'error' | 'success',
  inputName?: string,
}
