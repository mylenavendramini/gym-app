import { forwardRef, useState } from "react";
import Contact from "../contact/contact";

import { ExercisesContainer, ExercisesReady } from "./componenttoprint.styles";

export interface InputData {
  name: string;
  id: Number | any;
  repetitions: Number | any;
  weight: Number | any;
  interval: Number | any;
}
export type Ref = HTMLButtonElement;

const ComponentToPrint = forwardRef<InputData, Ref>(
  (props: { exercises: InputData }, ref: HTMLButtonElement) => {
    const [contact, setContact] = useState(true);

    const handleContact = () => {
      setContact(!contact);
    };
    return (
      <div>
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
        <button onClick={handleContact}>
          {contact ? "Send it to my email" : "Close contact"}
        </button>
        <div className={contact ? "not-active" : "active"}>
          <Contact exercises={props.exercises} />
        </div>
      </div>
    );
  }
);

export default ComponentToPrint;
