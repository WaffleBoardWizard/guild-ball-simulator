<template>
<md-dialog ref="DiceRollDialog">
  <md-dialog-title>{{message}}</md-dialog-title>
  <md-dialog-content>
    <div class="">
      <div class="result" v-for="result in results">
        <Die :result="result" class="die-result" />
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
  name: 'DiceRollDialog',
  components: {
    Die
  },
  props: ["message", "results", "open", "onClose"],
  data() {
    return {
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
      this.$refs["DiceRollDialog"].open();
    },
    closeDialog() {
      if (this.onClose)
        this.onClose();

      this.$refs["DiceRollDialog"].close();
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
  display: inline-block;
  padding: 3px;
  background: red;
  margin: 2px;
}
</style>
