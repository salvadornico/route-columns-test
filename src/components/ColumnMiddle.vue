<template>
  <div class="middle">
    <h1>Middle</h1>
    <component :is="display" v-if="isVisible" />
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
      isVisible: false,
      toDisplay: null
    };
  },
  beforeMount: function() {
    const param = this.$route.query.middle;

    if (param == null) {
      return;
    }

    this.display = param;
    this.isVisible = true;
  }
};
</script>

