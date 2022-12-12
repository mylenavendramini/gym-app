import { Routes, Route } from "react-router-dom";
import "./App.css";
import Exercise from "./components/exercise/exercise";
import CreateWorkout from "./components/exercises/create-workout";
import Home from "./components/home/home";

import Work from "./routes/work";
import WorkIn from "./routes/workin";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/create-workout" element={<CreateWorkout />} />
        <Route path="/workouts/*" element={<Work />}>
          <Route path=":workoutId" element={<WorkIn />}>
            <Route path=":exerciseId" element={<Exercise />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
