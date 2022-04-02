<template>
  <v-app style="background: #faf4e6">
    <v-app-bar
      color="#1e2328"
      dark
      height="150 em"
    >
    <!-- Icon -->
      <v-col
        cols="1"
        class="mt-4"
      >
        <v-img 
          :src="require('./assets/liblogo.svg')"
          contain
          height="120px"
          width="110px"
        />
      </v-col>
      <!-- Title -->
      <v-col
        cols="7"
        class="mt-4"
      >
        <v-card
          color="#1e2328"
          tile
          flat
          class="mb-n6"
        >
          <div class="font-weight-bold display-2 text-decoration-underline mr-3">
            UP SLIS Library
            <hr color="#fac750" size="3px" width="336 em">
          </div>
          
        </v-card>
        <br/>
        <span class="font-weight-light display-2"> Digital Hub</span>
      </v-col>
      <!-- Nav Buttons -->
      <v-col
        cols="4"
        class="mt-3 ml-n2"
      >
        <v-row 
          align="center"
          >
            <v-btn 
              text
              color="#faf4e6"
            >
              Home
            </v-btn>
            <v-btn 
              text
              color="#faf4e6"
            >
              Collections
            </v-btn>
            <v-btn 
              text
              color="#faf4e6"
            >
              About
            </v-btn>
            <v-btn 
              text
              color="#faf4e6"
            >
              <v-icon class="mr-1">
                mdi-login
              </v-icon>
              Login
            </v-btn>
        </v-row>
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