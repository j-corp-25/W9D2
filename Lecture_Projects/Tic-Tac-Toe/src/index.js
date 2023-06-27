import Game from '../ttt_node/game';
import View from './ttt-view';

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();

  const container = document.querySelector('.ttt');

  const view = new View(game, container);
  
});
