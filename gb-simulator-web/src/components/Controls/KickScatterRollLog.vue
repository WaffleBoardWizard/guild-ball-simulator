<template>
<div class="">
  <div class="">
  </div>
  <div class="">
      Direction
      <Die :result="direction" class="die-result" />
  </div>
  <div class="">
      Distance
      <Die :result="distance" class="die-result" />
  </div>
</div>
</template>
<script>
import Die from "./Die";

export default {
  name: 'KickScatterRollLog',
  components: {
    Die
  },
  props: ["direction", "distance"],
  data() {
    return {}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.die-result {
  display: inline-block;
}

.result {
  font-size: 32px;
  font-weight: bold;
  display: inline-block;
  padding: 3px;
  background: red;
  margin: 2px;
}
</style>
