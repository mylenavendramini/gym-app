import { getExercise } from "../../gym.database";
import { useParams } from "react-router-dom";

function Exercise() {
  const { exerciseId, workoutId } = useParams();

  const { name }: any = getExercise({ exerciseId, workoutId });

  return (
    <div>
      <h1>Instructions for the exercise</h1>
      <h1>{name}</h1>
      {/* Image of the equipment*/}
      <img src="" alt="" />
      <button>Go back to Workout</button>
    </div>
  );
}

export default Exercise;
