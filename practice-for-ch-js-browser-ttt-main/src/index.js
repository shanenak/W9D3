import View from "./ttt-view";
import Game from "../ttt_node/game";

document.addEventListener("DOMContentLoaded", () => {
  const gameInstance = new Game()
  const el = document.querySelector(".ttt")
  const viewInstance = new View(gameInstance, el)
});