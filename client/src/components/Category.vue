<template lang="html">
  <div class="">
    <ul v-for="category in emissions">
      <li>{{category.category}}</li>
      <div class="question-topic">
        <ul v-for="(data, index) in category.data" :key="index" :data="data">
         <li>{{data.name}}</li>
         <slider-incremental v-if="!data.isSmoothSlider">Test If v-if works</slider-incremental>
         <slider-smooth v-else>Test If v-if works</slider-smooth>
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
  props: ["emissions"],
  components: {
    'slider-incremental': SliderIncremental,
    'slider-smooth': SliderSmooth
  }


}


</script>

<style lang="css" scoped>
</style>
