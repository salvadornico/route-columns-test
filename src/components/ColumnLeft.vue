<template>
  <div class="left">
    <h1>Left</h1>
    <component :is="display" v-if="isVisible" />
    <p v-if="!isVisible">Invalid color / no color provided</p>
  </div>
</template>

<script>
import Blue from "./Blue.vue";
import Red from "./Red.vue";
import Yellow from "./Yellow.vue";

export default {
  name: "columnLeft",
  components: {
    Blue,
    Red,
    Yellow
  },
  data: function() {
    return {
      isVisible: false,
      toDisplay: null
    };
  },
  beforeMount: function() {
    const param = this.$route.query.left;

    if (!param || !this.$options.components[param]) {
      return;
    }

    this.display = param;
    this.isVisible = true;
  }
};
</script>

