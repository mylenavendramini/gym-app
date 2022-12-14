import { Routes, Route } from "react-router-dom";
import Exercise from "../components/exercise/exercise";

import Exercises from "../components/exercises/exercises";

const WorkIn = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Exercises />} />
        <Route path=":exerciseId" element={<Exercise />} />
      </Routes>
    </div>
  );
};

export default WorkIn;
