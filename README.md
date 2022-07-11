# joke.svg

![Random joke](https://jokesvg.ztco.workers.dev/random)

Welcome to Joke.SVG! Joke.SVG is an api wrapper for [puns.dev](https://puns.dev) that returns a programming joke as an SVG image. It's really good for [Readmes](https://github.com/ztcollazo).

Features:

- [X] Random Joke
- [X] Specific joke
- [X] Search jokes
- [X] Themes

## API

The root URL is <https://jokesvg.ztco.workers.dev>

### Common params

| Param    | Optional | Description                           |
| -------- | -------- | ------------------------------------- |
| `theme`  | True     | Which theme to use                    |
| `bg`     | True     | Override the theme's background color |
| `border` | True     | Override the theme's border color     |
| `color`  | True     | Override the theme's text color       |

### Paths

#### `/`

Redirects to this page.

#### `/random`

Returns a random joke.

#### `/get?id={jokeId}`

Returns the joke at the given ID.

##### Params

| Param | Optional | Description        |
| ----- | -------- | ------------------ |
| `id`  | False    | The ID of the joke |

#### `/search?q={term}&i={index}`

| Param | Optional | Description              |
| ----- | -------- | ------------------------ |
| `q`   | False    | The search term          |
| `i`   | True     | Index of array to return |

## Themes

### Default

![The Default Theme](https://jokesvg.ztco.workers.dev/random?theme=default)

### Nord

![The Nord Theme](https://jokesvg.ztco.workers.dev/random?theme=nord)

### Dark

![The Dark Theme](https://jokesvg.ztco.workers.dev/random?theme=dark)
