<template lang="html">
  <div id="">
    <category v-for="(emission, index) in this.emissions"
    :emission="emission" :key="index"></category>
  </div>
</template>

<script>
import Category from "@/components/Category.vue";

export default {
  name: 'home',
  props: ['emissions'],
  components: {
    'category': Category
  },
}
</script>

<style lang="css" scoped>
</style>
