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

<!-- <template lang="html">
	<form v-on:submit.prevent="handleSubmit">
		<h1>Add a guest</h1>
		<label for="name">Name:</label>
		<input type="text" id="name" name="name" v-model="name" />

		<label for="email">Email:</label>
		<input type="email" id="email" name="email" v-model="email" />

		<label for="checked_in">Checked In:</label>
		<input type="checkbox" id="checked_in" name="checked_in" v-model="checked_in">

		<input type="submit" name="submit" value="Save" />
	</form>
</template> -->

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
        slider2: "0",
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
<style media="screen">

  .output-wrapper {
    margin-left: 100px;
  }

  .slider-wrapper {
    margin-left: 100px;
    margin-right: 300px;
    padding-right: 100px;
    border-style: solid;

  }

</style>
