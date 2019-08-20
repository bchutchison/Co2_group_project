<template>
  <div class="component-wrapper">

    <h3>
      {{this.question}}

      <i class="material-icons" v-if="this.tooltip" v-on:mouseover="displayCalculationInfo" v-on:mouseleave="hideCalculationInfo">info</i>
    </h3>

    <p class= "calculationInfo" v-if="this.tooltip && shouldDisplayCalculationInfo">
      {{ this.tooltip }}
    </p>

    <div class="slider-wrapper">
      <slider
      :min="this.values.min"
      :max="this.values.max"
      v-model="slider" v-on:change="handleChange"></slider>
    </div>

      <!-- remember to set v-model -->
    <div class="output-wrapper">
      <p>{{(parseInt(slider) * this.values.calcValue).toFixed(2)}}</p>
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

    props: ["values", "question", "tooltip"],

    methods: {
      handleChange(){
        eventBus.$emit('value-selected', (parseInt(this.slider) * this.values.calcValue).toFixed(2))
      },
      displayCalculationInfo() {
        console.log("mouse enter")
        this.shouldDisplayCalculationInfo = true;
      },
      hideCalculationInfo(){
        console.log("mouse leave")
        this.shouldDisplayCalculationInfo = false;
      }
    },
    data() {
      return {
        emissions: "",
        slider: "0",
        shouldDisplayCalculationInfo: false
      };
    },

  };
</script>

<style lang="css" >
h3 {
  color: #469120;
  font-family: Arial;
}

.component-wrapper {
 width: 60%;
 border: 1px solid green;
 color: darkgreen;
 background: rgba(70, 145, 32, 0.5);
 border-radius: 10px;
 padding: 20px;
 margin-right: 50px;
}
.calculationInfo {
  width: 60%;
  border: 1px solid black;
  padding: 20px;
  margin-right: 50px;

}

.output-wrapper {
  border-style: 1px solid black;
  text-align: center;
  color: #469120;
  font-size: 30px;
  }

</style>
