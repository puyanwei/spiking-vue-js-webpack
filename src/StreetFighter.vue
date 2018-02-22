<template>
  <ul>
    <li v-for="character in characters">{{ character }}</li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        characters: ["Ryu", "Ken", "Chun-Li", "Guile", "E.Honda", "Blanka"]
      }
    }
  }
</script>

<style>
</style>