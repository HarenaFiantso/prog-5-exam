import { Character } from "../models/index.ts";
import {
  MoveStrategy,
  NormalMoveStrategy,
  SlipMoveStrategy,
} from "../domains/strategy/index.ts";

export class Mario implements Character {
  name = "Mario";
  speed = 2;
  stability = 2;
  private moveStrategy: MoveStrategy = new NormalMoveStrategy();

  move(currentPosition: number, diceRoll: number): number {
    if (diceRoll === 6 && this.stability < 2) {
      const slipStrategy = new SlipMoveStrategy();
      return slipStrategy.move(currentPosition, this.speed, diceRoll);
    }
    return this.moveStrategy.move(currentPosition, this.speed, diceRoll);
  }
}
