export default {
  namespaced: true,
  state() {
    return {
      users: [
        {
          id: "marinos",
          name: "marinos",
          weight: 0,
          height: 0,
          workouts: {
            monday: [
              {
                ex_id: "01",
                ex_name: "pull ups",
                sets: 3,
                reps: 10,
              },
              {
                ex_id: "02",
                ex_name: "bench press",
                sets: 3,
                reps: 10,
              },
            ],
            tuesday: [
              {
                ex_id: "11",
                ex_name: "squats",
                sets: 3,
                reps: 10,
              },
              {
                ex_id: "12",
                ex_name: "leg press",
                sets: 3,
                reps: 10,
              },
            ],
          },
        },
        {
          id: "odi",
          name: "odi",
          weight: 0,
          height: 0,
          workouts: {
            monday: [
              {
                ex_id: "a0",
                ex_name: "curls",
                sets: 4,
                reps: 15,
              },
              {
                ex_id: "a2",
                ex_name: "chin ups",
                sets: 4,
                reps: 15,
              },
            ],
            tuesday: [
              {
                ex_id: "b0",
                ex_name: "push ups",
                sets: 4,
                reps: 15,
              },
              {
                ex_id: "b0",
                ex_name: "overhead press",
                sets: 4,
                reps: 15,
              },
            ],
          },
        },
      ],
    };
  },
  getters: {
    users: (state) => state.users,
    hasUsers: (state) => state.users && state.users.length > 0,
  },
  mutations: {
    addWorkout(state, payload) {
      const user = state.users.find((u) => u.id === payload.userId);

      if (user) {
        if (!user.workouts[payload.day]) {
          Vue.set(user.workouts, payload.day, []);
        }
        user.workouts[payload.day].push(payload.newWorkout);
      }
    },
  },
};
