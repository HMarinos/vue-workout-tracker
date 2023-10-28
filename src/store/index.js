import { createStore } from "vuex";
import user from "./user.js";

const store = createStore({
  modules: {
    users: user,
  },
});

export default store;
