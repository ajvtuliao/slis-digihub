<template>
  <div>
    <v-parallax
      dark
      src="../assets/parallax.svg"
      height="60em"
    >
      <v-row rows="3">
        <div class="design-1"></div>
        <div class="design-2"></div>
      </v-row>
      <v-row align="center" justify="center" rows="6">
        <v-col cols="12">
          <h1 class="font-weight-black text-center">About the Library</h1>
        </v-col>
      </v-row>
      <v-row rows="3">
        <div class="design-3"></div>
        <div class="design-4"></div>
      </v-row>
    </v-parallax>
    <!-- About Content -->
    <div>
      <v-card
        color="#2a2e34"
        width="100%"
        flat
        rounded="0"
        height="40em"
      >
        <v-row>
          <v-col cols="7">
            <v-row align="center" justify="center" class="pt-9">
              <v-card-title class="history">History</v-card-title>
            </v-row>
            <v-row>
              <v-card-text class="histext mx-5 px-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
            </v-row>
          </v-col>
          <v-col cols="5">
            <v-img src="../assets/history.svg" class="histimg mt-n3"></v-img>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <div>
      <v-card
        color="#fce39d"
        width="100%"
        flat
        rounded="0"
        height="40em"
      >
        <v-row align="center" justify="center pt-9">
          <v-card-title class="mission">Mission and Vision</v-card-title>
        </v-row>
        <v-row class="my-5">
          <v-col></v-col>
          <v-col cols="5">
            <v-card color="#fff1c7" width="40em" height="30em">
              <h2 class="text-center pt-5">Mission</h2>
              <v-card-text class="px-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="5">
            <v-card color="#f7c945" width="40em" height="30em" >
              <h2 class="text-center pt-5" style="">Vision</h2>
              <v-card-text class="px-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
            </v-card>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-card>
    </div>
    <div>
      <v-card
        color="#2a2e34"
        width="100%"
        flat
        rounded="0"
        height="40em"
      >
        <v-row align="center" justify="center pt-9">
          <v-card-title class="goals">Goals and Objectives</v-card-title>
        </v-row>
        <v-row class="my-5">
          <v-col></v-col>
          <v-col cols="5">
            <v-card color="#fff1c7" width="40em" height="30em">
              <h2 class="text-center pt-5">Mission</h2>
              <v-card-text class="px-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="5">
            <v-card color="#f7c945" width="40em" height="30em" >
              <h2 class="text-center pt-5" style="">Vision</h2>
              <v-card-text class="px-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
            </v-card>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-card>
    </div>
    <div>
      <v-card
        color="#fce39d"
        width="100%"
        flat
        rounded="0"
        height="40em"
      >
        <v-row align="center" justify="center pt-9">
          <v-card-title class="staff">SLIS Library Staff</v-card-title>
        </v-row>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .font-weight-black {
    color: #2a2e34;
    font-size: 6em;
    margin-top: -0.4em;
    margin-bottom: 0.4em;
  }
  .design-1 {
    width: 100%;
	  height: 0;
	  border-top: 0em solid transparent;
    margin-top: 0.2em;
	  border-right: 99em solid rgba(30, 35, 40, 0.6);
	  border-bottom: 4em solid transparent;
  }
  .design-2 {
    width: 100%;
	  height: 0;
    margin-top: -5em;
	  border-top: 0em solid transparent;
	  border-right: 99em solid rgba(30, 35, 40, 0.3);
	  border-bottom: 8em solid transparent;
  }
  .design-3 {
    width: 100%;
	  height: 0;
	  border-top: 8em solid transparent;
    margin-top: -5em;
	  border-left: 99em solid rgba(30, 35, 40, 0.3);
	  border-bottom: 0em solid transparent;
    margin-left: -0.5em;
  }
  .design-4 {
    width: 100%;
	  height: 0;
    margin-top: -4.5em;
	  border-top: 4em solid transparent;
	  border-left: 100em solid rgba(30, 35, 40, 0.6);
	  border-bottom: 0em solid transparent;
    margin-left: -0.5em;
  }
  .history {
    font-size: 3.5em;
    color: #fffae6;
    padding-bottom: 0.7em;
    text-decoration: underline;
    text-decoration-color: bisque;
    text-underline-offset: 0.20em;
  }
  .histext {
    color:#fffdf7;
  }
  .histimg {
    height: 40em;
  }
  .mission {
    font-size: 3.5em;
    color: #2a2e34;
    text-decoration: underline;
    text-decoration-color: rgba(76, 64, 0, 0.9);
    text-underline-offset: 0.1em;
  }

  .goals {
    font-size: 3.5em;
    color: #fffae6;
    text-decoration: underline;
    text-decoration-color: bisque;
    text-underline-offset: 0.20em;
  }

  .staff {
    font-size: 3.5em;
    color: #2a2e34;
    text-decoration: underline;
    text-decoration-color: rgba(76, 64, 0, 0.9);
    text-underline-offset: 0.20em;
  }
</style>
