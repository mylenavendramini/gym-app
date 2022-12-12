import { ChangeEvent, useState, useRef } from "react";
import {
  ExercisesContainer,
  ExercisesSettings,
  ExercisesReady,
} from "./exercises.styles";
import { getWorkout } from "../../gym.database";
import { Link, useParams } from "react-router-dom";

import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./componenttoprint";

export interface InputData {
  name: string;
  id: Number | any;
  repetitions: Number | any;
  weight: Number | any;
  interval: Number | any;
}

function Exercises() {
  const { workoutId } = useParams();
  const workout = getWorkout(workoutId);
  // console.log(workout?.exercises.map((exercise) => exercise.id));

  const [exercises, setExercises] = useState<InputData[]>([
    {
      name: "squat",
      id: Math.floor(Math.random() * 100),
      repetitions: "",
      weight: "",
      interval: "",
    },
    {
      name: "bench pres",
      id: Math.floor(Math.random() * 100),
      repetitions: "",
      weight: "",
      interval: "",
    },
    {
      name: "push-up",
      id: Math.floor(Math.random() * 100),
      repetitions: "",
      weight: "",
      interval: "",
    },
    {
      name: "crunch",
      id: Math.floor(Math.random() * 100),
      repetitions: "",
      weight: "",
      interval: "",
    },
  ]);

  const handleChangeInput = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const target = e.target as HTMLInputElement;
    const exe = [...exercises];
    exe[index][target.name as keyof InputData] = Number(target.value);
    setExercises(exe);
    console.log("exe: ", exe);
  };

  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  // const resetButton = (e: ChangeEvent<HTMLInputElement>) => {
  //   const target = e.target as HTMLInputElement;
  //   const exe = [...exercises];
  //   console.log(target);

  //   // exe[target as keyof InputData] = "";
  //   setExercises(exe);
  //   console.log("exe: ", exe);
  // };

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <ExercisesContainer>
      <div className={isActive ? "not-active" : "active"}>
        <ExercisesSettings>
          <form>
            {exercises?.map(({ name, id }, index) => (
              <div key={id}>
                <h3> Exercise: {name}</h3>
                <p>How many repetitions?</p>
                <input
                  name={`repetitions`}
                  type="number"
                  id="repetitions"
                  value={exercises[index]["repetitions"]}
                  onChange={(e) => handleChangeInput(e, index)}
                  // ref={inputRef}
                />
                <label htmlFor="repetitions"> repetitions</label>
                <p>What about the weight?</p>
                <input
                  name={`weight`}
                  type="number"
                  id="weight"
                  value={exercises[index]["weight"]}
                  onChange={(e) => handleChangeInput(e, index)}
                  // ref={inputRef}
                />
                <label htmlFor="weight"> kilos</label>
                <p>Choose an interval (in seconds)</p>
                <input
                  name={`interval`}
                  type="number"
                  id="interval"
                  value={exercises[index]["interval"]}
                  onChange={(e) => handleChangeInput(e, index)}
                  // ref={inputRef}
                />
                <label htmlFor="interval"> seconds</label>
              </div>
            ))}
          </form>
          <button onClick={toggleButton}>Save</button>
          <button>Remove exercise</button>
          {/* <button onClick={resetButton}>Reset</button> */}
        </ExercisesSettings>
      </div>

      {/* <div className={isActive ? "active" : "not-active"}>
        <ExercisesReady>
          {exercises?.map(({ name, repetitions, weight, interval, id }) => (
            <ul key={id}>
              <li>Exercise:{name}</li>
              <li>Repetitions: {repetitions}</li>
              <li>Weight: {weight}</li>
              <li>Interval: {interval}</li>
            </ul>
          ))}
          <button onClick={handlePrint}>Export to PDF</button>
          <button>Send it to my email</button>
          <button>Go back</button>
        </ExercisesReady>
      </div> */}
      <div className={isActive ? "active" : "not-active"}>
        <ExercisesReady>
          <ComponentToPrint
            ref={componentRef}
            exercises={exercises}
            setExercises={setExercises}
          />
          <button onClick={handlePrint}>Convert to PDF</button>
          <button>Send it to my email</button>
          <Link to="/workouts">Go back to Workouts</Link>
        </ExercisesReady>
      </div>
    </ExercisesContainer>
  );
}

export default Exercises;
