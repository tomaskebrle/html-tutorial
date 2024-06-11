import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Lab } from "./components/lab";
import { markdown as fifth } from "./labs/fifth.md";
import { markdown as first } from "./labs/first.md";
import { markdown as fourth } from "./labs/fourth.md";
import { markdown as second } from "./labs/second.md";
import { markdown as third } from "./labs/third.md";

const markdowns = [first, second, third, fourth, fifth];

export const App = () => {
  const [index, setIndex] = useState(0);
  const markdown = markdowns[index];

  return (
    <>
      <Toaster></Toaster>
      <Lab
        markdown={markdown}
        nextDisabled={index === markdowns.length - 1}
        prevDisabled={index === 0}
        onNext={() => setIndex((i) => i + 1)}
        onPrev={() => setIndex((i) => i - 1)}
      ></Lab>
    </>
  );
};
