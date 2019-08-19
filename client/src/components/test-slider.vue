<template>
  <div class="component-wrapper">
    <div class="output-wrapper">
    <slider
      :values="sliderValues"
      min="0"
      max="100"
      raising
      v-model="slider"
    ></slider>
  
  </div>
    <!-- remember to set v-model -->
    {{ slider }}
  </div>
</template>

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
        sliderValues: [
          {
            label: "Not at all",
            value: "0"
          },
          {
            label: "A tiny bit",
            value: "1"
          },
          {
            label: "Its ok",
            value: "2"
          },
          {
            label: "Its very good",
            value: "3"
          },
          {
            label: "Its AMAZING!",
            value: "4"
          }
        ]
      };
    }
  };
</script>

<style lang="css" >

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
