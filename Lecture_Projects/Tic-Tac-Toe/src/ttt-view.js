import Board from "../ttt_node/board";

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard()
  }

  setupBoard() {


    const ul = document.createElement('ul');

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const li = document.createElement('li');
        const pos = [i, j];
        li.dataset.pos = JSON.stringify(pos);
        ul.appendChild(li);
      }
    }

    this.el.appendChild(ul);

    ul.addEventListener('click',this.handleClick.bind(this));
  }

  handleClick(e) {
    const target = e.target

    const pos = JSON.parse(target.dataset.pos)


    this.game.playMove(pos)

    const currentPlayer = this.game.currentPlayer

    target.innerText = currentPlayer

    target.classList.add('open');











  }

  makeMove(square) {
  }

  handleGameOver() {
  }
}

export default View;
