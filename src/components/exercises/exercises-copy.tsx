import { ChangeEvent, useState, useRef } from "react";
import { ExercisesContainer, ExercisesReady } from "./exercises.styles";
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

function ExercisesCopy() {
  const { workoutId } = useParams();
  const workout = getWorkout(workoutId);

  const [exercises, setExercises] = useState<InputData[]>(workout!.exercises);

  // When clicked at "save" button of each line, it will display the result in the "Wourkout of the day", line by line

  // When clicked at "remove" button, the whole line will be removed
  // When clicked at "reset", all the inputs will come back to the 0 state and the removed exercises will come back

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

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ExercisesContainer>
        <div className={isActive ? "not-active" : "active"}>
          <h1>Workout Settings</h1>
          <p>
            Set the repetitions, weights and intervals as best suits you. When
            you finish, save your workout and print it.
          </p>
          <div>
            <form>
              {exercises?.map(({ name, id }, index) => (
                <div key={id}>
                  <h3>{name}</h3>
                  <label>How many repetitions?</label>
                  <input
                    name={`repetitions`}
                    type="number"
                    id="repetitions"
                    value={exercises[index]["repetitions"]}
                    onChange={(e) => handleChangeInput(e, index)}
                    // ref={inputRef}
                  />

                  <label>What about the weight?</label>
                  <input
                    name={`weight`}
                    type="number"
                    id="weight"
                    value={exercises[index]["weight"]}
                    onChange={(e) => handleChangeInput(e, index)}
                    // ref={inputRef}
                  />

                  <label>Choose an interval (in seconds)</label>
                  <input
                    name={`interval`}
                    type="number"
                    id="interval"
                    value={exercises[index]["interval"]}
                    onChange={(e) => handleChangeInput(e, index)}
                    // ref={inputRef}
                  />
                </div>
              ))}
            </form>
            <button onClick={toggleButton}>Save</button>

            {/* <button onClick={resetButton}>Reset</button> */}
          </div>
        </div>
        <div className={isActive ? "active" : "not-active"}>
          <ExercisesReady>
            <ComponentToPrint
              ref={componentRef}
              exercises={exercises}
              setExercises={setExercises}
            />
            <button onClick={handlePrint}>Convert to PDF</button>
            <button disabled>Send it to my email</button>
            <button onClick={toggleButton}>Go back</button>
          </ExercisesReady>
        </div>
      </ExercisesContainer>
    </div>
  );
}

export default ExercisesCopy;
