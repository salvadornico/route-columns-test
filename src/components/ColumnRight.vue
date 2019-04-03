<template>
  <div class="right">
    <h1>Right</h1>
    <component :is="display" v-if="isVisible" />
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
      isVisible: false,
      toDisplay: null
    };
  },
  beforeMount: function() {
    const param = this.$route.query.right;

    if (param == null) {
      return;
    }

    this.display = param;
    this.isVisible = true;
  }
};
</script>

