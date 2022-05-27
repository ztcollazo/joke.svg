declare module 'puns.dev' {
  export interface Pun {
    pun: string,
    punchline: string,
    id: number,
  }

  export function all(): Pun[]
  export function random(): Pun
  export function get(id: number): Pun
  export function search(keyword: string[]): Pun[]
};
