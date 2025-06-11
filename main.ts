import { MarioKartCharacterFactory } from "./src/MarioKartCharacterFactory.ts";
import { Character } from "./src/Character.ts";
import { MarioKartSimulator } from "./src/MarioKartSimulator.ts";

async function getInput(prompt: string): Promise<string> {
  const buf = new Uint8Array(1024);
  await Deno.stdout.write(new TextEncoder().encode(prompt));
  const n = <number> await Deno.stdin.read(buf);
  return new TextDecoder().decode(buf.subarray(0, n)).trim();
}

async function main() {
  console.log("🏁 Welcome to Mario Kart Simulator! 🏁");
  console.log("Choose your character:");
  console.log("1. Mario (balanced: speed 2, stability 2)");
  console.log("2. Luigi (slow but stable: speed 1, stability 3)");
  console.log("3. Peach (fast but unstable: speed 3, stability 1)");

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
          console.log("Invalid choice. Please enter 1, 2, or 3.");
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
}

if (import.meta.main) {
  main();
}
