<template>
  <div id="app">
    <v-container>
      <v-layout row>
        <p>
          Route format: /[left color][width]/[middle color][width]/[right
          color][width]
        </p>
        <ul>
          <li>Available colors: Red, Blue, Yellow</li>
          <li>Middle and right columns are optional</li>
          <li>All widths should be in percentage</li>
        </ul>
      </v-layout>
      <v-layout row>
        <router-view />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
