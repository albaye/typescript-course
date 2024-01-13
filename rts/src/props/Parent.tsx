import { Child } from "./Child";

const Parent = () => {
  return <Child color="red" onClick={() => console.log("Clicked")}>Hello world</Child>;
}

export default Parent;
