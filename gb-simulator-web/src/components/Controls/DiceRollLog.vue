<template>
<div class="">
  <div class="">
    {{message}}
  </div>
  <div class="">
    <div class="result" v-for="result in results">
      <Die :result="result" class="die-result" />
    </div>
  </div>
</div>
</template>
<script>
import Die from "./Die";

export default {
  name: 'DiceRollLog',
  components: {
    Die
  },
  props: ["message", "results", "success"],
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
