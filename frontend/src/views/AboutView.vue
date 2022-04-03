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
    <div>
      <v-card
        color="#2a2e34"
        width="100%"
        flat
        rounded="0"
        height="40em"
      >
        <v-card-title class="history">History</v-card-title>
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
        <v-card-title class="mission">Mission and Vision</v-card-title>
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
        <v-card-title class="goals">History</v-card-title>
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
        <v-card-title class="staff">Mission and Vision</v-card-title>
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
</style>
