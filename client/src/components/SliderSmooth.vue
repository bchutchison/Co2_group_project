<template>
  <div class="component-wrapper">

    <div class="slider-wrapper">
      <slider
      :min="this.values.min"
      :max="this.values.max"
      v-model="slider" v-on:change="handleChange"></slider>
    </div>

      <!-- remember to set v-model -->
    <div class="output-wrapper">
      <p>{{(parseInt(slider) * this.values.calcValue).toFixed(2)}}</p>
      <p>{{this.categoryName}}</p>
      <p>{{this.indexnumber}}</p>
    </div>

  </div>
</template>

<script>
  import Slider from "vue-custom-range-slider";
  import "vue-custom-range-slider/dist/vue-custom-range-slider.css";
  import {eventBus} from "../main.js";

  export default {
    components: {
      Slider
    },

    props: ["values", "categoryName", "indexnumber"],

    methods: {
      handleChange(){
        const nameInterpolated = `${this.categoryName + this.indexnumber}`;
        const value = (parseInt(this.slider) * this.values.calcValue).toFixed(2);
        const object = {};
        object[nameInterpolated] = value;
        // console.log(object);
        // console.log(nameInterpolated);
        eventBus.$emit('value-selected', object);

    }},
    data() {
      return {
        emissions: "",
        slider: "0"
      };
    },

  };
</script>

<style lang="css" >

.component-wrapper {
 width: 60%;
 border: 1px solid black;
 padding: 20px;
 margin-right: 50px;
}

.output-wrapper {
  border-style: 1px solid black;
}

</style>
