type MirrorArray<T extends readonly string[]> = {
  [K in T[number]]: K;
};

type MirrorLowerCaseArray<T extends readonly string[]> = {
  [K in T[number]]: Lowercase<K>;
};

export const createMirror = <T extends readonly string[]>(arr: T): MirrorArray<T> => {
  return Object.fromEntries(arr.map(key => [key, key])) as MirrorArray<T>;
};

export const createMirrorLower = <T extends readonly string[]>(arr: T): MirrorLowerCaseArray<T> => {
  return Object.fromEntries(arr.map(key =>
    [key, key.toLocaleLowerCase()])) as MirrorLowerCaseArray<T>;
};

export const defaultValue = <T> (value: T | undefined, defaultValue: T): T => {
  if (value === undefined) {
    return defaultValue;
  }
  return value as T;
};
