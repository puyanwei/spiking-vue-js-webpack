<template>
    <div>
      <app-header :title="title" v-on:changeTitle="updateTitle($event)"></app-header>
      <app-overwatch :characters="characters"></app-overwatch>
      <app-footer :title="title"></app-footer>
    </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
  import Overwatch from "./components/Overwatch.vue";

  export default {
    components: {
      "app-header": Header,
      "app-footer": Footer,
      "app-overwatch": Overwatch
    },
    data() {
      return {
        characters: [{
            name: "Tracer",
            ability: "pulse bomb",
            show: false
          },
          {
            name: "Pharah",
            ability: "barrage",
            show: false
          },
          {
            name: "Roadhog",
            ability: "whole hog",
            show: false
          },
          {
            name: "Reaper",
            ability: "death blossem",
            show: false
          },
          {
            name: "Soldier 76",
            ability: "tactical visor",
            show: false
          },
          {
            name: "Mercy",
            ability: "valkyrie",
            show: false
          }
        ],
        title: "Overwatch Characters"
      }
    },
    methods: {
      updateTitle: function(updatedTitle) {
        this.title = updatedTitle
      }
    }
  };
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