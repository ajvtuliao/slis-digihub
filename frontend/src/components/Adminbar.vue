<template>
  <v-app-bar
    color="#1e2328"
    dark
    height="115 em"
    src="../assets/appban.png"
    fade-img-on-scroll
    scroll-target="#scrolling-techniques-3"
    style="position: -webkit-sticky; position: sticky; top: 0em; z-index: 2;"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(45, 51, 56,.7), rgba(30, 35, 40)"
      ></v-img>
    </template>
  <!-- Icon -->
    <v-col
      cols="1"
      class="mb-1"
    >
      <v-img 
        :src="require('../assets/liblogo.svg')"
        contain
        height="120px"
        width="110px"
      />
    </v-col>
    <!-- Title -->
    <v-col
      cols="7"
      class="mb-1"
    >
    <div class="mb-n6">
      <div class="font-weight-bold display-2 text-decoration-underline mr-3">
          UP SLIS Library
          <hr color="#fac750" size="3px" width="336 em">
        </div>
    </div>
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
           Admin Home
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
            v-if="login == true"
          >
            <v-icon class="mr-1">
              mdi-login
            </v-icon>
            Login
          </v-btn>
          <v-btn 
            text
            color="#faf4e6"
            v-if="login == false"
          >
            <v-icon class="mr-1">
              mdi-logout
            </v-icon>
            Logout
          </v-btn>
      </v-row>
    </v-col>
  </v-app-bar>
</template>