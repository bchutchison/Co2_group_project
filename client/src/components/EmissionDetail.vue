<template lang="html">
  <div class="emission-detail">
    <ul v-for="emission in emissions">
      <li>{{emission.category}}</li>
      <ul v-for="item in emission.data">
        <li>Title: {{item.name}}</li>
        <li>Slider Type:{{item.isSmoothSlider}}</li>
        <div>
          <ul v-if="item.isSmoothSlider">
            <li>Calculation Value: {{item.sliderValues.calcValue}}</li>
            <li>Minimum Value: {{item.sliderValues.min}}</li>
            <li>Maximum Value: {{item.sliderValues.max}}</li>
            <li>Modifier: {{item.sliderValues.modifier}}</li>
          </ul>
            <ul v-else v-for="value in item.sliderValues">{{value.label}}: {{value.value}}
            </ul>
        </div>
        <button type="button" name="button">Edit</button>
        <hr>
      </ul>
      <br>
      <hr>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'emission-detail',
  props: ['emissions'],
  method: {
    splitString() {
      var str = item.name;
      console.log(str.split('-')[0]);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
