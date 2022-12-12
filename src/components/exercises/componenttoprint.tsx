import { forwardRef } from "react";

import { ExercisesContainer, ExercisesReady } from "./componenttoprint.styles";

const ComponentToPrint = forwardRef<HTMLDivElement>(
  (props: { exercises: [] }, ref) => {
    return (
      <ExercisesContainer>
        <h1>Workout</h1>
        <ExercisesReady ref={ref}>
          {props.exercises?.map(
            ({ name, repetitions, weight, interval, id }) => (
              <ul key={id}>
                <li>{name}</li>
                <li>Repetitions: {repetitions}</li>
                <li>Weight: {weight}</li>
                <li>Interval: {interval}</li>
              </ul>
            )
          )}
        </ExercisesReady>
      </ExercisesContainer>
    );
  }
);

export default ComponentToPrint;
