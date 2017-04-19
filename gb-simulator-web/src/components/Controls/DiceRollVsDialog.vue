<template>
<md-dialog ref="DiceRollVsDialog">
  <md-dialog-title>Dice Results</md-dialog-title>
  <md-dialog-content>
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
  </md-dialog-content>
  <md-dialog-actions>
    <md-button class="md-primary" @click.native="closeDialog">Ok</md-button>
  </md-dialog-actions>
</md-dialog>
</template>
<script>
import Die from "./Die";

export default {
  name: 'DiceRollVsDialog',
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
  watch: {
    open(value) {
      if (value)
        this.openDialog();
      else
        this.closeDialog();
    }
  },
  methods: {
    openDialog() {
      this.$refs["DiceRollVsDialog"].open();
    },
    closeDialog() {
      if(this.onClose)
        this.onClose();

      this.$refs["DiceRollVsDialog"].close();
    }
  }
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
