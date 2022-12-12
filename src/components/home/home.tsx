import { Link } from "react-router-dom";
import { Container } from "./home.styles";

function Home() {
  return (
    <Container>
      <h1>Gym App</h1>
      <p>
        On this page you will find 3 workouts with different exercises. You will
        be able to set the repetitions, weights and intervals as best suits you.
        You can also create a workout with your own exercises. Print the workout
        and enjoy!
      </p>
      <p>
        When you decide it's time to increase the reps, weight or interval, come
        back here and set new values ​​and have a fresh workout.
      </p>
      <Link to="/workouts">Start my journey</Link>
    </Container>
  );
}

export default Home;
