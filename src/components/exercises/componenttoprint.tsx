import { forwardRef, useState } from "react";
import Contact from "../contact/contact";

import { ExercisesContainer, ExercisesReady } from "./componenttoprint.styles";

import { InputData, Ref } from "../types/index";

export interface ComponentToPrintProps {
  exercises: InputData[];
  ref: Ref;
}

const ComponentToPrint = forwardRef(
  ({ exercises, ref }: ComponentToPrintProps) => {
    const [contact, setContact] = useState(true);

    const handleContact = () => {
      setContact(!contact);
    };
    return (
      <div>
        <ExercisesContainer>
          <h1>Workout</h1>
          <ExercisesReady ref={ref}>
            {exercises?.map(({ name, repetitions, weight, interval, id }) => (
              <ul key={id}>
                <li>{name}</li>
                <li>Repetitions: {repetitions}</li>
                <li>Weight: {weight}</li>
                <li>Interval: {interval}</li>
              </ul>
            ))}
          </ExercisesReady>
        </ExercisesContainer>
        <button onClick={handleContact}>
          {contact ? "Send it to my email" : "Close contact"}
        </button>
        <div className={contact ? "not-active" : "active"}>
          <Contact exercises={exercises} />
        </div>
      </div>
    );
  }
);

export default ComponentToPrint;
