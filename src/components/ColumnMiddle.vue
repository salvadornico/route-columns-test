<template>
  <div class="middle">
    <h1>Middle</h1>
    <component :is="toDisplay" v-if="toDisplay" />
    <p v-if="!toDisplay">Invalid color / no color provided</p>
  </div>
</template>

<script>
import Blue from "./Blue.vue";
import Red from "./Red.vue";
import Yellow from "./Yellow.vue";

export default {
  name: "columnMiddle",
  components: {
    Blue,
    Red,
    Yellow
  },
  data: function() {
    return {
      toDisplay: null
    };
  },
  beforeMount: function() {
    const param = this.$route.query.middle;

    if (!param || !this.$options.components[param]) {
      return;
    }

    this.toDisplay = param;
  }
};
</script>

