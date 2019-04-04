<template>
  <div class="columns" :style="columnLayout">
    <ColumnLeft />
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
        middleWidth = 100 - Number(leftWidth);
        layoutString += ` ${middleWidth}%`;
      } else if (middle && middleWidth) {
        layoutString += ` ${middleWidth}%`;
      }

      if (right && !rightWidth) {
        rightWidth = 100 - Number(leftWidth) - Number(middleWidth);
        layoutString += ` ${rightWidth}%`;
      } else if (right && rightWidth) {
        layoutString += ` ${rightWidth}%`;
      }

      return { "--columnLayout": layoutString };
    }
  }
};
</script>

<style>
.columns {
  display: grid;
  grid-template-columns: var(--columnLayout);
  width: 100%;
}
</style>

