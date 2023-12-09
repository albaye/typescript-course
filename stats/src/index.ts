import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analysers/WinsAnalysis";
import { Summary } from "./Summary";

// Create an object that satisfies the "DateReader" interface
const reader = new CsvFileReader("football.csv");

// Create an instance of MatchReader and pass in something satisfying the "DataReader" interface
const matchReader = new MatchReader(reader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);
