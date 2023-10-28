<template>
  <section>
    <h2>Oh.. HI!</h2>
    <h3>Wait a minute.. who are you?</h3>
    <div class="user-list">
      <ul>
        <li v-for="user in usersList" :key="user.id">
          <router-link :to="'/' + user.id">{{ user.name }}</router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    usersList() {
      return this.$store.getters["users/users"];
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 2.5rem;
}
section {
  text-align: center;
  margin-top: 4rem;
}
.user-list {
  max-width: 300px;
  margin: auto;
  margin-top: 3rem;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
ul li {
  padding: 1rem;
  background-color: deepskyblue;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: inset 0px 0px 10px black;
  cursor: pointer;
}
ul li a {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
