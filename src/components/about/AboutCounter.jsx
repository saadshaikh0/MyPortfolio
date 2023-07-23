import { useCountUp } from "react-countup";
import CounterItem from "./CounterItem";

const AboutCounter = () => {
  useCountUp({ ref: "experienceCounter", end: 2, duration: 2 });
  useCountUp({ ref: "hackerrankProblems", end: 100, duration: 4 });

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-around items-center">
        <CounterItem
          title="Years of experience"
          counter={<span id="experienceCounter" />}
          measurement=""
        />

        <CounterItem
          title="Problems Solved on Hackerrank"
          counter={<span id="hackerrankProblems" />}
          measurement="+"
        />
      </div>
    </div>
  );
};

export default AboutCounter;
