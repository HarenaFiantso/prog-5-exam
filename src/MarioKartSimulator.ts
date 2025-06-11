import { Character } from "./models/index.ts";
import chalk from "npm:chalk";

export class MarioKartSimulator {
  private readonly trackLength: number;
  private player: Character;
  private playerPosition: number = 0;
  private turns: number = 0;

  constructor(trackLength: number, player: Character) {
    this.trackLength = trackLength;
    this.player = player;
  }

  /**
   * @author Fiantso Harena
   *
   * Simulates rolling a standard six-sided dice
   * @returns {number} A random integer between 1 and 6 (inclusive).
   */
  private rollDice(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  private displayTrack(): void {
    let track = "";
    for (let i = 0; i < this.trackLength; i++) {
      if (i === this.playerPosition) {
        track += "🚗";
      } else {
        track += "_";
      }
    }
    console.log(track);
    console.log(
      `${this.player.name} is at position ${
        this.playerPosition + 1
      }/${this.trackLength}`,
    );
  }

  async play(): Promise<void> {
    console.log(chalk.bold(`Let's go! ${this.player.name}!`));
    console.log(
      chalk.blue(
        `Informations: Speed: ${this.player.speed}, Stability: ${this.player.stability}`,
      ),
    );

    while (this.playerPosition < this.trackLength - 1) {
      this.turns++;
      console.log(`\n--- Turn ${this.turns} ---`);

      await this.prompt("Press <Enter> to roll the dice...");

      const diceRoll = this.rollDice();
      console.log(`You rolled a ${diceRoll}!`);

      const newPosition = this.player.move(this.playerPosition, diceRoll);
      this.playerPosition = Math.min(newPosition, this.trackLength - 1);

      this.displayTrack();
    }

    console.log(
      `\nYoupiiii! ${this.player.name} finished the race in ${this.turns} turns!`,
    );
  }

  private async prompt(message: string): Promise<void> {
    const buf = new Uint8Array(1024);
    await Deno.stdout.write(new TextEncoder().encode(message));
    await Deno.stdin.read(buf);
  }
}
