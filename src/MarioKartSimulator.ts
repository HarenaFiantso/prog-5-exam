import figlet from "npm:figlet";

class MarioKartSimulator {
  run() {
    figlet("Mario Kart Simulator!", (err: unknown, data: string | undefined) => {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    });
  }
}

export default MarioKartSimulator;
