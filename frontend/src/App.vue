<template>
  <v-app style="background: #faf4e6">
    <v-main>
<v-app-bar
        color="#1e2328"
        dark
        height="115 em"
        src="./assets/appban.png"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
        style="position: -webkit-sticky; position: sticky; top: 0em; z-index: 2"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(45, 51, 56,.7), rgba(30, 35, 40)"
          ></v-img>
        </template>
        <!-- Icon -->
        <v-col cols="1" class="mb-1">
          <v-img
            :src="require('./assets/liblogo.svg')"
            contain
            height="120px"
            width="110px"
          />
        </v-col>
        <!-- Title -->
        <v-col cols="7" class="mb-1">
          <div class="mb-n6">
            <div
              class="font-weight-bold display-2 text-decoration-underline mr-3"
            >
              UP SLIS Library
              <hr color="#fac750" size="3px" width="336 em" />
            </div>
          </div>
          <br />
          <span class="font-weight-light display-2"> Digital Hub</span>
        </v-col>
        <!-- Nav Buttons -->
        <v-col cols="4" class="mt-3 ml-n2">
          <v-row align="center">
            <v-btn text color="#faf4e6"> Home </v-btn>
            <v-btn text color="#faf4e6"> Collections </v-btn>
            <v-btn text color="#faf4e6"> About </v-btn>
            <!-- Button for Admin Login -->
            <v-dialog
              v-model="dialog"
              max-width="43em"
              max-height="120em"
            >
              <template v-slot:activator="{on, attrs}">
                <v-btn
                  text
                  color= "#faf4e6"
                  v-bind= "attrs"
                  v-on= "on"
                >
                  <v-icon class="mr-1">mdi-login</v-icon>
                  Login
                </v-btn>
              </template>
              <v-card dark>
                <v-spacer>
                <h1 class="text-center font-weight-bold pt-7">Admin Login</h1>
                <h4 class="text-center font-weight-light">For admin staff only.</h4>
                </v-spacer>
                  <v-container class="mt-9">
                    <!-- Username -->
                    <v-row>
                      <v-col cols="3">
                        <h3 class="font-weight-medium px-7 mt-3">Username:</h3>
                      </v-col>
                      <v-col cols="9">
                        <v-text-field
                          outlined
                          v-model="username"
                          flat
                          class="pr-7"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <!-- Password -->
                    <v-row>
                      <v-col cols="3">
                        <h3 class="font-weight-medium px-7 mt-3">Password:</h3>
                      </v-col>
                      <v-col cols="9">
                        <v-text-field
                          v-model="password"
                          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                          
                          :type="show ? 'text' : 'password'"
                          name="input-10-2"
                          @click:append="show = !show"
                          outlined
                          flat
                          class="pr-7 input-group--focused"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-spacer></v-spacer>
                    <v-row>
                      <v-col align="center" class="mt-9 mb-4">
                        <v-btn x-large text color="#f7e37e" pb-9>
                          Login
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
              </v-card>
            </v-dialog>
          </v-row>
        </v-col>
      </v-app-bar>
      <router-view />
    </v-main>
    <!-- v-footer.pb-3.mt-5(color="transparent", padless) 
    v-card.text-center(flat, tile, color="transparent", width="1200")
      v-divider
      v-btn.mx-4(v-for="icon in icons", :key="icon.name", icon dark)
        <a :href="icon.url" :target="icon.target"><v-icon size="24px">{{ icon.name }}</v-icon></a>
      h6.mt-2.text-muted CS Libraries eBook Hub — {{ new Date().getFullYear() }}  -->
    <v-footer
      dark
      padless
    >
      <v-card 
        class="text-center" 
        flat 
        tile 
        width="100%" 
        color="#1e2328"
      >
        <v-card-text>
          <v-btn icon dark class="mx-4" v-for="icon in icons" :key="icon.name" :href="icon.url" :target="icon.target">
            <v-icon size="24px">
              {{ icon.name }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="mt-2 text-muted"> <i> UP School of Library and Information Studies Library</i> — {{ new Date().getFullYear() }} </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      show: false,
      password: '',
      username: '',
      dialog: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
      icons: [
        {
          name: "mdi-facebook",
          url: "https://www.facebook.com/UPSLISLib",
          target: "_blank",
        },
        {
          name: "mdi-email",
          url: "mailto:library.slis.updiliman@up.edu.ph",
          target: "_blank",
        },
        {
          name: "mdi-youtube",
          url: "https://www.youtube.com/channel/UC8zyLyhnqA3yln_LqXdB-mQ",
          target: "_blank",
        },
      ],
    }
  }
}
</script>
<style scoped>

</style>