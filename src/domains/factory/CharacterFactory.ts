import { Character } from "../../models/index.ts";

export interface CharacterFactory {
  createCharacter(type: string): Character;
}
