export type Cookies = Dictionary<string>;

export interface Dictionary<T = unknown> {
  [key: string]: T;
}

export interface Link {
  id: string;
  title: string;
  href?: string;
  disabled?: boolean;
  links?: Link[];
}
