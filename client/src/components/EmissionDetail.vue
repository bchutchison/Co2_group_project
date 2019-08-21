<template lang="html">
  <div class="emission-detail">
    <ul v-for="emission in emissions">
      <li><h3>{{emission.category}}</h3></li>
      <ul v-for="item in emission.data">
        <form v-on:submit="handleSubmit">
          <li>Title: {{item.name}}</li>
          <li>Slider Type: {{item.isSmoothSlider}}</li>
          <ul v-if="item.isSmoothSlider">
            <label for="calcValue">Calculation Value: {{item.sliderValues.calcValue}}</label>
            <input type="text" name="calcValue" v-model="calcValue" />
            <br>
            <label for="min">Calculation Value: {{item.sliderValues.min}}</label>
            <input type="text" name="min" v-model="min" />
            <br>
            <label for="max">Maximum Value: {{item.sliderValues.max}}</label>
            <input type="text" name="max" v-model="max" />
            <br>
            <label for="modifier">Modifer: {{item.sliderValues.modifier}}</label>
            <input type="text" name="modifier" v-model="modifier" />
          </ul>
            <ul v-else v-for="(value, index) in item.sliderValues" key="index">
              <label for="sliderLabel">Label: {{value.label}}</label>
              <label for="sliderValue"> Value: {{value.value}}</label>
              <input type="text" name="sliderValue" v-model="sliderValue" />
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
export default {
  name: 'emission-detail',
  props: ['emissions'],
  method: {
    splitString() {
      var str = item.name;
      console.log(str.split('-')[0]);
    },
    handleSubmit: function(){
			FootprintService.updateBooking(this.emissions)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
