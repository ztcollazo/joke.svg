import {Router} from 'worktop';
import {listen} from 'worktop/cache';
import puns from 'puns.dev';

const pun = ({pun, punchline}: puns.Pun) => `
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
        border: 3px solid lightblue;
        background-color: #454545;
        color: lightblue;
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

const api = new Router();

api.add('GET', '/', (req, res) => {
  const svg = pun(puns.random());
  res.setHeader('Content-Type', 'image/svg+xml');
  res.end(svg);
});

listen(api.run);
