import Vue from "vue";
import App from "./App.vue"; // component template imported

new Vue({
  el: "#app",
  render: h => h(App) // renders the root component to the div id app
});

// Component project, using an example structure.
// Root Component at top, which has Header component, Footer component, and main site component under it.
