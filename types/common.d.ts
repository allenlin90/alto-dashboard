export type Cookies = Dictionary<string>;

export interface Dictionary<T = unknown> {
  [key: string]: T;
}
