<template>
 <div class=“card”>
   <div class=“card-body”>
     <h2 class=“card-title”>Your world-wrecking results</h2>
   </div>
   <div class=“card-img-bottom”>
     <chartjs-doughnut
     :bind="true"
     :datasets="datasets"
     :labels="labels"
     :option="option"
     />
   </div>
 </div>
</template>
<script>
export default {
  props: ["finalTotalValues"],
  data() {
    return {
      datasets: [
        {
          data: [
            this.finalTotalValues.FOOD0,
            this.finalTotalValues.FOOD1,
            this.finalTotalValues.FOOD2,
            this.finalTotalValues.HOUSING0,
            this.finalTotalValues.HOUSING1,
            this.finalTotalValues.HOUSING2,
            this.finalTotalValues.TRANSPORT0,
            this.finalTotalValues.TRANSPORT1,
            this.finalTotalValues.TRANSPORT2,
          ],
          backgroundColor: ["#f36e60", "#f36e60", "#f36e60", "#ffdb3b", "#ffdb3b", "#ffdb3b", "#185190", "#185190", "#185190"],
          hoverBackgroundColor: ["#fbd2cd", "#fbd2cd", "#fbd2cd", "#fef5c9", "#fef5c9", "#fef5c9", "#d1e3f7", "#d1e3f7", "#d1e3f7"]
        }
      ],
      labels: ["Food Q.1", "Food Q.2", "Food Q.3", "Housing Q.1", "Housing Q.2",  "Housing Q.3",  "Travel Q.1", "Travel Q.2", "Travel Q.3" ],
      option: {}
    };
  }
};
</script>

<style lang="css">
  h2 {
    text-align: center;
  }
</style>
