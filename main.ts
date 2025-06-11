import MarioKartSimulator from "./src/MarioKartSimulator.ts";

function main() {
  const app = new MarioKartSimulator();
  app.play();
}

if (import.meta.main) main();
