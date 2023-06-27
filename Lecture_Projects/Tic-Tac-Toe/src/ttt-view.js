class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
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
  }
  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;