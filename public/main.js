// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import renderToDOM from '../utils/renderToDom';
import htmlStructure from '../components/htmlStructure';

const init = () => {
  htmlStructure();
  renderToDOM();
};

init();
