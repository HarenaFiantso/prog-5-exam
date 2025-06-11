import { MoveStrategy } from "./MoveStrategy.ts";

export class NormalMoveStrategy implements MoveStrategy {
  move(currentPosition: number, speed: number, diceRoll: number): number {
    return currentPosition + speed * diceRoll;
  }
}
