<template lang="html">
  <div id="app">
    <div class="nav-container">
    <header>
      <nav class="routers">
        <router-link class="routers" :to="{ name: 'home'}">HOME</router-link>
        <router-link class="routers" :to="{ name: 'stats'}">STATS</router-link>
        <router-link class="routers" :to="{ name: 'settings'}">SETTINGS</router-link>
      </nav>
    </header>

    <div class="counter-wrapper">
      <div class="header-container">
        <h1 class="main-title">Carbon Calculator</h1>
        <h1 class="main-heading">Reduce your Carbon Footprint</h1>
      </div>
      <div class="counter"><h5>{{totalC02Value}}kg CO2</h5></div>
    </div>
  </div>
    <router-view id="view":emissions="emissions" :finalTotalValues="finalTotalValues"></router-view>

    <!-- <category v-for="(emission, index) in this.emissions"
    :emission="emission" :key="index"></category> -->
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
      finalTotalValues: {},
      allValues: []
    }
  },
  components: {
    'slider': Slider,
    'slider-grid': TestSlider,
    'category': Category
  },

  mounted(){
    this.fetchData();
    eventBus.$on('value-selected', (sliderValue) => {
      console.log("In App.vue", Object.keys(sliderValue));
      const key = Object.keys(sliderValue)[0];
      this.finalTotalValues[key] = Object.values(sliderValue)[0];
      this.allValues = Object.values(this.finalTotalValues);
    })
  },

  computed: {
    totalC02Value: function(){
      return this.allValues.reduce( (total, value) => {
        return total + parseInt(value)
      }, 0)
    }
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
  background-position: right bottom;
}

.nav-container {
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0px;
  z-index: 10;
}

.header-container {
  display: inline;
  flex-grow: 1.5;
}

.counter{
  background-image: url("https://cdn.onlinewebfonts.com/svg/img_541271.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  padding: 16px;

  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;

  height: 275px;
  width: 275px;
  /* margin-top: 2em; */
  /* attachment: fixed; */
  top: 0;
  left: 825px;
  font-size: 48px;
  z-index: 100;
}

.counter h5 {
  color: #469120;
  font-family: Arial;
}

.main-heading {
  display: inline-block;
  margin: 0;
  margin-top: 1.5em;
  width: 50%;
  font-size: 48px;
  font-family: arial;
  color:#469120;
  padding-left: 60px;
}

.counter-wrapper {
  display: flex;
}

.routers {
  width: 100%;
  text-align: center;
  font-size: 24px;
  padding: 20px;
  font-family: arial;
}

#view {
  margin-top: 25em;
}
</style>
