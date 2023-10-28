<template>
  <section>
    <h1>Wassup</h1>
    <ul>
      <li v-for="day in days">
        <router-link :to="`/${$route.params.id}/${day}`">
          {{ day }}
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      days: [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
      ],
    };
  },
  computed: {
    usersList() {
      return this.$store.getters["users/users"];
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
}
ul {
  max-width: 250px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
}
ul li {
  color: white;
  background-color: cadetblue;
  width: 100%;
  border-radius: 3px;
}
ul li a {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  color: black;
}
</style>
