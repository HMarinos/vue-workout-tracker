<template>
  <section>
    <h1>{{ currentUser }}/{{ currentDay }}</h1>
    <ul>
      <li v-for="work in filtered.workouts[currentDay]">
        <div>{{ work.ex_name }}</div>
        <div>{{ work.sets }}</div>
        <div>{{ work.reps }}</div>
      </li>
    </ul>
    <the-workout-editor></the-workout-editor>
  </section>
</template>

<style scoped>
ul li {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  background-color: cadetblue;
  color: white;
  border-bottom: 1px solid white;
}
</style>

<script>
import TheWorkoutEditor from "../components/TheWorkoutEditor.vue";

export default {
  computed: {
    usersList() {
      return this.$store.getters["users/users"];
    },
    currentUser() {
      return this.$route.params.id;
    },
    currentDay() {
      return this.$route.params.day;
    },
    filtered() {
      return this.usersList.find((user) => user.id === this.currentUser);
    },
  },

  components: {
    TheWorkoutEditor,
  },
};
</script>
