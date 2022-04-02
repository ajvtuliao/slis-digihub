<template>
  <v-carousel 
    cycle
    interval="2000"
    show-arrows
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
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
        ]
      }
    }
  }
</script>
