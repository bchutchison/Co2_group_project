<template lang="html">
  <div>
    <h4>{{emission.category}}</h4>
      <div class="question-topic">
        <ul v-for="(data, index) in emission.data">
         <slider-incremental :tooltip="data.calculationInfo" :question="data.name" :values="data.sliderValues"  :categoryName="emission.category" v-if="!data.isSmoothSlider" :indexnumber="index">Test If v-if works</slider-incremental>
         <slider-smooth v-else :tooltip="data.calculationInfo" :question="data.name" :values="data.sliderValues"  :categoryName="emission.category" :indexnumber="index">Test If v-if works</slider-smooth>
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
  }
}


</script>

<style lang="css" scoped>
.popup {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
h4 {
  font-family: arial;
  color: #469120;
  font-size: 25px;
}


.popup .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}
.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity:1 ;}
}
</style>
