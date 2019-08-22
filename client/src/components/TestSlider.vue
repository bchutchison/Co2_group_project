<template>
  <div class="component-wrapper">

      <h1>Home</h1>
    <div class="slider-wrapper">
      <h2>{{this.emissions[2].name}}</h2>
      <slider
      :min="this.emissions[2].bottomValue"
      :max="this.emissions[2].topValue"
      raising
      v-model="slider"
      ></slider>
    </div>
    <div class="slider-wrapper">
<!-- slider values should be populated through the accessing empty emissions array  -->
      <h2>{{this.emissions[0].name}}</h2>
      <slider
      :values="sliderValues"
      min="0"
      max="100"
      step="1"
      raising
      v-model="slider2"
      ></slider>
    </div>
      <!-- remember to set v-model -->
    <div class="output-wrapper">
      <p>{{ (parseInt(slider) * this.emissions[2].calcValue + parseInt(slider2)).toFixed(2) }}</p>
    </div>

  </div>
</template>

<script>
  import Slider from "vue-custom-range-slider";
  import FootprintService from "@/services/FootprintService.js";
  import "vue-custom-range-slider/dist/vue-custom-range-slider.css";

  export default {
    components: {
      Slider
    },

    props: ["emissions"],

    data() {
      return {
        emissions: "",
        slider: "0",
        sliderValues: [
          {
            label: this.emissions[0].sliderValues[0].label,
            value: this.emissions[0].sliderValues[0].value
          },
          {
            label: this.emissions[0].sliderValues[1].label,
            value: this.emissions[0].sliderValues[1].value
          },
          {
            label: this.emissions[0].sliderValues[2].label,
            value: this.emissions[0].sliderValues[2].value
          },
          {
            label: this.emissions[0].sliderValues[3].label,
            value: this.emissions[0].sliderValues[3].value
          }

        ],


        // slider2Values: [
        //   {
        //     label: "low",
        //     value: 0
        //   },
        //   {
        //     label: "a little",
        //     value: 23
        //   },
        //   {
        //     label: "Average",
        //     value: 46
        //   },
        //   {
        //     label: "Above average",
        //     value: 77
        //   },
        //   {
        //     label: "a lot",
        //     value: 100
        //   }
        // ]
      };
    },

  };
</script>

<style lang="css" scoped>

.component-wrapper {
 color: red;
 width: 60%;
 border: 1px solid black;
 padding: 20px;
 margin-right: 50px;
}

.output-wrapper {
  border-style: 1px solid black;
  color: red;
}

</style>
