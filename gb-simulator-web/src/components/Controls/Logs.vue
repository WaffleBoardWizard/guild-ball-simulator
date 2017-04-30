<template>
<div class="logs">
  <div class="" v-for="log in logs">
    <div v-if="log.Type == 'info'" class="info">
      <strong>{{log.CreatedOn}}</strong> : {{log.Params.Message}}
    </div>
    <div v-if="log.Type == 'DiceRollVsLog'" class="info">
      <strong>{{log.CreatedOn}}</strong>
      <DiceRollVsLog :first-player="log.Params.firstPlayer" :second-player="log.Params.secondPlayer" />
    </div>
    <div v-if="log.Type == 'DiceRollLog'" class="info">
      <strong>{{log.CreatedOn}}</strong>
      <DiceRollLog :message="log.Params.message" :results="log.Params.results" :success="log.Params.success" />
    </div>
    <div v-if="log.Type == 'KickScatterRollLog'" class="info">
      <strong>{{log.CreatedOn}}</strong>
      <KickScatterRollLog :direction="log.Params.direction" :distance="log.Params.distance"  />
    </div>
  </div>
</div>
</template>

<script>
import * as Controls from "./";

export default {
  name: 'Logs',
  props: ["logs"],
  components: {
    DiceRollVsLog: Controls.DiceRollVsLog,
    DiceRollLog: Controls.DiceRollLog,
    KickScatterRollLog: Controls.KickScatterRollLog
  },
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logs {
  width: 200px;
  background: white;
}
</style>
