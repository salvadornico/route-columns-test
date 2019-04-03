<template>
  <div id="app">
    <p>Route format: /?left=[color]&middle=[color]&right=[color]</p>
    <p>Available colors: Red, Blue, Yellow</p>
    <div class="columns">
      <ColumnLeft />
      <ColumnMiddle />
      <ColumnRight />
    </div>
  </div>
</template>

<script>
import ColumnLeft from "./components/ColumnLeft.vue";
import ColumnRight from "./components/ColumnRight.vue";
import ColumnMiddle from "./components/ColumnMiddle.vue";

export default {
  name: "app",
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
