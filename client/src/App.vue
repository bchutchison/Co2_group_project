<template lang="html">
  <div id="app">
    <h1 class="main-heading">Carbon Calculator</h1>
    <h2 class="main-heading">Reduce your Carbon Footprint</h2>

    <category v-for="(emission, index) in this.emissions"
    :emission="emission" :key="index"></category>
    <p>{{this.totalValues}}</p>
  </div>
</template>

<script>
import Slider from "@/components/TestSlider.vue";
import TestSlider from "@/components/TestSlider.vue";
import Category from "@/components/Category.vue";
import {eventBus} from "./main.js";

export default {
  name: "app",

  data (){
    return {
      emissions: [],
      totalValues: 0
    }
  },

  components: {
    'slider': Slider,
    'slider-grid': TestSlider,
    'category': Category
  },

  mounted(){
    this.fetchData();
    eventBus.$on('value-selected', (slider) => {
      this.totalValues= 0
      this.totalValues += parseInt(slider)
    })
  },

  methods: {
    fetchData(){
      fetch("http://localhost:3000/api/emissions")
        .then(res => res.json())
        .then(emissions => this.emissions = emissions)
    }
  }
}
</script>

<style lang="css">
body {
  background-image: url("https://png2.kisspng.com/sh/fd56d0e81816e20939e8a06dfd953a20/L0KzQYm3VMAzN6R2fZH0aYP2gLBuTfNiepN0hp9vb3B3gMPwjwQue6Z4jNNybnHleb3wlQkudpJ5jeRqbD3ofsfwkv9vdZZzRdh4b4Tzgrr1lQMuPZJoStgBNEPnSYS3hsUvQWo6TakEN0C0RYO5V8I3PGc8UKoENj7zfri=/kisspng-carbon-footprint-sustainability-natural-environmen-footprints-5ac2f643d930f5.9955797015227264678896.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: right;
}

.main-heading {
  font-size: 48px;
  font-family: arial;
  color:#469120;
}
</style>
