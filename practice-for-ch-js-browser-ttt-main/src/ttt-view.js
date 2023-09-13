class View {

  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard()
  }
  
  setupBoard() {
    const ul = document.createElement('ul')
    for (let i = 0; i < 9; i++) {
      const li = document.createElement('li')
      li.setAttribute("data-index-number", i)
      ul.appendChild(li)
    }
    this.el.appendChild(ul)

    ul.addEventListener("click", this.handleClick.bind(this))
  }
  
  handleClick(e) {
    console.log(e.target.dataset.indexNumber)
    const index = e.target.dataset.indexNumber
    const pos = [Math.floor(index/3), index%3]
    const currMark = this.game.currentPlayer
    try {
      this.game.playMove(pos);
      e.target.innerText = currMark;
      e.target.className = `${currMark}-player`
      this.handleGameOver()
    } catch (error) {
      alert(error)
    } 
  }
  
  handleGameOver() {
    if (this.game.isOver()) {
      const winner = this.game.winner()
      const div = document.createElement('div')
      div.innerText = `You win, ${winner}!`
      document.body.appendChild(div)
      Array.from(document.querySelectorAll(`.${winner}-player`)).forEach((ele)=> {
        ele.className = 'winner'
      })
    }
  }
}

export default View;