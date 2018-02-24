<template>
    <div>
      <form-helper>
        <h2 slot="title">I'm the slot title</h2>
        <p slot="text">I'm the paragraph text for the slot</p>
      </form-helper>
    </div>
</template>

<script>
  import formHelper from "./components/formHelper.vue";

  export default {
    components: {
      "form-helper": formHelper
    },
    data() {
      return {
      }
    },
    methods: {

    }
  };
</script>

<style>
</style>
