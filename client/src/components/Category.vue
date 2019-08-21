<template lang="html">
  <div class="category">
    <h4>{{emission.category}}</h4>
      <div class="question-topic">
        <div v-for="(data, index) in emission.data">
         <slider-incremental :tooltip="data.calculationInfo" :question="data.name" :values="data.sliderValues"  :categoryName="emission.category" v-if="!data.isSmoothSlider" :indexnumber="index">Test If v-if works</slider-incremental>
         <slider-smooth v-else :tooltip="data.calculationInfo" :question="data.name" :values="data.sliderValues"  :categoryName="emission.category" :indexnumber="index">Test If v-if works</slider-smooth>
       </div>
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
  padding-left: 60px;
}
.category {
  border-style: solid;
  border-color: green;
  border-radius: 20px 20px;
  width: 60%;
  padding-left: 35px;
  padding-right: 35px;
  margin-bottom: 30px;
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
