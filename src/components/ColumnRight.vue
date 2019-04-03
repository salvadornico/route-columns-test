<template>
  <div class="right">
    <h1>Right</h1>
    <component :is="toDisplay" v-if="toDisplay" />
    <p v-if="!toDisplay">Invalid color / no color provided</p>
  </div>
</template>

<script>
import Blue from "./Blue.vue";
import Red from "./Red.vue";
import Yellow from "./Yellow.vue";

export default {
  name: "columnRight",
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
    const param = this.$route.query.right;

    if (!param || !this.$options.components[param]) {
      return;
    }

    this.toDisplay = param;
  }
};
</script>

