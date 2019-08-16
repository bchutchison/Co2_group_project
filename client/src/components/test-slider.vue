<template>
  <div>
    <slider
      :values="sliderValues"
      min="0"
      max="100"
      raising
      v-model="slider"
    ></slider>
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
