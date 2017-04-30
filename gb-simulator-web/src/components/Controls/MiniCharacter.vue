<template>
  <div class="character-status">
    <h4>{{character.Name}}</h4>
    <img class="character-image" :src="'./src/assets/' + character.Name + '.PNG'" />
    <div class="status">
      <div>
      Health : {{character.Health}}
      <md-progress class="md-warn" :md-progress="(character.Health / character.MaxHealth) * 100"></md-progress>
    </div>
    <div class="">
      Influence : {{character.Influence}}
      <md-progress :md-progress="(character.Influence / character.InfluenceMax) * 100"></md-progress>
    </div>
    <div class="" v-if="character.HasBall">
      Has Ball
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MiniCharacter',
  props: ["character"],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.character-status {
  margin: 0;
  border: 1px solid black;
  width: 200px;
}

.character-status h4{
  margin: 0;
}
.character-image{
    height: 50px;
    display: inline-block;
    vertical-align: super
}

.status{
  display: inline-block;
  margin: 0px 20px;
  vertical-align: super

}
</style>
