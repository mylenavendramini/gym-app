import { Routes, Route } from "react-router-dom";
import Exercise from "../components/exercise/exercise";

import Exercises from "../components/exercises/exercises";
import ExercisesCopy from "../components/exercises/exercises-copy";

const WorkIn = () => {
  return (
    <div>
      <Routes>
        <Route index element={<ExercisesCopy />} />
        <Route path=":exerciseId" element={<Exercise />} />
      </Routes>
    </div>
  );
};

export default WorkIn;
