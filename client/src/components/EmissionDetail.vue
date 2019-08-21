<template lang="html">
  <div class="emission-detail">
    <ul v-for="emission in emissions">
      <li><h3>{{emission.category}}</h3></li>
      <ul v-for="item in emission.data">
        <form v-on:submit="handleSubmit" method="put">
          <li>Title: {{item.name}}</li>
          <li>Slider Type: {{item.isSmoothSlider}}</li>
          <ul v-if="item.isSmoothSlider">
            <label for="calcValue">Calculation Value: {{item.sliderValues.calcValue}}</label>
            <input type="text" name="calcValue"/>
            <br>
            <label for="min">Calculation Value: {{item.sliderValues.min}}</label>
            <input type="text" name="min"/>
            <br>
            <label for="max">Maximum Value: {{item.sliderValues.max}}</label>
            <input type="text" name="max"/>
            <br>
            <label for="modifier">Modifer: {{item.sliderValues.modifier}}</label>
            <input type="text" name="modifier"/>
          </ul>
            <ul v-else v-for="item in item.sliderValues">
              <label for="sliderLabel">Label: {{item.label}}</label>
              <label for="sliderValue"> Value: {{item.value}}</label>
              <input type="text" name="sliderValue"/>
            </ul>
        <input type="submit" name="submit" value="save">
      </form>
      <hr>
    </ul>
      <br>
      <hr>
    </ul>
  </div>
</template>

<script>
import FootprintService from '@/services/FootprintService.js'

export default {
  name: 'emission-detail',
  props: ['emissions'],
  methods: {
    splitString() {
      var str = item.name;
      console.log(str.split('-')[0]);
    },
    handleSubmit(){
			FootprintService.updateBooking(this.emissions.data._id)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
