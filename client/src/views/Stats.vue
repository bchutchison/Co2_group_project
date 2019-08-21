<template lang="html">
  <div id="">
    <ChartDoughnut :finalTotalValues="finalTotalValues"/>
  </div>
</template>

<script>
import ChartDoughnut from '@/components/Chart.vue';

export default {
  name: 'stats',
  props: ["finalTotalValues"],
  components: {
    ChartDoughnut
  }
}
</script>

<style lang="css" scoped>
</style>
