<template lang="html">
  <div class="">
    <ul v-for="category in emission">
      <li>{{emission.category}}</li>
      <div class="question-topic">
        <ul v-for="data in emission.data">
         <li>{{data.name}}</li>
         <slider-incremental :values="data.sliderValues" v-if="!data.isSmoothSlider">Test If v-if works</slider-incremental>
         <slider-smooth :values="data.sliderValues">Test If v-if works</slider-smooth>
        </ul>
      </div>
    </ul>
  </div>
</template>

<script>
import SliderIncremental from './SliderIncremental.vue'
import SliderSmooth from './SliderSmooth.vue'

export default {
  name: "category",
  props: ["emission"],
  components: {
    'slider-incremental': SliderIncremental,
    'slider-smooth': SliderSmooth
  }


}


</script>

<style lang="css" scoped>
</style>
