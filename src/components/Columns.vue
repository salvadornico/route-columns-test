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
      let layoutString = `${leftWidth}% ${middleWidth}% ${rightWidth}%`;
      //   let layoutString = "100%";

      //   if (leftWidth) {
      //     layoutString = `${leftWidth}%`;
      //   }
      //   if (middleWidth) {
      //     layoutString += ` ${middleWidth}%`;
      //   }
      //   } else if (right && !rightWidth) {
      //     layoutString = `${leftWidth}% ${middleWidth}% ${100 -
      //       Number(leftWidth) -
      //       Number(middleWidth)}%`;
      //   }

      console.log(layoutString);
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

