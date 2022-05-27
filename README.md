# joke.svg

Welcome to Joke.SVG! Joke.SVG is an api wrapper for [puns.dev](https://puns.dev) that returns a programming joke as an SVG image. It's really good for [Readmes](https://github.com/ztcollazo). I (ztcollazo) will continue to maintain this.

Some eventual features:

- [X] Random Joke
- [X] Specific joke
- [X] Search jokes
- [ ] Themes

## API

The root URL is <https://jokesvg.ztco.workers.dev>

### Paths

#### `/`

Redirects to this page.

#### `/random`

Returns a random joke.

#### `/get?id={jokeId}`

Returns the joke at the given ID.

##### Params

| Param | Optional |  Description       |
| ----- | -------- | ------------------ |
| `id`  | False    | The ID of the joke |

#### `/search?q={term}&i={index}

| Param | Optional |  Description             |
| ----- | -------- | ------------------------ |
| `q`   | False    | The search term          |
| `i`   | True     | Index of array to return |
