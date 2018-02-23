<template>
    <div>
      <app-header></app-header>
      <app-footer></app-footer>
    </div>
</template>

<script>
  import Header from "./components/Header.vue"
  import Footer from "./components/Footer.vue"

  export default {
    components: {
      "app-header": Header,
      "app-footer": Footer
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

1. Created components folder, created vue file.
2. Copy and pasted the blank App.vue structure new vue file.
3. Entered title into data, added scoped css, added appropriate tag into template.
4. In App.vue, import the component, add component to component hash with custom tag name (careful if it exists already): [Component] to create custom tag that refers to imported component.
5. Within div, added the custom tag "app-header" -->