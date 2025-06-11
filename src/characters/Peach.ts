import { Character } from "../models/index.ts";
import {
  MoveStrategy,
  NormalMoveStrategy,
  SlipMoveStrategy,
} from "../domains/strategy/index.ts";

export class Peach implements Character {
  name = "Peach";
  speed = 3;
  stability = 1;
  private moveStrategy: MoveStrategy = new NormalMoveStrategy();

  move(currentPosition: number, diceRoll: number): number {
    if (diceRoll === 6 && this.stability < 2) {
      const slipStrategy = new SlipMoveStrategy();
      return slipStrategy.move(currentPosition, this.speed, diceRoll);
    }
    return this.moveStrategy.move(currentPosition, this.speed, diceRoll);
  }
}
