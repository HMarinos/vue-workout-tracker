<template>
  <section>
    <div class="workout-editor">
      <div class="add" @click="toggle_active()">+</div>
      <form @submit.prevent="add_workout" v-if="add_active" autocomplete="off">
        <input v-model="name" type="text" placeholder="Name" />
        <input v-model="sets" type="text" placeholder="Sets" />
        <input v-model="reps" type="text" placeholder="Reps" />
        <input v-model="weight" type="text" placeholder="Weight" />
        <button>ADD</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.add {
  margin: 1rem;
  background-color: green;
  color: white;
  display: inline-block;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 5px;
}

form {
  margin-left: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 250px;
  gap: 0.2rem;
}
form input {
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  background-color: white;
}
form button {
  grid-column: 1/-1;
  background-color: green;
  border: none;
  padding: 0.2rem;
  border-radius: 5px;
}
</style>

<script>
export default {
  computed: {
    usersList() {
      return this.$store.getters["users/users"];
    },
  },
  data() {
    return {
      day: this.$route.params.day,
      userId: this.$route.params.id,
      add_active: false,
      name: "",
      sets: null,
      reps: null,
      weight: null,
    };
  },
  methods: {
    toggle_active: function () {
      this.add_active = !this.add_active;
    },
    add_workout: function () {
      this.$store.commit("users/addWorkout", {
        day: this.day,
        userId: this.userId,
        newWorkout: {
          ex_name: this.name,
          sets: this.sets,
          reps: this.reps,
        },
      });
      this.toggle_active();
    },
  },
};
</script>
npm run dev
