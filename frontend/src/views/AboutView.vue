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
              <v-card-text class="histext mx-5 px-5 text-justify">The School of Library and Information Studies Library (SLIS Library) is temporary housed at the College of Science Administration and Library Building.  The SLIS Library collection is primarily for the use of the SLIS population. It is also open to the constituents of the university as well as researchers and graduate students from other universities.</v-card-text>
              <v-card-text class="histext mx-5 px-5 text-justify">The library’s role is to support and serve the needs of the faculty, students, and researchers of the university.  The main function is to cater to the curricular and research information needs of the constituent of the School of Library and Information Studies.  The Library offers circulation, reserve, reference, information and reader’s advisory services.</v-card-text>
              <v-card-text class="histext mx-5 px-5 text-justify">In 1961, the Institute of Library Science (ILS) was established as an independent unit of the university.  Since then, the ILS has contributed in setting higher standards of library education thereby responding favorably to the demand for professional librarians in academic, special, and research libraries in the country.  The SLIS provides both students and practicing librarians with materials needed in their work, training, and research.</v-card-text>
              <v-card-text class="histext mx-5 px-5 text-justify">The library was established after the transfer of library science collection from the Filipiniana Section of the Main Library to the 3rd floor South Wing of the Library Building during the second week of September 1961.</v-card-text>
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
        height="25em"
      >
        <v-row align="center" justify="center pt-9">
          <v-card-title class="mission">Mission and Vision</v-card-title>
        </v-row>
        <v-row class="my-5">
          <v-col></v-col>
          <v-col cols="5">
            <v-card color="#fff1c7" width="40em" height="10em">
              <h2 class="text-center pt-5">Mission</h2>
              <v-card-text class="px-5 text-justify">To support the curricular and research information needs of the faculty, staff, students and other constituents of the School of Library and Information Studies Library.</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="5">
            <v-card color="#f7c945" width="40em" height="10em" >
              <h2 class="text-center pt-5">Vision</h2>
              <v-card-text class="px-5 text-justify">The UP School of Library and Information Studies Library envisions itself as the best library supporting the research, academic and information needs of the SLIS faculty, students and other constituents.</v-card-text>
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
        height="25em"
      >
        <v-row align="center" justify="center pt-9">
          <v-card-title class="goals">Goals and Objectives</v-card-title>
        </v-row>
        <v-row class="my-5">
          <v-col></v-col>
          <v-col cols="5">
            <v-card color="#3d424a" width="40em" height="10em">
              <h2 class="text-center pt-5" style="color: #fffcf0">Goals</h2>
              <v-card-text class="px-5 text-justify" style="color: #fff2cc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="5">
            <v-card color="#484e57" width="40em" height="10em" >
              <h2 class="text-center pt-5" style="color: #fffcf0">Objective</h2>
              <v-card-text class="px-5 text-justify" style="color: #fff2cc">The main objective of the SLIS Library is to perform its functions, serve the needs of the faculty, students, and researchers of the university and support the instructional, research and extension services of the school.</v-card-text>
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
        height="47em"
      >
        <v-row align="center" justify="center pt-9 pb-16">
          <v-card-title class="staff">SLIS Library Staff</v-card-title>
        </v-row>
        <v-row align="center" justify="center" class="pt-9">
          <v-card color="#fff0c4" max-width="20em" height="27em" class="mt-16 mb-n16">
              <v-img height="20em" class="ma-5 pt-16" src="../assets/New Project (18).png"></v-img>
              <h3 class="text-center"> Michael D. Amandy</h3>
              <v-card-text align="center" justify="center" class="font-weight-medium mt-n3">SLIS Library Staff</v-card-text>
          </v-card>
          <v-card color="#fff0c4" max-width="20em" height="27em" tile class="mx-6 mt-n16 mb-16">
            <v-img height="20em" class="ma-5" src="../assets/New Project (17).png"></v-img>
            <h3 class="text-center"> Jessie Rose M. Bagunu</h3>
            <v-card-text align="center" justify="center" class="font-weight-medium mt-n3">Head Librarian</v-card-text>
          </v-card>
          <v-card color="#fff0c4" max-width="20em" height="27em" class="mt-16 mb-n16">
              <v-img height="20em" class="ma-5" src="../assets/New Project (19).png"></v-img>
              <h3 class="text-center"> Miriam Charmigrance Q. Salcedo</h3>
            <v-card-text align="center" justify="center" class="font-weight-medium mt-n3">SLIS Library Staff</v-card-text>
          </v-card>
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
    color: #fff4c6;
    padding-bottom: 0.7em;
    text-decoration: underline;
    text-decoration-color: bisque;
    text-underline-offset: 0.20em;
  }
  .histext {
    color:#fff2cc;
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
    color: #fff4c6;
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
