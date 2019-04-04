<template>
  <div id="app">
    <v-container fluid>
      <v-layout row>
        <ul>
          <li>
            Route format: /[left color]/[left color width]/[middle
            color]/[middle color width]/[right color]/[right color width]
          </li>
          <li>Available colors: Red, Blue, Yellow</li>
          <li>All arguments are optional</li>
          <li>All widths should be in percentage</li>
          <li>
            Source code available
            <a href="https://github.com/salvadornico/route-columns-test">here</a
            >.
          </li>
        </ul>
      </v-layout>
      <v-spacer />
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
