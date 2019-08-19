<template lang="html">
  <div class="">
    <ul v-for="category in emissions">
      <li>{{category.category}}</li>
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
