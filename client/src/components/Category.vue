<template lang="html">
  <div class="">
    <ul v-for="category in emissions">
      <li>{{category.category}}</li>
      <div class="question-topic">
        <ul v-for="data in category.data">
         <li>{{data.name}}</li>
        </ul>

      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "category",
  props: ["emissions"]

}


</script>

<style lang="css" scoped>
</style>
