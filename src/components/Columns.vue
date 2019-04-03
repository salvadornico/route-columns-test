<template>
  <div class="columns">
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
  }
};
</script>

<style>
.columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>

