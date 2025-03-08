export class SysError extends Error {
  constructor(public message: string, public userMessage: string, public status: number) {
    super(message);
  }
}
