import renderToDOM from '../utils/renderToDom';

const getJokeBtn = () => {
  const domString = '<button type="button" id="getJoke"class="btn btn-secondary">Get A Joke</button>';
  renderToDOM('#getJoke', domString);
};

const getPunchlineBtn = () => {
  const domString = '<button type="button" id="getPunched"class="btn btn-secondary">Get Punchline</button>';
  renderToDOM('#getPunched', domString);
};

const newJokeBtn = () => {
  const domString = '<button type="button" id="newJoke"class="btn btn-secondary">New Joke</button>';
  renderToDOM('#getPunched', domString);
};

export { getJokeBtn, getPunchlineBtn, newJokeBtn };
