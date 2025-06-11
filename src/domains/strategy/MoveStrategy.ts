export interface MoveStrategy {
  move(currentPosition: number, speed: number, diceRoll: number): number;
}
