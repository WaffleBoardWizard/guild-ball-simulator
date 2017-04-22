<template>
<div class="big-character">
  <div class="main-info">
    <h1>{{character.Name}}</h1>
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
    </div>
  </div>
  <div class="sub-info">
    <md-tabs>
      <md-tab id="general" md-label="General">
        <div class="stats">
          <div class="stat">
            <div class="stat-label">
              MOV
            </div>
            <div class="stat-value">
              {{character.Jog}}''/{{character.Sprint}}''
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">
              TAC
            </div>
            <div class="stat-value">
              {{character.TAC}}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">
              KICK
            </div>
            <div class="stat-value">
              {{character.KickDice}}/{{character.KickLength}}''
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">
              DEF
            </div>
            <div class="stat-value">
              {{character.Defense}}+
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">
              ARM
            </div>
            <div class="stat-value">
              {{character.Armor}}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">
              INF
            </div>
            <div class="stat-value">
              {{character.InfluenceStart}}/{{character.InfluenceMax}}
            </div>
          </div>
        </div>

      </md-tab>
      <md-tab id="playbook" md-label="Playbook">
        <h4>Playbook</h4>
        <Playbook :playbook="character.PlayBookColumns" />
      </md-tab>
      <md-tab id="plays" md-label="Plays">
        <div class="character-plays">
          <md-table>
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Cost</md-table-head>
                <md-table-head>Range</md-table-head>
                <md-table-head>Zone</md-table-head>
                <md-table-head>Sustain</md-table-head>
                <md-table-head>OPT</md-table-head>
              </md-table-row>
            </md-table-header>
            <md-table-body>
              <md-table-row v-for="(play, index) in character.CharacterPlays" :key="play.id">
                <md-table-cell>{{play.Name}}</md-table-cell>
                <md-table-cell>{{play.Cost}}</md-table-cell>
                <md-table-cell>{{play.Range}}</md-table-cell>
                <md-table-cell>{{play.Zone}}</md-table-cell>
                <md-table-cell>{{play.Sustain ? "Y" : "N"}}</md-table-cell>
                <md-table-cell>{{play.OPT ? "Y" : "N"}}</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </div>
      </md-tab>
      <md-tab id="traits" md-label="Traits">
        <div class="character-traits">
          <div class="character-trait" v-for="trait in character.CharacterTraits">
            <div class="character-trait-name">
              {{trait.Name}} [{{trait.Stipulation}}]
            </div>
            <div class="character-trait-description">
              {{trait.Description}}
            </div>
          </div>
        </div>
      </md-tab>
    </md-tabs>
  </div>
</div>
</template>

<script>
import Playbook from "./Playbook";

export default {
  name: 'BigCharacter',
  props: ["character"],
  components: {
    Playbook
  },
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.big-character {
  text-align: left;
  border: 1px solid black;
  display: inline-block;
}

.character-image,
.status {
  width: 100px;
}

.stats {
  text-align: center;
  vertical-align: top;
  margin-bottom: 20px;
}

.stat {
  display: inline-block;
  margin: 0;
  width: 40px;
}

.stat-label,
.stat-value {
  border: 1px solid black;
  font-size: 12px;
  padding: 2px;
}

.stat-label {
  font-weight: bold;
}

.main-info {
  display: inline-block;
  width: 200px;
  margin-left: 20px;
  border: 1px solid black;
  padding: 2px;
}

.sub-info {
  display: inline-block;
  vertical-align: top;
  text-align: center;
  width: 300px;
}


.character-trait{
  text-align: left;
  font-size: 12px;
}

.character-trait-name{
  font-weight: bold;
}
</style>
