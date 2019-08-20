<template lang="html">
  <div>
    <h4>{{emission.category}}</h4>
      <div class="question-topic">
        <ul v-for="(data, index) in emission.data" :key="index">
         <li><i class="material-icons" v-on:mouseover="displayCalculationInfo" v-on:mouseleave="hideCalculationInfo">info</i></li>

         <p class= "calculationInfo" v-if="shouldDisplayCalculationInfo">{{ data.calculationInfo }}</p>
         <slider-incremental :question="data.name" :values="data.sliderValues" v-if="!data.isSmoothSlider">Test If v-if works</slider-incremental>
         <slider-smooth v-else :values="data.sliderValues">Test If v-if works</slider-smooth>
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
  data: function() {
    return {
      shouldDisplayCalculationInfo: false
    };
  },
  components: {
    'slider-incremental': SliderIncremental,
    'slider-smooth': SliderSmooth
  },
  methods: {
    displayCalculationInfo() {
      console.log("mouse enter")
      this.shouldDisplayCalculationInfo = true;
    },
    hideCalculationInfo(){
      console.log("mouse leave")
      this.shouldDisplayCalculationInfo = false;

    }
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
