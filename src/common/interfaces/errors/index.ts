export interface SysError extends Error {
  message: string,
  userMessage: string,
  status: number,
  inputName?: string,
}
