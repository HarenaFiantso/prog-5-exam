export interface Character {
  name: string;
  speed: number;
  stability: number;
  move(currentPosition: number, diceRoll: number): number;
}
