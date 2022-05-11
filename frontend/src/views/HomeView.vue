<template>
  <div>
    <v-carousel cycle interval="3000" show-arrows hide-delimiter-background>
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" fade></v-carousel-item>
    </v-carousel>
    <div class="design-1"></div>
    <div class="design-2"></div>
    <div class="design-3"></div>
    <div>
      <h1 align="center" class="font-weight-bold mt-5 mb-10 text-decoration-underline" color="rgba(30, 35, 40)">
        Electronic Resources </h1>
      <v-sheet class="mx-auto mb-10" elevation="4" max-width="80em" color="rgba(42, 46, 52, 0.1)">
        <v-slide-group v-model="eresource" class="pa-4" center-active show-arrows>
          <v-slide-item v-for="image in images" :key="image.id" v-slot="{ active, toggle }">
            <v-card :color="active ? '#fcda42' : '#fffade'" class="ma-4" height="300" width="200" @click="toggle">
              <!-- <v-img :src="`/${images[n].bookImage}`" v-if="images[n]"></v-img> -->
              <v-img :src="`/${image.bookImage}`" height="300" width="200" contain></v-img>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </div>


  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      items: [
        {
          src: require('../assets/img3.png'),
        },
        {
          src: require('../assets/img4.jpg'),
        },
        {
          src: require('../assets/img5.jpg'),
        },
        {
          src: require('../assets/img6.png'),
        },
        {
          src: require('../assets/img7.jpg'),
        }
      ],
      images: []
    }
  },
  mounted() {
    this.getImages()
  },
  methods: {
    async getImages() {
      const listImages = await axios.get('/getImages');
      this.images = listImages.data;
      this.images.forEach(element => {
        element.bookImage = element.bookImage.substring(element.bookImage.indexOf('img'))
      });
      // console.log("images-home")
      // console.log(this.images)
    },
  }
}
</script>
<style scoped>
h1 {
  font-size: 3em;
}

.design-1 {
  width: 0;
  height: 0;
  border-top: 0em solid transparent;
  border-left: 99em solid rgba(30, 35, 40, 0.9);
  border-bottom: 2em solid transparent;
}

.design-2 {
  width: 0;
  height: 0;
  border-top: 0em solid transparent;
  margin-top: -2em;
  border-left: 99em solid rgba(30, 35, 40, 0.6);
  border-bottom: 4em solid transparent;
}

.design-3 {
  width: 0;
  height: 0;
  margin-top: -4em;
  border-top: 0em solid transparent;
  border-left: 99em solid rgba(30, 35, 40, 0.3);
  border-bottom: 6em solid transparent;
}
</style>