<template lang="html">
  <div class="">
      <li>{{emission.category}}</li>
      <div class="question-topic">
        <ul v-for="(data, index) in emission.data" :key="index">
         <li>{{data.name}}</li>
         <slider-incremental :values="data.sliderValues"  :categoryName="emission.category" v-if="!data.isSmoothSlider">Test If v-if works</slider-incremental>
         <slider-smooth v-else :values="data.sliderValues"  :categoryName="emission.category">Test If v-if works</slider-smooth>
        </ul>
      </div>
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
  },
  data() {
    return {
      categoryName: this.emission.category
    }
  }
}


</script>

<style lang="css" scoped>
</style>
