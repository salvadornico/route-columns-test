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
      const { leftWidth, middleWidth, rightWidth } = this.$route.params;

      if (!rightWidth) {
        return {
          "--columnLayout": `${leftWidth}% ${middleWidth}%`
        };
      }

      return {
        "--columnLayout": `${leftWidth}% ${middleWidth}% ${rightWidth}%`
      };
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

