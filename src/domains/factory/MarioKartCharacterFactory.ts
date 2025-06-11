import { Character } from "../../models/index.ts";
import { Luigi, Mario, Peach } from "../../characters/index.ts";
import { CharacterFactory } from "./CharacterFactory.ts";

export class MarioKartCharacterFactory implements CharacterFactory {
  createCharacter(type: string): Character {
    switch (type.toLowerCase()) {
      case "mario":
        return new Mario();
      case "luigi":
        return new Luigi();
      case "peach":
        return new Peach();
      default:
        throw new Error("Invalid character type");
    }
  }
}
