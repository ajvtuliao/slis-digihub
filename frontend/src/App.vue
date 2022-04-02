<template>
  <v-app style="background: #faf4e6">
    <v-app-bar
      color="#1e2328"
      dark
      height="90px"
    >
    <!-- Icon -->
      <v-col
        cols="1"
        class="mt-4"
      >
        <!-- <v-img 
          :src="require('../assets/liblogo.svg')"
          contain
          height="70px"
          width="65px"
        /> -->
      </v-col>
      <!-- Title -->
      <v-col
        cols="8"
        class="mt-4"
      >
        <v-card
          style="border-bottom: 3px solid #fac750"
          color="#1e2328"
          width="336px"
          tile
          flat
          class="mb-n6"
        >
          <span class="font-weight-bold display-2 text-decoration-underline mr-3"> UP SLIS Library</span>
        </v-card>
        <br/>
        <span class="font-weight-light display-2"> Digital Hub</span>
      </v-col>
      <!-- Nav Buttons -->
      <v-col
        cols="3"
        class="mt-3 ml-n2"
      >

      </v-col>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style scoped>

</style>