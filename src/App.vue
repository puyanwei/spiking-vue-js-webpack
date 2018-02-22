<template>
  <div>
<h1>{{ title }}</h1>
<street-fighter></street-fighter>
  </div>
</template>

<script>
  import StreetFighter from "./StreetFighter.vue"; // nesting our component locally

  export default {
    components: {
      "street-fighter": StreetFighter
    },
    data() {
      return {
        title: "Badass App!"
      }
    }
  }
</script>

<style>
</style>