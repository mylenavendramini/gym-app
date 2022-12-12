// interface workoutDBProps {
//   id: string;
//   name: string;
//   exercises: [];
// }
const workoutDB = [
  {
    id: "workout-a",
    name: "Workout A",
    exercises: [
      {
        name: "SQUAT",
        id: Math.floor(Math.random() * 100),
        repetitions: "",
        weight: "",
        interval: "",
      },
      {
        name: "BENCH PRESS",
        id: Math.floor(Math.random() * 100),
        repetitions: "",
        weight: "",
        interval: "",
      },
      {
        name: "PUSH-UP",
        id: Math.floor(Math.random() * 100),
        repetitions: "",
        weight: "",
        interval: "",
      },
      {
        name: "CRUNCH",
        id: Math.floor(Math.random() * 100),
        repetitions: "",
        weight: "",
        interval: "",
      },
    ],
  },
  {
    id: "workout-b",
    name: "Workout B",
    exercises: [
      {
        name: "DEADLIFT",
        id: Math.floor(Math.random() * 100),
        repetitions: "",
        weight: "",
        interval: "",
      },
      {
        name: "CARDIO",
        id: Math.floor(Math.random() * 100),
        repetitions: "",
        weight: "",
        interval: "",
      },
      {
        name: "SIDE LATERAL",
        id: Math.floor(Math.random() * 100),
        repetitions: "",
        weight: "",
        interval: "",
      },
      {
        name: "LEGPRESS",
        id: Math.floor(Math.random() * 100),
        repetitions: "",
        weight: "",
        interval: "",
      },
    ],
  },
  {
    id: "workout-c",
    name: "Workout C",
    exercises: [
      {
        name: "LUNGE",
        id: Math.floor(Math.random() * 100),
        repetitions: "",
        weight: "",
        interval: "",
      },
      {
        name: "SPLIT SQUATS",
        id: Math.floor(Math.random() * 100),
        repetitions: "",
        weight: "",
        interval: "",
      },
      {
        name: "GLUTE BRIDGE",
        id: Math.floor(Math.random() * 100),
        repetitions: "",
        weight: "",
        interval: "",
      },
      {
        name: "CARDIO",
        id: Math.floor(Math.random() * 100),
        repetitions: "",
        weight: "",
        interval: "",
      },
    ],
  },
];

export function getGym() {
  return workoutDB;
}

export function getWorkout(workoutId: any) {
  return workoutDB.find(({ id }) => id === workoutId);
}

export function getExercises(workoutId: string) {
  return workoutDB
    .find(({ id }) => id === workoutId)
    ?.exercises.map((exercise) => exercise.name);
}

export function getExercise({ exerciseId, workoutId }: any) {
  return workoutDB
    .find(({ id }) => id === workoutId)
    ?.exercises.find(({ id }) => id === exerciseId);
}

export default workoutDB;
