<template lang="html">
  <div class="emission-detail">
    <ul v-for="emission in emissions">
      <li><h3>{{emission.category}}</h3></li>
      <ul v-for="item in emission.data">
        <form v-on:submit="handleSubmit">
          <label for="name">Title:{{item.name}}</label>
          <input type="text" name="name" v-model="name" />
          <br>
          <label for="sliderType">Slider Type:{{item.isSmoothSlider}}</label>
          <input type="text" name="sliderType" v-model="sliderType" />
          <ul v-if="item.isSmoothSlider">
            <li>Calculation Value: {{item.sliderValues.calcValue}}</li>
            <li>Minimum Value: {{item.sliderValues.min}}</li>
            <li>Maximum Value: {{item.sliderValues.max}}</li>
            <li>Modifier: {{item.sliderValues.modifier}}</li>
          </ul>
            <ul v-else v-for="value in item.sliderValues">{{value.label}}: {{value.value}}
            </ul>
        <input type="submit" name="submit" value="Update">
      </form>
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
    },
    handleSubmit(){

    }
  }
}
</script>

<style lang="css" scoped>
</style>
