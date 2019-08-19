<template>
  <div class="component-wrapper">


    <div class="slider-wrapper">
<!-- slider values should be populated through the accessing empty emissions array  -->
      <slider
      :values="values"
      raising
      v-model="slider"
      ></slider>
    </div>
      <!-- remember to set v-model -->
    <div class="output-wrapper">
      <p>{{ (parseInt(slider)) }}</p>
    </div>

  </div>
</template>

<script>
  import Slider from "vue-custom-range-slider";
  import "vue-custom-range-slider/dist/vue-custom-range-slider.css";

  export default {
    components: {
      Slider
    },

    props: ["values"],

    data() {
      return {
        emissions: "",
        slider: "0"
    }
  }
}
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
