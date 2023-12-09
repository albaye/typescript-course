import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

// Create an object that satisfies the "DateReader" interface
const reader = new CsvFileReader("football.csv");

// Create an instance of MatchReader and pass in something satisfying the "DataReader" interface
const matchReader = new MatchReader(reader);
matchReader.load();
