<template>
<div>
  <div class="teams-status" v-if="teams">
    <div class="" v-for="team in teams">
      <h1>{{team.PlayerName}}</h1>
      <h2>{{team.Score}}</h2>
      <h2>{{team.Score}}</h2>
      <MiniCharacter :character="character" v-for="character in team.Characters" v-bind:key="character.Name" />
    </div>
  </div>
</div>
</template>

<script>
import MiniCharacter from "./MiniCharacter";

export default {
  name: 'TeamsSideBar',
  props: ["teams"],
  components: {
    MiniCharacter
  },
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.status {
  display: inline-block;
  margin: 0px;
  vertical-align: super
}


.teams-status {
  z-index: 1;
  background: white;
}
</style>
