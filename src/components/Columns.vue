<template>
  <div class="columns" :style="columnLayout">
    <ColumnLeft v-if="$route.params.left" />
    <ColumnMiddle v-if="$route.params.middle" />
    <ColumnRight v-if="$route.params.right" />
  </div>
</template>

<script>
import ColumnLeft from "./ColumnLeft.vue";
import ColumnRight from "./ColumnRight.vue";
import ColumnMiddle from "./ColumnMiddle.vue";

export default {
  name: "columns",
  components: {
    ColumnLeft,
    ColumnRight,
    ColumnMiddle
  },
  computed: {
    columnLayout: function() {
      let {
        leftWidth,
        middle,
        middleWidth,
        right,
        rightWidth
      } = this.$route.params;
      let layoutString = "100%";

      if (leftWidth) {
        layoutString = `${leftWidth}%`;
      }

      if (middle && !middleWidth) {
        layoutString += ` ${100 - Number(leftWidth)}%`;
      } else if (middle && middleWidth) {
        layoutString += ` ${middleWidth}%`;
      }

      if (right && !rightWidth) {
        layoutString += ` ${100 - Number(leftWidth) - Number(middleWidth)}%`;
      } else if (right && rightWidth) {
        layoutString += ` ${rightWidth}%`;
      }

      return { "grid-template-columns": layoutString };
    }
  }
};
</script>

<style>
.columns {
  display: grid;
  width: 100%;
}
</style>

