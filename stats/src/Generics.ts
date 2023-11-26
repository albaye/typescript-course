// class HoldNumber {
//   data: number = 0;
// }
// const holdNumber = new HoldNumber();
// holdNumber.data = 123;

// class HoldString {
//   data: string = "";
// }
// const holdString = new HoldString();
// holdString.data = "aasdf";

class HoldAnything<T> {
  data: T | undefined;
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 123;

const holdString = new HoldAnything<string>();
holdString.data = "asdfas";
