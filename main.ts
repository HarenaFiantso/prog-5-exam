import MarioKartSimulator from "./src/MarioKartSimulator.ts";

function main() {
  const game = new MarioKartSimulator();
  game.play();
}

if (import.meta.main) main();
