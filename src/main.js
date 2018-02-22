import Vue from "vue";
import App from "./App.vue"; // component template imported
import StreetFighter from "./StreetFighter.vue";

Vue.component("street-fighter", StreetFighter);
//applies the component StreetFighter to a street-fighter tag globally

new Vue({
  el: "#app",
  render: h => h(App) // renders the root component to the div id app
});
