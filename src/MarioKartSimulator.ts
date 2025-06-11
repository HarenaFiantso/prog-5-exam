import figlet from "npm:figlet";

class MarioKartSimulator {
  public play() {
    figlet(
      "Mario Kart Simulator!",
      (err: unknown, data: string | undefined) => {
        if (err) {
          console.log("Something went wrong...");
          console.dir(err);
          return;
        }
        console.log(data);
        console.log("Welcome to Mario Kart Simulator Made By Fiantso Harena!");
        console.log("Choose your character:");
        console.log("1. Mario (balanced: speed 2, stability 2)");
        console.log("2. Luigi (slow but stable: speed 1, stability 3)");
        console.log("3. Peach (fast but unstable: speed 3, stability 1)");
      },
    );
  }
}

export default MarioKartSimulator;
