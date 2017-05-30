<template>
<div>
  <p style="display: none;"><i class="fa fa-car"></i> Force Font to load.</p>

<div id="message" v-if="message">
  <h1>{{message}}</h1>
</div>
<div class="sidebar">
  <md-tabs class="" md-centered :md-dynamic-height="false" :md-fixed="true">
    <md-tab md-label="Action" md-icon="ondemand_video">
      <div class="influnce-menu" v-if="showInflunceMenu">
        <div class="influence-totals">
          <div class="influence-total">
            <h4>
                  Total Influence
            </h4>
            <h2 class="">
                {{TotalInfluence(currentTeam)}}
            </h2>
          </div>
          <div class="influence-total">
            <h4>
                  Remaining Influence
            </h4>
            <h2 class="">
                {{CurrentTeamsRemainingInfluence}}
            </h2>
          </div>
        </div>

        <!-- <div class="characters">
            <div class="" v-for="character in charactersToSetInfluence">
              <MiniCharacter :character="character"  style="display:inline-block;"/>
            </div>
          </div> -->
        <div class="">
          <md-button @click.native="next" class="md-raised md-primary">Submit</md-button>
        </div>

      </div>
      <div v-if="showMovementControl" class="influence-totals">
        <div class="influence-total">
          <h4>
                Remaining Movement
          </h4>
          <h2 class="">
              {{movementControl.movementLeft}}
          </h2>
        </div>
        <div class="influence-total">
          <h4>
                Used Movement
          </h4>
          <h2 class="">
              {{movementControl.movementUsed}}
          </h2>
        </div>
        <md-button v-if="movementControl.movementUsed > 0" @click.native="movementControl.undo" class="md-raised md-primary">Undo</md-button>
      </div>
      <div v-if="confirmActivationCharacter" class="confirm-activate-character" >
        <h1>Selected Character</h1>
        <MiniCharacter :character="confirmActivationCharacter"  />
        <md-button @click.native="confirmActivation" class="md-raised md-primary">Activate</md-button>
      </div>
      <div v-if="activatedCharacter" class="activate-character" style="text-align:left;">
        <div class="actions" v-if="actions">
          <h1>Actions</h1>
          <div class="action" v-for="action in actions" @mouseover="onActionHover(activatedCharacter, action)"  @mouseleave="onActionBlur(action)" >
            <md-button @click.native="action.action" :disabled="action.disabled" class="md-raised md-primary">{{action.Name}} ({{action.cost}})</md-button>
          </div>
        </div>
      </div>

      <div class="">
        <md-button @click.native="next" class="md-raised md-primary">Finished</md-button>
      </div>
      <OptionsDialog v-show="showOptionsDialog" :options="optionsDialog.options" :message="optionsDialog.message" @onOptionClicked="optionsDialog.onOptionClicked" />
    </md-tab>
    <md-tab md-label="Logs" md-icon="ondemand_video">
      <Logs v-if="gameData" :logs="gameData.Logs" class="logs" />
    </md-tab>

    <md-tab md-label="Teams" md-icon="music_note">
      <TeamsSideBar :teams="gameData.Teams" v-if="gameData"/>
    </md-tab>
  </md-tabs>
</div>

  <canvas id="demoCanvas" width="1200" height="1200"></canvas>

  <!--PlaybookDialog  -->
  <PlaybookDialog :goal="playbookResult.goal" :playbook-columns="playbookResult.playbookColumns" :results="playbookResult.results" :open="playbookResult.open" :onClose="playbookResult.onClose" :playbookResult="playbookResult.onClose" />
  <!--END PlaybookDialog  -->
</div>
</template>

<script>
import axios from 'axios';
import * as Controls from '../Controls';
import GameBoard from "../Controls/GameBoard/GameBoard";
import GuildBallUI from "../../GuildBallUI";
import GuildBallGameLogic from "../../GuildBallGameLogic";
import TeamModel from '../../models/TeamModel';
import * as Boundaries from '@/helpers/boundary';
import _ from 'lodash';


