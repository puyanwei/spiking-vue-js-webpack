<template>
  <div>
    <app-header></app-header>
  </div>
</template>

<script>
  import Header from "./components/Header.vue"

  export default {
    components: {
      "app-header": Header
    },
    data() {
      return {}
    }
  }
</script>

<style>
</style>

<!-- Component project, using an example structure. Root Component at top, which has Header component, Footer component, and main site component under it.

Steps;

1. Created components folder, created Header.vue
2. Copy and pasted the blank App.vue structure into Header.vue
3. Entered title into data, added scoped css, added header into template with h1 referring to title variable.
4. In App.vue, imported Header, created components hash with app-header: Header to create custom tag that refers to imported component.
5. Within div, added the custom tag "app-header" -->