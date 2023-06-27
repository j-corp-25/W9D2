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

    const currentPlayer = this.game.currentPlayer

    this.game.playMove(pos)


    target.innerText = currentPlayer

    target.classList.add('open');






    if (this.game.isOver()) {
      this.handleGameOver();
    }
  }

  makeMove(square) {
  }

  handleGameOver() {
    if (this.game.winner()) {
      alert(`${this.game.winner()} won!`)
    } else {
      alert('NO ONE WINS!');
    }
  }
}

export default View;
