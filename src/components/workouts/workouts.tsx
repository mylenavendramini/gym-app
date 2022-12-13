import { Link } from "react-router-dom";
import { getGym } from "../../gym.database";
import { WorkoutContainer } from "./workouts.styles";

function Workouts() {
  const workouts = getGym();
  return (
    <WorkoutContainer>
      <h1>What workout for today?</h1>

      {workouts.map(({ name, id }) => (
        <div key={id}>
          <ul>
            <li>
              {" "}
              <Link to={id}>{name}</Link>
            </li>
          </ul>
        </div>
      ))}
      <li>
        <Link to="/create-workout">Create a workout</Link>
      </li>
      <p>
        We advise doing a workout for each day. For example, Monday - Workout A,
        Tuesday - Workout B, and so on.
      </p>
    </WorkoutContainer>
  );
}

export default Workouts;