let ui = null;
let logic = null;
export default {
  name: 'Game',
  components: {
    PlaybookDialog: Controls.PlaybookDialog,
    TeamsSideBar: Controls.TeamsSideBar,
    BigCharacter: Controls.BigCharacter,
    MiniCharacter: Controls.MiniCharacter,
    Logs: Controls.Logs,
    OptionsDialog: Controls.OptionsDialog
  },
  data() {
    return {
      gameData: null,
      selectedCharacter: {
        Name: null
      },
      currentTeam: null,
      activatedCharacter: null,
      confirmActivationCharacter: null,
      actions: null,
      showInflunceMenu: false,
      charactersToSetInfluence: [],
      confirm: {
        title: null,
        contentHTML: "",
        okText: null,
        cancelText: null,
        onOpen: function() {},
        onClose: function() {}
      },
      playbookResult: {
        open: false,
        playbookColumns: [],
        result: [5, 4, 3],
        goal: 4
      },
      showOptionsDialog: false,
      optionsDialog : {
        message : "Would you like to die",
        options : [
          "Yes",
          "No"
        ],
        onOptionClicked : (option) =>{
          console.log(option);
        }
      },
      showMovementControl: false,
      movementControl: {
        movementUsed : 0,
        movementLeft : 0,
        undo : function(){
        }
      },
      message: null
    }
  },
  mounted: function() {
    let me = this;
    let playerName = this.getParameterByName('team');

    axios.get("game").then(response => {
      me.gameData = response.data;
      let fieldControl = new GameBoard("demoCanvas");
      fieldControl
        .initialize()
        .then(() => {
          ui = new GuildBallUI(fieldControl, me);
          logic = new GuildBallGameLogic(ui, me.gameData, playerName);
          this.$socket.emit("joingame", playerName);

        })
        .catch(function(ex) {
          console.log(ex);
        });

    });
  },
  sockets: {
    connect: function() {
      console.log('socket connected')
    },
    startGame: function(){
      console.log("game started");
    },
    switchState: function(state){
      console.log("switching state");
      logic.switchStateFromServer(state);
    },
    logAdded: function(log){
      console.log("adding log");
      this.gameData.Logs.push(log);
    },
    actionAdded: function(action){
      console.log("adding action");
      logic.performAction(action);
    }
  },
  computed: {
    CurrentTeamsRemainingInfluence() {
      let maxInfluence = 0;

      this.currentTeam.Characters.forEach(character => {
        maxInfluence += character.InfluenceStart;
      }, this);

      let usedInfluence = 0;

      this.currentTeam.Characters.forEach(character => {
        usedInfluence += character.Influence;
      }, this);
      return maxInfluence - usedInfluence;
    }
  },

  methods: {
    getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
    },
    confirmActivation() {},
    showCharacter(character) {
      this.selectedCharacter = character;
    },
    TotalInfluence(team) {
      let maxInfluence = 0;

      team.Characters.forEach(character => {
        maxInfluence += character.InfluenceStart;
      }, this);

      return maxInfluence;
    },
    next() {
      logic.next();
    },
    showConfirm() {
      this.$refs["confirmDialog"].open();
    },
    showDiceRollVs(firstPlayer, secondPlayer, onClose) {
      let me = this;

      return new Promise(function(resolve, reject) {
        me.diceRollVs = {
          open: true,
          firstPlayer: firstPlayer,
          secondPlayer: secondPlayer,
          onClose: resolve
        };
      });
    },
    showDiceRoll(message, results) {
      let me = this;

      return new Promise(function(resolve, reject) {
        me.diceRoll = {
          open: true,
          results: results,
          message: message,
          onClose: resolve
        };
      });
    },
    showPlayBook(playbookColumns, results, goal) {
      let me = this;
      console.log(playbookColumns);
      return new Promise(function(resolve, reject) {
        me.playbookResult = {
          open: true,
          results: results,
          playbookColumns: playbookColumns,
          onClose: result => {
            me.playbookResult.open = false,
              resolve(result)
          },
          goal: goal
        };
      });
    },
    onActionHover(character, action){
      console.log(action);

      if(action.range){
        let boundaries = [];

        boundaries.push(new Boundaries.Radius(character.x, character.y, action.range, ((character.Size / 2 ) * 0.0393701)));

        ui.fieldControl.drawOverlays(boundaries);
      }

    },
    onActionBlur(action){
      ui.fieldControl.removeOverlays();
    }
  },
  watch: {
    gameData: {
      handler: function(val, oldVal) {
        if (this.gameData.Teams && ui) {
          this.gameData.Teams.forEach(team => {
            team.Characters.forEach(character => {
              ui.updateCharacter(character.Name);
            }, this);
          }, this);
        }
      },
      deep: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding: 5px;
  margin: 0;
}

#message{
  position: fixed;
  width: 80%;
  height: 40px;
  background: white;
}

.playbook-result {
  border: 1px solid black;
  padding: 6px;
  border-radius: 50px;
  text-align: center;
  width: 50px;
  height: 50px;
}

.playbook-result.momentous {
  border: 3px solid red;
}

.playbook-result.enabled:hover {
  background: red;
  cursor: pointer;
}

.playbook-result.disabled {
  opacity: .5;
}

.playbook-result-action {
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  vertical-align: -webkit-baseline-middle;
}

.momentous {
  background-color: #f7bfbf;
}

#menu {
  position: fixed;
  width: 80%;
  background: white;
  border: 1px solid black;
  z-index: 2;
}

#demoCanvas {
  margin-top: 45px;
  float: left;
  z-index: 0;
}

.current-team {
  background: red;
  color: white;
}

.influence-total {
  display: inline-block;
  border: 1px solid black;
  padding: 5px;
  width: 100px;
}

.influence-total h4 {
  margin: 0;
}

.influence-total h2 {
  font-size: 48px;
  margin: 12px;
}

.actions {
  vertical-align: bottom;
}

.actions h1 {
  text-align: center;
}

.action {
  margin: 5px;
}

.action button {
  width: 100%;
}
h1 {
  padding: 5px;
  margin: 0;
}

.playbook-result {
  border: 1px solid black;
  padding: 6px;
  border-radius: 50px;
  text-align: center;
  width: 50px;
  height: 50px;
}

.playbook-result.momentous {
  border: 3px solid red;
}

.playbook-result.enabled:hover {
  background: red;
  cursor: pointer;
}

.playbook-result.disabled {
  opacity: .5;
}

.playbook-result-action {
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  vertical-align: -webkit-baseline-middle;
}

.momentous {
  background-color: #f7bfbf;
}

.current-team {
  background: red;
  color: white;
}

.influence-total {
  display: inline-block;
  border: 1px solid black;
  padding: 5px;
  width: 100px;
}

.influence-total h4 {
  margin: 0;
}

.influence-total h2 {
  font-size: 48px;
  margin: 12px;
}

.sidebar{
  right: 0px;
  position: fixed;
  width: 20%;
  height: 100%;
  background-color: white;
  z-index: 3;
}

.md-tab{
  padding: 0px !important;
}

.footer{
  position: fixed;
    bottom: 0;
    width: 80%;
    background: white;
    padding: 5px;
}
</style>
