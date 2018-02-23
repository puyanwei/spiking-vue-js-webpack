<template>
  <footer>
    <p>{{ title }}</p>
    <p>{{ practice }}</p>
  </footer>

</template>

<script>
export default {
  props:{
    title:{
      type: String
    }
  },
  data() {
    return {
      practice: "This is a practice website for learning Vue.js"
    };
  }
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}

p {
  color: lightgreen;
  text-align: center;
}
</style>
