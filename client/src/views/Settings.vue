<template lang="html">
  <div id="">
    <emission-detail :emissions="emissions"></emission-detail>
  </div>
</template>

<script>
import EmissionDetail from "@/components/EmissionDetail.vue";

export default {
  name: 'settings',
  props: ['emissions'],
  components: {
    'emission-detail': EmissionDetail
  }
}
</script>

<style lang="css" scoped>
</style>
