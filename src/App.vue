<template>
  <div>
<h1>{{ title }}</h1>
<p>{{ greeting() }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "The first vue file!"
      }
    },
    methods: {
      greeting: function() {
        return "WAHEEEEEY!"
      }
    }
  }
</script>

<style>
</style>