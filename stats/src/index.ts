import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

// Create an object that satisfies the "DateReader" interface
const reader = new CsvFileReader("football.csv");

// Create an instance of MatchReader and pass in something satisfying the "DataReader" interface
const matchReader = new MatchReader(reader);
matchReader.load();

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] == MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log("Man United won " + manUnitedWins + " games");