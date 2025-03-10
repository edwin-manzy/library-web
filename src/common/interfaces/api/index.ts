export type ApiResponse<T> = {
  data: T,
  unwrap: () => T,
  error: string,
  status: number,
};
