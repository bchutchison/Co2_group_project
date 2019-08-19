<template>
  <div class="component-wrapper">


    <form class="form"  method="post">
      <h1>Recycling</h1>
    <div class="slider-wrapper">
      <h2>How much do you recycle?</h2>
      <slider
      :values="sliderValues"
      min="0"
      max="100"
      raising
      v-model="slider"
      ></slider>
    </div>
    <div class="slider-wrapper">

      <h2>How much electricity do you use annualy?</h2>
      <slider

      min="0"
      max="100"
      step="1"
      raising
      v-model="slider2"
      ></slider>
    </div>
      <!-- remember to set v-model -->
    <div class="output-wrapper">
      <p>{{ parseInt(slider) + parseInt(slider2) }}</p>
    </div>

  </form>


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
  // import the styling, css or scss
  import "vue-custom-range-slider/dist/vue-custom-range-slider.css";


  export default {
    components: {
      Slider
    },
    data() {
      return {
        slider: "0",
        slider2: "0",
        sliderValues: [
          {
            label: "Not at all",
            value: "0"
          },
          {
            label: "Very little",
            value: "1"
          },
          {
            label: "Average",
            value: "2"
          },
          {
            label: "Above average",
            value: "3"
          },
          {
            label: "Very often",
            value: "4"
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
    }
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
