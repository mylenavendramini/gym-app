import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Workouts from "../components/workouts/workouts";
import WorkIn from "./workin";

const Work = () => {
  return (
    <Fragment>
      <Routes>
        <Route index element={<Workouts />} />
        <Route path=":workoutId/*" element={<WorkIn />} />
      </Routes>
    </Fragment>
  );
};

export default Work;
