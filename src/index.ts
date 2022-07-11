import {Router} from 'worktop';
import {listen} from 'worktop/cache';
import puns from 'puns.dev';
import theme, {Theme} from './utils/theme';
import {ServerRequest} from 'worktop/request';

const pun = ({pun, punchline}: puns.Pun, theme: Theme) => `
<svg fill="none" viewBox="0 0 800 200" width="800" height="200" xmlns="http://www.w3.org/2000/svg">
  <foreignObject width="100%" height="100%">
    <style>
      h1 {
        font-weight: bold;
        font-size: 17pt;
      }
      h2 {
        font-weight: semibold;
        font-size: 16pt;
      }
      #root {
        box-sizing: border-box;
        padding: 0;
        border-radius: 10px;
        border: 3px solid ${theme.borderColor};
        background-color: ${theme.backgroundColor};
        color: ${theme.color};
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      #pun {
        padding: 1rem;
        margin: 1rem;
      }
    </style>
    <div id="root" class="container" xmlns="http://www.w3.org/1999/xhtml">
      <div id="pun">
        <h1>${pun}</h1>
        <h2>${punchline}</h2>
      </div>
    </div>
  </foreignObject>
</svg>`;

const createTheme = (req: ServerRequest<{}>): Theme => {
  const inititalTheme = theme(req.query.get('theme') ?? 'default');
  return {
    ...inititalTheme,
    backgroundColor: req.query.get('bg') ?? inititalTheme.backgroundColor,
    borderColor: req.query.get('border') ?? inititalTheme.borderColor,
    color: req.query.get('color') ?? inititalTheme.color,
  };
};

const api = new Router();

api.add('GET', '/', (req, res) => {
  return Response.redirect('https://github.com/ztcollazo/joke.svg', 301);
});

api.add('GET', '/random', (req, res) => {
  const svg = pun(puns.random(), createTheme(req));
  res.setHeader('Content-Type', 'image/svg+xml');
  res.end(svg);
});

api.add('GET', '/get', (req, res) => {
  const svg = pun(puns.get(Number(req.query.get('id'))), createTheme(req));
  res.setHeader('Content-Type', 'image/svg+xml');
  res.end(svg);
});

api.add('GET', '/search', (req, res) => {
  const svg = pun(
      puns.search(
        req.query.get('q')?.split(' ')!,
      )[Number(req.query.get('i') ?? 0)],
      createTheme(req),
  );
  res.setHeader('Content-Type', 'image/svg+xml');
  res.end(svg);
});

listen(api.run);
