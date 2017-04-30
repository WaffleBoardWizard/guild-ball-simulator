<template>
<div>
  <div class="">
    <div>
      <h1>{{firstPlayer.Name}}</h1>
      <div class="result">
        <Die :result="firstPlayer.Roll" class="die-result" /> + {{firstPlayer.Modifer}} = {{firstPlayer.Modifer + firstPlayer.Roll}}
      </div>
    </div>
    <div>
      <h1>{{secondPlayer.Name}}</h1>
      <div class="result">
        <Die :result="secondPlayer.Roll" class="die-result" /> + {{secondPlayer.Modifer}} = {{secondPlayer.Modifer + secondPlayer.Roll}}
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Die from "./Die";

export default {
  name: 'DiceRollVsLog',
  components: {
    Die
  },
  props: ["firstPlayer", "secondPlayer", "open", "onClose"],
  data() {
    return {
      // player1: {
      //   Name : null,
      //   Modifer : null,
      //   Roll : null
      // },
      // player2: {
      //   Name : null,
      //   Modifer : null,
      //   Roll : null
      // }
    }
  },
  methods: {}
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
}
</style>
