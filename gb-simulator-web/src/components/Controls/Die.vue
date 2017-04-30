<template>
<div class="die">
  <img src="../../assets/dice/dice1.png" alt="1" v-if="1 == result">
  <img src="../../assets/dice/dice2.png" alt="1" v-if="2 == result">
  <img src="../../assets/dice/dice3.png" alt="1" v-if="3 == result">
  <img src="../../assets/dice/dice4.png" alt="1" v-if="4 == result">
  <img src="../../assets/dice/dice5.png" alt="1" v-if="5 == result">
  <img src="../../assets/dice/dice6.png" alt="1" v-if="6 == result">
</div>
</template>

<script>
export default {
  name: 'DiceRollVs',
  props: ['result'],
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.die img {
  height: 40px;
}

.die {
  background-color: red;
}
</style>
