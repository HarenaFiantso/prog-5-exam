import { MarioKartSimulator } from "./src/MarioKartSimulator.ts";
import figlet from "npm:figlet";
import { getInput } from "./src/lib/helper.ts";
import { MarioKartCharacterFactory } from "./src/domains/factory/index.ts";
import { Character } from "./src/models/index.ts";
import chalk from "npm:chalk";

function main() {
  figlet(
    "Mario Kart Simulator!",
    async (err: unknown, data: string | undefined) => {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);

      console.log(
        chalk.bold(
          "Welcome to Mario Kart Simulator! Made By Fiantso Harena!",
        ),
      );
      console.log("Choose your character : ");
      console.log(
        chalk.italic.blue("1. Mario (balanced: speed 2, stability 2)"),
      );
      console.log(
        chalk.italic.green("2. Luigi (slow but stable: speed 1, stability 3)"),
      );
      console.log(
        chalk.italic.yellow(
          "3. Peach (fast but unstable: speed 3, stability 1)",
        ),
      );

      const factory = new MarioKartCharacterFactory();
      let character: Character | null = null;

      while (!character) {
        const choice = await getInput("Enter your choice (1-3): ");

        try {
          switch (choice) {
            case "1":
              character = factory.createCharacter("mario");
              break;
            case "2":
              character = factory.createCharacter("luigi");
              break;
            case "3":
              character = factory.createCharacter("peach");
              break;
            default:
              console.log("Invalid choice. Please enter 1, 2, or 3");
          }
        } catch (error: unknown) {
          if (error instanceof Error) {
            console.log(error.message);
          } else {
            console.log("An unknown error occurred.");
          }
        }
      }

      const game = new MarioKartSimulator(20, character);
      await game.play();
    },
  );
}

if (import.meta.main) {
  main();
}
