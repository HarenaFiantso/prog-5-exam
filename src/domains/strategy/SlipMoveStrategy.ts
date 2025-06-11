import { MoveStrategy } from "./MoveStrategy.ts";

export class SlipMoveStrategy implements MoveStrategy {
  move(currentPosition: number, _speed: number, _diceRoll: number): number {
    console.log("Oh no! You slipped and didn't move this turn!");
    return currentPosition;
  }
}
