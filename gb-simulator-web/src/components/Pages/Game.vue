<template>
<div>
  <p style="display: none;"><i class="fa fa-car"></i> Force Font to load.</p>

  <div id="menu">

    <div class="current-team" v-if="currentTeam">
      <h1>{{currentTeam.PlayerName}}'s Turn</h1>
    </div>
    <div class="influnce-menu" v-if="showInflunceMenu">
      <div  class="influence-total">
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
      <div class="">
        <md-button @click.native="next" class="md-raised md-primary">Submit</md-button>
      </div>
    </div>
    <div v-if="confirmActivationCharacter" class="confirm-activate-character" style="display:inline-block">
      <BigCharacter :character="confirmActivationCharacter" />
      <md-button @click.native="confirmActivation" class="md-raised md-primary">Activate</md-button>
    </div>
    <div v-if="activatedCharacter" class="activate-character" style="text-align:left;">
      <BigCharacter :character="activatedCharacter" style="display:inline-block;"/>
      <div class="actions" v-if="actions">
        <h1>Actions</h1>
        <div class="action" v-for="action in actions">
          <md-button @click.native="action.action" class="md-raised md-primary">{{action.Name}} ({{action.cost}})</md-button>
        </div>
      </div>
    </div>
  </div>

  <TeamsSideBar :teams="teams"/>

  <canvas id="demoCanvas" width="1200" height="1200"></canvas>

  <!--DiceRollVsDialog  -->
  <DiceRollVsDialog :first-player="diceRollVs.firstPlayer" :second-player="diceRollVs.secondPlayer" :open="diceRollVs.open" :onClose="diceRollVs.onClose" />
  <!--END DiceRollVsDialog  -->

  <!--DiceRollDialog  -->
  <DiceRollDialog :message="diceRoll.message" :results="diceRoll.results" :open="diceRoll.open" :onClose="diceRoll.onClose" />
  <!--END DiceRollDialog  -->

  <!--PlaybookDialog  -->
  <PlaybookDialog :goal="playbookResult.goal" :playbook-columns="playbookResult.playbookColumns" :results="playbookResult.results" :open="playbookResult.open" :onClose="playbookResult.onClose" :playbookResult="playbookResult.onClose" />
  <!--END PlaybookDialog  -->

  <!--CONFIRM -->
  <md-dialog-confirm :md-title="confirm.title" md-content="''" :md-content-html="confirm.contentHTML" :md-ok-text="confirm.okText" :md-cancel-text="confirm.cancelText" @open="confirm.onOpen" @close="confirm.onClose" ref="confirmDialog">
  </md-dialog-confirm>
  <!--END CONFIRM  -->
</div>
</template>

<script>
import * as Controls from '../Controls';
import GameBoard from "../Controls/GameBoard/GameBoard";
import GuildBallUI from "../../GuildBallUI";
import GuildBallGameLogic from "../../GuildBallGameLogic";
import TeamData from '../../mockdata/Teams';
import CharacterData from '../../mockdata/characters';
import TeamModel from '../../models/TeamModel';
import _ from 'lodash';

let ui = null;
let logic = null;
export default {
  name: 'Game',
  components: {
    DiceRollVsDialog : Controls.DiceRollVsDialog,
    DiceRollDialog: Controls.DiceRollDialog,
    PlaybookDialog : Controls.PlaybookDialog,
    TeamsSideBar: Controls.TeamsSideBar,
    BigCharacter: Controls.BigCharacter
  },
  data() {
    return {
      teams: [],
      selectedCharacter: {
        Name: null
      },
      currentTeam: null,
      activatedCharacter: null,
      confirmActivationCharacter: null,
      actions: null,
      showInflunceMenu: false,
      confirm: {
        title: null,
        contentHTML: "",
        okText: null,
        cancelText: null,
        onOpen: function() {},
        onClose: function() {}
      },
      diceRollVs: {
        open: false,
        firstPlayer: {
          Name: "Andrew",
          Roll: 6,
          Modifer: 1
        },
        secondPlayer: {
          Name: "Joe",
          Roll: 2,
          Modifer: 1
        }
      },
      diceRoll: {
        open : false,
        message : "DeadBolt",
        result: [5,4,3]
      },
      playbookResult: {
        open : false,
        playbookColumns: [],
        result: [5,4,3],
        goal: 4
      }
    }
  },
  mounted: function() {
    this.loadTeams();
    let fieldControl = new GameBoard("demoCanvas");

    fieldControl
      .initialize()
      .then(() => {
        ui = new GuildBallUI(fieldControl, this);
        logic = new GuildBallGameLogic(ui, this.teams);
      })
      .catch(function(ex) {
        console.log(ex);
      });

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
    confirmActivation() {
    },
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
    loadTeams() {
      TeamData.forEach(t => {
        let teamCharacters = []
        t.CharacterNames.forEach(c => {
          teamCharacters.push(this.addTurnData(this.getCharacter(c)));
        }, this);
        t.Characters = teamCharacters;
        this.teams.push(new TeamModel(t));
      }, this);
    },
    getCharacter(characterName) {
      return _.find(CharacterData, {
        Name: characterName
      });
    },
    addTurnData(character) {
      character.Turn = {
        Activated: false,
        Advanced: false,
      };

      return character;
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
    }
  },
  watch: {
    teams: {
      handler: function(val, oldVal) {
        if (this.teams && ui) {
          this.teams.forEach(team => {
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
h1{
  padding: 5px;
  margin: 0;
}
.playbook-column {
  display: inline-block;
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
  width: 100%;
  background: white;
  border: 1px solid black;
  z-index: 2;
}

#demoCanvas {
  margin-top: 120px;
  float: left;
  z-index: 0;
}


.current-team {
  background: red;
  color: white;
}

.influence-total{
  display: inline-block;
  border: 1px solid black;
  padding: 5px;
  width: 100px;
}

.influence-total h4{
  margin: 0;
}

.influence-total h2{
  font-size: 48px;
  margin: 12px;
}

.actions{
  display: inline-block;
  width: 500px;
  vertical-align: bottom;
}

.actions h1{
  text-align: center;
}
.action{
  display: inline-block;
  width: 48%;
  margin: 5px;
}

.action button{
  width: 100%;
}

</style>
